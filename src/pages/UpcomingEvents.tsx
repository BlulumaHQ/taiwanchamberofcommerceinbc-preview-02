import PageHero from "@/components/PageHero";

const UpcomingEvents = () => (
  <>
    <PageHero
      title="Upcoming Events"
      titleCn="未來活動"
      subtitle="Join us for networking, learning, and community-building events."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {[
          {
            title: "Business Lunch Social Networking",
            titleCn: "商業午餐交流",
            location: "Richmond, BC",
            desc: "An afternoon of networking, insights, and connection over lunch with fellow business professionals.",
            tag: "Networking",
          },
          {
            title: "Annual Gala",
            titleCn: "年度晚宴",
            location: "Vancouver, BC",
            desc: "Our premier black-tie event celebrating the achievements of the Taiwanese business community in BC.",
            tag: "Gala",
          },
          {
            title: "Lunar New Year Market",
            titleCn: "春節年貨大街",
            location: "Richmond, BC",
            desc: "Celebrate the Lunar New Year with a vibrant market featuring food, goods, and cultural activities.",
            tag: "Community",
          },
          {
            title: "Educational Workshop",
            titleCn: "教育研討會",
            location: "Richmond, BC",
            desc: "Expert-led sessions on business development, market trends, and professional growth.",
            tag: "Workshop",
          },
        ].map((event, i) => (
          <div key={event.title} className={`grid lg:grid-cols-12 gap-8 items-start ${i > 0 ? "mt-20 pt-20 border-t border-border" : ""}`}>
            <div className="lg:col-span-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">{event.tag}</span>
              <p className="text-3xl font-heading italic text-border mt-2">{String(i + 1).padStart(2, "0")}</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-5">
              <h3 className="text-2xl md:text-3xl font-heading italic font-light text-foreground leading-tight mb-2">{event.title}</h3>
              <p className="text-xs text-secondary font-medium mb-4 font-chinese">{event.titleCn}</p>
              <p className="text-sm text-muted-foreground font-light leading-[1.9]">{event.desc}</p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex flex-col items-start lg:items-end gap-4">
              <p className="text-xs text-muted-foreground font-light">{event.location}</p>
              <button className="bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-secondary transition-colors duration-300">
                Register 報名
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default UpcomingEvents;
