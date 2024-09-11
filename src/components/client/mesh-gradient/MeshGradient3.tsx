'use client';

import React from 'react';
import { m } from 'framer-motion';
import { GrainEffect } from '../grain-effect/GrainEffect';

// Define keyframes for the gradient animation
const gradientAnimation = {
  animate: {
    background: [
      `linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)`,
      `linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)`,
      `linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)`,
      `linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)`,
      `linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)`,
    ],
    transition: {
      duration: 20,
      ease: `linear`,
      repeat: Infinity,
    },
  },
};

export const MeshGradient3 = (props) => {
  return (
    <>
      <m.div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100vh`,
          zIndex: -1,
          ...props.style,
        }}
        animate={gradientAnimation.animate}
      />
      <GrainEffect />
    </>
  );
};
