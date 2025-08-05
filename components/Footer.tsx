import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Mail, Copyright, Dot, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex md:flex-row flex-col justify-center items-center text-stone-700 dark:text-stone-300 border-t border-t-stone-300 dark:border-t-stone-700 mt-5 pt-5 mb-3">
        <div className="flex flex-row gap-x-2">
          <Link href="https://github.com/Kyyle27" target="_blank">
            <Button
              variant="outline"
              className="cursor-pointer hover:text-amber-700 dark:hover:text-amber-500"
            >
              <Github size={18} />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/lucas-lapierre/" target="_blank">
            <Button
              variant="outline"
              className="cursor-pointer hover:text-amber-700 dark:hover:text-amber-500"
            >
              <Linkedin size={18} />
            </Button>
          </Link>
          <Link href="mailto:lucas.lapierre27@gmail.com">
            <Button
              variant="outline"
              className="cursor-pointer hover:text-amber-700 dark:hover:text-amber-500"
            >
              <Mail size={18} />
            </Button>
          </Link>
          {/* <Button
            variant="outline"
            className="cursor-pointer hover:text-amber-700 dark:hover:text-amber-500"
          >
            <Twitter size={18} />
          </Button> */}
        </div>
        <span className="mx-1"><Dot size={28} className="md:inline hidden" /></span>
        <div className="flex flex-row items-center">
          <Copyright size={13} />
          <span className="ml-0.5">&nbsp;{currentYear} Lucas Lapierre</span>
        </div>
      </footer>
    )
}