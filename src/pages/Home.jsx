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
    githubUrl: '#',
  },
]

const personalHighlights = [
  'I volunteer at Etgarim, assisting in sailing classes for people with special needs.',
  'I am deeply passionate about all forms of art and love finding creative outlets in everything I do.',
  'I have a deep connection to the ocean. sailing is my favorite way to recharge and stay inspired.',
]

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'personal', label: 'Personal' },
  { id: 'cv', label: 'CV' },
]

const profileImageUrl = '/profile.jpg'

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 backdrop-blur">
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
        <section id="about" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 sm:p-8">
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
                  className="rounded-md border border-border px-4 py-2 text-sm font-semibold transition hover:bg-primary/10"
                >
                  Open CV Section
                </a>
              </div>
            </div>

            <img
              src={profileImageUrl}
              alt="Portrait of Inbal Nitzani"
              className="h-52 w-52 shrink-0 rounded-2xl border border-border/70 object-cover shadow-sm sm:h-60 sm:w-60"
            />
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <p className="mb-2 text-sm font-medium text-primary">Projects</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Things I built</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-xl border border-border bg-card p-5">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} cover`}
                  className="h-44 w-full rounded-lg border border-border/70 object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={`${project.title}-${tech}`}
                      className="rounded-full border border-border px-2 py-1 text-xs text-foreground/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-3 text-sm font-medium">
                  <a href={project.demoUrl} className="text-primary hover:underline">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="text-primary hover:underline">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="personal" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="mb-2 text-sm font-medium text-primary">Personal</p>
          <h2 className="text-2xl font-bold sm:text-3xl">A little more about me</h2>

          <ul className="mt-4 space-y-3 text-foreground/85">
            {personalHighlights.map((item) => (
              <li key={item} className="rounded-lg border border-border/70 p-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="cv" className="scroll-mt-24 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="mb-2 text-sm font-medium text-primary">CV</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Curriculum Vitae</h2>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Add your education, experience, and skills summary here. You can also attach your full
            resume as a PDF and link to it below.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Download CV (PDF)
            </a>
            <a
              href="mailto:youremail@example.com"
              className="rounded-md border border-border px-4 py-2 text-sm font-semibold transition hover:bg-primary/10"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}