import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// export function animatePage(href: string, router: AppRouterInstance) {
//   const transitionElements = document.querySelectorAll(`div.cell`);
//   if (transitionElements.length > 0) {
//     transitionElements.forEach((el) => {
//       const tl = gsap.timeline();
//       tl.to(el, {
//         onStart: () => {
//           if (el.classList.contains(`slide-in-animation`)) {
//             el.classList.remove(`slide-in-animation`);
//           }
//           el.classList.add(`slide-out-animation`);
//         },
//         duration: 1,
//       }).to(el, {
//         onStart: () => {
//           router.push(href);
//           if (el.classList.contains(`slide-out-animation`)) {
//             el.classList.remove(`slide-out-animation`);
//           }
//           el.classList.add(`slide-in-animation`);
//         },
//         duration: 1,
//       });
//     });
//   }
// }

export const animatePageIn = (href: string, router: AppRouterInstance) => {
  // const transitionElement = document.getElementById(`transition-element`);
  const transitionElements = document.querySelectorAll(`div.cell`);
  console.log(transitionElements, `ELMEENT`);

  if (transitionElements.length > 0) {
    transitionElements.forEach((el) => {
      const tl = gsap.timeline();
      tl.to(el, {
        onStart: () => {
          if (el.classList.contains(`slide-out-animation`)) {
            el.classList.remove(`slide-out-animation`);
          }
          el.classList.add(`slide-in-animation`);
        },
        duration: 1,
        onComplete: () => {
          router.push(href);
        },
      });
      // gsap.to(el, {
      //   onStart: () => {
      //     if (el.classList.contains(`slide-out-animation`)) {
      //       el.classList.remove(`slide-out-animation`);
      //     }
      //     el.classList.add(`slide-in-animation`);
      //   },
      //   duration: 1,
      // });
    });
  }

  // if (transitionElements.length > 0) {
  //   transitionElements.forEach((el) => {
  //     const tl = gsap.timeline();
  //     tl.set(el, {
  //       xPercent: 0,
  //       willChange: `transform`,
  //     })
  //       .to(el, {
  //         xPercent: 100,
  //         willChange: `transform`,
  //         duration: 1,
  //       })
  //       .to(
  //         el,
  //         {
  //           // borderTopLeftRadius: `50vh`,
  //           // borderBottomLeftRadius: `50vh`,
  //           willChange: `transform`,
  //           duration: 1,
  //         },
  //         `<`,
  //       );
  //   });
  // }

  // if (transitionElement) {
  //   const tl = gsap.timeline();
  //
  //   tl.set(transitionElement, {
  //     xPercent: 0,
  //   })
  //     .to(transitionElement, {
  //       xPercent: 100,
  //       duration: 1,
  //     })
  //     .to(
  //       transitionElement,
  //       {
  //         // borderTopLeftRadius: `50vh`,
  //         // borderBottomLeftRadius: `50vh`,
  //         duration: 1,
  //       },
  //       `<`,
  //     );
  // }
};

export const animatePageOut = () => {
  // const animationWrapper = document.getElementById(`transition-element`);
  const animationWrapper = document.querySelectorAll(`div.cell`);

  if (animationWrapper.length > 0) {
    animationWrapper.forEach((el) => {
      gsap.to(el, {
        onStart: () => {
          if (el.classList.contains(`slide-in-animation`)) {
            el.classList.remove(`slide-in-animation`);
          }
          el.classList.add(`slide-out-animation`);
        },
        duration: 1,
      });
    });
  }

  // if (animationWrapper.length > 0) {
  //   animationWrapper.forEach((el) => {
  //     const tl = gsap.timeline();
  //     tl.set(el, {
  //       xPercent: -100,
  //       willChange: `transform`,
  //       // borderTopRightRadius: `50vh`,
  //       // borderBottomRightRadius: `50vh`,
  //       // borderTopLeftRadius: `0`,
  //       // borderBottomLeftRadius: `0`,
  //     })
  //       .to(el, {
  //         xPercent: 0,
  //         willChange: `transform`,
  //         duration: 1,
  //         onComplete: () => {
  //           router.push(href);
  //           console.log(`PUSH HREF`);
  //         },
  //       })
  //       .to(
  //         el,
  //         {
  //           // borderTopRightRadius: `0`,
  //           // borderBottomRightRadius: `0`,
  //           willChange: `transform`,
  //           duration: 1,
  //           onComplete: () => {
  //             console.log(`ANIMATION END !!`);
  //           },
  //         },
  //         `<`,
  //       );
  //   });
  // }

  // if (animationWrapper) {
  //   const tl = gsap.timeline();
  //
  //   tl.set(animationWrapper, {
  //     xPercent: -100,
  //     // borderTopRightRadius: `50vh`,
  //     // borderBottomRightRadius: `50vh`,
  //     // borderTopLeftRadius: `0`,
  //     // borderBottomLeftRadius: `0`,
  //   })
  //     .to(animationWrapper, {
  //       xPercent: 0,
  //       duration: 1,
  //       onComplete: () => {
  //         router.push(href);
  //         console.log(`PUSH HREF`);
  //       },
  //     })
  //     .to(
  //       animationWrapper,
  //       {
  //         // borderTopRightRadius: `0`,
  //         // borderBottomRightRadius: `0`,
  //         duration: 1,
  //         onComplete: () => {
  //           console.log(`ANIMATION END !!`);
  //         },
  //       },
  //       `<`,
  //     );
  // }
};
