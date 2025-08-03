import Header from "@/components/Header"

export default function AboutMe() {
  return (
    <div>
      <Header breadcrumbObject={{ homepage: 'aboutMe' }} />
      <div>
        <h1 className="primary-title">Who am I? A summary of my CS journey, and my future</h1>
        <div>
            <p>I'm not used to talking about me, but I'll do it here in case someone wants to know more about my journey.</p>
            <br />
            <p>It all started when I was around 14. I discovered the joys of modded Minecraft, and I wanted to build some myself. That's when I discovered the world of development and computer science.</p>
            <p>Then, around the same time, thanks to one of my teachers, I discovered web development. My first website didn't even use JavaScript and was absolutely horrendous, but that's when it all started.</p>
            <br />
            <p>Naturally, I went down the same path for my studies. I joined Epitech, a French CS / SWE school.</p>
            <p>There, I learnt all the basics: C, C++, Bash, Git... I did a few interesting projects, such as a shell replica, a calculator, or an implementation of a path-finding algorithm (A* / Dijkstra).</p>
            <p>Then, I started to learn more about web development: JavaScript, PHP, Apache, WordPress... Quite an old stack, but it was what was used in the company where I was hired as an intern.</p>
            <p>I then started to learn about more modern technologies such as React and Next. Those frameworks really piqued my interest, and I started to build small projects to learn more about them.</p>
            <br />
            <p>At that time, I also started an internship at a new company: Flease. It was a quite young startup that was doing car leasing for small and medium companies.</p>
            <p>I built a complete dashboard for them, aimed at their clients. For this project, I had to learn from scratch Vue and Typescript and learn how to use AWS services, such as Lambda, DynamoDB, and API Gateway. All of this, in less than 5 months.</p>
            <p>That was a project I really liked doing. First, because I had complete ownership and I had to do absolutely everything, and second, because it was very intense and it made me learn A LOT of new things, most of which I still use today.</p>
            <br />
            <p>Later that year, I moved to Dublin for a year. I joined DCU for an exchange year. There, I learnt many new and very interesting things, such as networks and cybersecurity basics, microservices, and how search engines worked and were designed. I really enjoyed this year abroad, and it even made me regret choosing a private school over a university with a traditional way of learning.</p>
            <p>When I came back from Dublin, I joined Qweekle as a full-time Frontend Developer. That's where I was able to put my Vue skills to good use. For 3 years, I've been building applications in Vue and Nuxt for them, and I was able to learn a lot during that time.</p>
            <br />
            <p>However, I still feel insecure about my skills and my job security. Not as a developer at Qweekle, but as a Frontend developer, or even a Software Engineer.</p>
            <p>Today, AI is moving fast, REALLY fast, and for me, it's the best moment to learn how to harness and use these new technologies.</p>
            <br />
            <p>I decided that it was time to get back to learning. I learn new things every day, but it's time to go even further and learn whole new fields and technologies.</p>
            <p>Thanks to this learning program, I hope to become more confident in my skills and to be able to build new projects with new technologies and maybe give my career a whole new direction.</p>
            <br />
            <p>That's why I built this blog. Here, I will document my progression: what I'm learning, what projects I'm working on, my reflections... Everything that goes through my mind, basically.</p>
            <br />
            <p>So welcome here, thanks for being part of this journey with me, and I hope you'll enjoy reading my thoughts!</p>
        </div>
      </div>
    </div>
  )
}