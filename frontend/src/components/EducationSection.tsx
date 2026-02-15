import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
        }>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Edu<span className="text-gradient">cation</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex gap-6 items-start">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">B.Tech in Computer Science & Engineering</h3>
            <p className="text-primary font-mono text-sm mt-1">Jyothi Engineering College</p>
            <p className="text-muted-foreground text-sm mt-1">Thrissur, Kerala, India • Graduated 2024</p>
          </div>
        </div>
      </div>
    </section>);

}