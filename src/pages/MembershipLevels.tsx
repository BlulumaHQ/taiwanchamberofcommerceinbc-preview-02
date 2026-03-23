import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MembershipLevels = () => (
  <>
    <PageHero
      title="Membership Levels"
      titleCn="會員等級"
      subtitle="Find the right membership level for your business needs."
      breadcrumb={[{ label: "Membership", path: "/Why-Join-Us" }]}
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            {
              title: "Individual Member",
              titleCn: "個人會員",
              features: ["Access to all networking events", "Newsletter subscription", "Member directory listing", "Event discounts"],
              highlighted: false,
            },
            {
              title: "Corporate Member",
              titleCn: "企業會員",
              features: ["All Individual benefits", "Enhanced business listing", "Sponsorship discounts", "Priority event registration", "Business promotion opportunities"],
              highlighted: true,
            },
            {
              title: "Lifetime Member",
              titleCn: "永久會員",
              features: ["All Corporate benefits", "Lifetime membership status", "VIP event access", "Special recognition", "Lunar New Year Gathering"],
              highlighted: false,
            },
          ].map((level) => (
            <div
              key={level.title}
              className={`p-8 md:p-10 transition-colors duration-500 ${
                level.highlighted
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-accent"
              }`}
            >
              {level.highlighted && (
                <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold mb-6">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-heading italic font-light">{level.title}</h3>
              <p className={`text-xs font-medium mb-8 font-chinese mt-1 ${level.highlighted ? "text-secondary" : "text-secondary"}`}>
                {level.titleCn}
              </p>
              <ul className="space-y-4 mb-10">
                {level.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm font-light ${level.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/join-us"
                className={`block text-center py-4 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  level.highlighted
                    ? "border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    : "bg-primary text-primary-foreground hover:bg-secondary"
                }`}
              >
                Join Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default MembershipLevels;
