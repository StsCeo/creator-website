import ContactForm from "@/components/ContactForm";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: "1.2M", label: "Community" },
  { value: "48", label: "Films released" },
  { value: "12", label: "Awards" },
];

const WORKS = [
  {
    title: "Neon Tides",
    kind: "Short Film",
    year: "2025",
    blurb: "A midnight portrait of a coastal city that never sleeps.",
    gradient: "from-fuchsia-500/30 to-purple-600/30",
  },
  {
    title: "Field Notes",
    kind: "Docuseries",
    year: "2024",
    blurb: "Conversations with makers about craft, doubt, and momentum.",
    gradient: "from-sky-500/30 to-indigo-600/30",
  },
  {
    title: "Golden Hour",
    kind: "Photo Series",
    year: "2024",
    blurb: "Chasing the last light across three continents.",
    gradient: "from-amber-500/30 to-rose-600/30",
  },
  {
    title: "Signal",
    kind: "Music Video",
    year: "2023",
    blurb: "A single take exploring sound as motion and color.",
    gradient: "from-emerald-500/30 to-teal-600/30",
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 0%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(50% 40% at 90% 10%, rgba(236,72,153,0.18), transparent 60%)",
        }}
      />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Ava<span className="text-accent">.</span>Rivers
        </a>
        <nav className="hidden gap-8 text-sm text-muted sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
        >
          Let&apos;s talk
        </a>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-start gap-6 py-20 sm:py-28">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
            Creator · Filmmaker · Storyteller
          </span>
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            I turn fleeting moments into{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              stories worth keeping
            </span>
            .
          </h1>
          <p className="max-w-xl text-lg text-muted">
            I&apos;m Ava — a director and visual storyteller crafting films,
            photo series, and workshops for brands and humans who care about the
            details.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-white/40"
            >
              Work with me
            </a>
          </div>

          <dl className="mt-12 grid w-full max-w-lg grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-3xl font-bold text-foreground">
                  {stat.value}
                </dt>
                <dd className="text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 py-16">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <p className="hidden text-sm text-muted sm:block">
              A few recent favorites
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {WORKS.map((work) => (
              <article
                key={work.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25"
              >
                <div
                  className={`mb-6 h-40 w-full rounded-xl bg-gradient-to-br ${work.gradient}`}
                />
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                  <span>{work.kind}</span>
                  <span aria-hidden>•</span>
                  <span>{work.year}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{work.title}</h3>
                <p className="mt-2 text-sm text-muted">{work.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-16">
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 sm:grid-cols-2 sm:p-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About
              </h2>
              <p className="mt-4 text-muted">
                Over the last decade I&apos;ve directed campaigns, documentaries,
                and independent shorts screened at festivals worldwide. My work
                lives at the intersection of intimacy and scale.
              </p>
              <p className="mt-4 text-muted">
                When I&apos;m not behind a camera, I run hands-on workshops
                helping emerging creators find their voice.
              </p>
            </div>
            <ul className="flex flex-col justify-center gap-4">
              {[
                "Direction & Cinematography",
                "Brand & Documentary Films",
                "Photography & Color",
                "Creative Workshops",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s make something
              </h2>
              <p className="mt-4 max-w-md text-muted">
                Have a project, collaboration, or workshop in mind? Send a note
                and I&apos;ll get back to you within a couple of days.
              </p>
              <div className="mt-8 space-y-2 text-sm text-muted">
                <p>hello@avarivers.studio</p>
                <p>Based in Lisbon · Available worldwide</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-8 w-full max-w-6xl px-6 py-10 text-sm text-muted">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p>© {new Date().getFullYear()} Ava Rivers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="transition hover:text-foreground">
              YouTube
            </a>
            <a href="#" className="transition hover:text-foreground">
              Vimeo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
