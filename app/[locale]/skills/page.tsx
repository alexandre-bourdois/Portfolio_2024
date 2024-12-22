"use client";

import Container from "@/components/container";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircuitBoard, Code, LayoutTemplate } from "lucide-react";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, any> = {
  software: Code,
  hardware: CircuitBoard,
  web: LayoutTemplate,
};

const SkillsPage = () => {
  const locale = useLocale(); // Get the current locale
  const [skillsContent, setSkillsContent] = useState<any>(null); // State to hold localized content

  useEffect(() => {
    // Dynamically import the JSON file based on the locale
    import(`@/messages/${locale}.json`)
      .then((module) => setSkillsContent(module.default.skills))
      .catch((error) => console.error("Error loading locale file:", error));
  }, [locale]);

  // While the content is loading, display a fallback
  if (!skillsContent) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lightSky">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Container>
          <Tabs defaultValue="software" className="w-full flex flex-col items-center justify-center gap- md:gap-5">
            {/* Tabs Menu */}
            <TabsList className="flex flex-wrap items-center justify-center h-full bg-transparent w-full md:flex-nowrap gap-4">
              {Object.keys(skillsContent.tabMenu).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="bg-white/10 flex-grow sm:flex-grow-0 md:w-full py-3 px-4 text-white text-center data-[state=active]:bg-hoverColor 
                    hover:bg-lightSky/40 text-xs sm:text-sm rounded-lg"
                >
                  <div className="flex flex-col items-center gap-1">
                    {React.createElement(iconMap[key], { className: "w-4 h-4 md:h-6 md:w-6" })}
                    <span className="leading-tight break-words">{skillsContent.tabMenu[key]}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content */}
            <div className="w-full">
              {/* Software Tab */}
              <TabsContent value="software">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {skillsContent.software.items.map((item: any, index: number) => (
                    <Link
                      key={index}
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center justify-center rounded-lg border border-lightSky p-6 hover:bg-lightSky/10 transition cursor-pointer"
                    >
                      <motion.div 
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="w-20 h-20 flex items-center justify-center mb-4">
                        <Image
                          className="object-contain rounded-sm"
                          src={item?.logo}
                          width={80}
                          height={80}
                          alt={`${item?.name} Logo`}
                        />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-center">{item?.name}</h3>
                    </Link>
                  ))}
                </motion.div>
              </TabsContent>

              {/* Hardware Tab */}
              <TabsContent value="hardware">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {skillsContent.hardware.items.map((item: any, index: number) => (
                    <Link
                      key={index}
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center justify-center rounded-lg border border-lightSky p-6 hover:bg-lightSky/10 transition cursor-pointer"
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="w-20 h-20 flex items-center justify-center mb-4">
                        <Image
                          className="object-contain rounded-sm"
                          src={item?.logo}
                          width={80}
                          height={80}
                          alt={`${item?.name} Logo`}
                        />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-center">{item?.name}</h3>
                    </Link>
                  ))}
                </motion.div>
              </TabsContent>

              {/* Web Tab */}
              <TabsContent value="web">
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {skillsContent.web.items.map((item: any, index: number) => (
                    <Link
                      key={index}
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center justify-center rounded-lg border border-lightSky p-6 hover:bg-lightSky/10 transition cursor-pointer"
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="w-20 h-20 flex items-center justify-center mb-4">
                        <Image
                          className="object-contain rounded-sm"
                          src={item?.logo}
                          width={80}
                          height={80}
                          alt={`${item?.name} Logo`}
                        />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-center">{item?.name}</h3>
                    </Link>
                  ))}
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </Container>
      </PageLayout>
    </div>
  );
};

export default SkillsPage;
