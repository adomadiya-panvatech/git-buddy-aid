
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Practice Areas" },
    { href: "/attorneys", label: "Our Team" },
    { href: "/case-results", label: "Results" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    window.location.href = href;
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-3 px-4 hidden lg:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call 24/7: (800) 916-2459</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@ringremind.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Serving Poway, CA & Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="text-foreground hover:text-accent font-medium transition-colors duration-300 relative group"
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              className="bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-none text-sm"
              onClick={() => window.location.href = '/contact'}
            >
              FREE CONSULTATION
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t bg-white"
            >
              <nav className="container px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    className="block w-full text-left text-lg font-medium text-foreground hover:text-accent py-2"
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t">
                  <Button 
                    className="w-full bg-accent hover:bg-accent-light text-white font-semibold"
                    onClick={() => handleLinkClick('/contact')}
                  >
                    FREE CONSULTATION
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
