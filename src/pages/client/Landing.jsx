import LandingHeader from "../../components/Client/Landing/LandingHeader";
import BottomNav from "../../layouts/BottomNav";
import LandingHero from "../../components/Client/Landing/LandingHero";
import Statistics from "../../components/Client/Landing/Statistics";
import HowItWorks from "../../components/Client/Landing/HowItWorks";
import CampaignList from "../../components/Client/Landing/CampaignList";
import Footer from "../../layouts/Footer";




function Landing() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">

      <LandingHeader />

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-10 lg:pb-12 lg:pt-12">

        <LandingHero />

        <Statistics />

        <HowItWorks />

        <CampaignList />

      </main>

      <BottomNav />
      <Footer />

    </div>
  );
}

export default Landing;
