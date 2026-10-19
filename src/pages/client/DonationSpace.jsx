import { DEFAULT_DASHBOARD_DATA } from "../../components/Client/DonationSpace/SpaceData";

import SpaceIntro from "../../components/Client/DonationSpace/SpaceIntro";
import DonationOverview from "../../components/Client/DonationSpace/DonationOverview";
import QuickActions from "../../components/Client/DonationSpace/QuickActions";
import RecentDonations from "../../components/Client/DonationSpace/RecentDonations";
import FinancialSerenity from "../../components/Client/DonationSpace/FinancialSerenity";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import BottomNav from "../../layouts/BottomNav";
import DonationImpactCard from "../../components/Client/DonationSpace/DonationImpactCard";

function DonorDashboard({
  dashboardData = DEFAULT_DASHBOARD_DATA,
}) {
  function handleQuickAction(actionId) {
    console.log("Action :", actionId);
  }

  function handleViewDonations() {
    console.log("Voir tous les dons");
  }

  function handleScheduleReminder() {
    console.log("Programmer un rappel");
  }

  function handleViewReport() {
    console.log("Voir le rapport d'impact");
  }

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[#F8F9FD]
        text-[#303634]
      "
    >
        <Header />

      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-5
          pb-8
          pt-8
          mb-20

          sm:px-7
          sm:pt-10

          md:px-10

          lg:px-12
          lg:pt-12
        "
      >
        {/* ================= BIENVENUE ================= */}

        <SpaceIntro
          user={dashboardData.user}
        />

        {/* ================= STATISTIQUES ================= */}

        <DonationOverview
          stats={dashboardData.donationStats}
        />

        {/* ================= CONTENU PRINCIPAL ================= */}

        <div
          className="
            mt-1

            lg:grid
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-start
            lg:gap-6
          "
        >
          {/* Colonne gauche */}

          <div>
            <QuickActions
              onAction={handleQuickAction}
            />

            <FinancialSerenity
              data={dashboardData.financialSerenity}
              onScheduleReminder={handleScheduleReminder}
            />
          </div>

          {/* Colonne droite */}

          <div>
            <RecentDonations
              donations={dashboardData.recentDonations}
              onViewAll={handleViewDonations}
            />

            <div className="lg:mt-5">
              <DonationImpactCard
                data={dashboardData.impactReport}
                onViewReport={handleViewReport}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}

      <BottomNav />
      <Footer />
    </main>
  );
}

export default DonorDashboard;