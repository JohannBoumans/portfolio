import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { usePageAnimationStore } from '../../../context/page-animation/store/store';
import './style.css';

const variants = {
  initial: {
    scaleX: 0,
    transformOrigin: `left`,
    transition: { duration: 2000 },
  },
  entering: {
    scaleX: 1,
    transformOrigin: `left`,
    transition: { duration: 2000 },
  },
  exited: {
    scaleX: 0,
    transformOrigin: `right`,
    transition: { duration: 2000 },
  },
};

const duration = 2;

export function BlockAnimationTransition() {
  const { state, setIsAnimating } = usePageAnimationStore();
  const pathname = usePathname();
  //
  // useEffect(() => {
  //   if (state === `entering`) {
  //     wait(duration * 1000).then(() => {
  //       setIsAnimating(`exited`);
  //     });
  //   }
  // }, [state]);

  function handleExitCompleteAnimation() {
    // if (state === `entering`) {
    console.log(`EXIT ??`);
    // setIsAnimating(`exited`);
    // }
  }

  // useEffect(() => {
  //   if (state === `entering`) {
  //     setIsAnimating(`animate-enter`);
  //   } else if (state === `exited`) {
  //     setIsAnimating(`animate-exit`);
  //   }
  // }, [state]);

  const handleAnimationEnd = () => {
    if (state === `entering`) {
      setIsAnimating(`initial`);
    }
  };

  return (
    // <div
    //   className={`
    //     absolute top-0 left-0 w-full h-full scale-x-0 bg-red z-[999]
    //   `}
    //   style={{
    //     transform:
    //       state === `initial`
    //         ? `scaleX(0)`
    //         : state === `entering`
    //           ? `scaleX(1)`
    //           : state === `exited`
    //             ? `scaleX(0)`
    //             : ``,
    //     transition: `${duration}s`,
    //     transformOrigin: state === `exited` ? `right` : `left`,
    //   }}
    //   onTransitionEnd={handleAnimationEnd}
    // />
    <AnimatePresence
      initial
      // mode="wait"
      // onExitComplete={handleExitCompleteAnimation}
    >
      {/*{state !== `exited` && (*/}
      <m.div
        key={pathname}
        className="absolute top-0 left-0 w-full h-full bg-red z-[999]"
        initial="initial"
        animate={state === `entering` ? `entering` : `initial`}
        exit="exited"
        variants={variants}
        transition={{ duration: 2000, ease: `easeInOut` }}
        // onAnimationStart={() => console.log(`Animation started`)}
        // onUpdate={(latest) => console.log(`Animation update`, latest)}
        // onAnimationComplete={() => {
        //   console.log(`COMPLETE`);
        //   if (state === `entering`) {
        //     console.log(`COMPLETE IF`);
        //     setIsAnimating(`exited`);
        //   }
        //}}
      />
      {/*)}*/}
      {/*<m.div*/}
      {/*  className="absolute top-0 left-0 w-full h-full bg-red z-[999] scale-x-0"*/}
      {/*  initial={*/}
      {/*    state === `initial`*/}
      {/*      ? {*/}
      {/*          scaleX: 0,*/}
      {/*          transformOrigin: `left`,*/}
      {/*        }*/}
      {/*      : {}*/}
      {/*  }*/}
      {/*  animate={*/}
      {/*    state === `entering`*/}
      {/*      ? {*/}
      {/*          scaleX: 1,*/}
      {/*          transformOrigin: `left`,*/}
      {/*          // transition: { duration: 3 },*/}
      {/*        }*/}
      {/*      : {}*/}
      {/*  }*/}
      {/*  exit={*/}
      {/*    state === `exited` ? { scaleX: 0, transformOrigin: `right` } : {}*/}
      {/*  }*/}
      {/*  transition={{*/}
      {/*    // type: `spring`,*/}
      {/*    // mass: 0.35,*/}
      {/*    // stiffness: 75,*/}
      {/*    duration: 3,*/}
      {/*  }}*/}
      {/*/>*/}
    </AnimatePresence>
  );
}
