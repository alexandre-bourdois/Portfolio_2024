import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Statistics from "@/components/home/statistics";
import Photo from "@/components/home/Photo";
import HomeDescription from "@/components/home/HomeDescription";

export default function HomePage() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className=" px-10 py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md-gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-6xl lg:text-7xl">Alexandre BOURDOIS</h1>
            <div className="w-full h-[170px] md:h-[80px] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <HomeDescription/>
              </div>
            </div>
            <Button className="bg-transparent rounded-full mt-5 mb-4 border border-lightSky/50 
            text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-10">
              Download CV
            </Button>
            <Statistics />
          </div>
        </div>
        {/* photo */}
        <Photo/>
              </Container>
    </div>
  );
}
