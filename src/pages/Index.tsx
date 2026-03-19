import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Briefcase, Award, Handshake, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section - Conversion Focus */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-networking.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-5">
          <div className="max-w-3xl">
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">
              British Columbia's Premier Business Network
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              加入卑詩省台灣商會
              <br />
              <span className="text-secondary">Grow Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl font-medium font-chinese">
              加入卑詩省台灣商會能幫助您的企業成長 並 擴大業務範圍
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/join-us"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                JOIN THE CHAMBER
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/About-us__"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-base font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "34+", label: "Years of Service" },
              { stat: "500+", label: "Business Members" },
              { stat: "50+", label: "Events Annually" },
              { stat: "BC-Wide", label: "Network Coverage" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-secondary">{item.stat}</p>
                <p className="text-xs md:text-sm text-primary-foreground/70 font-semibold mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="section-padding">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 font-chinese">
              為何要加入TCCBC？
            </h2>
            <p className="text-lg text-muted-foreground">
              The Taiwan Chamber of Commerce in BC connects businesses, creates opportunities, and strengthens our community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Business Networking",
                titleCn: "商業交流",
                desc: "Connect with hundreds of Taiwanese business professionals across British Columbia through our regular networking events and social gatherings.",
              },
              {
                icon: GraduationCap,
                title: "Educational Workshops",
                titleCn: "教育研討會",
                desc: "Access exclusive seminars and workshops on business development, market trends, and professional growth opportunities.",
              },
              {
                icon: Calendar,
                title: "Premier Events",
                titleCn: "精彩活動",
                desc: "From our Annual Gala to Business Lunch Socials, Lunar New Year Market, and Car Meet events — there's always a reason to connect.",
              },
              {
                icon: Users,
                title: "Community Support",
                titleCn: "社區支持",
                desc: "Be part of a vibrant community that supports Taiwanese businesses and fosters meaningful connections in BC.",
              },
              {
                icon: Briefcase,
                title: "Business Growth",
                titleCn: "業務成長",
                desc: "Leverage chamber membership to expand your business reach, find new clients, and access partnership opportunities.",
              },
              {
                icon: Award,
                title: "Sponsorship Opportunities",
                titleCn: "贊助機會",
                desc: "Gain visibility and promote your brand through our sponsorship programs at high-profile chamber events.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-secondary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-secondary font-semibold mb-3 font-chinese">{item.titleCn}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 font-chinese">
            讓我們一起為當地的企業帶來改變
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join a network of business professionals who are making a difference in British Columbia's business community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join-us"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              BECOME A MEMBER
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/Contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-base font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="section-padding section-alt">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-2">
              Upcoming Events · 未來活動
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Connect, Learn & Grow
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Lunch Social Networking",
                titleCn: "商業午餐交流",
                desc: "Join fellow business professionals for an afternoon of networking, insights, and connection over lunch.",
                tag: "Networking",
              },
              {
                title: "Annual Gala",
                titleCn: "年度晚宴",
                desc: "Our flagship event celebrating the achievements of our members and the Taiwanese business community in BC.",
                tag: "Gala",
              },
              {
                title: "Educational Workshop",
                titleCn: "教育研討會",
                desc: "Expert-led sessions on business development, market trends, and professional growth.",
                tag: "Workshop",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-primary/30" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {event.tag}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">{event.title}</h3>
                  <p className="text-sm text-secondary font-semibold mb-3 font-chinese">{event.titleCn}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/upcoming-events"
              className="inline-flex items-center gap-2 text-secondary font-bold hover:underline"
            >
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gala Image Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gala-event.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            34th Term of Excellence
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Decades of connecting businesses, building bridges, and empowering the Taiwanese community in British Columbia.
          </p>
          <Link
            to="/About-us__"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            READ MORE ABOUT US
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-2">
              Stay Informed
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and stay up-to-date with the latest developments. Be a part of our business community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-xl mx-auto mb-8">
            Join hundreds of business professionals who trust TCCBC to help them connect, grow, and succeed in British Columbia.
          </p>
          <Link
            to="/join-us"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            JOIN THE CHAMBER TODAY
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
