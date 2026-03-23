import PageHero from "@/components/PageHero";

const BoardStaff = () => (
  <>
    <PageHero
      title="Board & Staff"
      titleCn="理事會與工作人員"
      subtitle="Meet the dedicated team leading the Taiwan Chamber of Commerce in BC."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-heading italic font-light text-foreground leading-[1.05]">
              34th Term<br />Board of<br />Directors
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-[1.9] mt-8">
              Our board members are experienced business leaders and community advocates who volunteer their time to serve TCCBC and its members.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative">
              <img
                src="https://www.tccbc.ca/resources/Pictures/2025%20AMG%20BOD.jpg"
                alt="TCCBC 2025 Board of Directors"
                className="w-full aspect-[3/2] object-cover"
              />
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-px bg-secondary" />
                <p className="text-xs text-muted-foreground font-light">
                  TCCBC 34th Term Board of Directors — 2025 Annual General Meeting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default BoardStaff;
