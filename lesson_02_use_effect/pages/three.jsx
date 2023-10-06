import React from "react";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry } from "three";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
const Three = () => {
  const Container = styled.div`
    background-color: #effec7;
  `;
  return (
    <Container>
      <Canvas>
        <directionalLight position={[1, 1, 1]} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <OrbitControls />

          <meshStandardMaterial color="pink" />
        </mesh>
      </Canvas>
    </Container>
  );
};

export default Three;
