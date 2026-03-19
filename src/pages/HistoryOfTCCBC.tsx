import PageHero from "@/components/PageHero";

const HistoryOfTCCBC = () => (
  <>
    <PageHero
      title="History of TCCBC"
      titleCn="商會歷史"
      subtitle="A legacy of service, connection, and community building in British Columbia."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />
    <section className="section-padding">
      <div className="container mx-auto px-5 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">Our Journey</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The Taiwan Chamber of Commerce in BC has a rich history spanning over three decades. Established to serve the growing Taiwanese business community in British Columbia, TCCBC has evolved into one of the most respected business organizations in the region.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Now in our 34th term, we continue to build on the strong foundation laid by our founding members. Each term has brought new leadership, fresh ideas, and expanded programs — all while maintaining our core commitment to serving Taiwanese businesses in BC.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Through the years, TCCBC has organized hundreds of networking events, educational seminars, and community celebrations. Our Annual Gala has become a highlight of the business calendar, bringing together leaders from across the province.
        </p>
        <div className="bg-section-alt rounded-xl p-8 mt-10">
          <h3 className="text-xl font-bold text-foreground mb-4">Key Milestones</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
              Establishment of the Taiwan Chamber of Commerce in BC
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
              Growth to hundreds of active business members
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
              Expansion of events and programs across British Columbia
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
              34th term of continuous service to the community
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default HistoryOfTCCBC;
