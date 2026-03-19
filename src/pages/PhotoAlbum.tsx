import PageHero from "@/components/PageHero";
import { Camera } from "lucide-react";

const PhotoAlbum = () => (
  <>
    <PageHero
      title="Photo Album"
      titleCn="活動回顧"
      subtitle="Relive the highlights from our events and activities."
    />
    <section className="section-padding">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-2xl font-extrabold text-foreground mb-4 font-chinese">活動回顧</h2>
          <p className="text-muted-foreground leading-relaxed">
            Browse through our collection of photos from past TCCBC events including Annual Galas, Business Lunch Socials, Lunar New Year Markets, Car Meet events, Basketball tournaments, and more.
          </p>
          <p className="text-muted-foreground mt-4 font-chinese">
            最完整的活動信息，請至我們的社群媒體頁面
          </p>
        </div>
      </div>
    </section>
  </>
);

export default PhotoAlbum;
