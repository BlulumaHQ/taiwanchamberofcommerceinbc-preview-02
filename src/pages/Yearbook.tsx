import PageHero from "@/components/PageHero";

const Yearbook = () => (
  <>
    <PageHero
      title="Yearbook"
      titleCn="年鑑"
      subtitle="Explore our annual yearbooks documenting TCCBC's achievements and milestones."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />
    <section className="section-padding">
      <div className="container mx-auto px-5 max-w-3xl">
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our yearbooks serve as a comprehensive record of TCCBC's activities, events, and accomplishments throughout each term. They highlight our members' achievements and document the growth of our organization.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Stay tuned for our latest yearbook publications showcasing the 34th term's highlights and achievements.
        </p>
      </div>
    </section>
  </>
);

export default Yearbook;
