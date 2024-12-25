"use client"
import { useEffect, useMemo, useState } from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

const Statistics = () => {
  const t = useTranslations("Home");
  const startDate = new Date("2021-09-13");
  const [visitorCount, setVisitorCount] = useState(0);

  const experienceYears = useMemo(() => {
    const now = new Date();
    const years = now.getFullYear() - startDate.getFullYear();
    const isBeforeAnniversary =
      now.getMonth() < startDate.getMonth() ||
      (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate());

    return isBeforeAnniversary ? years - 1 : years;
  }, []);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const res = await fetch('/api/analytics', {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch analytics data');
        }

        const data = await res.json();

        const totalSessions = data?.data?.reduce((acc:any, curr:any) => acc + Number(curr.sessions), 0) || 0;

        setVisitorCount(totalSessions);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchAnalyticsData();
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5">
      <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start">
        <CountUp
          duration={7}
          className="text-4xl lg:text-6xl font-extrabold text-white"
          end={experienceYears}
        />
        <p className="leading-snug text-sm">{t("ExperienceYears")}</p>
      </div>
      <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start">
        <CountUp
          duration={7}
          className="text-4xl lg:text-6xl font-extrabold text-white"
          end={400}
        />
        <p className="leading-snug text-sm">{t("Commits2024")}</p>
      </div>
      <div className="flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start">
        <CountUp
          duration={7}
          className="text-4xl lg:text-6xl font-extrabold text-white"
          end={visitorCount}
        />
        <p className="leading-snug text-sm md:text-xs">{t("VisitorsThisMonth")}</p>
      </div>
    </div>
  );
};

export default Statistics;
