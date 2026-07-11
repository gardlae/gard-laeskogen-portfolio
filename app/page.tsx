import { StoryVideo } from "./StoryVideo";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Motor Control Training Board",
    type: "Electronics",
    image: "/portfolio-motor-control-english.png",
    description:
      "A labeled electronics setup showing motor speed, torque display, tachometer, potentiometer, voltage connections, and student-board wiring.",
  },
  {
    title: "Cascade Control System",
    type: "Control systems",
    image: "/control-system-diagram-english.png",
    description:
      "A translated block diagram for a cascaded position and speed control loop with feedback from position and speed sensors.",
  },
  {
    title: "Selected Outcome",
    type: "Impact",
    image: null,
    description:
      "Highlight a measurable win, lesson, or transformation from your work.",
  },
];

const resumeItems = [
  {
    period: "Now",
    role: "Current Role or Focus",
    detail:
      "A clear one-line description of what you are building, studying, leading, or exploring right now.",
  },
  {
    period: "Before",
    role: "Previous Experience",
    detail:
      "Add the role, organization, or chapter that shaped your skills and perspective.",
  },
  {
    period: "Education",
    role: "Training and Credentials",
    detail:
      "List degrees, certificates, programs, or self-directed learning that matter to your story.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1e2320]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="text-sm font-semibold uppercase tracking-[0.18em]" href="#">
          Your Name
        </a>
        <div className="flex items-center gap-4 text-sm font-medium text-[#52615a]">
          <a className="transition hover:text-[#1e2320]" href="#story">
            Story
          </a>
          <a className="transition hover:text-[#1e2320]" href="#resume">
            Resume
          </a>
          <a className="transition hover:text-[#1e2320]" href="#portfolio">
            Portfolio
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:pb-20">
        <div className="max-w-3xl">
          <p className="mb-6 w-fit border-b-2 border-[#c84b31] pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#52615a]">
            Personal story
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            A life, a body of work, and the story behind it.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#52615a]">
            Use this site as a home for your story video, resume, portfolio,
            and the moments that explain where you have been and what you are
            building next.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center border border-[#1e2320] bg-[#1e2320] px-5 text-sm font-semibold text-white transition hover:bg-[#314139]"
              href="#story"
            >
              Watch the story
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-[#9da89d] px-5 text-sm font-semibold text-[#1e2320] transition hover:border-[#1e2320]"
              href="#portfolio"
            >
              View the work
            </a>
          </div>
        </div>

        <div className="relative min-h-[480px] overflow-hidden bg-[#213f38] text-white">
          <div className="absolute inset-0 story-portrait" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="max-w-sm text-2xl font-semibold leading-tight">
              Put your strongest image, portrait, or video still here.
            </p>
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#1e2320] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d4c6ac]">
              Story video
            </p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Your story, told in your own voice.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#d8ded8]">
              When your video is ready, place it in this section. The page is
              built so the video can carry the emotional center of the site.
            </p>
          </div>

          <StoryVideo />
        </div>
      </section>

      <section id="resume" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#c84b31]">
              Resume
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              The path that shaped the work.
            </h2>
          </div>
          <div className="grid gap-4">
            {resumeItems.map((item) => (
              <article
                className="grid gap-3 border border-[#d9cfbf] bg-[#fffaf1] p-5 sm:grid-cols-[120px_1fr]"
                key={item.role}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#52615a]">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="mt-2 leading-7 text-[#52615a]">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-[#e7efe8] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2f6f5e]">
              Portfolio
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              Selected work and proof of direction.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <article className="border border-[#b9c9bd] bg-white p-5" key={item.title}>
                {item.image ? (
                  <Image
                    alt={`${item.title} portfolio project`}
                    className="mb-5 aspect-[4/3] w-full object-cover"
                    height={900}
                    src={item.image}
                    width={1200}
                  />
                ) : null}
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c84b31]">
                  {item.type}
                </p>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#52615a]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-7 border-t border-[#d9cfbf] pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Ready for the next chapter.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#52615a]">
              Add your email, social links, or a simple invitation for the
              people you want to hear from.
            </p>
          </div>
          <a
            className="inline-flex min-h-11 w-fit items-center border border-[#1e2320] px-5 text-sm font-semibold transition hover:bg-[#1e2320] hover:text-white"
            href="mailto:you@example.com"
          >
            Contact me
          </a>
        </div>
      </section>
    </main>
  );
}
