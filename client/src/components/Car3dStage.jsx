// components/Experience.jsx
import { OrbitControls, MeshReflectorMaterial, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, DoubleSide, PointLightHelper, SpotLightHelper } from "three";
import CarModel from "./CarModel";

export default function Car3dStage({ carId, orbitRef }) {
  const spotRef = useRef();
  const dirRef1 = useRef();
  const dirRef2 = useRef();
  const pointRef = useRef();

  useHelper(dirRef1, DirectionalLightHelper, 1, 'red')
  useHelper(dirRef2, DirectionalLightHelper, 1, 'red')
  useHelper(spotRef, SpotLightHelper, 'cyan');
  useHelper(pointRef, PointLightHelper, 1, 'green');

  return (
    <>
      <CarModel id={carId} />
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.8, 0]} receiveShadow >
  <planeGeometry args={[20, 20]} />
  <meshStandardMaterial color="red" side={DoubleSide} />
</mesh> */}

      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
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
      </mesh> */}

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
      {/* <pointLight ref={pointRef} position={[0, 10, -2]} intensity={1} color="#ffffff" /> */}

      <directionalLight
        // ref={dirRef1}
        position={[-.1, 1, 5]}
        intensity={10}
        castShadow
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      // shadow-mapSize-width={2048}
      // shadow-mapSize-height={2048}
      // shadow-camera-near={1}
      // shadow-camera-far={50}
      // shadow-camera-left={-10}
      // shadow-camera-right={10}
      // shadow-camera-top={10}
      // shadow-camera-bottom={-10}
      />
      <directionalLight
        // ref={dirRef2}
        position={[-.1, 1, -5]}
        shadow-bias={-0.0005}
        intensity={10}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2} ref={orbitRef} />
      {/* <Environment preset="city" /> */}
    </>
  );
}
