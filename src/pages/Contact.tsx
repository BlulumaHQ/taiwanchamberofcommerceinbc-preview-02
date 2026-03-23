import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Contact = () => (
  <>
    <PageHero
      title="Contact"
      titleCn="聯繫我們"
      subtitle="Get in touch with the Taiwan Chamber of Commerce in BC."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Info — editorial layout */}
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-6 font-semibold">Get In Touch</p>
            <p className="text-sm text-muted-foreground font-light leading-[1.9] mb-12">
              We'd love to hear from you. Whether you have a question about membership, events, or sponsorship — our team is here to help.
            </p>

            <div className="space-y-8">
              <div className="border-t border-border pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">Email</p>
                <a href="mailto:info@tccbc.ca" className="text-sm text-foreground font-light hover:text-secondary transition-colors">info@tccbc.ca</a>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">Phone</p>
                <a href="tel:+16047718585" className="text-sm text-foreground font-light hover:text-secondary transition-colors">+1 604 771 8585</a>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">Address</p>
                <p className="text-sm text-foreground font-light">
                  193-11860 Hammersmith Way,<br />Richmond, BC V6Y 0L4
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.6!2d-123.1!3d49.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s193-11860+Hammersmith+Way+Richmond+BC!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TCCBC Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-8 font-semibold">Send a Message</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">First Name</label>
                  <input type="text" className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Last Name</label>
                  <input type="text" className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Email</label>
                <input type="email" className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Subject</label>
                <input type="text" className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Message</label>
                <textarea rows={5} className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors resize-none" />
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-primary text-primary-foreground py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-secondary transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
