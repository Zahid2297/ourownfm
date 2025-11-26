import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = ({ scrollToSection }) => {
  const footerLinks = {
    company: [
      { label: "About Us", action: () => scrollToSection("about") },
      { label: "Programs", action: () => scrollToSection("programs") },
      { label: "Why Choose Us", action: () => scrollToSection("why-us") },
      { label: "Contact", action: () => scrollToSection("contact") },
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Resources", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Support", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer
      id="contact"
      className="relative border-t bg-muted/30 overflow-hidden"
    >
      {/* Normal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/40 to-secondary/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/logo1 black.png"
                alt="Our Own FM Academy Logo"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/logo1 white (2).png"
                alt="Our Own FM Academy Logo"
                className="h-10 w-auto hidden dark:block"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Building future-ready Facilities Management professionals across
              India & GCC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm text-muted-foreground">
                  info@ourownfm.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm text-muted-foreground">
                  +91 XXX XXX XXXX
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-sm text-muted-foreground">
                  India & GCC
                </span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button key={index} variant="ghost" size="icon" asChild>
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Our Own FM Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
