import { Link } from "react-router-dom";

const PageHero = ({
  title,
  titleCn,
  subtitle,
  breadcrumb,
}: {
  title: string;
  titleCn?: string;
  subtitle?: string;
  breadcrumb?: { label: string; path: string }[];
}) => (
  <section className="relative bg-primary min-h-[50vh] flex items-end">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
    <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24 pt-40">
      {breadcrumb && (
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40 mb-8">
          <Link to="/" className="hover:text-primary-foreground/60 transition-colors">Home</Link>
          {breadcrumb.map((item) => (
            <span key={item.path}>
              <span className="mx-2">—</span>
              <Link to={item.path} className="hover:text-primary-foreground/60 transition-colors">{item.label}</Link>
            </span>
          ))}
        </div>
      )}
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading italic font-light text-primary-foreground leading-[0.95] mb-4">
          {title}
        </h1>
        {titleCn && (
          <p className="text-xl md:text-2xl text-secondary font-light mt-4 font-chinese tracking-wide">
            {titleCn}
          </p>
        )}
        {subtitle && (
          <p className="text-sm md:text-base text-primary-foreground/50 mt-6 max-w-xl font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
