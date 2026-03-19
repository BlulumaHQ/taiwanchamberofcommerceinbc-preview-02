import PageHero from "@/components/PageHero";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const UpcomingEvents = () => (
  <>
    <PageHero
      title="Upcoming Events"
      titleCn="未來活動"
      subtitle="Join us for networking, learning, and community-building events."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          ].map((event) => (
            <div key={event.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4">
                {event.tag}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-1">{event.title}</h3>
              <p className="text-sm text-secondary font-semibold mb-3 font-chinese">{event.titleCn}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" /> {event.location}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{event.desc}</p>
              <button className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                Register 報名
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default UpcomingEvents;
