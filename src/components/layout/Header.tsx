import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", path: "/About-us__" },
      { label: "History", path: "/History-of-TCCBC" },
      { label: "Board & Staff", path: "/Board-Staff" },
      { label: "Former Presidents", path: "/Former-Presidents" },
      { label: "Yearbook", path: "/Yearbook" },
    ],
  },
  {
    label: "News",
    children: [
      { label: "Latest News", path: "/Latest-News" },
      { label: "Newsletter", path: "/Newsletter" },
    ],
  },
  { label: "Events", path: "/upcoming-events" },
  { label: "Gallery", path: "/Photo-Album" },
  { label: "Sponsorship", path: "/Sponsorship-Opportunities" },
  {
    label: "Membership",
    children: [
      { label: "Why Join Us", path: "/Why-Join-Us" },
      { label: "Levels", path: "/Membership-Levels" },
      { label: "Benefits", path: "/Membership-Benefits" },
      { label: "Join Us", path: "/join-us" },
    ],
  },
  { label: "Contact", path: "/Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/tccbc-logo.png"
            alt="Taiwan Chamber of Commerce in BC"
            className="h-[65px] md:h-[75px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                    scrolled ? "text-foreground hover:text-secondary" : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 min-w-[220px] bg-background border border-border shadow-2xl py-3 animate-fade-in-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-6 py-2.5 text-xs uppercase tracking-[0.1em] text-foreground hover:text-secondary hover:bg-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                  scrolled ? "text-foreground hover:text-secondary" : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/join-us"
            className="ml-6 px-6 py-2.5 border border-secondary text-secondary text-xs font-semibold uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Join
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <nav className="px-6 py-6 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full py-3 text-xs font-medium uppercase tracking-[0.15em] text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-1 pb-2 border-l border-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-secondary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className="block py-3 text-xs font-medium uppercase tracking-[0.15em] text-foreground hover:text-secondary"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border">
              <Link
                to="/join-us"
                className="block text-center px-5 py-3 border border-secondary text-secondary text-xs font-semibold uppercase tracking-[0.15em] hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                Join the Chamber
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
