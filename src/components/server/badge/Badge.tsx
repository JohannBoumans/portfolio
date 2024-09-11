import { ReactNode } from 'react';
import clsx from 'clsx';
import { Icon, Icons } from '../icon/Icon';

type Gradients =
  | `green`
  | `yellow`
  | `purple`
  | `blue`
  | `skyblue`
  | `red`
  | `orange`;

type Props = {
  additionalStyle?: string;
  children?: ReactNode;
  icon?: Icons;
  gradient?: Gradients;
};

export function Badge(props: Props) {
  const { additionalStyle, children, gradient, icon } = props;
  return (
    <div
      className={clsx(`rounded-xl max-w-max p-4`, additionalStyle)}
      style={{ background: mapGradientPropToStyle(gradient) }}
    >
      {children}
      {icon && <Icon size="lg" icon={icon} />}
    </div>
  );
}

function mapGradientPropToStyle(gradient?: string) {
  if (gradient === `green`) {
    return `linear-gradient(135deg, #A8E6CF, #FFD3B5)`;
  }
  if (gradient === `yellow`) {
    // return `linear-gradient(135deg, #FFD700, #FFF)`;
    return `linear-gradient(135deg, rgba(255,215,0,1) 0%, rgba(255,245,189,1) 100%)`;
  }
  if (gradient === `purple`) {
    return `linear-gradient(135deg, #B39DDB, #64B5F6)`;
  }
  if (gradient === `blue`) {
    return `linear-gradient(135deg, rgba(49,120,198,1) 0%, rgba(151,201,255,1) 100%)`;
  }
  if (gradient === `skyblue`) {
    return `linear-gradient(135deg, rgba(0,216,255,1) 0%, rgba(209,248,255,1) 100%)`;
  }
  if (gradient === `red`) {
    return `linear-gradient(135deg, #FF512F, #DD2476)`;
  }
  if (gradient === `orange`) {
    return `linear-gradient(135deg, rgba(255,87,51,1) 0%, rgba(255,174,157,1) 100%)`;
  }
  return ``;
}
