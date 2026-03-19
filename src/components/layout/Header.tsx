import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", path: "/About-us__" },
      { label: "History of TCCBC", path: "/History-of-TCCBC" },
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
  { label: "Photo Album", path: "/Photo-Album" },
  { label: "Sponsorship", path: "/Sponsorship-Opportunities" },
  {
    label: "Membership",
    children: [
      { label: "Why Join Us", path: "/Why-Join-Us" },
      { label: "Membership Levels", path: "/Membership-Levels" },
      { label: "Membership Benefits", path: "/Membership-Benefits" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/tccbc-logo.png"
            alt="Taiwan Chamber of Commerce in BC"
            className="h-[65px] md:h-[75px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 min-w-[200px] bg-background border border-border rounded-lg shadow-xl py-2 animate-fade-in-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
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
                className="px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/join-us"
            className="ml-3 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            JOIN US
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <nav className="px-5 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full py-3 text-sm font-semibold text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
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
                  className="block py-3 text-sm font-semibold text-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/join-us"
              className="block mt-4 text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-lg"
            >
              JOIN US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
