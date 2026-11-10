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
  const [impactData, setImpactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadImpact() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/impact"
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              "Impossible de récupérer les statistiques d'impact."
          );
        }

        const data =
          result.impact ||
          result.data ||
          result.stats ||
          result;

        if (active) {
          setImpactData(data);
        }
      } catch (err) {
        console.error("Erreur API Impact :", err);

        if (active) {
          setError(
            err.message ||
              "Impossible de contacter le backend."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadImpact();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F6F8] pb-20 md:pb-0">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F3D2E]">
            Transparence et impact
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            Utilisation des fonds collectés : un engagement
            pour une redistribution équitable et transparente
            au sein de notre communauté.
          </p>
        </section>

        {/* Statistiques récupérées depuis le backend */}
       <ImpactStats
  stats={impactData}
  loading={loading}
/>

        {/* Afficher les erreurs de connexion */}
        {error && (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* Autres sections de la page */}
        <MiniStats
  stats={impactData}
  loading={loading}
/>
       

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="md:col-span-2">
           <CategoryDistribution
  stats={impactData}
  loading={loading}
/>
          </div>

          <RegionalImpact
  stats={impactData}
  loading={loading}
/>
        </section>

        <ImpactReports />

        <CertificationBanner />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}