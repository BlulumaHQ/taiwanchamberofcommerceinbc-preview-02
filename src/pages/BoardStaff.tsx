import PageHero from "@/components/PageHero";

const BoardStaff = () => (
  <>
    <PageHero
      title="Board & Staff"
      titleCn="理事會與工作人員"
      subtitle="Meet the dedicated team leading the Taiwan Chamber of Commerce in BC."
      breadcrumb={[{ label: "About", path: "/About-us__" }]}
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">34th Term Board of Directors</h2>
          <p className="text-muted-foreground">
            Our board members are experienced business leaders and community advocates who volunteer their time to serve TCCBC and its members.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <img
            src="https://www.tccbc.ca/resources/Pictures/2025%20AMG%20BOD.jpg"
            alt="TCCBC 2025 Board of Directors"
            className="w-full rounded-xl shadow-lg"
          />
          <p className="text-center text-sm text-muted-foreground mt-4">
            TCCBC 34th Term Board of Directors — 2025 Annual General Meeting
          </p>
        </div>
      </div>
    </section>
  </>
);

export default BoardStaff;
