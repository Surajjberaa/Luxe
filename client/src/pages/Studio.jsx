import { useParams, useNavigate } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, MeshReflectorMaterial, useHelper, useDetectGPU } from "@react-three/drei";
import CarModel from "../components/CarModel";
import { Suspense, useEffect, useRef, useState } from "react";
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Car3dStage from "../components/Car3dStage";
import { Garage } from "../3d/Garage";
import StudioLoader from "../components/studio/StudioLoader";
import { useSpring } from "@react-spring/three";
import * as THREE from "three";
import gsap from "gsap";

const Studio = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isInside, setIsInside] = useState(false);
  const [isInterior, setIsInterior] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const interiorCars = ['rollsRoyce'];
  const isInteriorCar = interiorCars.includes(carId);

  useEffect(() => {
    if (isInteriorCar) {
      setIsInterior(true);
    } else {
      setIsInterior(false);
    }
  }, [carId]);



  const orbitRef = useRef();
  const cameraRef = useRef();


  const gpuTier = useDetectGPU()
  const isLowEnd = gpuTier?.tier <= 2

  const handleDialogOpen = () => {
    setDialogOpen(!dialogOpen);
  }

  const navigateHandler = (car) => () => {
    navigate(`/studio/${car}`);
  }

  const goInsideCar = () => {
    // console.log(cameraRef.current.position);
    gsap.to(cameraRef.current.position, {
      x: -.2,
      y: .4,
      z: 0,
      duration: 2,
      ease: "power2.inOut"
    });

    gsap.to(orbitRef.current.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => orbitRef.current.update()
    });
    setIsInside(true);
  };

  const goOutsideCar = () => {
    gsap.to(cameraRef.current.position, {
      x: 5,
      y: 2,
      z: 2.3,
      duration: 2,
      ease: "power2.inOut"
    });

    gsap.to(orbitRef.current.target, {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => orbitRef.current.update()
    });
    setIsInside(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      console.log("Loader finished");
    }, 2000); // Force 1.5s minimum loader

    return () => clearTimeout(timer);
  }, [carId]);

  if (showLoader) {
    return (
      <div className="relative w-screen h-screen bg-black overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black">
          <Canvas camera={{ position: [5, 2, 2.3], fov: 50 }} >
            <StudioLoader />
          </Canvas>
        </div>
      </div>)
  }



  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Canvas Section */}
      <Canvas key={carId} shadows camera={{ position: [5, 2, 2.3], fov: 50 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance" }} onCreated={({ camera }) => {
        cameraRef.current = camera;
      }}>
        <Suspense fallback={<StudioLoader />}>
          <CarModel id={carId} isInside={isInside} />
          <Car3dStage carId={carId} orbitRef={orbitRef} />
          <Garage />
        </Suspense>

        {
          !isLowEnd && (
            <EffectComposer resolutionScale={0.7}>
              <Bloom
                intensity={0.2} // lower = subtle glow, higher = stronger
                luminanceThreshold={0.8} // only bloom bright parts
                luminanceSmoothing={0.5} // soft glow transition
              />
            </EffectComposer>
          )}
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
      <div className={`absolute right-6 top-6 z-10 w-64 ${dialogOpen ? 'h-[90%]' : 'h-[10%]'}  rounded-2xl bg-white/10  border border-white/10 backdrop-blur-md p-4 text-white md:block flex flex-row`}>
        <div className="flex  flex-col  w-full h-full rounded-2xl p-4 absolute top-0 pointer-events-none">
          <h2 className="text-lg font-semibold mb-2">Car Controls</h2>
          <p className="text-sm text-white/50">Coming soon...</p>
        </div>
        <div className="flex items-center justify-center  absolute right-6 top-6 z-10">
          <button onClick={handleDialogOpen} className="h-[30px] w-[30px] border rounded-full bg-white text-black  hover:bg-white/60 transition-all flex items-center justify-center">

            {
              dialogOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8l7 8 7-8H5z" fill="currentColor" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5l8 7-8 7V5z" fill="currentColor" />
                </svg>
              )
            }


          </button>
        </div>
        {
          dialogOpen && (
            <div className="flex flex-col items-center justify-center z-999 mt-20">
              {
                isInterior && (<div className="flex gap-4 my-4">
                  <button
                    onClick={goInsideCar}
                    className="px-4 py-2 rounded-md bg-black/50 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md  transition-all"
                  >
                    Enter Car
                  </button>
                  <button
                    onClick={goOutsideCar}
                    className="px-4 py-2 rounded-md bg-black/50 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md  transition-all"
                  >
                    Exit Car
                  </button>
                </div>
                )
              }

              <p className="text-sm text-white/50">Choose a car model:</p>
              <div className="flex flex-col space-y-2 m-3">
                <button className={`cursor-pointer text-xl border rounded-full bg-black/50 hover:bg-black/80 p-2`} onClick={navigateHandler('bmw')}>
                  BMW M5
                </button>
                <button className={`cursor-pointer text-xl border rounded-full bg-black/50 hover:bg-black/80 p-2`} onClick={navigateHandler('buggati')}>
                  Buggati
                </button>
                <button className={`cursor-pointer text-xl border rounded-full bg-black/50 hover:bg-black/80 p-2`} onClick={navigateHandler("rollsRoyce")}>
                  Rolls Royce
                </button>
              </div>
            </div>
          )
        }
        {/* <div className="mt-20">
          <div>
            <button className={`cursor-pointer`} onClick={() => navigate("/studio/bmw")}>
              BMW M5
            </button>
          </div>
          <div>
            <button className={`cursor-pointer`} onClick={() => navigate("/studio/buggati")}>
              Buggati
            </button>
          </div>
          <div>
            <button className={`cursor-pointer`} onClick={() => navigate("/studio/rollsRoyce")}>
              Rolls Royce
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Studio;
