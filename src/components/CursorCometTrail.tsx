import { useEffect, useRef } from "react";

/**
 * Purple comet trail that follows the pointer.
 * Desktop / fine-pointer only; disabled for touch and reduced motion.
 */
function CursorCometTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer || reduceMotion) {
      canvas.style.opacity = "0";
      return;
    }

    canvas.style.opacity = "1";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Particle = {
      x: number;
      y: number;
      life: number;
      size: number;
    };

    const particles: Particle[] = [];
    let mouse = { x: -999, y: -999 };
    let raf = 0;
    let lastSpawn = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      const now = performance.now();
      if (now - lastSpawn > 14) {
        lastSpawn = now;
        particles.push({
          x: e.clientX,
          y: e.clientY,
          life: 1,
          size: 7 + Math.random() * 6,
        });
        if (particles.length > 48) particles.shift();
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.028;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const t = p.life;
        const r = p.size * t;
        const alpha = t * 0.75;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.2);
        g.addColorStop(0, `rgba(210, 140, 255, ${alpha})`);
        g.addColorStop(0.45, `rgba(150, 70, 230, ${alpha * 0.55})`);
        g.addColorStop(1, "rgba(90, 40, 170, 0)");

        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, r * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mouse.x > 0) {
        const g = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          18,
        );
        g.addColorStop(0, "rgba(220, 160, 255, 0.85)");
        g.addColorStop(0.5, "rgba(168, 85, 247, 0.35)");
        g.addColorStop(1, "rgba(100, 40, 180, 0)");
        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-500"
    />
  );
}

export default CursorCometTrail;
