import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const JoinUs = () => (
  <>
    <PageHero
      title="Join Us"
      titleCn="加入我們"
      subtitle="Start your journey with the Taiwan Chamber of Commerce in BC."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Membership Application</h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form below to apply for TCCBC membership. Our team will review your application and get back to you shortly.
            </p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Membership Level</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option value="">Select a membership level</option>
                  <option value="individual">Individual Member</option>
                  <option value="corporate">Corporate Member</option>
                  <option value="lifetime">Lifetime Member</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground py-4 text-base font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                SUBMIT APPLICATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default JoinUs;
