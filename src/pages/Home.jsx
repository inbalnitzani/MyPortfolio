import { useEffect } from 'react'
import me from '../assets/me.png'

const projects = [
  {
    title: 'Yuro',
    description:
      'A 2D puzzle-platformer about loss, perception, and crossing worlds.',
    imageUrl: 'https://img.itch.zone/aW1nLzI1Mjk0MzYwLnBuZw==/original/5pH1gV.png',
    stack: ['Unity', 'C#'],
    demoUrl: 'https://niv-kadria.itch.io/yoru',
    githubUrl: '#',
  },
  {
    title: '60 Knots',
    description:
      'A 3D game bulding an island buy collecting drowning objects while running out of fuel.',
    imageUrl: 'https://img.itch.zone/aW1nLzI1MTkwMTQ3LnBuZw==/315x250%23c/Dt%2BMck.png',
    stack: ['Unity', 'C#'],
    demoUrl: 'https://inbalnitzani.itch.io/60-knots',
    githubUrl: '#',
  },
  {
    title: 'Basketball',
    description:
      'Two players basketball game with random goals.',
    imageUrl: 'https://img.itch.zone/aW1nLzI0NDU5OTU3LnBuZw==/347x500/kzzgy%2B.png',
    stack: ['Unity', 'C#'],
    demoUrl: 'https://inbalnitzani.itch.io/basketball',
    githubUrl: 'https://github.com/inbalnitzani/Basketball',
  },  {
    title: 'Nitzami Muisc',
    description:
      'Music IP Management Website',
    imageUrl: 'https://img.itch.zone/aW1nLzI0NDU5OTU3LnBuZw==/347x500/kzzgy%2B.png',
    stack: ['React', 'Tailwind CSS', 'Supabase'],
    demoUrl: 'https://nitzanimusic.netlify.app/',
    githubUrl: 'https://github.com/inbalnitzani/Nitzani-Music',
  },
]

const personalHighlights = [
  'I volunteer at Etgarim, assisting in sailing classes for people with special needs.',
  'I am deeply passionate about all forms of art and love finding creative outlets in everything I do.',
  'I have a deep connection to the ocean. sailing is my favorite way to recharge and stay inspired.',
]

const cvSkillChips = [
  'C#',
  'TypeScript',
  'JavaScript',
  'React',
  'Angular',
  'Unity',
  'Java',
  'System design',
  'Git',
  'Cursor',
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'personal', label: 'Personal' },
  { id: 'cv', label: 'CV' },
]

const profileImageUrl = me

export const Home = () => {
  useEffect(() => {
    import('cursor-effects')
      .then(({ emojiCursor }) => {
        new emojiCursor({ emoji: ['💗'] })
      })
      .catch(() => {})
  }, [])

  return (
    <div className="y2k-glitter-bg min-h-screen text-foreground">
      <header className="y2k-header-pink sticky top-0 z-20">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#about" className="text-lg font-bold text-primary">
            Inbal Nitzani
          </a>

          <ul className="flex gap-2 text-sm sm:gap-4 sm:text-base">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-md px-2 py-1 text-foreground/80 transition hover:bg-primary/10 hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-10 sm:py-14">
        <section id="about" className="scroll-mt-24 py-2">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-medium text-primary">About</p>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Hi, I&apos;m Inbal. Backend Engineer by day, Game Developer by night.
              </h1>
              <p className="mt-4 text-foreground/80">
                I’m a Computer Science graduate currently pursuing my Master’s in Digital Game Design and
                Development. While I spend my professional hours building robust systems as a Backend
                Developer at Whalo, my creativity comes alive in my personal projects. Whether I’m
                architecting server-side logic, crafting immersive worlds in Unity, or building sleek web and
                mobile apps, I’m driven by a passion for turning complex code into seamless digital
                experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  View Projects
                </a>
                <a
                  href="#cv"
                  className="y2k-glass-btn rounded-md px-4 py-2 text-sm font-semibold transition"
                >
                  Open CV Section
                </a>
              </div>
            </div>

            <img
              src={profileImageUrl}
              alt="Portrait of Inbal Nitzani"
              className="y2k-game-cover h-52 w-52 shrink-0 cursor-default rounded-2xl object-cover sm:h-60 sm:w-60"
            />
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <p className="mb-2 text-sm font-medium text-primary">Projects</p>

          <div className="mt-5 grid gap-10 md:grid-cols-2 md:gap-12">
            {projects.map((project) => (
              <article key={project.title} className="min-w-0">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} cover`}
                  className="y2k-game-cover h-44 w-full rounded-lg object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-semibold text-primary">{project.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={`${project.title}-${tech}`}
                      className="y2k-glass-pill rounded-full px-2.5 py-0.5 text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-3 text-sm font-medium">
                  <a href={project.demoUrl} className="text-primary hover:underline">
                    Play
                  </a>
                  <a href={project.githubUrl} className="text-primary hover:underline">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="personal" className="scroll-mt-24 border-t border-pink-200/50 py-2 pt-10">
          <p className="mb-2 text-sm font-medium text-primary">Personal</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            When I log off, I go{' '}
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
              outside
            </span>
          </h2>

          <ul className="mt-8 grid list-none gap-4 sm:grid-cols-3 sm:gap-5">
            {personalHighlights.map((item, i) => (
              <li
                key={item}
                className={`y2k-personal-tile group relative p-4 sm:p-5 ${i === 1 ? 'sm:translate-y-3' : ''}`}
              >
                <p className="relative z-10 text-sm leading-relaxed text-foreground/85 sm:text-base">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="cv" className="scroll-mt-24 border-t border-pink-200/50 py-2 pt-10">
          <p className="mb-2 text-sm font-medium text-primary">CV</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          The {' '}
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
            Short n' Sweet            </span>
             Version
          </h2>


          <div className="mt-8 max-w-3xl space-y-8 text-foreground/85">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2 sm:text-sm">
              <span className="y2k-glass-pill w-fit rounded-full px-3 py-1 text-xs font-medium">
                Tel Aviv · Israel
              </span>
              <a
                href="mailto:inbalnitzani@gmail.com"
                className="y2k-glass-pill w-fit rounded-full px-3 py-1 text-xs font-medium transition hover:opacity-90"
              >
                inbalnitzani@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/inbal-nitzani-07851421b/"
                className="y2k-glass-pill w-fit rounded-full px-3 py-1 text-xs font-medium transition hover:opacity-90"
              >
                LinkedIn
              </a>
            </div>

            <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
              <span className="font-semibold text-primary">Software Engineer</span> building serious systems at{' '}
              <span className="font-semibold text-foreground">Whalo</span>, and an{' '}
              <span className="font-semibold text-foreground">M.Des</span> student at Shenkar—bridging full-stack
              craft with play, physics, and weird game ideas in Unity.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-primary/50 pl-4">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">Now</p>
                <p className="mt-1 font-semibold text-foreground">Whalo · Software Engineer</p>
                <p className="text-sm text-foreground/75">Gaming world infrastructure &amp; internal tools</p>
                <p className="mt-3 font-semibold text-foreground">Shenkar · M.Des</p>
                <p className="text-sm text-foreground/75">Game design and development.</p>
              </div>
              <div className="border-l-2 border-pink-300/60 pl-4">
                <p className="text-xs font-bold uppercase tracking-wide text-primary">Before</p>
                <p className="mt-1 font-semibold text-foreground">NanoLock · Software Engineer</p>
                <p className="text-sm text-foreground/75">User-facing product work in cybersecurity.</p>
                <p className="mt-2 font-semibold text-foreground">NanoLock · QA</p>
                <p className="text-sm text-foreground/75">Hardening releases &amp; catching the scary stuff.</p>
                <p className="mt-3 font-semibold text-foreground">B.Sc. CS · MTA · 2023</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-primary">Skill constellation</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cvSkillChips.map((label) => (
                  <li key={label} className="y2k-glass-pill rounded-full px-2.5 py-1 text-xs">
                    {label}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-foreground/70">Hebrew · English · Italian (beginner) </p>
            </div>

            <p className="text-sm text-foreground/80">
              <span className="font-semibold text-foreground">Etgarim</span> volunteer sailing, accessibility,
              and good energy on the water.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Download full CV (PDF)
            </a>
  
          </div>
        </section>
      </main>
    </div>
  )
}