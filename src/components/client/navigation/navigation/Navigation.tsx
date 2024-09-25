import { Text } from '../../../server/text/Text';
import { Link } from '../../../../common/navigation/components/Link';

const links = [
  {
    label: `Accueil`,
    path: `/`,
  },
  {
    label: `Qui suis-je`,
    path: `/who-am-i`,
  },
  {
    label: `Compétences`,
    path: `/skills`,
  },
  {
    label: `Services`,
    path: `/services`,
  },
  {
    label: `Contact`,
    path: `/contact`,
  },
];

export function Navigation() {
  return (
    <nav className="bg-white/[.2] shadow-sm rounded-2xl p-4 w-max fixed bottom-10 z-[900]">
      <ul className="flex items-center justify-center gap-4 w-full">
        {links.map((link, key) => (
          <Link key={key} to={link.path}>
            <Text as="li" size="lg" additionalStyle="font-medium text-white">
              {link.label}
            </Text>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
