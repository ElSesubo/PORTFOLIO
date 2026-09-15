import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// 1. Tipo para aceptar tanto formas geométricas como rutas de archivos GLB
type AssetConfig = 
  | { type: 'shape'; shape: 'box' | 'tetrahedron' | 'octahedron' }
  | { type: 'model'; url: string };

interface FallingObjectProps {
  startPos: [number, number, number];
  color: THREE.Color;
  asset: AssetConfig;
}

// Componente interno para renderizar el modelo 3D de Blender
const BlenderModel = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  // Clonamos la escena para evitar conflictos si hay multiples instancias del mismo modelo
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  return <primitive object={clonedScene} scale={[0.5, 0.5, 0.5]} />;
};

const FallingObject = ({ startPos, color, asset }: FallingObjectProps) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.position.y -= delta * 2; 
    meshRef.current.rotation.x += delta * 0.8;
    meshRef.current.rotation.y += delta * 0.8;

    if (meshRef.current.position.y < -10) {
      meshRef.current.position.y = 10;
      meshRef.current.position.x = (Math.random() - 0.5) * 20; 
    }
  });

  return (
    <group position={startPos} ref={meshRef}>
      {asset.type === 'model' ? (
        // Cargamos tu modelo de Blender
        <BlenderModel url={asset.url} />
      ) : (
        // O una forma geométrica por defecto
        <mesh>
          {asset.shape === 'tetrahedron' ? <tetrahedronGeometry args={[0.5]} /> : <boxGeometry args={[0.6, 0.6, 0.6]} />}
          <meshToonMaterial color={color} />
        </mesh>
      )}
    </group>
  );
};

export default function Background3D() {
  // 2. Define tu array de assets (mezcla formas y tus propios archivos GLB)
  const myAssets: AssetConfig[] = [
    { type: 'shape', shape: 'box' },
    { type: 'shape', shape: 'tetrahedron' },
    { type: 'model', url: '/models/office_cubical_trash_bin.glb' },
  ];

  const objects = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        Math.random() * 20,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      color: new THREE.Color().setHSL(Math.random(), 0.9, 0.6),
      selectedAsset: myAssets[Math.floor(Math.random() * myAssets.length)]
    }));
  }, []);

  return (
    <div style={{ 
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, 
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/images/Pixelated_Background.jpg')",
      backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: false }}
        onCreated={({ gl }) => { gl.setPixelRatio(Math.min(window.devicePixelRatio, 1)); }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} />
        
        {objects.map((obj, i) => (
          <FallingObject 
            key={i} 
            startPos={obj.position} 
            color={obj.color} 
            asset={obj.selectedAsset} 
          />
        ))}
      </Canvas>
    </div>
  );
}

// Pre-cargamos el modelo de Blender para optimizar el rendimiento y evitar tirones
useGLTF.preload('/models/mi-objeto.glb');