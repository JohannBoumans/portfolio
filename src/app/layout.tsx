import { PropsWithChildren } from 'react';
import { Viewport } from 'next';
import clsx from 'clsx';
import localFont from 'next/font/local';
import { mapUrlLocaleToLocale } from '../common/intl/utils/map-url-locale-to-locale';
import { mapLocaleToLanguage } from '../common/intl/utils/map-locale-to-language';
import { RootLayout } from '../components/server/root-layout/RootLayout';
import './globals.css';
import { PageProps } from '../common/navigation/types/page';
import { availableLocale } from '../common/navigation/types/config';
import { Providers } from './providers';

// initLogging();

// export const metadata: Metadata = {
//   title: `Next.js`,
//   description: `Generated by Next.js`,
// };

export const viewport: Viewport = {
  width: `device-width`,
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateStaticParams() {
  return availableLocale.map((locale) => ({ locale: locale.toLowerCase() }));
}

type Props = PropsWithChildren & PageProps;

const averta = localFont({
  src: [
    {
      //eslint-disable-next-line
            path: '../style/fonts/AvertaDemo-Regular.otf',
      // path: '../../../public/fonts/AvertaDemo-Regular.otf',
      //eslint-disable-next-line
            weight: '400',
    },
    // {
    //   //eslint-disable-next-line
    //         path: '../../style/fonts/AvertaDemo-Regular.otf',
    //   // path: '../../../public/fonts/AvertaDemo-Regular.otf',
    //   //eslint-disable-next-line
    //         weight: '400',
    // },
    // {
    //   //eslint-disable-next-line
    //         path: '../../style/fonts/AvertaDemo-ExtraBold.otf',
    //   //eslint-disable-next-line
    //         weight: '900',
    // },
  ],
  //eslint-disable-next-line
    display: 'swap',
  //eslint-disable-next-line
    preload: false,
  //eslint-disable-next-line
    variable: '--font-body',
});

// const formula = localFont({
//   src: [
//     {
//       //eslint-disable-next-line
//             path: '../../style/fonts/FormulaCondensed-Bold.otf',
//       //eslint-disable-next-line
//             weight: '800',
//     },
//   ],
//   //eslint-disable-next-line
//     display: 'swap',
//   //eslint-disable-next-line
//     preload: false,
//   //eslint-disable-next-line
//     variable: '--font-heading',
// });

const helperClassName = `border-8 border-solid border-[red] sm:border-[pink] md:border-[orange] lg:border-[blue] xl:border-[green]`;

export default function Layout(props: Props) {
  const { children, params } = props;
  const { locale: urlLocale } = params;
  const locale = mapUrlLocaleToLocale(urlLocale);
  const language = mapLocaleToLanguage(locale);
  return (
    <Providers>
      <html
        lang={language}
        style={{ scrollBehavior: `smooth`, scrollPaddingTop: 0 }}
        suppressHydrationWarning
      >
        <body
          className={clsx(
            // getFontClassName(headingFont, bodyFont),
            averta.variable,
            // formula.variable,
            `min-w-[320px] !p-0`,
            // process.env.NODE_ENV === `development` ? helperClassName : null,
          )}
        >
          <RootLayout language={language} {...props}>
            {children}
          </RootLayout>
        </body>
      </html>
    </Providers>
  );
}
