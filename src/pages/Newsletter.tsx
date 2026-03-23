import PageHero from "@/components/PageHero";

const Newsletter = () => (
  <>
    <PageHero
      title="Newsletter"
      titleCn="電子報"
      subtitle="Subscribe and stay up-to-date with TCCBC developments."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-heading italic font-light text-foreground leading-[1.05] mb-6">
              Stay<br />Connected
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              Subscribe to our newsletter and stay up-to-date with the latest developments. Be a part of our business community. Find out what Chamber of Commerce membership can do for you.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-border pt-8">
              <div className="flex flex-col gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-5 py-4 border border-border bg-background text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors"
                />
                <button className="w-full bg-primary text-primary-foreground px-6 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-secondary transition-colors duration-300">
                  Subscribe Newsletter
                </button>
              </div>
              <p className="text-xs text-muted-foreground font-light mt-6 font-chinese">
                最完整的活動信息，請至我們的社群媒體頁面
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Newsletter;
