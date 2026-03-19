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
    <section className="section-padding">
      <div className="container mx-auto px-5 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">Welcome to TCCBC</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The Taiwan Chamber of Commerce in BC (TCCBC) is a premier business organization dedicated to connecting Taiwanese businesses and professionals throughout British Columbia. For over 34 terms, we have been a cornerstone of the Taiwanese business community, fostering connections, creating opportunities, and supporting economic growth.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our mission is to serve as a bridge between Taiwanese entrepreneurs and the broader BC business community. We provide networking opportunities, educational resources, and advocacy for our members, helping them succeed in the Canadian marketplace.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 font-chinese">
          加入卑詩省台灣商會能幫助您的企業成長 並 擴大業務範圍。我們致力於為會員提供最佳的商業網絡和資源。
        </p>
        <Link
          to="/join-us"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          BECOME A MEMBER <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </>
);

export default AboutUs;
