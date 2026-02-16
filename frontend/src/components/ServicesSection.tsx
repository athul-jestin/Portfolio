import { Bot, Server } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Applications",
    items: ["Machine learning integrations", "Generative AI solutions", "Intelligent automation systems"],
  },
  {
    icon: Server,
    title: "Scalable Backend Architecture",
    items: ["Python & FastAPI development", "Clean API design", "Authentication systems", "Production-ready deployment"],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Services I <span className="text-gradient">Offer</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-blue transition-all duration-300 group"
            >
              <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex gap-2">
                    <span className="text-primary">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-center text-sm">
          <span className="text-primary font-semibold">Approach:</span> Product-oriented methodology — translating ideas into 
          technically sound solutions for AI-driven SaaS products, automation tools, and custom backend systems.
        </p>
      </div>
    </section>
  );
}
