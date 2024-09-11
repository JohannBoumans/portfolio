import { ReactNode } from 'react';
import { Locale } from '../../../common/navigation/types/config';
import { ToastProvider } from '../../../common/toast/components/ToastProvider';
import { PageAnimationProvider } from '../../../context/page-animation/components/PageAnimationProvider';

type Props = {
  children: ReactNode;
  locale: Locale;
};

export default function Providers(props: Props) {
  const { children, locale } = props;
  return (
    // <IntlProvider defaultLocale={locale}>
    <PageAnimationProvider>
      <ToastProvider>{children}</ToastProvider>
    </PageAnimationProvider>
    // </IntlProvider>
  );
}
