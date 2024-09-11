'use client';

import React, { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { GrainEffect } from '../grain-effect/GrainEffect';

// Shaders
const vertexShader = `
uniform float uTime;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;
  float freq = 1.0;
  float amp = 0.5;
  pos.x += sin(pos.y * freq + uTime) * amp;
  pos.y += cos(pos.x * freq + uTime) * amp;
  pos.z += sin(pos.z * freq + uTime) * amp;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;

void main() {
  vec3 color = vec3(0.1, 0.6, 1.0);
  gl_FragColor = vec4(color, 1.0);
}
`;

const BlobMaterial = shaderMaterial({ uTime: 0 }, vertexShader, fragmentShader);

extend({ BlobMaterial });

const Blob: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as any).uniforms.uTime.value =
        state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 16]} />
      <blobMaterial attach="material" />
    </mesh>
  );
};

const BackgroundBlur: React.FC = () => {
  const { size, gl } = useThree();

  return (
    <mesh scale={[size.width, size.height, 1]}>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial>
        <texture attach="map" args={[new THREE.CanvasTexture(gl.domElement)]} />
      </meshBasicMaterial>
    </mesh>
  );
};

const BlobScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Blob />
    </>
  );
};

export const WaveCanvas: React.FC = () => {
  return (
    <div
      style={{
        position: `relative`,
        width: `100vw`,
        height: `100vh`,
        overflow: `hidden`,
      }}
    >
      <div
        style={{
          position: `absolute`,
          width: `100%`,
          height: `100%`,
          filter: `blur(10px)`,
          background: `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`,
          zIndex: -1,
        }}
      />
      <Canvas
        style={{ position: `absolute`, top: 0, left: 0 }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        {/*<BlobScene />*/}
        {/*<BackgroundBlur />*/}
      </Canvas>
      <GrainEffect />
    </div>
  );
};
