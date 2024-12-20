"use client";
import Container from '@/components/container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout'
import ContactForm from '@/components/contact/ContactForm'
import { useTranslations } from 'next-intl';

const socialLinks = [
  { href: 'https://github.com/alexandre-bourdois', src: '/logo/github.svg', alt: 'GitHub Icon', nameKey: 'github' },
  { href: 'https://www.linkedin.com/in/alexandre-bourdois/', src: '/logo/linkedin.svg', alt: 'LinkedIn Icon', nameKey: 'linkedin' },
  { href: 'https://www.malt.fr/profile/alexandrebourdois', src: '/logo/malt.svg', alt: 'Malt Icon', nameKey: 'malt' },
  { href: 'mailto:alexandrebourdoispro@gmail.com', src: '/logo/mail.svg', alt: 'Mail Icon', nameKey: 'email' }
];

const ContactPage = () => {
  const t = useTranslations('contact');

  return (
    <PageLayout>
      <Container className="py-6 md:py-12 flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="w-full md:w-2/3">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-center sm:text-3xl text-2xl font-semibold text-hoverColor/70">
            {t('header')}
          </h1>
          <div className="h-[1] mt-1 rounded-sm w-[124] bg-hoverColor/70 mx-auto" />
          <ul className="flex flex-row justify-center mt-5 gap-8 md:flex-col md:gap-2">
            {socialLinks.map((link, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="hover:opacity-50 rounded-md"
                    src={link.src}
                    alt={link.alt}
                    width={50}
                    height={50}
                  />
                </Link>
                <span className="hidden md:block text-sm text-white/50 font-mono text-center">
                  {t(`socialLinks.${link.nameKey}`)}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </PageLayout>
  );
};

export default ContactPage;
