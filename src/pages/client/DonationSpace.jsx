import { DEFAULT_DASHBOARD_DATA } from "../../components/client/DonationSpace/SpaceData";

import SpaceIntro from "../../components/client/DonationSpace/SpaceIntro";
import DonationOverview from "../../components/client/DonationSpace/DonationOverview";
import QuickActions from "../../components/client/DonationSpace/QuickActions";
import RecentDonations from "../../components/client/DonationSpace/RecentDonations";
import FinancialSerenity from "../../components/client/DonationSpace/FinancialSerenity";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import BottomNav from "../../layouts/BottomNav";
import DonationImpactCard from "../../components/client/DonationSpace/DonationImpactCard";

function DonorDashboard() {
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(
    DEFAULT_DASHBOARD_DATA
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showReminderForm, setShowReminderForm] = useState(false);
  const [reminderDate, setReminderDate] = useState("");
  const [reminderMessage, setReminderMessage] = useState("");

  // Récupérer les données du donneur depuis le backend
  useEffect(() => {
    async function fetchDonorDashboard() {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Veuillez vous connecter pour consulter votre profil.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/dashboard/donor",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.status === 401) {
          setError("Votre session a expiré. Veuillez vous reconnecter.");
          return;
        }

        if (!response.ok) {
          throw new Error(
            data.message || "Impossible de charger votre profil."
          );
        }

        const summary = data.summary || {};

        // Récupérer les informations de l'utilisateur connecté
        let savedUser = null;

        try {
          savedUser = JSON.parse(
            localStorage.getItem("user") || "null"
          );
        } catch (storageError) {
          console.error(
            "Impossible de lire les informations utilisateur :",
            storageError
          );
        }

        setDashboardData((previous) => ({
          ...previous,

          user: savedUser
            ? {
                ...previous.user,
                ...savedUser,
                firstName:
                  savedUser.firstName || previous.user.firstName,
              }
            : previous.user,

          donationStats: {
            ...previous.donationStats,

            // Montant total des dons réussis
            totalDonated: Number(summary.totalDonated ?? 0),

            // Cette statistique n'est pas encore calculée par le backend
            annualChange: null,

            // Ces deux statistiques ne sont pas fournies par l'API
            familiesSupported: null,
            foodKits: null,
          },

          // Historique des cinq derniers dons
          recentDonations: Array.isArray(data.recentDonations)
            ? data.recentDonations.map((donation) => ({
                id: donation._id || donation.id,

                date: donation.createdAt
                  ? new Date(donation.createdAt).toLocaleDateString("fr-FR")
                  : donation.date || "—",

                type:
                  donation.type ||
                  donation.donationType ||
                  "Don",

                campaign:
                  donation.campaign?.name ||
                  donation.campaign?.title ||
                  donation.campaignName ||
                  "Don général",

                amount: Number(donation.amount ?? 0),

                status: donation.status || "pending",
              }))
            : [],
        }));

      } catch (err) {
        console.error("Erreur dashboard donateur :", err);
        setError(err.message || "Erreur de connexion au serveur.");

      } finally {
        setLoading(false);
      }
    }

    fetchDonorDashboard();
  }, []);

  // Actions rapides
  function handleQuickAction(actionId) {
    switch (actionId) {
      case "calculate-zakat":
        navigate("/calculer-zakat");
        break;

      case "make-donation":
        navigate("/cause");
        break;

      case "download-receipts":
        navigate("/rapports");
        break;

      default:
        console.warn("Action inconnue :", actionId);
    }
  }

  function handleViewDonations() {
    navigate("/rapports");
  }

  // Ouvrir le formulaire de rappel annuel
  function handleScheduleReminder() {
    setReminderMessage("");
    setShowReminderForm(true);
  }

  // Enregistrer le rappel sur cet appareil
  function handleReminderSubmit(event) {
    event.preventDefault();

    if (!reminderDate) {
      setReminderMessage("Veuillez choisir une date.");
      return;
    }

    const reminder = {
      date: reminderDate,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "zakatReminder",
      JSON.stringify(reminder)
    );

    setReminderMessage(
      "Votre rappel a été enregistré sur cet appareil."
    );
  }

  function handleViewReport() {
    navigate("/impact");
  }

  return (
    <main className="min-h-screen w-full bg-[#F8F9FD] text-[#303634]">
      <Header />

      <div className="mx-auto mb-20 w-full max-w-[1200px] px-5 pb-8 pt-8 sm:px-7 sm:pt-10 md:px-10 lg:px-12 lg:pt-12">

        {loading && (
          <p className="mb-4 text-sm text-[#004D43]">
            Chargement de votre profil...
          </p>
        )}

        {error && (
          <div
            role="alert"
            className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <SpaceIntro user={dashboardData.user} />

        <DonationOverview stats={dashboardData.donationStats} />

        <div className="mt-1 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-6">

          <div>
            <QuickActions onAction={handleQuickAction} />

            <FinancialSerenity
              data={dashboardData.financialSerenity}
              onScheduleReminder={handleScheduleReminder}
            />

            {showReminderForm && (
              <section className="mt-5 rounded-xl border border-[#B8E4DE] bg-white p-5">
                <h3 className="text-lg font-semibold text-[#004D43]">
                  Programmer mon rappel annuel
                </h3>

                <p className="mt-2 text-sm text-[#626967]">
                  Choisissez la date à laquelle vous souhaitez vous rappeler
                  de calculer votre Zakat.
                </p>

                <form
                  className="mt-4 space-y-4"
                  onSubmit={handleReminderSubmit}
                >
                  <label className="block text-sm text-[#303634]">
                    Date du rappel

                    <input
                      type="date"
                      value={reminderDate}
                      onChange={(event) =>
                        setReminderDate(event.target.value)
                      }
                      min={new Date().toISOString().split("T")[0]}
                      required
                      className="mt-2 block w-full rounded-lg border border-gray-300 p-3"
                    />
                  </label>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className="rounded-lg bg-[#004D43] px-4 py-3 text-sm text-white transition hover:bg-[#003F37]"
                    >
                      Enregistrer le rappel
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowReminderForm(false)}
                      className="rounded-lg border border-gray-300 px-4 py-3 text-sm text-[#303634]"
                    >
                      Annuler
                    </button>
                  </div>

                  {reminderMessage && (
                    <p
                      role="status"
                      className="text-sm text-[#004D43]"
                    >
                      {reminderMessage}
                    </p>
                  )}
                </form>
              </section>
            )}
          </div>

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

      <BottomNav />
      <Footer />
    </main>
  );
}

export default DonorDashboard;