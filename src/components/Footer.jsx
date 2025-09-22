import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import Logo from "../assets/Mohana_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "AC Services", href: "#services" },
    { label: "Refrigerator Repair", href: "#services" },
    { label: "Washing Machine", href: "#services" },
    { label: "Water Purifier", href: "#services" },
    { label: "Emergency Service", href: "#contact" },
  ];

  return (
    <footer className="py-16 px-4 border-t border-glass-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-60 h-19 flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Mohana Air Conditioners Logo"
                  className="rounded-none object-cover w-80 h-15"
                />
              </div>
            </div>

            {/* Company Description */}
            <p className="text-muted-foreground leading-relaxed text-sm">
              Professional home appliance repair and maintenance services.
              Trusted by 500+ customers across Chennai.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 73389 65589</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>service@mohanaac.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Our Services
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Get Help Now
            </h3>
            <div className="glass-card space-y-4">
              <p className="text-sm text-muted-foreground">
                Need immediate assistance? Our experts are ready to help!
              </p>
              <div className="space-y-2">
                <button
                  className="w-full btn-primary text-sm py-2"
                  onClick={() => (window.location.href = "tel:+917338965589")}
                >
                  Call Now
                </button>
                <button
                  className="w-full btn-glass text-sm py-2"
                  onClick={() => {
                    const phone = "+917338965589";
                    const message =
                      "Hi, I need appliance repair service. Please help!";
                    window.open(
                      `https://wa.me/${phone}?text=${encodeURIComponent(
                        message
                      )}`,
                      "_blank"
                    );
                  }}
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-glass-border text-center space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              © {currentYear} Mohana AC Services. Made with{" "}
              <Heart
                className="w-4 h-4 text-red-400 mx-1"
                fill="currentColor"
              />
              for better homes.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <span>
                <a
                  href="/Mohana_Air_Conditioners/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-medium transition-all duration-300 px-2 py-1 rounded-lg hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-primary/10"
                >
                  Privacy Policy
                </a>
              </span>
              <span>
                <a
                  href="/Mohana_Air_Conditioners/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-medium transition-all duration-300 px-2 py-1 rounded-lg hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-primary/10"
                >
                  Terms And Conditions
                </a>
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            <a
              href="https://bharathi708698.github.io/Professional-Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-medium transition-all duration-300 px-2 py-1 rounded-lg hover:text-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-primary/10"
            >
              Developed & Designed by Vijaya Tech solutions with ❣️
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
