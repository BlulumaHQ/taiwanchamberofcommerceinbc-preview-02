import PageHero from "@/components/PageHero";

const FormerPresidents = () => (
  <>
    <PageHero
      title="Former Presidents"
      titleCn="歷屆會長"
      subtitle="Honoring the leaders who have shaped TCCBC through the years."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />
    <section className="section-padding">
      <div className="container mx-auto px-5 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed mb-8">
          The Taiwan Chamber of Commerce in BC has been led by dedicated presidents through 34 terms of service. Each leader has brought unique vision and contributed to the growth and success of our organization.
        </p>
        <div className="bg-section-alt rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Legacy of Leadership</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our former presidents have built the foundation that makes TCCBC the thriving business community it is today. Their collective efforts in advocacy, networking, and community building continue to inspire current and future leaders.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default FormerPresidents;
