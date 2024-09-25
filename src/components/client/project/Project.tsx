import { ImageType } from '../image/_/types';
import { Link } from '../../../common/navigation/components/Link';
import { Image } from '../image/Image';
import { Text } from '../../server/text/Text';
import { Badge } from '../../server/badge/Badge';

export type Props = {
  title: string;
  year: string;
  image: ImageType;
  path: string;
};

export function Project(props: Props) {
  const { title, image, path, year } = props;
  return (
    <Link to={path}>
      <div className="mb-10 max-h-[400px] overflow-hidden relative rounded-lg group">
        <div className="flex items-center justify-between z-0 overflow-hidden">
          <div className="flex items-center justify-end gap-2 absolute top-4 right-4">
            <Badge additionalStyle="z-[100] !rounded-full !p-2 !px-4 bg-black/[0.4] backdrop-blur-lg">
              <Text size="lg" additionalStyle="font-bold" colorScheme="default">
                {title}
              </Text>
            </Badge>
            <Badge
              gradient="yellow"
              additionalStyle="z-[100] !rounded-full !p-2 !px-4 bg-black/[0.4] backdrop-blur-lg"
            >
              <Text size="lg" additionalStyle="!font-bold !text-black">
                {year}
              </Text>
            </Badge>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={600}
            additionalStyle="w-full h-auto transform transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            className="absolute top-0 left-0 z-10 w-full h-full"
            style={{
              background: `linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 97%)`,
            }}
          />
          {/*<Image*/}
          {/*  src={image.src}*/}
          {/*  alt={image.alt}*/}
          {/*  width={1000}*/}
          {/*  height={1000}*/}
          {/*  additionalStyle="w-full h-auto transform transition-transform duration-500 ease-out group-hover:scale-105"*/}
          {/*/>*/}
        </div>
      </div>
    </Link>
  );
}

// import { ImageType } from '../image/_/types';
// import { Badge } from '../../server/badge/Badge';
// import { Text } from '../../server/text/Text';
// import { Link } from '../../../common/navigation/components/Link';
// import { Image } from '../image/Image';
//
// export type Props = {
//   title: string;
//   image: ImageType;
//   path: string;
// };
//
// export function Project(props: Props) {
//   const { title, image, path } = props;
//   return (
//     <Link to={path}>
//       <div className="mb-10 min-h-[300px] overflow-hidden relative rounded-lg p-4 group">
//         <Badge additionalStyle="absolute top-4 right-4 z-[100] !rounded-full !p-2 !px-4 bg-black/[0.4] backdrop-blur-lg">
//           <Text size="lg" additionalStyle="font-bold" colorScheme="default">
//             {title}
//           </Text>
//         </Badge>
//         <div className="flex items-center justify-between z-0">
//           <div
//             //transform transition-transform duration-500 ease-out group-hover:scale-105
//             className="overflow-hidden absolute z-0 -top-0 left-0 w-full h-full"
//             // style={{
//             //   backgroundImage: `url(${image.src})`,
//             //   backgroundRepeat: `no-repeat`,
//             //   backgroundPosition: `center center`,
//             //   backgroundSize: `cover`,
//             // }}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={1000}
//               height={600}
//               additionalStyle="w-full h-auto transform transition-transform duration-500 ease-out group-hover:scale-105"
//             />
//             {/*<Image*/}
//             {/*  src={image.src}*/}
//             {/*  alt={image.alt}*/}
//             {/*  width={1000}*/}
//             {/*  height={1000}*/}
//             {/*  additionalStyle="w-full h-auto transform transition-transform duration-500 ease-out group-hover:scale-105"*/}
//             {/*/>*/}
//           </div>
//         </div>
//         <div
//           className="absolute top-0 left-0 z-10 w-full h-full"
//           style={{
//             background: `linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 97%)`,
//           }}
//         />
//       </div>
//     </Link>
//   );
// }
