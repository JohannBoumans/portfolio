'use client';

import { MutableRefObject, useEffect, useRef } from 'react';
import { m } from 'framer-motion';

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  canvasWidth: number;
  canvasHeight: number;
  opacity: number;

  constructor(x: number, y: number, canvasWidth: number, canvasHeight: number) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() * 0.5 - 0.25) * 0.3; // Slow down velocity
    this.vy = (Math.random() * 0.5 - 0.25) * 0.3; // Slow down velocity
    this.size = Math.random() * 2 + 1;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.opacity = 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  checkMouseProximity(mouseX: number, mouseY: number, radius: number) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius) {
      this.opacity = 0.8; // Make particle visible
    } else {
      this.opacity = 0; // Make particle transparent
    }
  }
}

type Props = {
  height?: number;
};

export function ParticleAnimation(props: Props) {
  const { height = 400 } = props;
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const particlesArray: MutableRefObject<Particle[]> = useRef([]);
  const animationId = useRef<number | null>(null);
  const mouse: MutableRefObject<{
    x: number | null;
    y: number | null;
    radius: number;
  }> = useRef({
    x: null,
    y: null,
    radius: 100,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext(`2d`);
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const setCanvasSize = () => {
      // canvas.width = window.innerWidth;
      canvas.width = ref.current?.parentElement?.clientWidth ?? 0;
      // canvas.height = window.innerHeight;
      canvas.height = height;
      initParticles();
    };

    const initParticles = () => {
      particlesArray.current = [];
      const numberOfParticles = (canvas.width * canvas.height) / 2000;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.current.push(
          new Particle(x, y, canvas.width, canvas.height),
        );
      }
    };

    const handleMouse = (event: MouseEvent) => {
      // mouse.current.x = event.clientX;
      // mouse.current.y = event.clientY;
      mouse.current.x = event.clientX - rect.left;
      mouse.current.y = event.clientY - rect.top;
    };

    const connectParticles = () => {
      let opacityValue = 0.4;
      for (let a = 0; a < particlesArray.current.length; a++) {
        for (let b = a + 1; b < particlesArray.current.length; b++) {
          const dx = particlesArray.current[a].x - particlesArray.current[b].x;
          const dy = particlesArray.current[a].y - particlesArray.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            opacityValue = 1 - distance / 100;

            // Check if mouse is near the line
            const midX =
              (particlesArray.current[a].x + particlesArray.current[b].x) / 2;
            const midY =
              (particlesArray.current[a].y + particlesArray.current[b].y) / 2;
            const mouseDist = Math.sqrt(
              (mouse.current.x! - midX) ** 2 + (mouse.current.y! - midY) ** 2,
            );

            if (mouseDist < 150) {
              // ctx.strokeStyle = `rgba(153, 255, 163,${opacityValue})`; // Change color on hover Green
              // ctx.strokeStyle = `rgba(255, 255, 255,${opacityValue})`; // Change color on hover White
              // ctx.strokeStyle = `rgba(254, 148, 116,${opacityValue})`; // Orange
            } else {
              // ctx.strokeStyle = `rgba(255,255,255,${opacityValue})`;
              ctx.strokeStyle = `rgba(100,100,100,${opacityValue})`;
              // ctx.strokeStyle = `rgba(241, 171, 134,${opacityValue})`;
            }

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(
              particlesArray.current[a].x,
              particlesArray.current[a].y,
            );
            ctx.lineTo(
              particlesArray.current[b].x,
              particlesArray.current[b].y,
            );
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const animateParticles = () => {
      // if (
      //   canvas.width !== window.innerWidth ||
      //   canvas.height !== window.innerHeight
      // ) {
      //   setCanvasSize();
      // }
      // if (canvas.width !== parentWidth || canvas.height !== parentHeight) {
      //   setCanvasSize();
      // }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.current.forEach((particle) => {
        particle.update();
        particle.checkMouseProximity(
          mouse.current.x || 0,
          mouse.current.y || 0,
          mouse.current.radius,
        );
        particle.draw(ctx);
      });
      connectParticles();
      animationId.current = requestAnimationFrame(animateParticles);
    };

    setCanvasSize();
    animateParticles();

    window.addEventListener(`mousemove`, handleMouse);
    window.addEventListener(`resize`, setCanvasSize);
    return () => {
      window.removeEventListener(`mousemove`, handleMouse);
      window.removeEventListener(`resize`, setCanvasSize);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <m.div
      ref={ref}
      className="particles"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        // height: `100%`,
        backgroundColor: `#061423`,
        zIndex: 888,
        overflow: `hidden`,
        // inset: `1px`,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: `block`,
          width: `100%`,
          height: `100%`,
          transform: `scale(1.15)`,
        }}
      />
    </m.div>
  );
}

// 'use client';
//
// import { MutableRefObject, useEffect, useRef } from 'react';
// import { m } from 'framer-motion';
//
// class Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   size: number;
//   canvasWidth: number;
//   canvasHeight: number;
//
//   constructor(x: number, y: number, canvasWidth: number, canvasHeight: number) {
//     this.x = x;
//     this.y = y;
//     this.vx = (Math.random() * 0.5 - 0.25) * 0.6; // Slow down velocity
//     this.vy = (Math.random() * 0.5 - 0.25) * 0.6; // Slow down velocity
//     this.size = Math.random() * 2 + 1;
//     this.canvasWidth = canvasWidth;
//     this.canvasHeight = canvasHeight;
//   }
//
//   update() {
//     this.x += this.vx;
//     this.y += this.vy;
//
//     // Bounce off edges
//     if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
//     if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;
//   }
//
//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.closePath();
//     ctx.fill();
//   }
// }
//
// export function ParticleAnimation() {
//   const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
//   const particlesArray: MutableRefObject<Particle[]> = useRef([]);
//   const mouse: MutableRefObject<{
//     x: number | null;
//     y: number | null;
//     radius: number;
//   }> = useRef({
//     x: null,
//     y: null,
//     radius: 100,
//   });
//
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext(`2d`);
//     if (!ctx) return;
//     const canvasWidth = (canvas.width = window.innerWidth);
//     const canvasHeight = (canvas.height = window.innerHeight);
//
//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };
//
//     const initParticles = () => {
//       particlesArray.current = [];
//       const numberOfParticles = (canvasWidth * canvasHeight) / 5000;
//       for (let i = 0; i < numberOfParticles; i++) {
//         const x = Math.random() * canvasWidth;
//         const y = Math.random() * canvasHeight;
//         particlesArray.current.push(
//           new Particle(x, y, canvasWidth, canvasHeight),
//         );
//       }
//     };
//
//     const handleMouse = (event: MouseEvent) => {
//       mouse.current.x = event.clientX;
//       mouse.current.y = event.clientY;
//     };
//
//     const connectParticles = () => {
//       let opacityValue = 1;
//       for (let a = 0; a < particlesArray.current.length; a++) {
//         for (let b = a + 1; b < particlesArray.current.length; b++) {
//           const dx = particlesArray.current[a].x - particlesArray.current[b].x;
//           const dy = particlesArray.current[a].y - particlesArray.current[b].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 100) {
//             opacityValue = 1 - distance / 100;
//
//             // Check if mouse is near the line
//             const midX =
//               (particlesArray.current[a].x + particlesArray.current[b].x) / 2;
//             const midY =
//               (particlesArray.current[a].y + particlesArray.current[b].y) / 2;
//             const mouseDist = Math.sqrt(
//               (mouse.current.x! - midX) ** 2 + (mouse.current.y! - midY) ** 2,
//             );
//
//             if (mouseDist < 50) {
//               // ctx.strokeStyle = `rgba(153, 255, 163,${opacityValue})`; // Change color on hover Green
//               // ctx.strokeStyle = `rgba(255, 255, 255,${opacityValue})`; // Change color on hover White
//               ctx.strokeStyle = `rgba(241, 171, 134,${opacityValue})`; // Orange
//             } else {
//               ctx.strokeStyle = `rgba(255,255,255,${opacityValue})`;
//               // ctx.strokeStyle = `rgba(241, 171, 134,${opacityValue})`;
//             }
//
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(
//               particlesArray.current[a].x,
//               particlesArray.current[a].y,
//             );
//             ctx.lineTo(
//               particlesArray.current[b].x,
//               particlesArray.current[b].y,
//             );
//             ctx.stroke();
//             ctx.closePath();
//           }
//         }
//       }
//     };
//
//     const animateParticles = () => {
//       ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//       particlesArray.current.forEach((particle) => {
//         particle.update();
//         particle.draw(ctx);
//       });
//       connectParticles();
//       requestAnimationFrame(animateParticles);
//     };
//
//     initParticles();
//     animateParticles();
//
//     window.addEventListener(`mousemove`, handleMouse);
//     window.addEventListener(`resize`, setCanvasSize);
//     return () => {
//       window.removeEventListener(`mousemove`, handleMouse);
//       window.removeEventListener(`resize`, setCanvasSize);
//     };
//   }, []);
//
//   return (
//     <m.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2 }}
//       style={{
//         position: `absolute`,
//         top: 0,
//         left: 0,
//         width: `100vw`,
//         height: `100vh`,
//         backgroundColor: `#000`,
//         // backdropFilter: `blur(40px)`,
//         filter: `blur(10px)`,
//         zIndex: -1,
//       }}
//     >
//       <canvas ref={canvasRef} style={{ display: `block` }} />
//     </m.div>
//   );
// }
