import { RollsRoyceGhost } from "../3d/RollsRoyceGhost";
import { BmwM5 } from "../3d/BMW-M5";
import CenterAndGround from "../layouts/CenterAndGround";
import { useSpring, a } from "@react-spring/three";
import { useEffect, useMemo, useRef } from "react";
import { Buggati } from "../3d/Buggati";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three";

const modelMap = {
  bmw: BmwM5,
  buggati: Buggati,
  rollsRoyce: RollsRoyceGhost,
  // add more
};



const CarModel = ({ id, isInside }) => {
  const SelectedModel = modelMap[id] || BmwM5;

  const pointLightRef = useRef();

  // useHelper(pointLightRef, PointLightHelper , 1, 'red');

  const [spring, api] = useSpring(() => ({
    scale: [0, 0, 0],
    position: [0, -2, 0],
    rotation: [0, Math.PI * 2, 0],
  }));

  useEffect(() => {
    api.start({
      scale: [1, 1, 1],
      position: [0.2, 0.2, -0.2],
      rotation: [0, 1.5, 0],
      config: { mass: 1, tension: 80, friction: 20 },
      delay: 300,
    });
  }, []);

  return (
    <a.group {...spring}>
      <CenterAndGround targetY={-1.05}>
        <SelectedModel />
        {isInside && (
          <>
            <pointLight
              position={[.2, 0.2, -.6]}
              intensity={1}
              distance={3}
              decay={2}
              color="white"
              shadow-bias={-0.0005}
              castShadow
            />
            {/* <mesh position={[.2, 0.2, -.6]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="hotpink" />
            </mesh> */}
            <ambientLight intensity={0.5} />
          </>

        )}

      </CenterAndGround>
    </a.group>
  );
};

export default CarModel;
