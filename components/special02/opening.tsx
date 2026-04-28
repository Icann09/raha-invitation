
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "800" });

const groom = "Dillo";
const bride = "Alisyah";
const date = "18 . 02 . 2024";
export default function Opening() {
  return (
    <section  className="min-h-[100dvh] flex items-center justify-center bg-neutral-200">
      <div className="relative w-full max-w-md h-[100dvh] bg-special02B overflow-hidden shadow-2xl">
        
        {/* Backgrounds */}
        <Image
          src="/images/special02/assets/tribal-bg1.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Top flower */}
        <Image
          src="/images/special02/assets/flower-left.webp"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-40px] left-[-100px] z-10 pointer-events-none -scale-y-100 animate-[swingingtree2_25s_ease-in-out_infinite_2s]"
        />
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree Top"
          width={200}
          height={200}
          className="absolute top-[-40px] right-[-90px] z-10 pointer-events-none -scale-y-100 animate-[swingingtree2_25s_ease-in-out_infinite_2s]"
        />

        {/* Flowers */}
        {/* Bottom */}
        <div className="absolute bottom-[-40px] left-[-80px] z-10 pointer-events-none">
          <Image
            src="/images/special02/assets/flower-left.webp"
            alt="Tree Top"
            width={300}
            height={300}
          />
          <Image
            src="/images/special02/assets/flower-yellow.webp"
            alt="Flower"
            width={100}
            height={100}
            className="absolute top-[20px] right-[70px] rotate-45 -scale-x-100"
          />
        </div>
        
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree Top"
          width={300}
          height={300}
          className="absolute bottom-[-40px] right-[-80px] z-10 pointer-events-none"
        />
        <Image
          src="/images/special02/assets/flower-right.webp"
          alt="Tree Top"
          width={300}
          height={300}
          className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 z-0 pointer-events-none rotate-180"
        />
        {/* Side */}
        <Image
          src="/images/special02/assets/flower-left.webp"
          alt="Tree Top"
          width={300}
          height={300}
          className="absolute bottom-[270px] left-[-160px] z-10 pointer-events-none rotate-90 animate-[swingingtree2_25s_ease-in-out_infinite_3s]"
        />
        <div className="absolute bottom-[270px] right-[-160px] z-10 pointer-events-none rotate-[-90deg] animate-[swingingtree2_25s_ease-in-out_infinite_3s]">
          <Image
            src="/images/special02/assets/flower-right.webp"
            alt="Tree Top"
            width={300}
            height={300}
          />
          <Image
            src="/images/special02/assets/flower-yellow.webp"
            alt="Flower"
            width={100}
            height={100}
            className="absolute top-[-20px] left-[100px] rotate-45 -scale-x-100"
          />
        </div>
        

        {/* Tree */}
        <Image
          src="/images/special02/assets/tree.webp"
          alt="Trees"
          width={350}
          height={350}
          className="absolute bottom-0 left-[310px] z-0 pointer-events-none animate-[swingingtree2_25s_ease-in-out_infinite_3s]"
        />
        <Image
          src="/images/special02/assets/tree.webp"
          alt="Trees"
          width={350}
          height={350}
          className="absolute bottom-[100px] left-[310px] z-0 pointer-events-none animate-[swingingtree2_25s_ease-in-out_infinite_3s]"
        />
        <Image
          src="/images/special02/assets/tree.webp"
          alt="Trees"
          width={350}
          height={350}
          className="absolute bottom-0 right-[310px] z-0 pointer-events-none -scale-x-100 animate-[swingingtree2_25s_ease-in-out_infinite_3s]"
        />
        <Image
          src="/images/special02/assets/tree.webp"
          alt="Trees"
          width={350}
          height={350}
          className="absolute bottom-[100px] right-[310px] z-0 pointer-events-none -scale-x-100 animate-[swingingtree2_25s_ease-in-out_infinite_3s]"
        />

        {/* Moon */}
        <Image
          src="/images/special01/assets/moon.webp"
          alt="Moon"
          width={200}
          height={200}
          className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 z-10 pointer-events-none animate-fade-down-slow"
        />
        {/* Tribal */}
        <Image
          src="/images/special02/assets/tribal-3.webp"
          alt="Tribal"
          width={130}
          height={130}
          className="absolute bottom-[170px] left-1/2 transform -translate-x-1/2 z-10 pointer-events-none animate-fade-down-slow"
        />


        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center text-center text-special02C absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none animate-fade-in">
          <p className={plusJakartaSans.className + " font-bold text-xs"}  >
            THE WEDDING OF
          </p>
          
          <h1 className="text-[40px] font-[Breathing2] leading-tight py-3">
            {groom} & {bride}
          </h1>
          <p className={plusJakartaSans.className + " font-bold text-xs"}  >
            {date}
          </p>
          <div className="">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 640 640"
              className="w-8 h-8 text-special02C mt-5 animate-bounce"
            >
              <path 
                fill="currentColor" 
                d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64zM308.7 451.3L204.7 347.3C200.1 342.7 198.8 335.8 201.2 329.9C203.6 324 209.5 320 216 320L272 320L272 224C272 206.3 286.3 192 304 192L336 192C353.7 192 368 206.3 368 224L368 320L424 320C430.5 320 436.3 323.9 438.8 329.9C441.3 335.9 439.9 342.8 435.3 347.3L331.3 451.3C325.1 457.5 314.9 457.5 308.7 451.3z"
              />
            </svg>
          </div>

        </div>
      </div>

    </section>
  );
}

