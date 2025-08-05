import Header from "@/components/Header"
import Link from "next/link"
import { Code, Brain, Blocks, Hash } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <h1 className="primary-title">Hi, I&apos;m Lucas.</h1>
          <div>
            <p>I&apos;m a Software Engineer from Lyon, France.</p>
            <br />
            <p>I&apos;m currently a Frontend developer at <Link href="https://www.qweekle.com/" target="_blank" className="accent-text link-text">Qweekle</Link>, but I like to do Backend stuff too. I&apos;m using mainly JavaScript&nbsp;/&nbsp;Typescript and a few frameworks such as Vue or React.</p>
            <br />
            <p>Quite recently, I realised that I had a lot of things to learn in order to keep up with this constantly changing world and that my field is becoming more competitive than ever.</p>
            <p>That&apos;s when I realised that I had to react (no pun intended) quickly, and to evolve with our world.</p>
            <br />
            <p>This is why I built this <Link href="/blog" className="accent-text link-text">blog</Link>.</p>
            <br />
            <p>Here, you&apos;ll find my evolution process, my thoughts, what I&apos;m doing week-by-week, and <Link href="/learning" className="accent-text link-text">articles that will summarise my readings and my learnings</Link>.</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">What am I currently doing?</h2>
            <div className="flex flex-row items-center mb-2">
              <Code className="accent-text" size={22} />
              <p className="ml-3">Strenghtening my core JS skills</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <Hash className="accent-text" size={22} />
              <p className="ml-3">Learning Python</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <Brain className="accent-text" size={22} />
              <p className="ml-3">Starting to learn Machine Learning</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <Blocks className="accent-text" size={22} />
              <p className="ml-3">Trying to build a new project per month</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Talk to me</h2>
            <p>You can <Link href="mailto:lucas.lapierre27@gmail.com" className="accent-text link-text">send me an email</Link>, or contact me through <Link href="https://www.linkedin.com/in/lucas-lapierre/" target="_blank" className="accent-text link-text">LinkedIn</Link> if you want to talk about anything, I&apos;m always open to discussion!</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Special thanks</h2>
            <p>A big thanks to <Link href="https://www.sumit.ml/" target="_blank" className="text-purple-500 link-text">Sumit</Link>, who I stole this website idea from, as well as a big part of the design. Seeing his version motivated me to do mine, and that was the initial boost I needed to start this journey.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
