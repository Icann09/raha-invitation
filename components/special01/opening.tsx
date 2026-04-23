
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

const groom = "Dillo";
const bride = "Alisyah";
const date = "18 . 02 . 2024";
export default function Opening() {
  return (
    <section  className="min-h-screen flex items-center justify-center bg-neutral-200">

    

      <div className="relative w-full max-w-md h-[100vh] bg-white overflow-hidden shadow-2xl">
        
        {/* Backgrounds */}
        <Image
          src="/images/special01/background.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Top Tress */}
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute top-[-130px] left-0 transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none animate-swinging"
        />
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute top-[-130px] right-[-230px] transform -translate-x-1/2 mix-blend-multiply z-10 pointer-events-none animate-swinging"
        />
        {/* Bottom */}
        {/* Tree 1 */}
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute bottom-[-420px] left-[15px] transform -translate-x-1/2 z-20 pointer-events-none rotate-180 animate-swinging"
        />
        <Image
          src="/images/special01/assets/tree1.webp"
          alt="Tree Top"
          width={250}
          height={250}
          className="absolute bottom-[-420px] right-[-230px] transform -translate-x-1/2 z-20 pointer-events-none rotate-180 animate-swinging"
        />
        {/* Tree 2 */}
        <Image
          src="/images/special01/assets/trees-left.webp"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 left-0 z-20 pointer-events-none animate-fade-right-slow"
        />
        <Image
          src="/images/special01/assets/trees-right.webp"
          alt="Trees"
          width={230}
          height={300}
          className="absolute bottom-0 right-0 z-20 pointer-events-none animate-fade-left-slow"
        />

        {/* Moon */}
        <Image
          src="/images/special01/assets/moon.webp"
          alt="Moon"
          width={200}
          height={200}
          className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 z-10 pointer-events-none animate-fade-down-slow"
        />

        {/* Castle */}
        <Image
          src="/images/special01/assets/castle-crop.webp"
          alt="Castle"
          width={600}
          height={500}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2  z-10 animate-fade-up-slow"
        />

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center text-center absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none animate-fade-in">
          <p className={plusJakartaSans.className + " font-bold text-xs text-special01E"}  >
            THE WEDDING OF
          </p>
          
          <h1 className="text-4xl text-special01B font-[Breathing2] leading-tight py-3">
            {groom} & {bride}
          </h1>
          <p className={plusJakartaSans.className + " font-bold text-xs text-special01E"}  >
            {date}
          </p>
          <div className="">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 640 640"
              className="w-8 h-8 text-invitation mt-10 animate-bounce"
            >
              <path 
                fill="currentColor" 
                d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64zM308.7 451.3L204.7 347.3C200.1 342.7 198.8 335.8 201.2 329.9C203.6 324 209.5 320 216 320L272 320L272 224C272 206.3 286.3 192 304 192L336 192C353.7 192 368 206.3 368 224L368 320L424 320C430.5 320 436.3 323.9 438.8 329.9C441.3 335.9 439.9 342.8 435.3 347.3L331.3 451.3C325.1 457.5 314.9 457.5 308.7 451.3z"
              />
            </svg>
            {/* <Image
              src="/icons/arrow-down.webp"
              alt="Arrow Down"
              width={30}
              height={30}
              className="pointer-events-none rounded-full mt-10 animate-bounce text-white"
            /> */}
          </div>

        </div>
      </div>

    </section>
  );
}

