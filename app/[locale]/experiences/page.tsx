"use client";

import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Calendar,
  GraduationCap,
  Link2,
  User,
} from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const iconMap: Record<string, any> = {
  experience: Briefcase,
  education: GraduationCap,
  certification: Award,
  about: User,
};

const ExperiencesPage = () => {
  const locale = useLocale(); // Get the current locale
  const [resumeContent, setResumeContent] = useState<any>(null); // State to hold localized content

  useEffect(() => {
    // Dynamically import the JSON file based on the locale
    import(`@/messages/${locale}.json`)
      .then((module) => setResumeContent(module.default.resume))
      .catch((error) => console.error("Error loading locale file:", error));
  }, [locale]);

  // While the content is loading, display a fallback
  if (!resumeContent) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lightSky">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="experience"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex flex-wrap sm:flex-nowrap md:flex-col h-full bg-transparent md:w-64 gap-4">
            {Object.keys(resumeContent.tabMenu).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="bg-white/10 flex-1 sm:flex-initial w-[45%] sm:w-full py-3 text-white data-[state=active]:bg-hoverColor 
                  hover:bg-lightSky/40 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                  {React.createElement(iconMap[key], {
                    className: "w-4 h-4 md:h-5 md:w-5",
                  })}
                  {resumeContent.tabMenu[key]}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            {/* Experience Tab */}
            <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {resumeContent.experience.title}
              </motion.h2>
              <div className="space-y-6">
                {resumeContent.experience.items.map(
                  (item: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky p-6"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex items-center justify-center w-12 h-10 flex-shrink-0">
                            <Image
                              className="object-contain rounded-sm"
                              src={item?.logo}
                              width={50}
                              height={50}
                              alt="Logo"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">
                              {item?.role}
                            </h3>
                            <Link
                              href={item?.Url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-lightSky hover:underline"
                            >
                              {item?.company}
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground sm:text-sm text-xs">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4 text-white">{item.description}</p>
                      <div className="flex flex-wrap p-2 gap-2">
                        {item.highlights.map((highlight: string, i: number) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {resumeContent.education.title}
              </motion.h2>
              <div className="space-y-6">
                {resumeContent.education.items.map(
                  (item: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky p-6"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex items-center justify-center w-12 h-10 flex-shrink-0">
                            <Image
                              className="object-contain rounded-sm"
                              src={item?.logo}
                              width={50}
                              height={50}
                              alt="Logo"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">
                              {item?.degree}
                            </h3>
                            <Link
                              href={item?.Url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-lightSky hover:underline"
                            >
                              {item?.institution}
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground sm:text-sm text-xs">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4 text-white">{item.description}</p>
                      <div className="flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map(
                            (achievement: string, i: number) => (
                              <Badge key={i} variant="secondary">
                                {achievement}
                              </Badge>
                            )
                          )}
                        </div>
                        {item.diplomaUrl && (
                          <Link
                            href={item.diplomaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lightSky hover:text-white transition-colors ml-4"
                          >
                            <Link2 className="h-4 w-4" />
                            {resumeContent.viewDiploma}
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </TabsContent>

            {/* Certification Tab */}
            <TabsContent value="certification">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {resumeContent.certification.title}
              </motion.h2>
              <div className="space-y-6">
                {resumeContent.certification.items.map(
                  (item: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky p-6"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex flex-row gap-2 items-center">
                          <div className="flex items-center justify-center w-12 h-10 flex-shrink-0">
                            <Image
                              className="object-contain rounded-sm"
                              src={item?.logo}
                              width={50}
                              height={50}
                              alt="Logo"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">
                              {item?.degree}
                            </h3>
                            <Link
                              href={item?.Url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-lightSky hover:underline"
                            >
                              {item?.institution}
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground sm:text-sm text-xs">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4 text-white">{item.description}</p>
                      <div className="flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map(
                            (achievement: string, i: number) => (
                              <Badge key={i} variant="secondary">
                                {achievement}
                              </Badge>
                            )
                          )}
                        </div>
                        {item.diplomaUrl && (
                          <Link
                            href={item.diplomaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lightSky hover:text-white transition-colors ml-4"
                          >
                            <Link2 className="h-4 w-4" />
                            {resumeContent.viewDiploma}
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </TabsContent>

            {/* About Me Tab */}
            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {resumeContent.about.title}
              </motion.h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="border rounded-lg border-lightSky p-6"
                >
                  <p className="text-white mb-6 text-lg">
                    {resumeContent.about.bio}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2 px-2">
                        {resumeContent.about.interests.map(
                          (interest: string, i: number) => (
                            <Badge key={i} variant="secondary">
                              {interest}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold pb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2 px-2">
                        {resumeContent.about.languages.map(
                          (language: string, i: number) => (
                            <Badge key={i} variant="secondary">
                              {language}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ExperiencesPage;
