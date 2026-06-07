import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const certifications = [
  {
    quote: "Completed IBM certification focused on web development and cloud computing. Gained hands-on experience in building applications and working with cloud-based solutions.",
    author: "IBM",
    role: "Web Development & Cloud Computing",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    quote: "Completed Accenture's data analytics simulation, solving real-world business problems using data visualization and analytical techniques.",
    author: "Accenture North America",
    role: "Data Analytics Simulation (Forage)",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
  {
    quote: "Completed Cognizant AI job simulation, gaining practical exposure to artificial intelligence concepts and data-driven problem solving.",
    author: "Cognizant",
    role: "Artificial Intelligence Simulation (Forage)",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
  },
  {
    quote: "Worked as a Machine Learning Intern at Hex Software, building models using Python and applying data preprocessing to improve prediction accuracy.",
    author: "Hex Software",
    role: "Machine Learning Intern",
    avatar: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
];

export const Certifications = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating]  = useState(false);
  const headerRef = useScrollReveal();
  const cardRef   = useScrollReveal();

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(typeof idx === "function" ? idx(activeIdx) : idx);
      setAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((prev) => (prev + 1) % certifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next     = () => goTo((activeIdx + 1) % certifications.length);
  const previous = () => goTo((activeIdx - 1 + certifications.length) % certifications.length);

  return (
    <section id="certifications" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        <div ref={headerRef} className="scroll-hidden text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Certifications</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-secondary-foreground">
            Credentials & achievements.{" "}
            <span className="font-serif italic font-normal text-white">from leading platforms.</span>
          </h2>
        </div>

        <div ref={cardRef} className="scroll-hidden max-w-4xl mx-auto">
          <div className="relative">
            <div
              className="glass p-6 sm:p-8 md:p-12 rounded-3xl glow-border"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(8px)" : "translateY(0)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
              }}
            >
              <div className="absolute -top-4 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 pt-4">
                "{certifications[activeIdx].quote}"
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center p-2 ring-2 ring-primary/20 flex-shrink-0">
                  <img src={certifications[activeIdx].avatar} alt={certifications[activeIdx].author} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">{certifications[activeIdx].author}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{certifications[activeIdx].role}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <button className="p-2 sm:p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {certifications.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>
              <button className="p-2 sm:p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
