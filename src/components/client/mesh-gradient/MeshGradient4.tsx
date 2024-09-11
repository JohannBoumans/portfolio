'use client';

import { AnimationControls, m } from 'framer-motion';
import clsx from 'clsx';

type Props = {
  additionalStyle?: string;
  animationProp?: AnimationControls;
  size?: number;
  shapes?: string[];
};

export function MeshGradient4(props: Props) {
  const { additionalStyle, animationProp, size = 500, shapes } = props;

  return (
    <m.svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(`absolute blur-[0px]`, additionalStyle)}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        // x: [20, 35, 10, 30, 20],
        // y: [20, 13, 40, 14, 20],
        // scale: [2, 1.85, 2.25, 2.1, 2],
        ...animationProp,
        transition: {
          repeat: Infinity,
          times: mapShapesLengthToTimesAnimation(shapes),
          duration: 30,
          ease: `easeInOut`,
        },
      }}
    >
      <m.path
        fill="#EF9C66"
        d={mapEmptyShapesToDefaultShapes(shapes)[0]}
        transform="translate(100 100)"
        animate={{
          d: mapEmptyShapesToDefaultShapes(shapes),
          fill: [`#EF9C66`, `#C8CFA0`, `#FCDC94`, `#78ABA8`, `#EF9C66`],
          transition: {
            repeat: Infinity,
            times: mapShapesLengthToTimesAnimation(shapes),
            duration: 30,
            ease: `easeInOut`,
          },
        }}
      />
    </m.svg>
  );
}

function mapEmptyShapesToDefaultShapes(shapes?: string[]) {
  if (shapes && shapes.length > 0) {
    return shapes;
  }
  return [
    `M57.6,-67.9C72.7,-55.9,81.9,-36,84.9,-15.5C87.9,5,84.7,26,72.7,37.4C60.7,48.8,39.9,50.5,21,57.2C2.1,63.8,-14.8,75.5,-30.3,73.9C-45.7,72.3,-59.8,57.4,-65.1,41.1C-70.3,24.7,-66.9,6.7,-60.1,-6.9C-53.4,-20.6,-43.2,-30.1,-32.7,-42.9C-22.1,-55.8,-11,-72,5.1,-78.1C21.2,-84.1,42.4,-79.9,57.6,-67.9Z`,
    `M34.3,-39C46.1,-31,58.4,-21.7,65.1,-7.9C71.7,5.8,72.6,24.2,65.1,37.9C57.5,51.5,41.4,60.6,24.4,66.6C7.3,72.7,-10.7,75.8,-24.4,69.6C-38,63.5,-47.3,48.1,-58.3,32.2C-69.2,16.3,-81.8,-0.2,-81.5,-16.6C-81.3,-33.1,-68.3,-49.5,-52.6,-56.8C-36.9,-64.2,-18.5,-62.3,-3.6,-58.1C11.2,-53.8,22.5,-47,34.3,-39Z`,
    `M43.9,-56.5C53,-44.7,53.7,-27.2,57.6,-9.5C61.4,8.1,68.4,25.8,62.9,37.3C57.4,48.8,39.5,54,22.7,58.4C5.9,62.7,-9.7,66.2,-20.6,60.5C-31.5,54.8,-37.6,40,-49.4,25.6C-61.2,11.2,-78.6,-2.9,-80.9,-18.5C-83.1,-34.1,-70.2,-51.2,-54.2,-61.7C-38.2,-72.3,-19.1,-76.2,-0.8,-75.2C17.4,-74.2,34.8,-68.2,43.9,-56.5Z`,
    `M34.3,-39C46.1,-31,58.4,-21.7,65.1,-7.9C71.7,5.8,72.6,24.2,65.1,37.9C57.5,51.5,41.4,60.6,24.4,66.6C7.3,72.7,-10.7,75.8,-24.4,69.6C-38,63.5,-47.3,48.1,-58.3,32.2C-69.2,16.3,-81.8,-0.2,-81.5,-16.6C-81.3,-33.1,-68.3,-49.5,-52.6,-56.8C-36.9,-64.2,-18.5,-62.3,-3.6,-58.1C11.2,-53.8,22.5,-47,34.3,-39Z`,
    `M57.6,-67.9C72.7,-55.9,81.9,-36,84.9,-15.5C87.9,5,84.7,26,72.7,37.4C60.7,48.8,39.9,50.5,21,57.2C2.1,63.8,-14.8,75.5,-30.3,73.9C-45.7,72.3,-59.8,57.4,-65.1,41.1C-70.3,24.7,-66.9,6.7,-60.1,-6.9C-53.4,-20.6,-43.2,-30.1,-32.7,-42.9C-22.1,-55.8,-11,-72,5.1,-78.1C21.2,-84.1,42.4,-79.9,57.6,-67.9Z`,
  ];
}

function mapShapesLengthToTimesAnimation(shapes?: string[]) {
  const numShapes = shapes?.length || 5;
  const step = 1 / numShapes;
  let result = [];

  for (let i = 0; i <= numShapes; i++) {
    result.push(i * step);
  }

  return result;
}
