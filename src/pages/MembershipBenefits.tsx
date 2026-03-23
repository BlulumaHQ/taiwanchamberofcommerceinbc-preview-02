import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MembershipBenefits = () => (
  <>
    <PageHero
      title="Membership Benefits"
      titleCn="會員福利"
      subtitle="Discover the full range of benefits available to TCCBC members."
      breadcrumb={[{ label: "Membership", path: "/Why-Join-Us" }]}
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
          {[
            "Access to exclusive business networking events and social gatherings",
            "Business Lunch Social Networking 商業午餐交流",
            "Invitations to the Annual Gala and Lunar New Year celebrations",
            "Educational workshops and seminars on business development",
            "Member directory listing for increased business visibility",
            "Sponsorship and advertising opportunities at chamber events",
            "Advocacy and support for Taiwanese businesses in BC",
            "Member & Lifetime Member Lunar New Year Gathering",
            "Connection to a broad network of professionals and entrepreneurs",
            "Newsletter subscription with latest community updates",
          ].map((benefit, i) => (
            <div key={i} className="flex items-start gap-6 py-8 border-b border-border group">
              <span className="text-xs text-border font-heading italic group-hover:text-secondary transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-foreground font-light leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/join-us"
            className="group inline-flex items-center gap-3 border border-secondary text-secondary px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Become a Member
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default MembershipBenefits;
