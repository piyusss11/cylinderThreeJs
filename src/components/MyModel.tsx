import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";
import * as THREE from "three";

const MyModel: React.FC = () => {
  // Memoize texture to prevent reloading on each render
  const texture = useTexture("./images/tvHai.png");

  const cylinderRef = useRef<THREE.Mesh>(null);

  // Optimize geometry and material creation using useMemo
  const cylinderGeometry = useMemo(
    () => new THREE.CylinderGeometry(1, 1, 1, 32, 60, true),
    []
  );

  const cylinderMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
    }),
    [texture]
  );

  // Animate cylinder rotation
  useFrame((_, delta) => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group rotation={[0, 1, 0.3]}>
      <mesh ref={cylinderRef} geometry={cylinderGeometry} material={cylinderMaterial} />
    </group>
  );
};

export default MyModel;
