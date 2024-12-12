"use client"

import React, { useState } from 'react'
import Container from '../container'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl';
import { navbarData } from '@/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import NavButton from './NavButton';
import { AnimatePresence, motion } from 'framer-motion'

function Header() {
    const t = useTranslations();
    const locale = useLocale();

    const [menuOpen,setMenuOpen] = useState(false);
    const pathname = usePathname()
    console.log(pathname)
  return (
    <header className='border-b border-b-hoverColor bg-bodyColor text-white/80'>
        <Container className='flex justify-between py-5 items-center px-4 '>
            <div>
                <Link href='/'>
                    <h2 className='font-semibold text-xl hover:text-hoverColor hoverEffect'>
                        Portfolio
                    </h2>
                </Link>
            </div>
            {/* NavBar > md */}
            <div className="hidden md:inline-flex items-center gap-4 text-sm uppercase tracking-normal font-medium ">
                {navbarData.map((item) => (
                    <Link
                        key={item.href}
                        href={`/${locale}${item.href}`}
                        className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden  ${
                            pathname === `/${locale}${item.href}` ? "text-hoverColor" : ""
                        }`}
                        >
                        <div>{t(item.titleKey)}</div>
                        <span className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0
                            group-hover:translate-x-0 hoverEffect 
                            ${pathname === `/${locale}${item.href}` ? "translate-x-0":"-translate-x-[105%]"}`}/>
                        </Link>
                ))}
                <Link href={'/resume.pdf'} target='_blank' rel='"noopener noreferrer'
                    className='text-sm bg-lightSky px-4 py-2 rounded-md border-hoverColor/10 
                        hover:border-hoverColor hover:bg-hoverColor hover:text-gray-800 hoverEffect'>
                    { t("navbar.hire")}
                </Link>
            </div>

            {/* NavBar < md */}
            <div  className='inline-flex md:hidden relative'>
                <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <AnimatePresence>
                { menuOpen && 
                <motion.div 
                    initial={{scale:0, opacity:0}}
                    animate={{scale:1, opacity:1}}
                    exit={{scale:0, opacity:0}}
                    transition={{duration:0.5, type: "spring"}}

                    className='absolute  right-0  min-h-64 w-64 
                    rounded-md bg-bodyColor/90 border border-b-hoverColor p-8 pb-4 z-10 
                    flex flex-col origin-top-right'>
                    <ul className='flex flex-col gap-2 flex-1'>
                    {navbarData.map((item) => (
                    <Link
                        key={item.href}
                        href={`/${locale}${item.href}`}
                        className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden  ${
                            pathname === `/${locale}${item.href}` ? "text-hoverColor" : ""
                        }`}
                        >
                        <div>{t(item.titleKey)}</div>
                        <span className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0
                            group-hover:translate-x-0 hoverEffect 
                            ${pathname === `/${locale}${item.href}` ? "translate-x-0":"-translate-x-[105%]"}`}/>
                        </Link>
                ))}
                    </ul>
                    <ul>
                        <div className='flex gap-4 mt-2 justify-center'>
                        <Link href="https://github.com/alexandre-bourdois" 
                            target="_blank" rel="noopener noreferrer">
                            <Image
                            className='bg-white hover:opacity-30 rounded-md'  
                                src="/logo/github.svg" 
                                alt="GitHub Icon" 
                                width={20} 
                                height={20} 
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/alexandre-bourdois/"
                            target="_blank" rel="noopener noreferrer">
                            <Image
                            className='hover:opacity-30'  
                            src="/logo/linkedin.svg" 
                                alt="Linkedin Icon" 
                                width={20} 
                                height={20} 
                            />
                        </Link>
                        <Link href="https://www.malt.fr/profile/alexandrebourdois"
                            target="_blank" rel="noopener noreferrer">
                            <Image
                            className='hover:opacity-30'  
                                src="/logo/malt.svg" 
                                alt="GitHub Icon" 
                                width={20} 
                                height={20} 
                            />
                        </Link>
                        <Link href="mailto:alexandrebourdoispro@gmail.com"
                            target="_blank" rel="noopener noreferrer">
                            <Image
                            className='bg-white rounded hover:opacity-30'  
                                src="/logo/mail.svg" 
                                alt="GitHub Icon" 
                                width={20} 
                                height={20} 
                            />
                        </Link>
                        </div>
                    </ul>
                    <div className="h-[1] mt-2 rounded-sm w-[72] bg-hoverColor mx-auto" />

                </motion.div>
                }
                </AnimatePresence>
            </div>
        </Container>
    </header>
  )
}

export default Header