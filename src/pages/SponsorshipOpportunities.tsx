import PageHero from "@/components/PageHero";
import { ArrowRight, Eye, Megaphone, Star } from "lucide-react";
import { Link } from "react-router-dom";

const SponsorshipOpportunities = () => (
  <>
    <PageHero
      title="Sponsorship Opportunities"
      titleCn="贊助機會"
      subtitle="Promote your brand and support the Taiwanese business community in BC."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-muted-foreground leading-relaxed">
            TCCBC offers sponsorship opportunities that provide visibility for your brand at our high-profile events and within our extensive business network. Partner with us to reach hundreds of business professionals across British Columbia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Eye, title: "Brand Visibility", desc: "Get your brand in front of hundreds of business professionals at TCCBC events." },
            { icon: Megaphone, title: "Event Promotion", desc: "Sponsor our Annual Gala, Business Lunches, and other high-profile chamber events." },
            { icon: Star, title: "Community Leadership", desc: "Position your business as a leader in the Taiwanese business community in BC." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/Contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            INQUIRE ABOUT SPONSORSHIP <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default SponsorshipOpportunities;
