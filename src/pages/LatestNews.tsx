import PageHero from "@/components/PageHero";

const LatestNews = () => (
  <>
    <PageHero
      title="Latest News"
      titleCn="最新消息"
      subtitle="Stay informed with the latest updates from TCCBC."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {[
          {
            title: "34th Term Board of Directors Announced",
            date: "2025",
            desc: "The TCCBC is proud to announce the new board of directors for the 34th term, bringing fresh leadership and vision to our organization.",
          },
          {
            title: "Annual General Meeting Highlights",
            date: "2025",
            desc: "Highlights from our recent Annual General Meeting, including key decisions and future plans for the chamber.",
          },
          {
            title: "Upcoming Business Lunch Social",
            date: "2025",
            desc: "Join us for our next Business Lunch Social Networking event — a great opportunity to connect with fellow business professionals.",
          },
        ].map((news, i) => (
          <div key={news.title} className={`grid lg:grid-cols-12 gap-8 items-start ${i > 0 ? "mt-20 pt-20 border-t border-border" : ""}`}>
            <div className="lg:col-span-3">
              <span className="text-3xl font-heading italic text-border">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-xs text-muted-foreground font-light mt-2 uppercase tracking-[0.15em]">{news.date}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              <h3 className="text-2xl md:text-3xl font-heading italic font-light text-foreground leading-tight mb-4">{news.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-[1.9]">{news.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default LatestNews;
