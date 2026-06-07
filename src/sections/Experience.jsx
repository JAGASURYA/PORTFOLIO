import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    period: "2025 — Present",
    role: "E-Commerce Backend & Data Operations Executive",
    company: "Candere (Kalyan Jewellers Group).",
    description: "Managing end-to-end product onboarding on the Magento platform, including data validation, SKU creation, and bulk product uploads. Ensuring data accuracy through quality checks, resolving backend issues, and collaborating with cross-functional teams for smooth product launches.",
    technologies: ["Magento", "Microsoft Excel", "Data Analysis", "CSV Processing", "Data Validation"],
    current: true,
  },
  {
    period: "2024 — 2024",
    role: "Machine Learning Intern",
    company: "Hex Software",
    description: "Developed and evaluated machine learning models using Python. Applied data preprocessing and feature engineering techniques to improve model performance and generate meaningful insights from datasets.",
    technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
    current: false,
  },
];

const ExperienceItem = ({ exp, idx }) => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-hidden relative grid md:grid-cols-2 gap-6 sm:gap-8`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
        {exp.current && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
        )}
      </div>
      <div className={`pl-6 sm:pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
        <div className="glass p-5 sm:p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
          <span className="text-sm text-primary font-medium">{exp.period}</span>
          <h3 className="text-lg sm:text-xl font-semibold mt-2">{exp.role}</h3>
          <p className="text-muted-foreground text-sm">{exp.company}</p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">{exp.description}</p>
          <div className={`flex flex-wrap gap-2 mt-3 sm:mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
            {exp.technologies.map((tech, techIdx) => (
              <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={headerRef} className="scroll-hidden max-w-3xl mb-10 sm:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Career Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-secondary-foreground">
            Experience with{" "}
            <span className="font-serif italic font-normal text-white">real-world impact.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            A timeline of my journey, focused on data analysis, machine learning, and building solutions for real-world problems.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />
          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
