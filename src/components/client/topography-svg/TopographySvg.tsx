import clsx from 'clsx';
import Topography from '../../../../public/svg/topography.svg';
import Topography2 from '../../../../public/svg/topography-2.svg';

type Variant = `one` | `two`;

type Props = {
  additionalStyle?: string;
  variant?: Variant;
};

export function TopographySvg(props: Props) {
  const { additionalStyle, variant = `two` } = props;
  const Component = mapVariantToSvg(variant);
  return (
    <div
      className={clsx(
        `absolute w-screen h-screen overflow-hidden`,
        additionalStyle,
      )}
    >
      {Component}
    </div>
  );
}

function mapVariantToSvg(variant: Variant) {
  switch (variant) {
    case `one`:
      return <Topography />;
    case `two`:
      return <Topography2 />;
    default:
      return <Topography2 />;
  }
}
