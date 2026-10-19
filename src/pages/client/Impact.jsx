import ImpactStats from "../../components/Client/Impact/ImpactStats";
import MiniStats from "../../components/Client/Impact/MiniStats";
import CategoryDistribution from "../../components/Client/Impact/CategoryDistribution";
import RegionalImpact from "../../components/Client/Impact/RegionalImpact";
import ImpactReports from "../../components/Client/Impact/ImpactReports";
import CertificationBanner from "../../components/Client/Impact/CertificationBanner";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] pb-20 md:pb-0">

      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F3D2E]">
            Transparence et impact
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Utilisation des fonds collectés : un engagement total pour une
            redistribution équitable et transparente au sein de notre
            communauté.
          </p>
        </section>

        <ImpactStats />

        <MiniStats />

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="md:col-span-2">
            <CategoryDistribution />
          </div>

          <RegionalImpact />
        </section>

        <ImpactReports />

        <CertificationBanner />

      </main>

      <Footer />

      <BottomNav />

    </div>
  );
}