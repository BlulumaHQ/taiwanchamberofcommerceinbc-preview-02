import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <span className="text-[120px] md:text-[200px] font-heading italic font-light text-border leading-none">404</span>
        <p className="text-sm text-muted-foreground font-light mt-4 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] text-foreground font-medium border-b border-foreground/20 pb-1 hover:border-secondary hover:text-secondary transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
