"use client"
import Container from '@/components/container'
import PageLayout from '@/components/PageLayout'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Tooltip } from '@/components/ui/tooltip'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
{
  title: "Imoobe 🏠",
  date: "2024",
  category: "Full Stack / SaaS",
  description: " A modern SaaS about real Estate management",
  stack: ["Next.js", "Typescript", "TailwindCSS", "PostgreSQL", "Prisma", "Stripe"],
  image: "/projects/imoobe.png",
  url: "https://imoobe.com",
  githubUrl:"https://github.com/alexandre-bourdois/Imoobe" 
},
{
  title: "ToDoChain ⛓️",
  date: "2024",
  category: "Full Stack / Web3",
  description: "ToDoChain is a decentralized to-do list application built on Ethereum blockchain",
  stack: ["Next.js", "Javascript", "TailwindCSS", "Solidity", "Truffle", "React"],
  image: "/projects/ToDoChain.png",
  url: "https://todochain.alexandrebourdois.com/",
  githubUrl:"https://github.com/alexandre-bourdois/ToDoChain" 
},
{
  title: "HSK AI 🧧",
  date: "2024",
  category: "Machine Learning",
  description: "It's a machine learning project for accurate identification of basic Chinese characters.",
  stack: ["Python", "Tensordlow", "Tkinter"],
  image: "/projects/HSK_AI.png",
  url: false,
  githubUrl:"https://github.com/alexandre-bourdois/HSK_AI" 
},
{
  title: "Portfolio 🪪",
  date: "2023",
  category: "Full Stack",
  description: "It's a website portfolio showing my professional profile developed in HTML/CSS and JavaScript.",
  stack: ["HTML", "CSS", "Javascript"],
  image: "/projects/portfolio_2023.jpg",
  url: "https://portfolio_2023.alexandrebourdois.com/",
  githubUrl:"https://github.com/alexandre-bourdois/Portfolio_2023" 
},
]


const ProjectsPage = () => {
  return (
    <PageLayout>
      <Container>
      <div className='py-7'>
        <h1 className='text-center sm:text-3xl text-2xl font-semibold mb-5 text-lightSky underline'>Mes Projets</h1>
          {projects?.map((project, index) => (
            <motion.div key={index} className='mb-4 flex items-center justify-center'
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.5, duration: 1 }}>
              <Card className='bg-bodyColor border-lightSky md:w-3/4 w-full'>
                <CardContent className="p-6">
                  <div className={`flex flex-col md:flex-row md:items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className='w-full flex flex-col gap-2 md:w-1/2 order-2 md:order-1 mb-8 md:mb-0 p-4'>
                      <h2 className='text-white md:text-3xl text-2xl font-bold leading-none group-hover:text-lightSky group-hover:cursor-default group-hover:underline hoverEffect'>
                      {project.title}
                      </h2>
                      <h3 className='text-muted-foreground md:text-sm text-xs font-thin leading-none  hoverEffect group-hover:cursor-default'>
                      {project.category} | {project.date}
                      </h3>
                      <p className=' text-white/90 text-sm md:text-base leading-6 md:leading-normal'>{project.description}
                      </p>
                      <ul className='flex flex-wrap gap-2 md:gap-3 items-center'>
                        {project?.stack?.map((item,index) =>(
                          <li key={index} className='text-xs text-hoverColor/60'>
                            {item}
                            {index !== (project?.stack?.length - 1) && ","}
                          </li>
                        ))}
                      </ul>
                      <Separator className='bg-white/20 rounded h-1 mb-2 '/>
                      <div className='flex items-center flex-row gap-4'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                            {typeof project.url === 'string' && (
                              <Button variant='outline' size='icon' 
                              className="bg-lightSky/20 text-white/80  border-lightSky hover:text-lightSky flex items-center gap-1 hoverEffect">
                                <Link href={project.url} target="_blank" rel="noopener noreferrer"> 
                                    <ArrowUpRight /> <span className='sr-only'>View the project</span>
                                  </Link>
                              </Button>
                              )}
                            </TooltipTrigger>
                            <TooltipContent className='bg-white text-black text-xs rounded p-1 font-semibold'>
                              <p>View the project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                            {typeof project.githubUrl === 'string' && (
                              <Button variant='outline' size='icon' 
                              className="bg-lightSky/20 text-white/80  border-lightSky hover:text-lightSky flex items-center gap-1 hoverEffect">
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"> 
                                    <Github /> <span className='sr-only'>View the Github Repository</span>
                                  </Link>
                              </Button>
                              )}
                            </TooltipTrigger>
                            <TooltipContent className='bg-white text-black text-xs rounded p-1 font-semibold'>
                              <p>View the Github Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>


                    </div>
                    <div className='w-full md:w-1/2 order-1 md:order-2'>
                      <div className='relative h-32 md:h-64 bg-gray-700 border-white/30 border rounded-xl overflow-hidden'>
                        <Image src={project.image}  fill alt={project.title} className='object-cover'/>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </PageLayout>
  )
}

export default ProjectsPage