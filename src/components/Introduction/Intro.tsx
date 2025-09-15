import Hyperspeed from "./HyperspeedBackground";

function Intro() {
  return (
    <div>
      {/* Full-screen header section with the Hyperspeed background */}
      <header className="relative h-dvh w-full overflow-hidden">
        {/* Wrap Hyperspeed in a div with the styling */}
        <div className="absolute inset-0 z-0 bg-black">
          <Hyperspeed
            effectOptions={{
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
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>

        {/* Your welcome content overlayed on top */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl font-bold text-white">
            Hello! I'm Tracy Shrestha
          </h2>
          <h2 className="text-2xl font-bold text-white">
            A Frontend Developer
          </h2>
          <p className="mt-4 text-xl text-gray-200">I build user-friendly, responsive web applications using React, TypeScript, and Tailwind CSS.</p>
        </div>
      </header>

      {/* The rest of your page content */}
      <div className="space-y-12 container mx-auto p-8"></div>
    </div>
  );
}

export default Intro;
