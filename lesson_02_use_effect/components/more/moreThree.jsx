import css from "./style.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "../three/Box";
import Controls from "../three/OrbitControl";
import LightBulb from "../three/Light";
import Draggable from "../three/Draggable";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <boxGeometry args={(3, 3, 3)} />
        <LightBulb position={[0, 3, 0]} />
      </Canvas>
    </div>
  );
}
