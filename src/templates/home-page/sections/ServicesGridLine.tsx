import { Text } from '../../../components/server/text/Text';
import { Button } from '../../../components/server/button/Button';
import { Link } from '../../../common/navigation/components/Link';

export function ServicesGridLineFirstComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        Création de sites vitrines
      </Text>
      <Text as="p" size="lg" additionalStyle="mb-4">
        Développement de sites modernes et professionnels pour présenter votre
        activité, avec un design personnalisé et optimisé pour la visibilité en
        ligne.
      </Text>
      <Link to="/services/showcase-website">
        <Button rightIcon="arrow-up-right">En savoir plus</Button>
      </Link>
    </div>
  );
}

export function ServicesGridLineSecondComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        Création de sites e-commerce
      </Text>
      <Text as="p" size="lg" additionalStyle="mb-4">
        Conception de boutiques en ligne performantes et sécurisées, avec
        gestion des produits, des commandes et intégration des solutions de
        paiement.
      </Text>
      <Link to="/services/e-commerce">
        <Button rightIcon="arrow-up-right">En savoir plus</Button>
      </Link>
      {/*<ul className="list-disc list-inside">*/}
      {/*  {normalWebsiteFeatures.map((feature, key) => (*/}
      {/*    <Text as="li" key={key} size="lg" additionalStyle="list-item mb-2">*/}
      {/*      {feature}*/}
      {/*    </Text>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
}

export function ServicesGridLineThirdComponent() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        additionalStyle="font-bold mb-2"
        colorScheme="red"
      >
        Développement d'applications web
      </Text>
      <Text as="p" size="lg" additionalStyle="mb-4">
        Création d'applications web sur mesure, performantes et adaptées à vos
        besoins spécifiques. Intégration de fonctionnalités personnalisées pour
        la gestion des utilisateurs, des données et des interactions.
      </Text>
      <Link to="/services/webapp">
        <Button rightIcon="arrow-up-right">En savoir plus</Button>
      </Link>
      {/*<ul className="list-disc list-inside">*/}
      {/*  {ecommerceFeatures.map((feature, key) => (*/}
      {/*    <Text as="li" key={key} size="lg" additionalStyle="list-item mb-2">*/}
      {/*      {feature}*/}
      {/*    </Text>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
}

const normalWebsiteFeatures = [
  `Développement de sites modernes, responsive et optimisés pour présenter votre activité de manière professionnelle.`,
  `Mise en place d'une interface intuitive et d'un design sur mesure pour refléter l'image de votre entreprise.`,
  `Intégration d'un backoffice pour la gestion de votre contenu de manière indépendante et flexible`,
  `Optimisation SEO pour améliorer votre visibilité sur les moteurs de recherche.`,
];

const ecommerceFeatures = [
  `Développement de boutiques en ligne performantes et sécurisées pour vendre vos produits.`,
  `Intégration d'une solution de paiement en ligne (Stripe, PayPal, etc.).`,
  `Mise en place de systèmes de gestion des stocks, commandes et clients.`,
  `Optimisation pour un parcours utilisateur fluide, adapté aux mobiles et aux différents navigateurs.`,
];
