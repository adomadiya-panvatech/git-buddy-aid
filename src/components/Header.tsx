
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { handleNavClick } = useSmoothScroll();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#practice-areas", label: "Practice Areas" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>1-800-916-2459</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>sales@panvatech.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>14269 Danielson St, Suite 400, Poway, CA 92064</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-border/50"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-base font-medium text-foreground hover:text-primary transition-colors duration-300 group py-2"
                onClick={(e) => handleNavClick(e, link.href.replace("#", ""))}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://stageadmin.ringremind.com/Onboarding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold rounded-full shadow-lg hover:shadow-accent/25 px-6 py-2 transform hover:scale-105 transition-all duration-300">
                Free Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t bg-white/95 backdrop-blur-lg"
            >
              <nav className="container px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    onClick={(e) => {
                      handleNavClick(e, link.href.replace("#", ""));
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="pt-4 border-t border-border">
                  <div className="space-y-3 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4" />
                      <span>1-800-916-2459</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4" />
                      <span>sales@panvatech.com</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://stageadmin.ringremind.com/Onboarding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold rounded-full shadow-lg">
                      Free Consultation
                    </Button>
                  </a>
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
