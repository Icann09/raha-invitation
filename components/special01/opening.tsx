
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });


export default function Opening() {
  return (
    <section  className="min-h-screen flex items-center justify-center bg-neutral-200">

    

      <div className="relative w-full max-w-md h-[100vh] bg-white overflow-hidden shadow-2xl">
        
        {/* Backgrounds */}
        <Image
          src="/images/special01/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Top Tress */}
        <Image
          src="/images/special01/assets/tree1.png"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute top-[-130px] left-0 transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none animate-swinging"
        />
        <Image
          src="/images/special01/assets/tree1.png"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute top-[-130px] right-[-230px] transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none animate-swinging"
        />
        {/* Bottom */}
        {/* Tree 1 */}
        <Image
          src="/images/special01/assets/tree1.png"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute bottom-[-420px] left-[15px] transform -translate-x-1/2 z-20 pointer-events-none rotate-180 animate-swinging"
        />
        <Image
          src="/images/special01/assets/tree1.png"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute bottom-[-420px] right-[-230px] transform -translate-x-1/2 z-20 pointer-events-none rotate-180 animate-swinging"
        />
        {/* Tree 2 */}
        <Image
          src="/images/special01/assets/trees-left.png"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 left-0 z-20 pointer-events-none animate-fade-right"
        />
        <Image
          src="/images/special01/assets/trees-right.png"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 right-0 z-20 pointer-events-none animate-fade-left"
        />

        {/* Moon */}
        <Image
          src="/images/special01/assets/moon.png"
          alt="Moon"
          width={200}
          height={200}
          className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 z-10 pointer-events-none animate-fade-down"
        />

        {/* Castle */}
        <Image
          src="/images/special01/assets/castle-crop.png"
          alt="Castle"
          width={600}
          height={500}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2  z-10 animate-fade-left"
        />

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none animate-fade-in">
          <p className={plusJakartaSans.className + " font-bold text-xs text-invitation"}  >
            THE WEDDING OF
          </p>
          
          <h1 className="text-4xl text-colorName font-[Breathing2] leading-tight py-3">
            Dillo & Alisyah
          </h1>
          <p className={plusJakartaSans.className + " font-bold text-xs text-invitation"}  >
            18 . 02 . 2024
          </p>
          <div className="">
            <Image
              src="/icons/arrow-down.png"
              alt="Arrow Down"
              width={30}
              height={30}
              className="pointer-events-none rounded-full mt-10 animate-bounce text-white"
            />
          </div>

        </div>
      </div>

    </section>
  );
}

