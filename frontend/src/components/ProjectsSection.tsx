import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "ArguMate-AI",
    subtitle: "Agentic Adversarial AI Debate System",
    desc: "Research-inspired AI project structuring debates between autonomous agents with adversarial reasoning and structured argumentation.",
    tech: ["Python", "LangChain", "AI Agents"],
    github: "https://github.com/athul-jestin/ArguMate-AI",
  },
  {
    title: "Cafe-chatbot",
    subtitle: "Conversational Data Analysis AI",
    desc: "AI assistant for interpreting and analyzing café-related data using NLP techniques.",
    tech: ["Python", "NLP", "Chatbot"],
    github: "https://github.com/athul-jestin/Cafe-chatbot",
  },
  {
    title: "Titanic-survival-predictor",
    subtitle: "ML Prediction Web App",
    desc: "Streamlit-based ML application predicting Titanic passenger survival using linear regression.",
    tech: ["Python", "Streamlit", "scikit-learn"],
    github: "https://github.com/athul-jestin/Titanic-survival-predictor",
  },
  {
    title: "Word-up-master",
    subtitle: "AI-Powered Language Learning",
    desc: "Flashcard-based vocabulary learning app leveraging machine translation for effective learning.",
    tech: ["Python", "ML", "Translation API"],
    github: "https://github.com/athul-jestin/Word-up-master",
  },
  {
    title: "Salary-Predictor",
    subtitle: "Predictive Analytics System",
    desc: "ML-based salary estimation using clean data science workflows and model interpretation.",
    tech: ["Python", "scikit-learn", "Pandas"],
    github: "https://github.com/athul-jestin/Salary-Predictor",
  },
  {
    title: "Car-parking-space-detection",
    subtitle: "Computer Vision Automation",
    desc: "Python-based parking spot detection using OpenCV and cvzone for real-time automation.",
    tech: ["Python", "OpenCV", "cvzone"],
    github: "https://github.com/athul-jestin/Car-parking-space-detection",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:glow-blue transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-primary font-mono text-xs mb-2">{p.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] text-muted-foreground border-border">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
