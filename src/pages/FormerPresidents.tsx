import PageHero from "@/components/PageHero";

const FormerPresidents = () => (
  <>
    <PageHero
      title="Former Presidents"
      titleCn="歷屆會長"
      subtitle="Honoring the leaders who have shaped TCCBC through the years."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm text-muted-foreground font-light leading-[1.9] mb-8">
              The Taiwan Chamber of Commerce in BC has been led by dedicated presidents through 34 terms of service. Each leader has brought unique vision and contributed to the growth and success of our organization.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-t border-border pt-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Legacy of Leadership</p>
              <p className="text-sm text-muted-foreground font-light leading-[1.9]">
                Our former presidents have built the foundation that makes TCCBC the thriving business community it is today. Their collective efforts in advocacy, networking, and community building continue to inspire current and future leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default FormerPresidents;
