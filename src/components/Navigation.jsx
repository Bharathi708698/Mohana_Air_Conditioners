import { useState, useEffect } from "react";
import { Phone, Home, Settings, User, MessageCircle, Info } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "../assets/Mohana_logo.png";
import Logo_Alone from "../assets/Mohana_logo_alone.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "services", "about", "testimonial", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === "home" ? "hero" : section
        );
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Home",
      href: "#hero",
      id: "home",
      icon: <Home className="w-5 h-5" />,
    },
    {
      label: "Services",
      href: "#services",
      id: "services",
      icon: <Settings className="w-5 h-5" />,
    },
    {
      label: "About",
      href: "#about",
      id: "about",
      icon: <User className="w-5 h-5" />,
    },
    {
      label: "Testimonial",
      href: "#testimonial",
      id: "testimonial",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      label: "Contact",
      href: "#contact",
      id: "contact",
      icon: <Info className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Desktop and tablet header */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 border border-white/10 shadow-xl transition-all duration-500

          ${
            isScrolled
              ? "max-w-[90%] rounded-2xl h-16 scale-95"
              : "max-w-full rounded-2xl h-20 scale-100"
          }
          hidden md:flex items-center justify-between px-6 lg:px-10`}
      >
        {/* Left: Logo + Company Name (auto-resizes) */}
        <div
          className={`flex items-center transition-all duration-300 ${
            isScrolled ? "w-14" : "min-w-[100px] space-x-4"
          }`}
        >
          {!isScrolled ? (
            <div className="w-40 h-10 rounded-full flex items-center justify-center shrink-0">
              <a
                key={"Home"}
                href={"#hero"}
                onClick={() => setActiveSection("home")}
                aria-label={"Home"}
                title={"Home"}
              >
                <img
                  src={Logo}
                  alt="Mohana Air Conditioners Logo"
                  className="rounded-none object-cover w-35 h-12"
                />
              </a>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <a
                key={"Home"}
                href={"#hero"}
                onClick={() => setActiveSection("home")}
                aria-label={"Home"}
                title={"Home"}
              >
                <img
                  src={Logo_Alone}
                  alt="Mohana Air Conditioners Logo"
                  className="rounded-none object-cover w-50 h-12"
                />
              </a>
            </div>
          )}
        </div>

        {/* Center: Navigation items */}
        <div className="flex-1 flex justify-center space-x-6 px-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300
  ${
    activeSection === item.id
      ? "text-primary bg-white/10 backdrop-blur-md shadow-lg scale-105"
      : "text-foreground hover:text-primary hover:bg-white/10 hover:backdrop-blur-md hover:shadow-md hover:scale-105"
  }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm -z-10 animate-pulse"></div>
              )}
            </a>
          ))}
        </div>

        {/* Right: Call button */}
        <div className={`flex items-center ${isScrolled ? "ml-4" : "ml-8"}`}>
          <Button
            className={`btn-primary flex items-center space-x-3 transition-all duration-300 ${
              isScrolled ? "w-12 px-0 justify-center" : "px-6"
            }`}
            aria-label="Call now"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            {!isScrolled && (
              <span className="hidden lg:inline select-none">
                +91 73389 65589
              </span>
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile header */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:hidden backdrop-blur-md bg-white/10 border-b border-white/10 shadow-xl rounded-b-2xl">
        {/* Left: Logo */}
        <div className="w-6 h-6 rounded-full flex items-center justify-center">
          <a
            key={"Home"}
            href={"#hero"}
            onClick={() => setActiveSection("home")}
            aria-label={"Home"}
            title={"Home"}
          >
            <img src={Logo_Alone} alt="Mohana Air Conditioners Logo" />
          </a>
        </div>

        {/* Center: Nav icons */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "text-primary glass-light shadow-lg scale-105"
                  : "text-muted-foreground hover:text-primary hover:glass-light hover:scale-105"
              }`}
              onClick={() => setActiveSection(item.id)}
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Right: Call Button (icon only) */}
        <Button
          className="btn-primary w-12 h-12 flex items-center justify-center"
          aria-label="Call now"
        >
          <Phone className="w-5 h-5" />
        </Button>
      </nav>
    </>
  );
};

export default Navigation;
