'use client';

import React from 'react';
import { m } from 'framer-motion';
import { GrainEffect } from '../grain-effect/GrainEffect';

// Define keyframes for the gradient animation
const gradientAnimation = {
  animate: {
    background: [
      // `linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)`,
      // `linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)`,
      // `linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)`,
      // `linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)`,
      // `linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)`,

      // `linear-gradient(-45deg, #37383A 0%, #37383A 100%)`,
      // `linear-gradient(-45deg, #37383A 0%, #37383A 100%)`,
      // `linear-gradient(-45deg, #37383A 0%, #fe9474 50%)`,
      // `linear-gradient(-45deg, #fe9474 50%, #fe9474 100%)`,
      // `linear-gradient(-45deg, #37383A 0%, #37383A 100%)`,
      // `linear-gradient(-45deg, #37383A 0%, #37383A 100%)`,

      `linear-gradient(145deg, #37383A 0%, #37383A 100%)`, // Début complètement gris
      `linear-gradient(145deg, #fe9474 0%, #37383A 100%)`, // La vague commence à entrer par la gauche
      `linear-gradient(145deg, #37383A 0%, #fe9474 100%)`, // Vague rouge au milieu
      `linear-gradient(145deg, #37383A 0%, #37383A 100%)`, // Retour au gris complet
    ],
    transition: {
      //#37383A
      duration: 2,
      times: [0, 0.3, 0.7, 1],
      ease: `easeInOut`,
      repeat: Infinity,
      repeatDelay: 6,
    },
  },
};

export const MeshGradient3 = () => {
  return (
    <>
      <m.div
        style={{
          position: `fixed`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100vh`,
          zIndex: -1,
        }}
        animate={gradientAnimation.animate}
      />
      <GrainEffect />
    </>
  );
};
