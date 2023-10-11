import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import { Model } from "@/components/Draco";

const Three = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Model />
        </Stage>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Three;
