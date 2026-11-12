
import Header from "../../layouts/Header";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer";
import ImpactReports from "../../components/Client/Impact/ImpactReports";

function Reports() {
  return (
    <div>
      <Header />

      <main className="min-h-screen w-full bg-[#F8F8FC]">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-10 md:px-8 lg:px-10">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#0F3D2E]">
              Rapports de transparence
            </h1>

            <p className="mt-2 text-gray-500">
              Consultez les rapports détaillés des campagnes et des actions
              d'EasyZakat.
            </p>
          </div>

          <ImpactReports />
        </div>
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
}

export default Reports;
