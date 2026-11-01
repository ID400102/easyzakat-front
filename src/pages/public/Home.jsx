import Header from "../../layouts/Header";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer"
import Hero from "../../components/Home/Hero";
import ActionCards from "../../components/Home/ActionCards";
import EmergencySection from "../../components/Home/EmergencySection";
import ImpactReport from "../../components/Home/ImpactReport";


function Home() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fc]">

      <Header /> 

      <main className="mx-auto max-w-7xl px-4 pb-28  pt-6 sm:px-6 lg:px-10 lg:pb-12 lg:pt-12">

        <Hero />

        <ActionCards />

        <EmergencySection />
        
        <ImpactReport />


      </main>

        <BottomNav />
        <Footer />

    </div>
  );
}

export default Home;
