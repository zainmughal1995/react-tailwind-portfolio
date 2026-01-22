import React from "react";
import { Github, Linkedin, Instagram, Mail, MapPin, Heart } from "lucide-react";
import Button from "@/components/Button";

// Footer links
const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Social links
const socialLinks = [
  { icon: Github, href: "https://github.com/zainmughal1995/", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/zain-%F0%9F%8C%8D-07b91a204/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/zainulabdin.dev/",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-white/5 overflow-hidden">
      {/* Centered Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Zain<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              WebGIS Developer building scalable, performant, map-centric web
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                mughalzain1995@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Pakistan (Remote)
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Let’s work together</h4>
            <p className="text-sm text-muted-foreground">
              Have a project in mind?
            </p>
            <Button size="sm">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Zain. Made with{" "}
            <Heart className="w-4 h-4 text-red-500" />.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
