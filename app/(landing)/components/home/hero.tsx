import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero=section" className="container mx-auto h-screen flex">
      <div className="relative self-center flex">
        <Image className="grayscale absolute -left-20 -top-1/2 translate-y-1/2" src="/images/img-basketball.svg" width={432} height={423} alt="image sporton" />
        <div className="relative ml-40 w-full">
          <div className="text-primary italic">Friday Sale, 50%</div>
          <h1 className="font-extrabold text-[100px] italic bg-gradient-to-b leading-tight from-black to-[979797D1] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose">Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.</p>
          <div className="flex gap-5 mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video <Image src="/images/icon-play-video.svg" alt="icon playvideo" width={29} height={29} />
            </Button>
          </div>
        </div>
        <Image className="absolute -right-15 -top-20" src="/images/img-hero.svg" width={624} height={690} alt="image sporton hero" />
      </div>
      <Image className="absolute -right-50 top-1/2 -translate-y-1/2" src="/images/img-ornament-hero.svg" width={413} height={413} alt="image sporton" />
    </section>
  );
};

export default HeroSection;
