import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/tejas-lashkare',
      label: 'LinkedIn',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/teja_ane_nenu',
      label: 'Instagram',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:tejaslashkare9512@gmail.com',
      label: 'Email',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: 'tel:8767641585',
      label: 'Phone',
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Tejas Lashkare</h3>
            <p className="text-muted-foreground mb-4">
              MBA candidate & Digital Marketer specializing in data-driven marketing strategies and
              financial planning.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="tel:8767641585"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  8767641585
                </a>
              </li>
              <li>
                <a
                  href="mailto:tejaslashkare9512@gmail.com"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  tejaslashkare9512@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Tejas Lashkare. All rights reserved. Designed by Tejas Lashkare — MBA
            candidate & Digital Marketer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
