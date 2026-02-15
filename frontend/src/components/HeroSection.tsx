import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { Button } from "@/components/ui/button";

const roles = [
  "Software Engineer",
  "GenAI/ML Enthusiast",
  "Building Intelligent Systems",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="text-foreground">Athul</span>{" "}
            <span className="text-gradient">Jestin</span>
          </h1>
          <div className="h-8 mb-8">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-lg md:text-xl text-muted-foreground font-mono"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>
          <div className="flex gap-4 justify-center mt-10">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/80 glow-blue px-8 py-3 rounded-lg font-semibold"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
