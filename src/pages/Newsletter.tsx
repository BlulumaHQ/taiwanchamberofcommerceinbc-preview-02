import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

const Newsletter = () => (
  <>
    <PageHero
      title="Newsletter"
      titleCn="電子報"
      subtitle="Subscribe and stay up-to-date with TCCBC developments."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5 max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">Stay Connected</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter and stay up-to-date with the latest developments. Be a part of our business community. Find out what Chamber of Commerce membership can do for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-sm text-muted-foreground font-chinese">
          最完整的活動信息，請至我們的社群媒體頁面
        </p>
      </div>
    </section>
  </>
);

export default Newsletter;
