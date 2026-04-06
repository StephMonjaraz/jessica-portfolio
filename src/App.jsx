export default function App() {
  const projects = [
    {
      title: "HexaAlign",
      subtitle: "Wearable embedded posture feedback system",
      description:
        "Developed a wearable assistive system for real-time posture correction using an ESP32-C3, IMU sensors, and haptic feedback. Implemented sensor fusion techniques including complementary and Kalman filtering to improve orientation estimation.",
      stack: [
        "ESP32-C3",
        "C/C++",
        "MPU6050",
        "I2C",
        "Signal Processing",
        "Embedded Systems",
      ],
      bullets: [
        "Designed and implemented real-time tilt detection using IMU data and threshold-based logic.",
        "Applied complementary and Kalman filtering to improve stability and reduce noise in orientation estimation.",
        "Developed a calibration workflow and feedback logic for posture correction using vibration motors.",
        "Focused on a real-world rehabilitation and accessibility use case.",
      ],
    },
    {
      title: "HapticAlign",
      subtitle: "Assistive posture guidance concept",
      description:
        "Conceptual assistive technology focused on improving posture through tactile feedback. Designed with a human-centered approach for accessibility and rehabilitation contexts.",
      stack: [
        "Human-Centered Design",
        "Assistive Tech",
        "Embedded Prototyping",
        "Accessibility",
      ],
      bullets: [
        "Explored the integration of hardware and user experience for posture guidance.",
        "Focused on accessibility-driven design and real-world usability.",
        "Connected technical development with user needs in rehabilitation scenarios.",
      ],
    },
    {
      title: "PwC – SAP Implementation",
      subtitle: "Testing, documentation, and cross-functional collaboration",
      description:
        "Professional experience supporting SAP implementation projects across FI, SD, and MM modules, with a focus on testing support, documentation, and collaboration across teams.",
      stack: [
        "SAP",
        "FI",
        "SD",
        "MM",
        "SIT",
        "UAT",
        "Documentation",
      ],
      bullets: [
        "Supported SAP implementation efforts across FI, SD, and MM modules.",
        "Contributed to SIT and UAT testing activities, including execution of SD test cases.",
        "Prepared and supported testing documentation and validation workflows.",
        "Worked with cross-functional teams in a professional client-facing environment.",
      ],
    },
  ];

  const skills = [
    "Embedded C/C++",
    "ESP32 / Microcontrollers",
    "Sensors and IMU integration",
    "Signal processing basics",
    "Python",
    "Excel and data analysis",
    "Technical documentation",
    "SAP testing support",
    "Problem solving",
    "Cross-functional collaboration",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-sky-300">
              Jessica Stephanie Garcia Monjaraz
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Embedded systems and real-world engineering projects.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Electrical &amp; Electronic Engineering student focused on embedded
              systems, software, and real-world problem solving. I build systems
              that connect hardware, data, and user needs, with a strong
              interest in assistive technology and intelligent systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-900"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              What I bring
            </p>

            <div className="mt-5 grid gap-4">
              <div className="rounded-2xl bg-slate-800/70 p-4">
                <h3 className="font-semibold">Systems mindset</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  I enjoy breaking technical problems into hardware, software,
                  and user-level decisions.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800/70 p-4">
                <h3 className="font-semibold">Hands-on building</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  From sensors and firmware to debugging and documentation, I
                  like making prototypes real.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800/70 p-4">
                <h3 className="font-semibold">Clear communication</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  I care about explaining technical work in a way that other
                  people can actually understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-8 md:py-12"
      >
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            A few projects that show how I approach engineering problems,
            especially when they involve real-world constraints.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-800/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Tools / Focus
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold">Why this portfolio?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              I’m interested in roles where I can keep growing in technical
              depth, especially in environments that value curiosity, execution,
              and strong problem solving. This site is meant to show the kind of
              work I enjoy doing: practical, technical, and grounded in real
              needs.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold">Core strengths</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl bg-slate-800 px-4 py-2 text-sm text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-300">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            You can reach me through email, LinkedIn, or GitHub.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:stephanie.monjaraz.eng@gmail.com"
              className="rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/stephanie-monjaraz/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/StephMonjaraz"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}