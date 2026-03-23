import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark">
      <div className="mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 max-w-7xl mx-auto">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/images/tccbc-logo.png"
                alt="Taiwan Chamber of Commerce in BC"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-section-dark-foreground/60 leading-relaxed font-light">
              Connecting Taiwanese businesses and professionals in British Columbia since establishment.
            </p>
          </div>

          {/* Column 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-6 text-section-dark-foreground/40">
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
                    className="text-sm text-section-dark-foreground/60 hover:text-section-dark-foreground transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Membership */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-6 text-section-dark-foreground/40">
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
                    className="text-sm text-section-dark-foreground/60 hover:text-section-dark-foreground transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-6 text-section-dark-foreground/40">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-section-dark-foreground/60 font-light">
              <li>
                <a href="mailto:info@tccbc.ca" className="hover:text-section-dark-foreground transition-colors">
                  info@tccbc.ca
                </a>
              </li>
              <li>
                <a href="tel:+16047718585" className="hover:text-section-dark-foreground transition-colors">
                  +1 604 771 8585
                </a>
              </li>
              <li>
                193-11860 Hammersmith Way,<br />
                Richmond, BC V6Y 0L4
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-section-dark-foreground/10">
        <div className="mx-auto px-6 md:px-10 py-6 text-center">
          <p className="text-[11px] text-section-dark-foreground/40 tracking-wide">
            © {year} Taiwan Chamber of Commerce in BC. All rights reserved. |{" "}
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-section-dark-foreground/60 transition-colors"
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
