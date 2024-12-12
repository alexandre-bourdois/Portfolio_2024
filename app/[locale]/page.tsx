import Container from "@/components/container";
import LocaleSwitcher from "@/components/settings/LocaleSwitcher";

export default function HomePage() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className=" px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              Software Engineer
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2 text-white">Hello I&apos;m</h2>
            <h1 className="text-lightSky text-5xl md:text-7xl">Alexandre BOURDOIS</h1>
            <p className="w-auto md:max-w-[500px] text-white/50 font-thin leading-6">I'm 23 years old french Software Engineer. 
              I'm also a versatile person, very comfortable as a Hardware Engineer. Open to work</p>
          </div>
        </div>
        {/* photo */}
        <div>photo</div>
      </Container>
    </div>
  );
}
