import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* HERO — Full-bleed immersive opening */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/hero-networking.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />
        <div className="relative z-10 w-full px-6 md:px-10">
          <div className="max-w-5xl">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary mb-8 font-medium">
              British Columbia's Premier Business Network
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-[120px] font-heading italic font-light text-primary-foreground leading-[0.9] mb-6">
              Taiwan
              <br />
              Chamber of
              <br />
              <span className="text-secondary not-italic font-semibold">Commerce</span>
            </h1>
            <div className="flex items-center gap-8 mt-12">
              <Link
                to="/join-us"
                className="group inline-flex items-center gap-3 text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium border-b border-primary-foreground/30 pb-2 hover:border-secondary hover:text-secondary transition-all duration-300"
              >
                Join the Chamber
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/About-us__"
                className="text-primary-foreground/50 text-xs uppercase tracking-[0.2em] font-medium hover:text-primary-foreground/80 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Vertical text accent */}
        <div
          className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.4em] text-primary-foreground/20 font-medium"
          style={{ writingMode: "vertical-rl" }}
        >
          Est. Since Founding · 34th Term · Richmond BC
        </div>
      </section>

      {/* EDITORIAL STAT STRIP — asymmetric */}
      <section className="editorial-warm">
        <div className="px-6 md:px-10 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-7xl mx-auto">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-8xl font-heading italic font-light text-foreground">34+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Years of<br />Service</span>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-8xl font-heading italic font-light text-foreground">500+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Business<br />Members</span>
            </div>
            <div className="w-px h-16 bg-border hidden md:block" />
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-8xl font-heading italic font-light text-foreground">50+</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Events<br />Annually</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRO — Asymmetric text + image overlap */}
      <section className="py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 lg:col-start-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-6 font-semibold">Our Purpose</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic font-light text-foreground leading-[1.05] mb-8">
                為何要加入<br />TCCBC？
              </h2>
              <p className="text-sm text-muted-foreground font-light leading-[1.8] max-w-sm">
                The Taiwan Chamber of Commerce in BC connects businesses, creates opportunities, and strengthens our community across British Columbia.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:mt-24">
              <div className="relative">
                <img
                  src="https://www.tccbc.ca/resources/Pictures/2025%20AMG%20BOD.jpg"
                  alt="TCCBC Board of Directors"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 md:p-8 max-w-xs hidden md:block">
                  <p className="text-xs uppercase tracking-[0.2em] mb-2 text-primary-foreground/50">Community</p>
                  <p className="text-sm font-light leading-relaxed font-chinese">
                    加入卑詩省台灣商會能幫助您的企業成長 並 擴大業務範圍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — Staggered editorial grid */}
      <section className="section-dark py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-y-20">
            {/* Header */}
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">What We Offer</p>
              <h2 className="text-4xl md:text-5xl font-heading italic font-light text-section-dark-foreground leading-[1.05]">
                Services &<br />Programs
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 pt-4">
              <p className="text-sm text-section-dark-foreground/50 font-light leading-[1.8]">
                From networking events to educational workshops, TCCBC provides comprehensive support for Taiwanese businesses across British Columbia.
              </p>
            </div>

            {/* Service items — staggered */}
            <div className="lg:col-span-5 lg:col-start-1 border-t border-section-dark-foreground/10 pt-8">
              <span className="text-xs text-secondary font-medium">01</span>
              <h3 className="text-2xl font-heading italic font-light text-section-dark-foreground mt-3 mb-3">Business Networking</h3>
              <p className="text-xs text-section-dark-foreground/40 mb-2 font-chinese">商業交流</p>
              <p className="text-sm text-section-dark-foreground/50 font-light leading-relaxed">
                Connect with hundreds of Taiwanese business professionals across British Columbia through our regular networking events and social gatherings.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:mt-16 border-t border-section-dark-foreground/10 pt-8">
              <span className="text-xs text-secondary font-medium">02</span>
              <h3 className="text-2xl font-heading italic font-light text-section-dark-foreground mt-3 mb-3">Educational Workshops</h3>
              <p className="text-xs text-section-dark-foreground/40 mb-2 font-chinese">教育研討會</p>
              <p className="text-sm text-section-dark-foreground/50 font-light leading-relaxed">
                Access exclusive seminars and workshops on business development, market trends, and professional growth opportunities.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-1 border-t border-section-dark-foreground/10 pt-8">
              <span className="text-xs text-secondary font-medium">03</span>
              <h3 className="text-2xl font-heading italic font-light text-section-dark-foreground mt-3 mb-3">Premier Events</h3>
              <p className="text-xs text-section-dark-foreground/40 mb-2 font-chinese">精彩活動</p>
              <p className="text-sm text-section-dark-foreground/50 font-light leading-relaxed">
                From our Annual Gala to Business Lunch Socials, Lunar New Year Market, and Car Meet events — there's always a reason to connect.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:mt-16 border-t border-section-dark-foreground/10 pt-8">
              <span className="text-xs text-secondary font-medium">04</span>
              <h3 className="text-2xl font-heading italic font-light text-section-dark-foreground mt-3 mb-3">Community Support</h3>
              <p className="text-xs text-section-dark-foreground/40 mb-2 font-chinese">社區支持</p>
              <p className="text-sm text-section-dark-foreground/50 font-light leading-relaxed">
                Be part of a vibrant community that supports Taiwanese businesses and fosters meaningful connections in BC.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-1 border-t border-section-dark-foreground/10 pt-8">
              <span className="text-xs text-secondary font-medium">05</span>
              <h3 className="text-2xl font-heading italic font-light text-section-dark-foreground mt-3 mb-3">Business Growth</h3>
              <p className="text-xs text-section-dark-foreground/40 mb-2 font-chinese">業務成長</p>
              <p className="text-sm text-section-dark-foreground/50 font-light leading-relaxed">
                Leverage chamber membership to expand your business reach, find new clients, and access partnership opportunities.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:mt-16 border-t border-section-dark-foreground/10 pt-8">
              <span className="text-xs text-secondary font-medium">06</span>
              <h3 className="text-2xl font-heading italic font-light text-section-dark-foreground mt-3 mb-3">Sponsorship</h3>
              <p className="text-xs text-section-dark-foreground/40 mb-2 font-chinese">贊助機會</p>
              <p className="text-sm text-section-dark-foreground/50 font-light leading-relaxed">
                Gain visibility and promote your brand through our sponsorship programs at high-profile chamber events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA — Full-bleed editorial */}
      <section className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-6 font-semibold">Join Our Community</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading italic font-light text-foreground leading-[1] mb-6 font-chinese">
            讓我們一起為當地的<br className="hidden md:block" />企業帶來改變
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-[1.8] max-w-lg mx-auto mb-12">
            Join a network of business professionals who are making a difference in British Columbia's business community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/join-us"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-secondary transition-colors duration-300"
            >
              Become a Member
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/Contact"
              className="text-foreground text-xs uppercase tracking-[0.2em] font-medium border-b border-foreground/20 pb-1 hover:border-secondary hover:text-secondary transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS — Editorial card layout */}
      <section className="editorial-cream py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Upcoming Events · 未來活動</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic font-light text-foreground leading-[1.05]">
                Connect,<br />Learn & Grow
              </h2>
            </div>
            <Link
              to="/upcoming-events"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary font-medium border-b border-secondary/30 pb-1 hover:border-secondary transition-all self-start md:self-auto"
            >
              All Events <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                title: "Business Lunch Social Networking",
                titleCn: "商業午餐交流",
                desc: "Join fellow business professionals for an afternoon of networking, insights, and connection over lunch.",
                tag: "Networking",
                num: "I",
              },
              {
                title: "Annual Gala",
                titleCn: "年度晚宴",
                desc: "Our flagship event celebrating the achievements of our members and the Taiwanese business community in BC.",
                tag: "Gala",
                num: "II",
              },
              {
                title: "Educational Workshop",
                titleCn: "教育研討會",
                desc: "Expert-led sessions on business development, market trends, and professional growth.",
                tag: "Workshop",
                num: "III",
              },
            ].map((event) => (
              <div key={event.title} className="bg-background p-8 md:p-10 group hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
                <span className="text-3xl font-heading italic text-border group-hover:text-primary-foreground/20 transition-colors">{event.num}</span>
                <div className="mt-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium">{event.tag}</span>
                  <h3 className="text-xl font-heading italic font-light mt-3 mb-2 group-hover:text-primary-foreground transition-colors">{event.title}</h3>
                  <p className="text-xs text-secondary font-medium mb-4 font-chinese">{event.titleCn}</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-primary-foreground/60 transition-colors">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE — Gala */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/images/gala-event.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="relative z-10 h-full flex items-end px-6 md:px-10 pb-16 md:pb-24">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Since Establishment</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic font-light text-primary-foreground leading-[1.05] mb-6">
              34th Term of Excellence
            </h2>
            <p className="text-sm text-primary-foreground/60 font-light leading-relaxed mb-8">
              Decades of connecting businesses, building bridges, and empowering the Taiwanese community in British Columbia.
            </p>
            <Link
              to="/About-us__"
              className="group inline-flex items-center gap-3 text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium border-b border-primary-foreground/30 pb-2 hover:border-secondary hover:text-secondary transition-all"
            >
              Read More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER — Minimal editorial */}
      <section className="py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Stay Informed</p>
              <h2 className="text-4xl md:text-5xl font-heading italic font-light text-foreground leading-[1.05]">
                Subscribe to Our Newsletter
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-sm text-muted-foreground font-light leading-[1.8] mb-8">
                Subscribe to our newsletter and stay up-to-date with the latest developments. Be a part of our business community.
              </p>
              <div className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-4 border border-border bg-background text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors"
                />
                <button className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-secondary transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — Bold editorial */}
      <section className="bg-primary py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading italic font-light text-primary-foreground leading-[1] mb-8">
            Ready to Grow<br />Your Business?
          </h2>
          <p className="text-sm text-primary-foreground/50 font-light leading-[1.8] max-w-md mx-auto mb-12">
            Join hundreds of business professionals who trust TCCBC to help them connect, grow, and succeed in British Columbia.
          </p>
          <Link
            to="/join-us"
            className="group inline-flex items-center gap-3 border border-secondary text-secondary px-10 py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Join the Chamber Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
