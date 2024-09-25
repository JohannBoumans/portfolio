import { Text } from '../../../components/server/text/Text';
import { TopographySvg } from '../../../components/client/topography-svg/TopographySvg';

export function AboutFifthGridLineFirstComponent() {
  return <TopographySvg additionalStyle="w-[1600px] h-[1600px]" />;
}

export function AboutFifthGridLineSecondComponent() {
  return (
    <div>
      <Text as="h1" size="xl" additionalStyle="font-semibold">
        Développeur web front-end spécialisé en React et TypeScript, je maîtrise
        les outils modernes de développement tels que Git pour la gestion de
        versions et Next.js pour la création d'applications performantes.
        Habitué à travailler en équipe, je collabore efficacement pour
        développer des solutions robustes et innovantes, tout en assurant une
        qualité de code optimale et une expérience utilisateur fluide.
      </Text>
    </div>
  );
}
