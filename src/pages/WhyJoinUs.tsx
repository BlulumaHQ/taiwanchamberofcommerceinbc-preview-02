import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WhyJoinUs = () => (
  <>
    <PageHero
      title="Why Join Us"
      titleCn="為何要加入"
      subtitle="Discover the benefits of being part of BC's premier Taiwanese business network."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-y-20">
          {[
            { title: "Networking Opportunities", desc: "Connect with hundreds of Taiwanese business professionals at our regular events." },
            { title: "Business Growth", desc: "Expand your reach, find new clients, and access partnership opportunities." },
            { title: "Exclusive Events", desc: "Access to members-only events, galas, workshops, and social gatherings." },
            { title: "Community Recognition", desc: "Be recognized as part of a trusted, established business community." },
            { title: "Business Advocacy", desc: "Benefit from our advocacy efforts on behalf of Taiwanese businesses in BC." },
            { title: "Cross-Cultural Bridge", desc: "Leverage our network as a bridge between Taiwanese and Canadian business cultures." },
          ].map((item, i) => (
            <div key={item.title} className={`${i % 2 === 0 ? "lg:col-span-5 lg:col-start-1" : "lg:col-span-5 lg:col-start-8"} border-t border-border pt-8`}>
              <span className="text-xs text-secondary font-medium">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-heading italic font-light text-foreground mt-3 mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link
            to="/join-us"
            className="group inline-flex items-center gap-3 border border-secondary text-secondary px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Join the Chamber
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default WhyJoinUs;
