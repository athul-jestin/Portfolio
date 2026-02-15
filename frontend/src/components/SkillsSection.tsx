import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    title: "Programming",
    color: "primary",
    skills: ["Python", "C++", "C"],
  },
  {
    title: "AI / Machine Learning",
    color: "secondary",
    skills: ["Applied ML", "Generative AI", "Model Integration", "Prompt Engineering", "Data Preprocessing", "Model Evaluation"],
  },
  {
    title: "Backend & APIs",
    color: "primary",
    skills: ["FastAPI", "RESTful API Design", "Backend Architecture", "Authentication Systems"],
  },
  {
    title: "Databases",
    color: "secondary",
    skills: ["PostgreSQL", "SQL", "Schema Design"],
  },
  {
    title: "Tools & Technologies",
    color: "primary",
    skills: ["Git", "GitHub", "Docker", "Linux/WSL", "Pipenv"],
  },
  {
    title: "Engineering Practices",
    color: "secondary",
    skills: ["Clean Code", "Modular Architecture", "Version Control", "Product-Oriented Dev"],
  },
];

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className={`font-semibold mb-4 ${cat.color === "secondary" ? "text-secondary" : "text-primary"}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 ${
                      cat.color === "secondary"
                        ? "bg-secondary/10 text-secondary border border-secondary/20"
                        : "bg-primary/10 text-primary border border-primary/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
