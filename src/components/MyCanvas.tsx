import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useMemo } from "react";
import MyModel from "./MyModel";

const MyCanvas: React.FC = () => {
  // Memoize OrbitControls and lights since they don't change
  const controls = useMemo(() => <OrbitControls enableRotate={true} />, []);
  const ambientLight = useMemo(() => <ambientLight />, []);

  return (
    <div className="threeJs relative w-full h-screen">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="./videos/space2.mp4"
        autoPlay
        loop
        muted
      />

      {/* Canvas with transparent background */}
      <Canvas
        className="relative z-10"
        camera={{ fov: 30 }}
        style={{ background: "none" }} // Ensure transparency
        gl={{ alpha: true }} // Allow transparent background
      >
        {controls}
        {ambientLight}
        <MyModel />
      </Canvas>

      <div className="absolute top-16 w-full text-center font-mono text-white z-20">
        <h1 id="welcome-text" className="text-3xl">
          Projects in space
        </h1>
      </div>
    </div>
  );
};

export default MyCanvas;
