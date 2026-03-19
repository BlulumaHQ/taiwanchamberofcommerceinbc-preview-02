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
  <section className="bg-primary section-padding">
    <div className="container mx-auto px-5">
      {breadcrumb && (
        <div className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-6">
          <Link to="/" className="hover:text-primary-foreground/70">Home</Link>
          {breadcrumb.map((item) => (
            <span key={item.path}>
              <span className="mx-2">/</span>
              <Link to={item.path} className="hover:text-primary-foreground/70">{item.label}</Link>
            </span>
          ))}
        </div>
      )}
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">{title}</h1>
      {titleCn && <p className="text-xl md:text-2xl text-secondary font-bold mt-2 font-chinese">{titleCn}</p>}
      {subtitle && <p className="text-lg text-primary-foreground/70 mt-4 max-w-2xl">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
