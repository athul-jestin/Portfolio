import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import NotificationModal from "./NotificationModal";
import emailjsConfig from "@/config/emailjs";

const socials = [
  { icon: Phone, label: "+91 8301887868", href: "tel:+918301887868" },
  { icon: Mail, label: "athuljestin02@gmail.com", href: "mailto:athuljestin02@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/athul-jestin-846bb7209/" },
  { icon: Github, label: "GitHub", href: "https://github.com/athul-jestin" },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    message: string;
  }>({ isOpen: false, type: "success", message: "" });

  useEffect(() => {
    // Initialize EmailJS with public key from environment
    emailjs.init(emailjsConfig.publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          to_email: emailjsConfig.receiveEmail,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setNotification({
        isOpen: true,
        type: "success",
        message: "Message sent successfully!",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setNotification({
        isOpen: true,
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded mb-4" />
        <p className="text-muted-foreground mb-10">
          Open to discussing AI/ML projects, backend engineering opportunities, collaborations, and product-focused roles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-blue transition-all">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-card border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-card border-border focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-card border-border focus:border-primary"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/80 glow-blue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} className="mr-2" />
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      <NotificationModal
        isOpen={notification.isOpen}
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification({ ...notification, isOpen: false })}
      />
    </section>
  );
}
