import { PropsWithChildren, Suspense } from 'react';

export const runtime = `edge`;

// export const revalidate = 3600;

export default function Layout(props: PropsWithChildren) {
  const { children } = props;
  return <Suspense>{children}</Suspense>;
}
