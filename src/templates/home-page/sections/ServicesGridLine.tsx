import { Text } from '../../../components/server/text/Text';
import { Button } from '../../../components/server/button/Button';
import { Link } from '../../../common/navigation/components/Link';
import { Language } from '../../../common/navigation/types/config';
import { getIntl } from '../../../common/intl/utils/get-intl';

type Props = {
  language: Language;
};

export async function ServicesGridLineFirstComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        {translate(`home_page.services.showcase-website.heading`)}
      </Text>
      <Text as="p" size="lg" additionalStyle="mb-4">
        {translate(`home_page.services.showcase-website.text`)}
      </Text>
      <Link to="/service/showcase-website">
        <Button rightIcon="arrow-right">
          {translate(`home_page.services.button`)}
        </Button>
      </Link>
    </div>
  );
}

export async function ServicesGridLineSecondComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        {translate(`home_page.services.e-commerce.heading`)}
      </Text>
      <Text as="p" size="lg" additionalStyle="mb-4">
        {translate(`home_page.services.e-commerce.text`)}
      </Text>
      <Link to="/service/e-commerce">
        <Button rightIcon="arrow-right">
          {translate(`home_page.services.button`)}
        </Button>
      </Link>
    </div>
  );
}

export async function ServicesGridLineThirdComponent(props: Props) {
  const { language } = props;
  const { translate } = await getIntl(language);
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        {translate(`home_page.services.webapp.heading`)}
      </Text>
      <Text as="p" size="lg" additionalStyle="mb-4">
        {translate(`home_page.services.webapp.text`)}
      </Text>
      <Link to="/service/webapp">
        <Button rightIcon="arrow-right">
          {translate(`home_page.services.button`)}
        </Button>
      </Link>
    </div>
  );
}

// const normalWebsiteFeatures = [
//   `Développement de sites modernes, responsive et optimisés pour présenter votre activité de manière professionnelle.`,
//   `Mise en place d'une interface intuitive et d'un design sur mesure pour refléter l'image de votre entreprise.`,
//   `Intégration d'un backoffice pour la gestion de votre contenu de manière indépendante et flexible`,
//   `Optimisation SEO pour améliorer votre visibilité sur les moteurs de recherche.`,
// ];
//
// const ecommerceFeatures = [
//   `Développement de boutiques en ligne performantes et sécurisées pour vendre vos produits.`,
//   `Intégration d'une solution de paiement en ligne (Stripe, PayPal, etc.).`,
//   `Mise en place de systèmes de gestion des stocks, commandes et clients.`,
//   `Optimisation pour un parcours utilisateur fluide, adapté aux mobiles et aux différents navigateurs.`,
// ];
