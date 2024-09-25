import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { PageAnimationControls } from '../context/page-animation/store/store';

export const animatePageIn2 = async (
  href: string,
  router: AppRouterInstance,
  controls: PageAnimationControls,
) => {
  const transitionElements = document.querySelectorAll(`div.cell`);

  transitionElements.forEach((el) => {
    if (el.classList.contains(`slide-out-animation`)) {
      el.classList.remove(`slide-out-animation`);
    }
    el.classList.add(`slide-in-animation`);
  });

  await controls.start(`animate`);

  router.push(href);
};

export const animatePageOut2 = async (controls: PageAnimationControls) => {
  const animationWrapper = document.querySelectorAll(`div.cell`);

  animationWrapper.forEach((el) => {
    if (el.classList.contains(`slide-in-animation`)) {
      el.classList.remove(`slide-in-animation`);
    }
    el.classList.add(`slide-out-animation`);
  });

  await controls.start(`hidden`);
};
