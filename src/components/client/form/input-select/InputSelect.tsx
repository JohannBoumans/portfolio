// 'use client';
//
// import { forwardRef } from 'react';
// import { isMobile } from 'react-device-detect';
// import { InputSelectDesktop } from './components/InputSelectDesktop';
// import { InputSelectMobile } from './components/InputSelectMobile';
// import { Props } from './types/props';
//
// export const InputSelect = forwardRef<any, Props<any>>((props, ref) => {
//   if (isMobile) {
//     return <InputSelectMobile ref={ref} {...props} />;
//   }
//   return <InputSelectDesktop ref={ref} {...props} />;
// });
