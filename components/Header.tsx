"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useTheme } from "next-themes"
import { Sun, MoonStar } from 'lucide-react';
import Breadcrumbs from "./Breadcrumbs";

export interface HeaderLink {
  title: string
  href?: string
}

export interface BreadcrumbObject {
  homepage: string
  children?: HeaderLink[]
}

export default function Header({ breadcrumbObject = undefined }: { breadcrumbObject?: BreadcrumbObject }) {
  const { resolvedTheme, setTheme } = useTheme()
  const headerLinks: HeaderLink[] = [{
    title: 'Blog',
    href: 'blog'
  }, {
    title: 'Learning',
    href: 'learning'
  // }, {
  //   title: 'Mind-wandering',
  //   href: 'mind-wandering'
  }, {
    title: 'About me',
    href: 'about-me'
  }]

  return (
    <header className="mb-3 mt-6">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row justify-between">
          {!breadcrumbObject
            ? headerLinks.map((linkObject: HeaderLink) => (
            <div
              className="relative cursor-pointer mr-3 text-stone-700 hover:text-amber-700 dark:hover:text-amber-500 dark:text-stone-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-amber-700 dark:after:bg-amber-500 after:left-0 after:bottom-[-2px] after:absolute after:transition-all after:duration-200 hover:after:w-full hover:-translate-y-1 transition ease-in"
              key={`${linkObject.href}-link`}
            >
              <Link href={linkObject?.href || '/'}>
                {linkObject.title}
              </Link>
            </div>
          ))
          : <Breadcrumbs breadcrumbObject={breadcrumbObject} />}
        </div>
        <Button
          onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
          variant="outline"
          className="cursor-pointer hover:text-amber-700 dark:hover:text-amber-500"
        >
          {resolvedTheme === 'light' ? <Sun /> : <MoonStar />}
        </Button>
      </div>
    </header>
  )
}