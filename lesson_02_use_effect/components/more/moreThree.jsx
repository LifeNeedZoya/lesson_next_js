import css from "./style.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "../box";
import Controls from "../OrbitControl";
import LightBulb from "../Light";
import Floor from "../Floor";

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
        <Light position={[0, 3, 0]} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Box rotateX={3} rotateY={0.2} />
        </Draggable>
        <Controls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
