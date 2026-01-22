import { Lightbulb, Users, Rocket, Code2 } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code for robust WebGIS applications.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast and responsive geospatial applications that users love.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Designing intuitive interfaces for seamless interaction with spatial data.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Applying creative solutions to complex geospatial challenges.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          {/* Left Column */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building The Future,
              <span className="font-serif italic font-normal text-white ">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ">
              <p>
                Bridging maps and the web through 5+ years of experience
                building high-performance, interactive geospatial applications.
                Focused on crafting intuitive spatial interfaces using React,
                Node.js, and Django, with an emphasis on clean architecture and
                efficient data visualization. Driven by curiosity, constantly
                exploring new technologies shaping the future of web and GIS.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground text-center ">
                Where maps meet code, insight begins.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  {<item.icon className="w-6 h-6 text-primary " />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
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

export default About;
