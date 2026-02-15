import { Eye, Shield, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Eye, label: "Clarity", desc: "Writing clean, readable, purposeful code" },
  { icon: Shield, label: "Ownership", desc: "End-to-end responsibility from idea to deployment" },
  { icon: BookOpen, label: "Continuous Learning", desc: "Always exploring new tools and techniques" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Software Engineer and GenAI/ML enthusiast focused on building practical, product-driven AI systems. 
          With a background in Computer Science and hands-on Python-based development, I currently work as a 
          Software Engineer at ThoughtMinds, contributing to backend systems and scalable architecture.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-12">
          My core driver is transforming complex ideas into usable solutions. I'm passionate about applied AI, 
          SaaS-based products, clean architecture, thoughtful APIs, and intelligent automation — creating 
          technology that is technically sound and genuinely impactful.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.label}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <v.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">{v.label}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
