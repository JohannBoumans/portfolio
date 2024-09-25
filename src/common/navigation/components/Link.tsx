'use client';

import {
  forwardRef,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import { default as NextLink } from 'next/link';
import { usePathname } from 'next/navigation';
import { useIntlStore } from '../../intl/hooks/use-intl-store';
import { getHref } from '../utils/get-href';
import { useRouter } from '../hooks/use-router';
import { animatePageIn } from '../../../utils/animation';

type Props = {
  activeStyle?: string;
  children: ReactNode;
  to: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  additionalStyle?: string;
};

export const Link = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const {
    activeStyle = `!text-red`,
    additionalStyle,
    children,
    to,
    target,
    rel,
    onClick,
  } = props;
  const { urlLocale } = useIntlStore();
  const pathname = usePathname();
  const router = useRouter();

  // const { controls } = usePageAnimationStore();

  function getIsActive() {
    if (to === `/`) {
      return pathname === `/${urlLocale}`;
    }
    const href = `/${urlLocale}` + to;
    return pathname.startsWith(href);
  }

  if (to.startsWith(`https://`)) {
    return (
      <a href={to as string} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  function handleAnimatePageIn(to: string) {
    animatePageIn(to, router);
  }

  return (
    <NextLink
      ref={ref}
      href={getHref(urlLocale, to)}
      target={target}
      rel={rel}
      className={clsx(
        `cursor-pointer no-underline transition duration-300 ease-in-out hover:!text-red`,
        additionalStyle,
        getIsActive() ? activeStyle : null,
      )}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        handleAnimatePageIn(to);
      }}
      draggable={false}
      scroll={false}
    >
      {children}
    </NextLink>
  );
});
