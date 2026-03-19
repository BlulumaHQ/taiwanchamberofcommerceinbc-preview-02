import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => (
  <>
    <PageHero
      title="Contact"
      titleCn="聯繫我們"
      subtitle="Get in touch with the Taiwan Chamber of Commerce in BC."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-foreground mb-6">Get In Touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We'd love to hear from you. Whether you have a question about membership, events, or sponsorship — our team is here to help.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a href="mailto:info@tccbc.ca" className="text-sm text-secondary hover:underline">info@tccbc.ca</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a href="tel:+16047718585" className="text-sm text-secondary hover:underline">+1 604 771 8585</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">193-11860 Hammersmith Way, Richmond, BC V6Y 0L4</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.6!2d-123.1!3d49.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s193-11860+Hammersmith+Way+Richmond+BC!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TCCBC Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
