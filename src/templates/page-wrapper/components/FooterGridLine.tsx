import { Text } from '../../../components/server/text/Text';
import { Link } from '../../../common/navigation/components/Link';

export function FooterGridLineFirstComponent() {
  return (
    <div className="h-full flex items-end">
      <Link to="/" additionalStyle="text-xl text-white">
        Johann Bms.
      </Link>
    </div>
  );
}

export function FooterGridLineSecondComponent() {
  return (
    <ul className="flex items-end justify-between h-full">
      <li>
        <Link to="/about" additionalStyle="text-xl text-white">
          Á propos
        </Link>
      </li>
      <li>
        <Link to="/legal-notice" additionalStyle="text-xl text-white">
          Mentions Légales
        </Link>
      </li>
    </ul>
  );
}

export function FooterGridLineThirdComponent() {
  return (
    <div className="w-full h-full flex justify-end items-end">
      <Text size="xl">© {new Date().getFullYear()}</Text>
    </div>
  );
}
