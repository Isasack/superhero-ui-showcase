import { useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const VantaClouds = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cloudsEffect = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      speed: 0.5,
      skyColor: "#9bb2db",
      cloudColor: 0xffffff,
      sunColor: 0xffcc00,
    });

    return () => {
      if (cloudsEffect) cloudsEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default VantaClouds;
