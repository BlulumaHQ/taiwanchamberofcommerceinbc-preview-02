import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="container mx-auto px-5 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/tccbc-logo.png"
                alt="Taiwan Chamber of Commerce in BC"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-section-dark-foreground/70 leading-relaxed">
              Connecting Taiwanese businesses and professionals in British Columbia since establishment.
            </p>
          </div>

          {/* Column 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-section-dark-foreground">
              Learn More
            </h4>
            <ul className="space-y-3">
              {[
                { label: "History of TCCBC", path: "/History-of-TCCBC" },
                { label: "Board & Staff", path: "/Board-Staff" },
                { label: "Former Presidents", path: "/Former-Presidents" },
                { label: "Yearbook", path: "/Yearbook" },
                { label: "Latest News", path: "/Latest-News" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Membership */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-section-dark-foreground">
              Membership
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Why Join Us", path: "/Why-Join-Us" },
                { label: "Membership Levels", path: "/Membership-Levels" },
                { label: "Member Benefits", path: "/Membership-Benefits" },
                { label: "Join Us", path: "/join-us" },
                { label: "Sponsorship", path: "/Sponsorship-Opportunities" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-section-dark-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <a
                  href="mailto:info@tccbc.ca"
                  className="text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors"
                >
                  info@tccbc.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <a
                  href="tel:+16047718585"
                  className="text-sm text-section-dark-foreground/70 hover:text-section-dark-foreground transition-colors"
                >
                  +1 604 771 8585
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-sm text-section-dark-foreground/70">
                  193-11860 Hammersmith Way,
                  <br />
                  Richmond, BC V6Y 0L4
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-section-dark-foreground/10">
        <div className="container mx-auto px-5 py-5 text-center">
          <p className="text-xs text-section-dark-foreground/50">
            © {year} Taiwan Chamber of Commerce in BC. All rights reserved. |{" "}
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-section-dark-foreground/70 transition-colors"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
