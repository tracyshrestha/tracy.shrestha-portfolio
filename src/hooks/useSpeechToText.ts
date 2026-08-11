import { useCallback, useEffect, useRef, useState } from "react";
import {
  getSpeechRecognition,
  type SpeechRecognitionEventLike,
  type SpeechRecognitionInstance,
} from "@/types/speech";

const DEFAULT_MAX_LISTEN_SEC = 30;

type UseSpeechToTextOptions = {
  /** Called with the full text so far (base + final + interim). */
  onTranscript: (text: string) => void;
  /** Surface recoverable errors (unsupported browser, permission, etc.). */
  onError?: (message: string) => void;
  maxListenSec?: number;
};

export function useSpeechToText({
  onTranscript,
  onError,
  maxListenSec = DEFAULT_MAX_LISTEN_SEC,
}: UseSpeechToTextOptions) {
  const [isListening, setIsListening] = useState(false);
  const [listenSecondsLeft, setListenSecondsLeft] = useState(maxListenSec);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const baseTextRef = useRef("");
  const listenTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listenIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onTranscriptRef = useRef(onTranscript);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onTranscriptRef.current = onTranscript;
  }, [onTranscript]);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  const clearListenTimers = useCallback(() => {
    if (listenTimeoutRef.current) {
      clearTimeout(listenTimeoutRef.current);
      listenTimeoutRef.current = null;
    }
    if (listenIntervalRef.current) {
      clearInterval(listenIntervalRef.current);
      listenIntervalRef.current = null;
    }
  }, []);

  const stopListening = useCallback(() => {
    clearListenTimers();
    const recognition = recognitionRef.current;
    recognitionRef.current = null;
    recognition?.stop();
    setIsListening(false);
    setListenSecondsLeft(maxListenSec);
  }, [clearListenTimers, maxListenSec]);

  const startListening = useCallback(
    (baseText: string) => {
      const SpeechRecognitionCtor = getSpeechRecognition();
      if (!SpeechRecognitionCtor) {
        onErrorRef.current?.(
          "Speech recognition is not supported in this browser",
        );
        return;
      }

      clearListenTimers();
      recognitionRef.current?.abort();
      recognitionRef.current = null;

      const recognition = new SpeechRecognitionCtor();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      baseTextRef.current = baseText;

      recognition.onresult = (event: SpeechRecognitionEventLike) => {
        let finalTranscript = "";
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          const separator = baseTextRef.current.trim() ? " " : "";
          baseTextRef.current =
            baseTextRef.current + separator + finalTranscript.trim();
        }

        const interim = interimTranscript.trim();
        const nextText = interim
          ? `${baseTextRef.current}${
              baseTextRef.current.trim() ? " " : ""
            }${interim}`
          : baseTextRef.current;

        onTranscriptRef.current(nextText);
      };

      recognition.onerror = (event: { error: string }) => {
        if (event.error === "aborted") return;
        if (event.error === "not-allowed") {
          onErrorRef.current?.("Microphone permission denied");
        } else if (event.error !== "no-speech") {
          onErrorRef.current?.("Speech recognition error");
        }
        clearListenTimers();
        recognitionRef.current = null;
        setIsListening(false);
        setListenSecondsLeft(maxListenSec);
      };

      recognition.onend = () => {
        if (recognitionRef.current === recognition) {
          recognitionRef.current = null;
        }
        clearListenTimers();
        setIsListening(false);
        setListenSecondsLeft(maxListenSec);
      };

      try {
        recognition.start();
        recognitionRef.current = recognition;
        setIsListening(true);
        setListenSecondsLeft(maxListenSec);

        const startedAt = Date.now();
        listenIntervalRef.current = setInterval(() => {
          const elapsed = Math.floor((Date.now() - startedAt) / 1000);
          setListenSecondsLeft(Math.max(0, maxListenSec - elapsed));
        }, 250);

        listenTimeoutRef.current = setTimeout(() => {
          stopListening();
        }, maxListenSec * 1000);
      } catch {
        onErrorRef.current?.("Could not start speech recognition");
        setIsListening(false);
      }
    },
    [clearListenTimers, maxListenSec, stopListening],
  );

  const toggleListening = useCallback(
    (baseText: string) => {
      if (isListening) {
        stopListening();
      } else {
        startListening(baseText);
      }
    },
    [isListening, startListening, stopListening],
  );

  useEffect(() => {
    return () => {
      clearListenTimers();
      recognitionRef.current?.abort();
    };
  }, [clearListenTimers]);

  return {
    isListening,
    listenSecondsLeft,
    startListening,
    stopListening,
    toggleListening,
  };
}
