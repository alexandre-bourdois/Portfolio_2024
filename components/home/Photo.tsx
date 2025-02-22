"use client";
import profile from "@/public/home/profile.webp";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const circleColors = ["#FFA800", "#B36500", "#804300"];
  const circleVariants = {
    initial: {
      strokeDasharray: "24 10 0 0",
      rotate: 0,
      opacity: 0,
    },
    animate: (index: number) => ({
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      opacity: 1,
      transition: {
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        rotate: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: {
          duration: 0.4,
          delay: 1 + index * 0.2,
          ease: "easeIn",
        },
      },
    }),
  };
  return (
    <div className=" w-full h-full flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.1, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div
            className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] mix-blend-lighten
                overflow-auto rounded-full"
          >
            <Image
              src={profile}
              alt="Alexandre BOURDOIS"
              width={350}
              height={350}
              quality={100}
              className="object-contain w-full h-full "
              priority
            />
          </div>
        </motion.div>
        <svg
          className="w-[400px] lg:w-[490px] h-[370px] lg:h-[430px]"
          viewBox="0 0 506 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {circleColors.map((color, index) => (
            <motion.circle
              key={index}
              cx="253"
              cy="253"
              r={240 - index * 15}
              stroke={color}
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={circleVariants}
              initial="initial"
              animate="animate"
              custom={index}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default Photo;
