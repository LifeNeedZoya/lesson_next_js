import React from "react";
import {
  OrbitControls,
  TransformControls,
} from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree } from "@react-three/fiber";

extend({ OrbitControls });

function Controls(props) {
  const { camera, gl } = useThree();
  return (
    <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />
  );
}

export default Controls;
