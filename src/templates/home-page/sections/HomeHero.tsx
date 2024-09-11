import { Text } from '../../../components/server/text/Text';

export function HomeHero() {
  return (
    <div className="w-full flex items-center container pt-20">
      <div>
        <div className="rounded-lg bg-[#F1AB86] flex items-center justify-center py-1 px-2 mb-2 max-w-max">
          <Text>🙋‍ Hello ! I’m Johann</Text>
        </div>
        <div className="p-2 rounded-lg">
          <Text
            size="6xl"
            additionalStyle="font-semibold outlined-text leading-tight"
          >
            A Frontend Developer.
          </Text>
          <Text
            size="6xl"
            additionalStyle="font-semibold outlined-text leading-tight"
          >
            I Help Startups Or Particular{` `}
          </Text>
          <Text
            size="6xl"
            additionalStyle="font-semibold outlined-text leading-tight"
          >
            Launch And Grow{` `}
          </Text>
          <Text
            size="6xl"
            additionalStyle="font-semibold outlined-text leading-tight"
          >
            Their Products
          </Text>
        </div>
      </div>
      <div></div>
    </div>
  );
}
