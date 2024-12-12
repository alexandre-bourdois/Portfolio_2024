'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { Locale, usePathname, useRouter } from '@/app/i18n/routing';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label className="relative inline-block">
      <select
        className={clsx(
          'block w-full text-hoverColor/50 bg-bodyColor rounded-md shadow-sm focus:outline-none transition duration-150 ease-in-out',
          isPending && 'opacity-50 cursor-not-allowed'
        )}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
