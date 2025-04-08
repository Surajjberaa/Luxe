import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, MeshReflectorMaterial, useHelper } from "@react-three/drei";
import CarModel from "../components/CarModel";
import { useRef } from "react";
import { SpotLightHelper } from "three";
import Car3dStage from "../components/Car3dStage";
import SmokeParticles from "../components/studio/Fog";
import GroundFog from "../components/studio/Fog";
import { Garage } from "../3d/Garage";

const Studio = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Canvas Section */}
      <Canvas shadows camera={{ position: [5, 2, 3], fov: 50 }}>
        <CarModel id={carId} />
        <group position={[0, 1, -1]}>
          {/* <GroundFog /> */}
  {/* <SmokeParticles /> */}
</group>
        <Car3dStage carId={carId} />
        <Garage />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-md bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 transition-all"
        >
          ← Back
        </button>
      </div>

      <div className="absolute bottom-6 left-6 z-10 text-white space-y-1">
        <h1 className="text-4xl font-bold capitalize">{carId}</h1>
        <p className="text-sm text-white/60">Studio Experience</p>
      </div>

      {/* Right Side UI Panel (for future control) */}
      {/* <div className="absolute right-6 top-6 z-10 w-64 h-[90%] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-4 text-white hidden md:block">
        <h2 className="text-lg font-semibold mb-2">Car Controls</h2>
        <p className="text-sm text-white/50">Coming soon...</p>
      </div> */}
    </div>
  );
};

export default Studio;
