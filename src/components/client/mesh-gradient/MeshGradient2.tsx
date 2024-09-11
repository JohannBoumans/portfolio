import React from 'react';
import './style.css';

export function MeshGradient2(props) {
  return (
    <div style={{ position: `relative`, height: `100vh` }}>
      {/* Background using ::before pseudo-element */}
      <div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
          zIndex: -1, // Ensure background is behind content
          // backgroundColor: `#000`,
          backgroundColor: `#ffb199`,
          // backgroundImage: `
          //           radial-gradient(circle at 52% 73%, hsla(310, 85%, 67%, 1) 0px, transparent 50%),
          //           radial-gradient(circle at 0% 30%, hsla(197, 90%, 76%, 1) 0px, transparent 50%),
          //           radial-gradient(circle at 41% 26%, hsla(234, 79%, 69%, 1) 0px, transparent 50%),
          //           radial-gradient(circle at 41% 51%, hsla(41, 70%, 63%, 1) 0px, transparent 50%),
          //           radial-gradient(circle at 41% 88%, hsla(36, 83%, 61%, 1) 0px, transparent 50%),
          //           radial-gradient(circle at 76% 73%, hsla(346, 69%, 70%, 1) 0px, transparent 50%),
          //           radial-gradient(circle at 29% 37%, hsla(272, 96%, 64%, 1) 0px, transparent 50%)`,

          //
          // backgroundImage: `radial-gradient(at 41% 25%, hsla(195,100%,50%,1) 0px, transparent 50%),
          //   radial-gradient(at 80% 0%, hsla(187,0%,0%,1) 0px, transparent 50%),
          //   radial-gradient(at 0% 50%, hsla(355,0%,0%,1) 0px, transparent 50%),
          //   radial-gradient(at 75% 57%, hsla(28,100%,74%,1) 0px, transparent 50%),
          //   radial-gradient(at 0% 100%, hsla(202,92%,75%,1) 0px, transparent 50%),
          //   radial-gradient(at 80% 100%, hsla(240,0%,0%,1) 0px, transparent 50%),
          //   radial-gradient(at 0% 0%, hsla(342,0%,0%,1) 0px, transparent 50%);`,
          //
          //           backgroundImage: `radial-gradient(at 1% 59%, hsla(353,70%,66%,1) 0px, transparent 50%),
          // radial-gradient(at 83% 91%, hsla(153,93%,76%,1) 0px, transparent 50%),
          // radial-gradient(at 33% 40%, hsla(35,62%,66%,1) 0px, transparent 50%),
          // radial-gradient(at 32% 78%, hsla(337,92%,65%,1) 0px, transparent 50%),
          // radial-gradient(at 90% 20%, hsla(328,83%,78%,1) 0px, transparent 50%);`,
          //           backgroundImage: `radial-gradient(at 91% 92%, hsla(90,82%,63%,1) 0px, transparent 50%),
          // radial-gradient(at 6% 22%, hsla(71,86%,73%,1) 0px, transparent 50%),
          // radial-gradient(at 29% 43%, hsla(47,92%,64%,1) 0px, transparent 50%),
          // radial-gradient(at 67% 49%, hsla(44,96%,73%,1) 0px, transparent 50%);`,
          backgroundImage: `radial-gradient(at 39% 11%, hsla(316,62%,70%,1) 0px, transparent 50%),
            radial-gradient(at 87% 64%, hsla(4,65%,71%,1) 0px, transparent 50%),
            radial-gradient(at 35% 65%, hsla(116,99%,71%,1) 0px, transparent 50%),
            radial-gradient(at 58% 30%, hsla(174,96%,63%,1) 0px, transparent 50%);`,
          backgroundSize: `150% 150%`,
          filter: `blur(80px)`,
          animation: `moveBackground 10s linear infinite`,
        }}
      ></div>
    </div>
  );
}
