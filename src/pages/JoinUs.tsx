import PageHero from "@/components/PageHero";

const JoinUs = () => (
  <>
    <PageHero
      title="Join Us"
      titleCn="加入我們"
      subtitle="Start your journey with the Taiwan Chamber of Commerce in BC."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-secondary mb-4 font-semibold">Apply Now</p>
            <h2 className="text-4xl md:text-5xl font-heading italic font-light text-foreground leading-[1.05]">
              Membership<br />Application
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-[1.9] mt-6">
              Fill out the form to apply for TCCBC membership. Our team will review your application and get back to you shortly.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
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
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Phone</label>
                <input type="tel" className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Company Name</label>
                <input type="text" className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Membership Level</label>
                <select className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors">
                  <option value="">Select a membership level</option>
                  <option value="individual">Individual Member</option>
                  <option value="corporate">Corporate Member</option>
                  <option value="lifetime">Lifetime Member</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground mb-3">Message (Optional)</label>
                <textarea rows={4} className="w-full px-0 py-3 border-0 border-b border-border bg-transparent text-foreground text-sm font-light focus:outline-none focus:border-secondary transition-colors resize-none" />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-secondary transition-colors duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default JoinUs;
