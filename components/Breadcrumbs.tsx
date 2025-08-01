import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
import type { HeaderLink, BreadcrumbObject } from './Header';

export default function Breadcrumbs({ breadcrumbObject }: { breadcrumbObject: BreadcrumbObject }) {
  const headerBaseLinksObject: { [key: string]: HeaderLink } = {
    blog: {
      title: 'Blog',
      href: '/blog'
    },
    learning: {
      title: 'Learning',
      href: '/learning'
    },
    // mindWandering: {
    //   title: 'Mind-wandering',
    //   href: 'mind-wandering'
    // },
    aboutMe: {
      title: 'About me',
      href: '/about-me'
    }
  }
  const baseLinkObject = headerBaseLinksObject[breadcrumbObject.homepage]
  const itemsNumber = breadcrumbObject?.children?.length || 0;

  return (
    <Breadcrumb className="mt-1">
      <BreadcrumbList className="text-base pb-1">
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="relative cursor-pointer text-stone-700 hover:text-amber-700 dark:hover:text-amber-500 dark:text-stone-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-amber-700 dark:after:bg-amber-500 after:left-0 after:bottom-[-2px] after:absolute after:transition-all after:duration-200 hover:after:w-full hover:-translate-y-1 transition ease-in">
            <Link href="/">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          /
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="cursor-pointer flex items-center gap-1 relative cursor-pointer text-stone-700 hover:text-amber-700 dark:hover:text-amber-500 dark:text-stone-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-amber-700 dark:after:bg-amber-500 after:left-0 after:bottom-[-2px] after:absolute after:transition-all after:duration-200 hover:after:w-full transition ease-in">
              { baseLinkObject.title }
              <ChevronDown className="mt-1" size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {Object.entries(headerBaseLinksObject).map(([linkObjectKey, linkObjectValue]) => (
                  <Link
                    href={linkObjectValue.href}
                    key={`${linkObjectValue.href}-link`}
                  >
                    <DropdownMenuItem className="cursor-pointer">
                      {linkObjectValue.title}
                    </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        {
          breadcrumbObject?.children && breadcrumbObject.children.map((childObject: any, index: number) => (
            <span key={`breadcrumb-item-${index}`} className="flex flex-row">
              <BreadcrumbSeparator>
                /
              </BreadcrumbSeparator>
              {index === itemsNumber - 1
                ? (
                  <BreadcrumbItem className="ml-1.5">
                    <BreadcrumbPage>{childObject.label}</BreadcrumbPage>
                  </BreadcrumbItem>
                )
                : (
                  <BreadcrumbItem className="ml-1.5">
                    <BreadcrumbLink href={childObject.href}>{childObject.label}</BreadcrumbLink>
                  </BreadcrumbItem>
                )
              }
            </span>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}