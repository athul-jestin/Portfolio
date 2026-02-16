import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const bullets = [
  "Building AI-driven products and backend systems with production-ready solutions",
  "Designing and implementing APIs and scalable architectures",
  "Integrating machine learning models into real-world applications",
  "Contributing to end-to-end product development from problem definition to deployment",
  "Ensuring solutions are technically robust and business-aligned",
];

const stack = ["Python", "FastAPI", "PostgreSQL", "Applied AI/ML", "REST APIs"];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Expe<span className="text-gradient">rience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />

        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary glow-blue" />
          <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Software Engineer</h3>
                <p className="text-primary font-mono text-sm">ThoughtMinds • Kochi, Kerala</p>
                <p className="text-muted-foreground text-sm">November 2024 – Present</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {bullets.map((b, i) => (
                <li key={i} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <Badge key={s} variant="outline" className="text-primary border-primary/30 text-xs">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
