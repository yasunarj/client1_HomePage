import Image from "next/image";
import Container from "../layout/Container";
import { galleries } from "@/app/lib/galleryList";

export default function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">ギャラリー</h2>
        <div className="overflow-x-auto pl-4">
          <div className="flex gap-4 w-max pb-4">
            {galleries.map((src, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-64 rounded-lg"
              >
                <Image
                  src={src}
                  fill
                  className="object-cover"
                  alt="ギャラリー画像"
                  loading="eager"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// export default function GallerySection() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <Container>
//         <h2 className="text-4xl font-bold text-center mb-16">ギャラリー</h2>
//         <div className="flex overflow-x-auto gap-4 pb-4">
//           {galleries.map((src, index) => (
//             <div
//               key={index}
//               className="relative flex-shrink-0 w-64 h-64 rounded-lg"
//             >
//               <Image
//                 src={src}
//                 fill
//                 className="object-cover"
//                 alt="ギャラリー画像"
//               />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }
