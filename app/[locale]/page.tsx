import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Statistics from "@/components/home/statistics";
import Photo from "@/components/home/Photo";

export default function HomePage() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className=" px-5 py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md-gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl">Alexandre BOURDOIS</h1>
            <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">I'm 23 years old french Software Engineer. 
              I'm also a versatile person, very comfortable as a Hardware Engineer. Open to work
            </p>
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
