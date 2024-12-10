import Container from "@/components/container";
import LocaleSwitcher from "@/components/settings/LocaleSwitcher";

export default function HomePage() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="">
        Portfolio
        <LocaleSwitcher />

      </Container>
      {/* Main content
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-16">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div> */}

      {/* Language switcher */}
    </div>
  );
}
