import Header from "@/components/Header"

export default function AboutMe() {
  return (
    <div>
      <Header breadcrumbObject={{ homepage: "aboutMe" }} />

      <div>
        <h1 className="primary-title">Who am I? A summary of my CS journey, and my future</h1>
        <div>
            <p>I am not usually one to talk about myself, but here is my story for anyone curious about my journey.</p>
            <br />
            <p>It all started when I was around 14. I discovered the joys of modded Minecraft, and wanted to create my own mods. That&apos;s when I discovered the world of development and computer science.</p>
            <p>Around the same time, one of my teachers introduced me to web development. My first website didn&apos;t even use JavaScript and was absolutely horrendous, but that&apos;s when it all started.</p>
            <br />
            <p>Naturally, I pursued this path academically. I joined Epitech, a French CS / SWE school.</p>
            <p>There, I learnt all the basics: C, C++, Bash, Git... I worked on a few interesting projects, such as a shell replica, a calculator, or an implementation of a path-finding algorithm (A* / Dijkstra).</p>
            <p>Next, I started to learn more about web development: JavaScript, PHP, Apache, WordPress... Quite an old stack, but it was what the company where I interned was using.</p>
            <p>I then started exploring more modern technologies like React and Next. Those frameworks really caught my interest, so I built small projects to learn more about them.</p>
            <br />
            <p>During this period, I also started an internship at a new company: Flease, a young startup focused on car leasing for small and medium companies.</p>
            <p>I built a complete dashboard for them, aimed for their clients. For this project, I had to learn Vue and Typescript from scratch and master AWS services like Lambda, DynamoDB, and API Gateway. All of this in less than 5 months.</p>
            <p>This project was incredibly rewarding. Having complete ownership meant I handled everything from start to finish, and the intensity pushed me to learn an incredible amount. I still rely on those skills today.</p>
            <br />
            <p>After completing my internship, I moved to Dublin for an exchange year at DCU. There, I dove into fascinating subjects such as networks and cybersecurity basics, microservices, and search engines architecture. I loved my time abroad, and it actually made me appreciate the traditional university approach to learning.</p>
            <p>Returning from Dublin, I joined Qweekle as a full-time Frontend Developer. For three years now, I&apos;ve been building Vue and Nuxt applications, constantly expanding my skillset.</p>
            <br />
            <p>However, I still feel uncertain about my skills and my job security. Not specifically at Qweekle, but as a frontend developer and software engineer in general.</p>
            <p>Today, AI is moving fast, REALLY fast, and for me, it&apos;s the perfect moment to learn how to harness these new technologies.</p>
            <br />
            <p>I decided that it was time to get back to learning. I learn new things every day, but it&apos;s time to go even further and learn whole new fields and technologies.</p>
            <p>Through this journey, I hope to become more confident in my skills and to be able to build new projects with new technologies and maybe give my career a whole new direction.</p>
            <br />
            <p>That&apos;s why I built this blog. Here, I will document my progress: what I&apos;m learning, what projects I&apos;m working on, my reflections... Everything that goes through my mind, basically.</p>
            <br />
            <p>So welcome, thanks for joining this journey with me, and I hope you will enjoy reading my thoughts!</p>
        </div>
      </div>
    </div>
  )
}