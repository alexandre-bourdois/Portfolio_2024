import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Statistics from "@/components/home/statistics";
import Photo from "@/components/home/Photo";
import HomeDescription from "@/components/home/HomeDescription";

// Import des traductions
import { useLocale, useTranslations } from 'next-intl';
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("Home");
  const locale = useLocale();

  const filePath = locale === 'en' ? 'resume/resume.pdf' : 'resume/cv.pdf';

  return (
    <div className="bg-bodyColor text-white/80">
      <Container className=" py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex-1 order-2 md:order-1 flex-col items-center md:items-start gap-5 text-center md:text-start">
          <div>
            <h3 className="font-semibold tracking-wider mb-1">
              {t("SoftwareEngineer")}
            </h3>
            <h2 className="text-3xl md:text-4xl mb-2 text-white">
              {t("Hello")}
            </h2>
            <h1 className="text-lightSky text-5xl md:text-6xl lg:text-7xl">
              {t("Name")}
            </h1>
            <div className="w-full h-[140px] lg:h-[85px] md:h-[125px] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <HomeDescription />
              </div>
            </div>
            <Link
              href={filePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-transparent rounded-full mt-5 mb-4 border border-lightSky/50 
                  text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-10"
              >
                {t("DownloadCV")}
              </Button>
            </Link>
            <Statistics />
          </div>
        </div>
        {/* photo */}
        <div className="flex-1 order-1 md:order-2">
           <Photo />
        </div>
      </Container>
    </div>
  );
}
