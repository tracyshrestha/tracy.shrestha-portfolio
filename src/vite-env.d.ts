/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Set to "false" to disable the heavy Hyperspeed hero (plain black bg). */
  readonly VITE_ENABLE_HYPERSPEED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/* Swiper CSS subpaths have no TS types (side-effect styles only). */
declare module "swiper/css";
declare module "swiper/css/pagination";
declare module "swiper/css/effect-coverflow";
declare module "swiper/css/*";
