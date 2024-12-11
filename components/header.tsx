"use client"

import React from 'react'
import Container from './container'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl';
import { navbarData } from '@/constants';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

function Header() {
    const t = useTranslations();
    const locale = useLocale();

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
            <button className='inline-flex md:hidden relative'> <Menu/></button>
        </Container>
    </header>
  )
}

export default Header