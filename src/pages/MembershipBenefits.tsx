import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const MembershipBenefits = () => (
  <>
    <PageHero
      title="Membership Benefits"
      titleCn="會員福利"
      subtitle="Discover the full range of benefits available to TCCBC members."
      breadcrumb={[{ label: "Membership", path: "/Why-Join-Us" }]}
    />
    <section className="section-padding">
      <div className="container mx-auto px-5 max-w-3xl">
        <div className="space-y-6">
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
          ].map((benefit) => (
            <div key={benefit} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-secondary" />
              </div>
              <p className="text-foreground font-medium">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/join-us"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            BECOME A MEMBER <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default MembershipBenefits;
