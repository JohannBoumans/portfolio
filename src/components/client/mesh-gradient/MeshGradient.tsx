'use client';

import { m } from 'framer-motion';
import { addPropertyControls, ControlType } from 'framer';

export function MeshGradient(props) {
  const { colors, blur, size } = props;

  const containerStyle = {
    position: `relative`,
    width: `100%`,
    height: `100vh`,
    overflow: `hidden`,
    backgroundColor: `#000`,
  };

  const circleStyle = (color) => ({
    position: `absolute`,
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: `50%`,
    filter: `blur(${blur}px)`,
  });

  const animateVariant = [
    {
      animate: {
        scale: [1, 1.05, 1.2, 1],
        scaleY: [1, 1.6, 1, 1.2, 1],
        x: [0, 170, -300, 0],
        y: [0, 600, 400, 0],
        transition: {
          duration: 30,
          ease: `easeInOut`,
          repeat: Infinity,
          repeatType: `mirror`,
        },
      },
    },
    // {
    //   animate: {
    //     scale: [1, 1.2, 1],
    //     x: [0, 100, 0, -100, 0],
    //     y: [0, -100, 0, 100, 0],
    //     transition: {
    //       duration: 10,
    //       ease: `easeInOut`,
    //       repeat: Infinity,
    //       repeatType: `mirror`,
    //     },
    //   },
    // },
    // {
    //   animate: {
    //     scale: [1, 1.2, 1],
    //     x: [0, 100, 0, -100, 0],
    //     y: [0, -100, 0, 100, 0],
    //     transition: {
    //       duration: 10,
    //       ease: `easeInOut`,
    //       repeat: Infinity,
    //       repeatType: `mirror`,
    //     },
    //   },
    // },
    // {
    //   animate: {
    //     scale: [1, 1.2, 1],
    //     x: [0, 100, 0, -100, 0],
    //     y: [0, -100, 0, 100, 0],
    //     transition: {
    //       duration: 10,
    //       ease: `easeInOut`,
    //       repeat: Infinity,
    //       repeatType: `mirror`,
    //     },
    //   },
    // },
  ];

  const shapes = [
    { style: { top: `10%`, left: `20%` }, color: colors[0] },
    // { style: { top: `30%`, left: `50%` }, color: colors[1] },
    // { style: { top: `60%`, left: `30%` }, color: colors[2] },
    // { style: { top: `40%`, left: `70%` }, color: colors[3] },
  ];

  return (
    <div style={containerStyle}>
      {shapes.map((shape, index) => (
        <m.div
          key={index}
          style={{ ...circleStyle(shape.color), ...shape.style }}
          animate="animate"
          variants={animateVariant[0]}
        />
      ))}
    </div>
  );
}

MeshGradient.defaultProps = {
  colors: [`#1E90FF`, `#00BFFF`, `#87CEFA`, `#4682B4`],
  blur: 200,
  size: 500,
};

addPropertyControls(MeshGradient, {
  colors: {
    type: ControlType.Array,
    propertyControl: { type: ControlType.Color },
    title: `Colors`,
    defaultValue: [`#1E90FF`, `#00BFFF`, `#87CEFA`, `#4682B4`],
  },
  blur: {
    type: ControlType.Number,
    title: `Blur`,
    min: 0,
    max: 300,
    unit: `px`,
    defaultValue: 200,
  },
  size: {
    type: ControlType.Number,
    title: `Size`,
    min: 100,
    max: 1000,
    unit: `px`,
    defaultValue: 500,
  },
});

// 'use client'
//
// import { motion } from "framer-motion";
// import { addPropertyControls, ControlType } from "framer";
//
// const meshGradientKeyframes = {
//     animate: {
//         backgroundPosition: ["0% 0%", "100% 100%", "0% 100%", "100% 0%", "0% 0%"],
//         transition: {
//             duration: 10,
//             ease: "linear",
//             repeat: Infinity,
//         },
//     },
// };
//
// export default function MeshGradient(props) {
//     const { gradientColors, duration } = props;
//
//     const containerStyle = {
//         width: "100%",
//         height: "100vh",
//         background: `linear-gradient(135deg, ${gradientColors.join(", ")})`,
//         backgroundSize: "400% 400%",
//     };
//
//     return (
//         <motion.div
//             style={containerStyle}
//             animate="animate"
//             variants={meshGradientKeyframes}
//         />
//     );
// }
//
// MeshGradient.defaultProps = {
//     gradientColors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6B6B"],
//     duration: 10,
// };
//
// addPropertyControls(MeshGradient, {
//     gradientColors: {
//         type: ControlType.Array,
//         propertyControl: { type: ControlType.Color },
//         title: "Gradient Colors",
//         defaultValue: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6B6B"],
//     },
//     duration: {
//         type: ControlType.Number,
//         title: "Duration",
//         min: 1,
//         max: 60,
//         unit: "s",
//         defaultValue: 10,
//     },
// });
