import clsx from 'clsx';
import JavascriptSvg from '../../../../public/svg/javascript.svg';
import ReactSvg from '../../../../public/svg/react.svg';
import GitSvg from '../../../../public/svg/git.svg';
import TypescriptSvg from '../../../../public/svg/typescript.svg';
import ArrowUpRight from '../../../../public/svg/arrowUpRight.svg';
import ArrowRight from '../../../../public/svg/arrow-right-solid.svg';
import ChevronRight from '../../../../public/svg/chevron-right.svg';
import ChevronLeft from '../../../../public/svg/chevron-left.svg';
import Eye from '../../../../public/svg/eye-solid.svg';
import UserTie from '../../../../public/svg/user-tie-solid.svg';
import Gears from '../../../../public/svg/gears-solid.svg';
import GaugeHigh from '../../../../public/svg/gauge-high-solid.svg';
import Mobile from '../../../../public/svg/mobile-solid.svg';
import Mirror from '../../../../public/svg/mirror-solid.svg';
import Ruler from '../../../../public/svg/ruler-solid.svg';
import Calendar from '../../../../public/svg/calendar-days-solid.svg';
import List from '../../../../public/svg/list-solid.svg';
import Shield from '../../../../public/svg/shield-solid.svg';
import Chart from '../../../../public/svg/chart-simple-solid.svg';
import Globe from '../../../../public/svg/globe-solid.svg';
import Layer from '../../../../public/svg/layer-group-solid.svg';
import Code from '../../../../public/svg/code-solid.svg';
import Time from '../../../../public/svg/time-svgrepo-com.svg';
import Realtime from '../../../../public/svg/clock-realtime.svg';
import GraphicUp from '../../../../public/svg/graphic-up.svg';
import Upgrade from '../../../../public/svg/upgrade.svg';
import Xmark from '../../../../public/svg/xmark-solid.svg';
import CheckCircle from '../../../../public/svg/circle-check-regular.svg';
import TriangleExclamation from '../../../../public/svg/triangle-exclamation-solid.svg';

import { Sizes } from './_/types';

export type Icons =
  | `react`
  | `javascript`
  | `git`
  | `typescript`
  | `arrow-up-right`
  | `arrow-right`
  | `chevron-right`
  | `chevron-left`
  | `eye`
  | `user-tie`
  | `gears`
  | `gauge-high`
  | `mobile`
  | `mirror`
  | `ruler`
  | `calendar`
  | `list`
  | `shield`
  | `chart`
  | `globe`
  | `layer`
  | `code`
  | `time`
  | `realtime`
  | `graphic-up`
  | `upgrade`
  | `check-circle`
  | `xmark`
  | `triangle-exclamation`;

type Props = {
  additionalStyle?: string;
  icon?: Icons;
  size?: Sizes;
  color?: string;
};

export function Icon(props: Props) {
  const {
    additionalStyle,
    color = `#FFF`,
    icon = `javascript`,
    size = `md`,
  } = props;
  const Icon = mapSvgToIcon(icon);
  return (
    <div
      className={clsx(
        `flex items-center justify-center`,
        mapColorToFill(color),
        mapSizeToClassName(size),
        additionalStyle,
      )}
    >
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
    case `chevron-right`:
      return <ChevronRight />;
    case `chevron-left`:
      return <ChevronLeft />;
    case `eye`:
      return <Eye />;
    case `user-tie`:
      return <UserTie />;
    case `gears`:
      return <Gears />;
    case `gauge-high`:
      return <GaugeHigh />;
    case `mobile`:
      return <Mobile />;
    case `mirror`:
      return <Mirror />;
    case `ruler`:
      return <Ruler />;
    case `calendar`:
      return <Calendar />;
    case `list`:
      return <List />;
    case `shield`:
      return <Shield />;
    case `chart`:
      return <Chart />;
    case `globe`:
      return <Globe />;
    case `layer`:
      return <Layer />;
    case `code`:
      return <Code />;
    case `time`:
      return <Time />;
    case `realtime`:
      return <Realtime />;
    case `graphic-up`:
      return <GraphicUp />;
    case `upgrade`:
      return <Upgrade />;
    case `arrow-right`:
      return <ArrowRight />;
    case `check-circle`:
      return <CheckCircle />;
    case `triangle-exclamation`:
      return <TriangleExclamation />;
    case `xmark`:
      return <Xmark />;
    default:
      return <GitSvg />;
  }
}

function mapSizeToClassName(size: Sizes) {
  if (size === `2xs`) {
    return `w-[8px] h-[8px]`;
  }
  if (size === `xs`) {
    return `w-[12px] h-[12px]`;
  }
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

function mapColorToFill(color?: string) {
  if (!color) return `[&>svg]:fill-white`;
  return `[&>svg]:fill-[${color}]`;
}
