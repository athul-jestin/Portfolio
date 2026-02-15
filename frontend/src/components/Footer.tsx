import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/athul-jestin" },
  { icon: Linkedin, href: "https://linkedin.com/in/athul-jestin-846bb7209/" },
  { icon: Mail, href: "mailto:athuljestin02@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">© 2026 Athul Jestin. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <s.icon size={18} />
            </a>
          ))}
          <a
            href="#"
            className="ml-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
