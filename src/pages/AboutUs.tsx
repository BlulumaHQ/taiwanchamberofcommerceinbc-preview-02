import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutUs = () => (
  <>
    <PageHero
      title="About Us"
      titleCn="關於我們"
      subtitle="Learn more about the Taiwan Chamber of Commerce in BC and our mission to serve the business community."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-heading italic font-light text-foreground leading-[1.05]">
              Welcome to<br />TCCBC
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              The Taiwan Chamber of Commerce in BC (TCCBC) is a premier business organization dedicated to connecting Taiwanese businesses and professionals throughout British Columbia. For over 34 terms, we have been a cornerstone of the Taiwanese business community, fostering connections, creating opportunities, and supporting economic growth.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              Our mission is to serve as a bridge between Taiwanese entrepreneurs and the broader BC business community. We provide networking opportunities, educational resources, and advocacy for our members, helping them succeed in the Canadian marketplace.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-[1.9] font-chinese">
              加入卑詩省台灣商會能幫助您的企業成長 並 擴大業務範圍。我們致力於為會員提供最佳的商業網絡和資源。
            </p>
            <div className="pt-8">
              <Link
                to="/join-us"
                className="group inline-flex items-center gap-3 text-foreground text-xs uppercase tracking-[0.2em] font-medium border-b border-foreground/20 pb-2 hover:border-secondary hover:text-secondary transition-all"
              >
                Become a Member
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
