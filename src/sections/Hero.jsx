import { Button } from "@/Components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useMemo } from "react";

const skills = [
  "Python","Pandas","NumPy","Machine Learning","Data Analysis","Data Cleaning",
  "Data Validation","Microsoft Excel","CSV Processing","Data Visualization",
  "Scikit-learn","SQL","Magento","Product Data Management","Catalog Management",
  "SKU Management","Quality Control","E-commerce Operations",
];

// Generate dots once outside the component so they don't re-randomize on re-render
const dots = Array.from({ length: 25 }, (_, i) => ({
  left: `${(i * 137.5) % 100}%`,
  top:  `${(i * 97.3)  % 100}%`,
  duration: `${15 + (i % 5) * 4}s`,
  delay:    `${(i % 6) * 0.8}s`,
}));

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Drifting dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: "#1FCFC1",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-5 sm:space-y-8">

            {/* Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-xs sm:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                E-Commerce Backend & Data Operations Executive
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">precision.</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Hi, I'm Jagasurya — an AI & Machine Learning graduate with experience in
                data analysis and backend e-commerce systems. I build machine learning
                models and work with large datasets to solve real-world business problems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in animate-delay-300">
              <Button size="lg" onClick={scrollToContact}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="/Jagasurya_H_Resume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                { icon: FaGithub,    href: "https://github.com/jagasurya" },
                { icon: FaLinkedin,  href: "https://www.linkedin.com/in/jagasuryah" },
                { icon: FaInstagram, href: "https://www.instagram.com/jagasuryaa" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — Profile Image */}
          <div className="relative animate-fade-in animate-delay-300 hidden sm:block">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Jagasurya"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Available badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium">Available for work</span>
                  </div>
                </div>
                {/* Years badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 animate-float animate-delay-500">
                  <div className="text-xl sm:text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-12 sm:mt-20 animate-fade-in animate-delay-600">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 sm:px-8 py-3 sm:py-4">
                  <span className="text-base sm:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
