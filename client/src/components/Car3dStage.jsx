// components/Experience.jsx
import { OrbitControls, MeshReflectorMaterial, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, SpotLightHelper } from "three";
import CarModel from "./CarModel";

export default function Car3dStage({ carId }) {
  const spotRef = useRef();
  const dirRef = useRef();

  useHelper(dirRef, DirectionalLightHelper, 1, 'red')
  useHelper(spotRef, SpotLightHelper,  'cyan');

  return (
    <>
      <CarModel id={carId} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={50}
          roughness={0.5}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.25}
          color="#101010"
          metalness={0.7}
        />
      </mesh>

      <ambientLight intensity={0.4} />

      <spotLight
        // ref={spotRef}
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1000.5}
        castShadow
        shadow-mapSize={1024}
      />

      <directionalLight
        // ref={dirRef}
        position={[-5, 1, 2]}
        intensity={10}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />
      <directionalLight
        // ref={dirRef}
        position={[5, 1, 2]}
        intensity={10}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <OrbitControls enablePan={false}  />
      {/* <Environment preset="city" /> */}
    </>
  );
}
