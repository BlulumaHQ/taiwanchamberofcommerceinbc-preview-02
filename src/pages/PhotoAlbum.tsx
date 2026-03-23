import PageHero from "@/components/PageHero";

const PhotoAlbum = () => (
  <>
    <PageHero
      title="Photo Album"
      titleCn="活動回顧"
      subtitle="Relive the highlights from our events and activities."
    />

    <section className="py-32 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-heading italic font-light text-foreground leading-[1.05] mb-6 font-chinese">
              活動回顧
            </h2>
            <p className="text-sm text-muted-foreground font-light leading-[1.9]">
              Browse through our collection of photos from past TCCBC events including Annual Galas, Business Lunch Socials, Lunar New Year Markets, Car Meet events, Basketball tournaments, and more.
            </p>
            <p className="text-sm text-muted-foreground font-light leading-[1.9] mt-4 font-chinese">
              最完整的活動信息，請至我們的社群媒體頁面
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-2 gap-px bg-border">
              <div className="aspect-square bg-accent flex items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Gala</span>
              </div>
              <div className="aspect-square bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Networking</span>
              </div>
              <div className="aspect-square bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Lunar New Year</span>
              </div>
              <div className="aspect-square bg-accent flex items-center justify-center">
                <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PhotoAlbum;
