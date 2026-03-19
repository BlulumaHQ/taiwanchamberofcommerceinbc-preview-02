import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Star, Calendar, Shield, Globe } from "lucide-react";

const WhyJoinUs = () => (
  <>
    <PageHero
      title="Why Join Us"
      titleCn="為何要加入"
      subtitle="Discover the benefits of being part of BC's premier Taiwanese business network."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Users, title: "Networking Opportunities", desc: "Connect with hundreds of Taiwanese business professionals at our regular events." },
            { icon: TrendingUp, title: "Business Growth", desc: "Expand your reach, find new clients, and access partnership opportunities." },
            { icon: Calendar, title: "Exclusive Events", desc: "Access to members-only events, galas, workshops, and social gatherings." },
            { icon: Star, title: "Community Recognition", desc: "Be recognized as part of a trusted, established business community." },
            { icon: Shield, title: "Business Advocacy", desc: "Benefit from our advocacy efforts on behalf of Taiwanese businesses in BC." },
            { icon: Globe, title: "Cross-Cultural Bridge", desc: "Leverage our network as a bridge between Taiwanese and Canadian business cultures." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/join-us"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            JOIN THE CHAMBER <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default WhyJoinUs;
