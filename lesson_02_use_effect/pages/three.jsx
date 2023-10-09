import React from "react";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry } from "three";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
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
        <directionalLight position={[3, 3, 3]} />
      </Canvas>
      <Spline scene="https://my.spline.design/superkidrobotcopy-f4af075ea39ba15ad7e719db5552ebf7/" />
    </Container>
  );
};

export default Three;
