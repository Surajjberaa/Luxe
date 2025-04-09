import { RollsRoyceGhost } from "../3d/RollsRoyceGhost";
import { BmwM5 } from "../3d/BMW-M5";
import CenterAndGround from "../layouts/CenterAndGround";
import { useSpring, a } from "@react-spring/three";
import { useEffect, useMemo, useRef } from "react";
import { Buggati } from "../3d/Buggati";

const modelMap = {
  bmw: BmwM5,
  buggati: Buggati,
  rollsRoyce: RollsRoyceGhost,
  // add more
};



const CarModel = ({ id }) => {
  const SelectedModel = modelMap[id] || BmwM5;


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
        <SelectedModel  />
      </CenterAndGround>
    </a.group>
  );
};

export default CarModel;
