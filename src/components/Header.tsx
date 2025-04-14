// src/components/Header.tsx
import { useState, useEffect } from "react";
import logo from "../assets/images/jb-web-services-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-glass shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold relative"
            style={{
              zIndex: mobileMenuOpen ? 100 : 10,
              position: "relative",
            }}
          >
            <img src={logo} alt="Logo" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li>
                <a href="#contact" className="btn btn-primary">
                  Let's Talk
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white relative"
            style={{
              zIndex: mobileMenuOpen ? 100 : 60,
              position: "relative",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Removed backdrop-filter and related properties */}
        <div
          className={`fixed inset-0 bg-primary-dark flex flex-col items-center justify-center transition-all duration-300 z-40 md:hidden ${
            mobileMenuOpen
              ? "opacity-95 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }`}
          style={{
            backgroundColor: mobileMenuOpen
              ? "rgba(5, 5, 5, 0.95)"
              : "rgba(5, 5, 5, 0)",
          }}
        >
          <nav>
            <ul className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-2xl text-text-secondary hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li className="pt-4">
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
