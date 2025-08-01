import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter, Copyright, Dot, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
    <footer className="flex flex-row justify-center items-center text-stone-700 dark:text-stone-300 border-t border-t-stone-300 dark:border-t-stone-700 mt-3 pt-3">
        <div className="flex flex-row gap-x-2">
          <Button
            variant="outline"
            className="cursor-pointer"
          >
            <Github size={18} />
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
          >
            <Mail size={18} />
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
          >
            <Linkedin size={18} />
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
          >
            <Twitter size={18} />
          </Button>
        </div>
        <span className="mx-1"><Dot size={28} /></span>
        <div className="flex flex-row items-center">
          <Copyright size={13} />
          <span className="ml-0.5">&nbsp;2025 Lucas Lapierre</span>
        </div>
      </footer>
    )
}