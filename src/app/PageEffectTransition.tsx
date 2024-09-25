// 'use client';
//
// import { ReactNode, useContext, useRef } from 'react';
// import { AnimatePresence, m } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
//
// export function FrozenRouter(props: { children: ReactNode }) {
//   const context = useContext(LayoutRouterContext ?? {});
//   const frozen = useRef(context).current;
//
//   if (!frozen) {
//     return <>{props.children}</>;
//   }
//
//   return (
//     <LayoutRouterContext.Provider value={frozen}>
//       {props.children}
//     </LayoutRouterContext.Provider>
//   );
// }
//
// const parent = {
//   hidden: { opacity: 1 },
//   enter: { opacity: 1 },
//   exit: { opacity: 1 },
// };
//
// const variants = {
//   hidden: { y: `200%` },
//   enter: { y: `100%` },
//   exit: { y: `-100%` },
// };
//
// // const parent = {
// //   hidden: {},
// //   enter: {},
// //   exit: {},
// // };
//
// const PageTransitionEffect = ({ children }: { children: ReactNode }) => {
//   const pathname = usePathname();
//
//   function handleExitAnimation() {
//     window.scrollTo(0, 0);
//   }
//
//   return (
//     <AnimatePresence
//       // key={pathname}
//       initial={false}
//       // mode="wait"
//       onExitComplete={handleExitAnimation}
//     >
//       <m.div
//         className="relative"
//         key={pathname}
//         initial="hidden"
//         animate="enter"
//         exit="exit"
//         variants={parent}
//         transition={{ ease: `easeInOut`, duration: 3 }}
//       >
//         {/*<m.div*/}
//         {/*  key={pathname}*/}
//         {/*  initial="hidden"*/}
//         {/*  animate="enter"*/}
//         {/*  exit="exit"*/}
//         {/*  variants={variants}*/}
//         {/*  transition={{ ease: `easeInOut`, duration: 3 }}*/}
//         {/*  style={{*/}
//         {/*    position: `absolute`,*/}
//         {/*    top: 0,*/}
//         {/*    left: 0,*/}
//         {/*    width: `100%`,*/}
//         {/*    height: `100vh`,*/}
//         {/*    backgroundColor: `#3498db`,*/}
//         {/*    // borderTopLeftRadius: `50% 100px`,*/}
//         {/*    // borderTopRightRadius: `50% 100px`,*/}
//         {/*    zIndex: 1000,*/}
//         {/*  }}*/}
//         {/*/>*/}
//         <FrozenRouter>{children}</FrozenRouter>
//         {/*{children}*/}
//       </m.div>
//     </AnimatePresence>
//   );
// };
//
// export default PageTransitionEffect;
