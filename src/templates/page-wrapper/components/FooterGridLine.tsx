import { Text } from '../../../components/server/text/Text';
import { Link } from '../../../common/navigation/components/Link';
import { useIntl } from '../../../common/intl/hooks/use-intl';

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
  const { translate } = useIntl();
  return (
    <ul className="flex items-end justify-between h-full">
      <li>
        <Link to="/about" additionalStyle="text-xl text-white">
          {translate(`layout.footer.links.first`)}
        </Link>
      </li>
    </ul>
  );
}

export function FooterGridLineThirdComponent() {
  return (
    <div className="w-full h-full flex items-end">
      <Text size="xl">© {new Date().getFullYear()}</Text>
    </div>
  );
}
