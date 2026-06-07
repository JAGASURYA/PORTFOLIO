import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "Diabetes Prediction (ML)",
    description: "A machine learning-based system that predicts diabetes risk using healthcare data, featuring data preprocessing, model training, and accurate predictive insights.",
    image: "/projects/project1.png",
    tags: ["Python", "Data Analysis", "Machine Learning"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Coming Soon",
    description: "Currently working on an exciting project focused on real-world problem solving using data and machine learning.",
    image: "/projects/project2.png",
    tags: ["Coming Soon", "In Progress", "Under Development"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Coming Soon",
    description: "Currently working on an exciting project focused on real-world problem solving using data and machine learning.",
    image: "/projects/project3.png",
    tags: ["Coming Soon", "In Progress", "Under Development"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Coming Soon",
    description: "Currently working on an exciting project focused on real-world problem solving using data and machine learning.",
    image: "/projects/project4.png",
    tags: ["Coming Soon", "In Progress", "Under Development"],
    link: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, delay }) => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="scroll-hidden group glass rounded-2xl overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
            <FiArrowUpRight className="w-5 h-5" />
          </a>
          <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
          <FiArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIdx) => (
            <span key={tagIdx} className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const headerRef = useScrollReveal();
  const ctaRef    = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={headerRef} className="scroll-hidden text-center mx-auto max-w-3xl mb-10 sm:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            A curated selection of my projects, focused on data analysis, machine learning, and building practical solutions to real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} delay={idx * 100} />
          ))}
        </div>

        <div ref={ctaRef} className="scroll-hidden text-center mt-10 sm:mt-12">
          <AnimatedBorderButton>
            View All Projects
            <FiArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
