import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SponsorshipOpportunities = () => (
  <>
    <PageHero
      title="Sponsorship Opportunities"
      titleCn="贊助機會"
      subtitle="Promote your brand and support the Taiwanese business community in BC."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-5">
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              TCCBC offers sponsorship opportunities that provide visibility for your brand at our high-profile events and within our extensive business network. Partner with us to reach hundreds of business professionals across British Columbia.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { title: "Brand Visibility", num: "I", desc: "Get your brand in front of hundreds of business professionals at TCCBC events." },
            { title: "Event Promotion", num: "II", desc: "Sponsor our Annual Gala, Business Lunches, and other high-profile chamber events." },
            { title: "Community Leadership", num: "III", desc: "Position your business as a leader in the Taiwanese business community in BC." },
          ].map((item) => (
            <div key={item.title} className="bg-background p-8 md:p-10 group hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
              <span className="text-3xl font-heading italic text-border group-hover:text-primary-foreground/20 transition-colors">{item.num}</span>
              <h3 className="text-xl font-heading italic font-light mt-8 mb-4 group-hover:text-primary-foreground transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-primary-foreground/60 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/Contact"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-secondary transition-colors duration-300"
          >
            Inquire About Sponsorship
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default SponsorshipOpportunities;
