import { useSpring, a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const modelMap = {
    bmw: "/assets/models/bmw_m5_cs.glb",
    buggati: "/assets/models/bugatti_tourbillon_2026__www.vecarz.com/scene.gltf",
    rollsRoyce: "/assets/models/rolls-royce_ghost/scene.gltf",
    // add more
};



const CarModel = ({ id }) => {
    const modelPath = modelMap[id] || modelMap["bmw"];
    const { scene } = useGLTF(modelPath);

    const clonedScene = useMemo(() => clone(scene), [scene]);
    
    const [spring, api] = useSpring(() => ({
        scale: [0, 0, 0],
        position: [0, -2, 0],
        rotation: [0, Math.PI * 2, 0],
      }));
      
      useEffect(() => {
        api.start({
          scale: [1, 1, 1],
          position: [0, 0.2, 0.3],
          rotation: [0, 0, 0],
          config: { mass: 1, tension: 80, friction: 20 },
          delay: 300,
        });
      }, []);

    return (
        <a.group {...spring}>
            <primitive object={clonedScene} scale={0.8} position={[0, -1, 0]} />
         </a.group>
    );
};

export default CarModel;
