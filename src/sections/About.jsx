import { FaCode } from "react-icons/fa";
import { TbDatabaseCog } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { LuLightbulb } from "react-icons/lu";

const highlights = [
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Building code that is easy to maintain, scalable, and built for long-term reliability.",
  },
  {
    icon: TbDatabaseCog,
    title: "Data Processing",
    description:
      "Handling large datasets efficiently using Python, Pandas, and CSV workflows for scalable operations.",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    description:
      "Working closely with cross-functional teams and vendors to deliver accurate and timely product launches.",
  },
  {
    icon: LuLightbulb,
    title: "Continuous Learning",
    description:
      "Exploring machine learning concepts and data analytics to build smarter, future-ready solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Turning data into meaningful insights,
              <span className="font-serif italic font-normal text-white">
                {" "}one step at a time.
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <p>
                I'm an AI & Machine Learning graduate with practical experience in
                e-commerce data operations, specializing in product data management and
                analytics. I enjoy working with data to uncover patterns, improve
                accuracy, and support better decision-making.
              </p>
              <p>
                With hands-on experience in Python, Pandas, NumPy, and Magento, I have
                worked on data validation, bulk processing, and catalog management,
                ensuring high-quality and reliable data systems.
              </p>
              <p>
                I'm currently focused on strengthening my machine learning and data
                analytics skills, building projects, and growing towards a career in
                data and AI-driven roles.
              </p>
            </div>

            <div className="glass rounded-2xl p-5 sm:p-6 glow-border animate-fade-in animate-delay-300">
              <p className="text-base sm:text-lg font-medium italic text-foreground">
                "My mission is to leverage data and machine learning to create
                intelligent, reliable, and scalable solutions — turning complex
                information into insights that drive smarter decisions."
              </p>
            </div>
          </div>

          {/* Right Column — Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-5 sm:p-6 rounded-2xl animate-scale-in"
                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
