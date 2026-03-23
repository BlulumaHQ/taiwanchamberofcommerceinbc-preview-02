import PageHero from "@/components/PageHero";

const Yearbook = () => (
  <>
    <PageHero
      title="Yearbook"
      titleCn="年鑑"
      subtitle="Explore our annual yearbooks documenting TCCBC's achievements and milestones."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border pt-12">
          <p className="text-sm text-muted-foreground font-light leading-[1.9] mb-6">
            Our yearbooks serve as a comprehensive record of TCCBC's activities, events, and accomplishments throughout each term. They highlight our members' achievements and document the growth of our organization.
          </p>
          <p className="text-sm text-muted-foreground font-light leading-[1.9]">
            Stay tuned for our latest yearbook publications showcasing the 34th term's highlights and achievements.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Yearbook;
