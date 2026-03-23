import { Link } from "react-router-dom";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: refined fixed right-side button */}
      <div className="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/join-us"
          className="block bg-cta-sticky text-cta-sticky-foreground px-3 py-8 text-[10px] font-semibold uppercase tracking-[0.25em] shadow-2xl hover:bg-secondary transition-colors duration-300"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Join Now
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cta-sticky shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between px-5 py-3">
          <p className="text-cta-sticky-foreground text-xs font-light">Ready to grow your business?</p>
          <Link
            to="/join-us"
            className="bg-secondary text-secondary-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider"
          >
            Join Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;
