import PageHero from "@/components/PageHero";
import { Calendar } from "lucide-react";

const LatestNews = () => (
  <>
    <PageHero
      title="Latest News"
      titleCn="最新消息"
      subtitle="Stay informed with the latest updates from TCCBC."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
          ].map((news) => (
            <div key={news.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {news.date}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{news.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{news.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default LatestNews;
