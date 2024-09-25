'use client';

import React from 'react';
import { m } from 'framer-motion';
import { GrainEffect } from '../grain-effect/GrainEffect';

// Define keyframes for the wave animation
const waveAnimation = {
  animate: {
    // x: [`-400%`, `400%`], // Déplace la vague de gauche à droite
    // y: [`400%`, `-400%`], // Déplace la vague de haut en bas
    // transition: {
    //   duration: [10, 100], // Durée totale pour traverser l'écran
    //   ease: `easeInOut`,
    //   repeat: Infinity, // Répète indéfiniment
    //   repeatDelay: 0, // Délai avant de redémarrer l'animation
    // },
    x: [`-400%`, `-100%`, `100%`, `400%`], // Déplacement de la vague
    y: [`400%`, `100%`, `-100%`, `-1000%`], // Déplacement vertical en diagonale
    transition: {
      duration: 5, // Durée totale de l'animation
      times: [0, 0.2, 0.7, 1], // Moments dans l'animation où la transition est appliquée
      ease: `easeInOut`, // Easing pour ralentir au centre de l'écran
      repeat: Infinity, // Animation infinie
      repeatDelay: 0, // Pas de délai entre chaque répétition
    },
  },
  initial: {
    x: `-400%`, // Position de départ
    y: `-400%`, // Position de départ
  },
};

export const BackgroundWave = () => {
  return (
    <div className="fixed w-full h-full z-[-2]">
      <m.div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100vh`,
          background: `#37383A`, // Arrière-plan gris
          zIndex: -2,
        }}
      />
      <m.div
        initial={waveAnimation.initial} // Position initiale
        animate={waveAnimation.animate} // Animation
        style={{
          position: `absolute`,
          // top: `-100px`, // Commence un peu en dehors du haut de l'écran
          top: `-4O0%`, // Commence un peu en dehors du haut de l'écran
          // left: `100%`, // Commence complètement à gauche
          left: `-400%`, // Commence complètement à gauche
          width: `400%`, // Largeur suffisante pour couvrir tout l'écran
          height: `2400px`, // Hauteur de la vague
          background: `linear-gradient(135deg, #fe9474, #fe9474)`, // Vague rouge avec dégradé
          zIndex: -1,
          rotate: `-45deg`, // Rotation de 45 degrés
          filter: `blur(50px)`,
        }}
      />
      <GrainEffect />
    </div>
  );
};
