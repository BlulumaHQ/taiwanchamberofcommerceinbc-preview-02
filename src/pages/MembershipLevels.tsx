import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const MembershipLevels = () => (
  <>
    <PageHero
      title="Membership Levels"
      titleCn="會員等級"
      subtitle="Find the right membership level for your business needs."
      breadcrumb={[{ label: "Membership", path: "/Why-Join-Us" }]}
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              className={`rounded-xl p-8 border ${
                level.highlighted
                  ? "border-secondary bg-secondary/5 shadow-lg ring-2 ring-secondary/20"
                  : "border-border bg-card"
              }`}
            >
              {level.highlighted && (
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{level.title}</h3>
              <p className="text-sm text-secondary font-semibold mb-6 font-chinese">{level.titleCn}</p>
              <ul className="space-y-3 mb-8">
                {level.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/join-us"
                className={`block text-center py-3 text-sm font-bold rounded-lg transition-opacity hover:opacity-90 ${
                  level.highlighted
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                JOIN NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default MembershipLevels;
