import HeroSection from "./HeroSection";
import LandingPageTemas from "./LandingPageTemas";
import LandingPageScroll from "./LandingPageScroll";
import LandingPageEnd from "./LandingPageEnd";
import LandingPageCommunity from "./LandingPageCommunity";

export default function LandingPageBody() {
  return (
    <div className="w-full pt-15">
      <HeroSection />
      <LandingPageTemas />
      <LandingPageCommunity />
      <LandingPageEnd />
    </div>
  );
}
