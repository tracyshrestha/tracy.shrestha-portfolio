import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

/** Set VITE_ENABLE_HYPERSPEED=false in .env to skip the heavy Three.js hero. */
const enableHyperspeed =
  import.meta.env.VITE_ENABLE_HYPERSPEED !== "false";

const Hyperspeed = lazy(() => import("./HyperspeedBackground"));

const hyperspeedOptions = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: "turbulentDistortion",
  length: 300,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5] as [number, number],
  lightStickHeight: [1.3, 1.7] as [number, number],
  movingAwaySpeed: [60, 80] as [number, number],
  movingCloserSpeed: [-120, -160] as [number, number],
  carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
  carLightsRadius: [0.05, 0.14] as [number, number],
  carWidthPercentage: [0.3, 0.5] as [number, number],
  carShiftX: [-0.8, 0.8] as [number, number],
  carFloorSeparation: [0, 5] as [number, number],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0x9f438a, 0xc46bb0, 0x8a3878],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x9f438a,
  },
};

function Intro() {
  return (
    <div>
      <header className="relative h-dvh w-full overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          {enableHyperspeed && (
            <Suspense fallback={null}>
              <Hyperspeed effectOptions={hyperspeedOptions} />
            </Suspense>
          )}
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-4 "
          >
            <h2 className="text-5xl font-bold text-white">
              Hello! I'm Tracy Shrestha
            </h2>
            <h2 className="text-2xl font-bold text-white">
              A Frontend Developer
            </h2>
            <p className="mt-4 text-xl text-gray-200">
              I build user-friendly, responsive web applications using React,
              TypeScript, and Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="space-y-12 container mx-auto p-8"></div>
    </div>
  );
}

export default Intro;
