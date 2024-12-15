"use client"

import { useMemo } from 'react';
import CountUp from 'react-countup';
const Statistics = () => {
  const startDate = new Date('2021-09-13');

  const experienceYears = useMemo(() => {
    const now = new Date();
    const years = now.getFullYear() - startDate.getFullYear();
    const isBeforeAnniversary =
      now.getMonth() < startDate.getMonth() ||
      (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate());

    return isBeforeAnniversary ? years - 1 : years;
  }, []);

  return (
    <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5">
        <div className='flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center
        lg:justify-start'>
            <CountUp duration={5} className='text-4xl lg:text-6xl font-extrabold text-white ' end={experienceYears}></CountUp>
            <p className='leading-snug text-sm'>Années d'expérience</p>
        </div>
        <div className='flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center
        lg:justify-start'>
            <CountUp duration={5} className='text-4xl lg:text-6xl font-extrabold text-white 'end={400}></CountUp>
            <p className='leading-snug text-sm'>Commits en 2024</p>
        </div>
        <div className='flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center
        lg:justify-start'>
            <CountUp duration={5} className='text-4xl lg:text-6xl font-extrabold text-white ' end={4}></CountUp>
            <p className='leading-snug text-sm'>Projets créés en 2024</p>
        </div>
    </div>
  );
};

export default Statistics;
