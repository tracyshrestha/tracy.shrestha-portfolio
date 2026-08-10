/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Set to "false" to disable the heavy Hyperspeed hero (plain black bg). */
  readonly VITE_ENABLE_HYPERSPEED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
