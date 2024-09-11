import clsx from 'clsx';
import JavascriptSvg from '../../../../public/svg/javascript.svg';
import ReactSvg from '../../../../public/svg/react.svg';
import GitSvg from '../../../../public/svg/git.svg';
import TypescriptSvg from '../../../../public/svg/typescript.svg';
import ArrowUpRight from '../../../../public/svg/arrowUpRight.svg';

export type Icons =
  | `react`
  | `javascript`
  | `git`
  | `typescript`
  | `arrow-up-right`;

type IconSizes = `sm` | `md` | `lg`;

type Props = {
  additionalStyle?: string;
  icon?: Icons;
  size?: IconSizes;
};

export function Icon(props: Props) {
  const { additionalStyle, icon = `javascript`, size = `md` } = props;
  const Icon = mapSvgToIcon(icon);
  return (
    <div className={clsx(``, mapSizeToClassName(size), additionalStyle)}>
      {Icon}
    </div>
  );
}

function mapSvgToIcon(icon: Icons) {
  switch (icon) {
    case `javascript`:
      return <JavascriptSvg />;
    case `react`:
      return <ReactSvg />;
    case `git`:
      return <GitSvg />;
    case `typescript`:
      return <TypescriptSvg />;
    case `arrow-up-right`:
      return <ArrowUpRight />;
    default:
      return <GitSvg />;
  }
}

function mapSizeToClassName(size: IconSizes) {
  if (size === `sm`) {
    return `w-[16px] h-[16px]`;
  }
  if (size === `md`) {
    return `w-[24px] h-[24px]`;
  }
  if (size === `lg`) {
    return `w-[32px] h-[32px]`;
  }
  return `w-[24px] h-[24px]`;
}
