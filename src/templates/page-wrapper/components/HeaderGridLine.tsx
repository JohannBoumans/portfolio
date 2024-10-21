import { Link } from '../../../common/navigation/components/Link';
import { LocaleSwitcher } from '../../../components/client/locale-switcher/LocaleSwitcher';

export function HeaderGridLineFirstComponent() {
  return (
    <Link to="/" additionalStyle="text-xl text-white">
      Johann Bms.
    </Link>
  );
}

export function HeaderGridLineThirdComponent() {
  return (
    <div className="flex justify-between items-center">
      <LocaleSwitcher />
      {/*<ThemeSwitcher />*/}
    </div>
  );
}
