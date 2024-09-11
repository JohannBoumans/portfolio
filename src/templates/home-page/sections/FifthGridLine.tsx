'use client';

import { useEffect, useRef, useState } from 'react';
import { Text } from '../../../components/server/text/Text';
import { Badge } from '../../../components/server/badge/Badge';
import { Image } from '../../../components/client/image/Image';
import { MovingBlock } from '../../../components/client/moving-block/MovingBlock';

export function FifthGridLineFirstComponent() {
  return (
    <div>
      <Text size="lg" additionalStyle="font-semibold">
        Développeur web front-end spécialisé en React et TypeScript, je maîtrise
        les outils modernes de développement tels que Git pour la gestion de
        versions et Next.js pour la création d'applications performantes.
        Habitué à travailler en équipe, je collabore efficacement pour
        développer des solutions robustes et innovantes, tout en assurant une
        qualité de code optimale et une expérience utilisateur fluide.
      </Text>
    </div>
  );
}

export function FifthGridLineSecondComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener(`mousemove`, handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener(`mousemove`, handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex justify-center items-center relative"
    >
      <MovingBlock
        xOffset={mousePosition.x * 0.08}
        yOffset={mousePosition.y * 0.08}
        additionalStyle="absolute top-[calc(50%, -104px)] left-[calc(50%, -104px)] z-[2]"
      >
        <div className="rounded-3xl p-10 backdrop-blur-[7px] grid-cols-2 grid max-w-max gap-4 bg-[#323232]/[.1]">
          <Badge gradient="yellow" icon="javascript" />
          <Badge gradient="blue" icon="typescript" />
          <Badge gradient="red" icon="git" />
          <Badge gradient="skyblue" icon="react" />
        </div>
      </MovingBlock>
      <MovingBlock
        xOffset={mousePosition.x * 0.01}
        yOffset={mousePosition.y * 0.01}
        additionalStyle="absolute top-[60%] left-[10%] z-[1]"
      >
        <div className="blur-[3px] bg-[#323232]/[.1]">
          <Image
            src="/images/screencode-1.png"
            alt="Screencode"
            width={300}
            height={250}
          />
        </div>
      </MovingBlock>
      <MovingBlock
        xOffset={mousePosition.x * 0.01}
        yOffset={mousePosition.y * 0.01}
        additionalStyle="absolute top-[0%] left-[25%]"
      >
        <div className="blur-[3px] bg-[#323232]/[.1]">
          <Image
            src="/images/screencode-2.png"
            alt="Screencode"
            width={300}
            height={250}
          />
        </div>
      </MovingBlock>
      <MovingBlock
        xOffset={mousePosition.x * 0.02}
        yOffset={mousePosition.y * 0.02}
        additionalStyle="absolute bottom-[10%] right-[5%] z-[1]"
      >
        <div className="blur-[3px] bg-[#323232]/[.1]">
          <Image
            src="/images/screencode-3.png"
            alt="Screencode"
            width={300}
            height={250}
          />
        </div>
      </MovingBlock>
    </div>
  );
}
