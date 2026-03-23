import PageHero from "@/components/PageHero";

const HistoryOfTCCBC = () => (
  <>
    <PageHero
      title="History of TCCBC"
      titleCn="商會歷史"
      subtitle="A legacy of service, connection, and community building in British Columbia."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Our Legacy</p>
            <h2 className="text-4xl md:text-5xl font-heading italic font-light text-foreground leading-[1.05]">
              Our<br />Journey
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              The Taiwan Chamber of Commerce in BC has a rich history spanning over three decades. Established to serve the growing Taiwanese business community in British Columbia, TCCBC has evolved into one of the most respected business organizations in the region.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              Now in our 34th term, we continue to build on the strong foundation laid by our founding members. Each term has brought new leadership, fresh ideas, and expanded programs — all while maintaining our core commitment to serving Taiwanese businesses in BC.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              Through the years, TCCBC has organized hundreds of networking events, educational seminars, and community celebrations. Our Annual Gala has become a highlight of the business calendar, bringing together leaders from across the province.
            </p>
          </div>
        </div>

        {/* Milestones — editorial timeline */}
        <div className="mt-32 border-t border-border pt-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-12 font-semibold">Key Milestones</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              "Establishment of the Taiwan Chamber of Commerce in BC",
              "Growth to hundreds of active business members",
              "Expansion of events and programs across British Columbia",
              "34th term of continuous service to the community",
            ].map((milestone, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <span className="text-3xl font-heading italic text-border group-hover:text-secondary transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-muted-foreground font-light leading-relaxed pt-2">{milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HistoryOfTCCBC;
