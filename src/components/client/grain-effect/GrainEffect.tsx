'use client';

import { useEffect, useRef } from 'react';

export function GrainEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext(`2d`);
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const generateNoise = () => {
      const imageData = ctx.createImageData(width, height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const gray = Math.random() * 155;
        imageData.data[i] = gray;
        imageData.data[i + 1] = gray;
        imageData.data[i + 2] = gray;
        imageData.data[i + 3] = 30; // Alpha
      }
      ctx.putImageData(imageData, 0, 0);
    };

    generateNoise();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        pointerEvents: `none`,
        backdropFilter: `blur(30px)`,
        zIndex: -1,
      }}
    />
  );
}
