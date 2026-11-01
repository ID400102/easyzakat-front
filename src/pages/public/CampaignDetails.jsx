
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, HandHeart } from "lucide-react";

import campaigns from "../../components/Home/Campaigns";

function CampaignDetails() {
  const { id } = useParams();
  const location = useLocation();

  const {
    donationAmount,
    donationType,
  } = location.state || {};

  // Récupérer les campagnes disponibles.
  // Le fichier Campaigns peut exporter un tableau ou un composant :
  // on utilise le tableau local si son export est bien un tableau.
  const campaignList = Array.isArray(campaigns) ? campaigns : [];

 const campaign = campaigns.find(
  (item) => String(item.id) === String(id)
);

  if (!campaign) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Campagne introuvable
          </h1>

          <Link
            to="/cause"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#005b49] px-5 py-4 font-bold text-white hover:bg-[#004b3c]"
          >
            <ArrowLeft size={20} />
            Retour aux campagnes
          </Link>
        </div>
      </div>
    );
  }

  const campaignId = campaign.id ?? campaign._id;

  const campaignName =
    campaign.title ||
    campaign.name ||
    campaign.campaignName ||
    "Campagne sans nom";

  const campaignOrganization =
    typeof campaign.organization === "string"
      ? campaign.organization
      : campaign.organization?.name || "";

  const selectedCause = {
    id: campaignId,
    name: campaignName,
    organization: campaignOrganization,
    image: campaign.image || "",
  };

  const handleSupport = () => {
    localStorage.setItem(
      "easyzakat_selected_campaign",
      JSON.stringify(selectedCause)
    );
  };

  const supportState = {
    campaignId,
    campaignName,
    campaignOrganization,
    donationAmount: donationAmount || "",
    donationType: donationType || "zakat",
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4">
          <Link
            to="/cause"
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </Link>

          <span className="font-bold text-[#003f35]">
            Campagne
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <img
            src={campaign.image}
            alt={campaignName}
            className="h-64 w-full object-cover sm:h-96"
          />

          <div className="p-5 sm:p-8">
            <span className="rounded-full bg-[#e9f2ef] px-3 py-1 text-xs font-semibold text-[#005b49]">
              {campaign.category}
            </span>

            <h1 className="mt-4 text-2xl font-bold text-[#003f35] sm:text-4xl">
              {campaignName}
            </h1>

            <p className="mt-4 leading-7 text-gray-500">
              {campaign.description}
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-sm font-semibold">
                <span>
                  {campaign.progress}% collecté
                </span>

                <span>
                  {(campaign.collected || 0).toLocaleString("fr-FR")} /{" "}
                  {(campaign.target || 0).toLocaleString("fr-FR")} FCFA
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#005b49]"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.max(0, Number(campaign.progress) || 0)
                    )}%`,
                  }}
                />
              </div>
            </div>

           <Link
  to="/type"
  state={{
    campaignId: campaign.id,
    campaignName: campaign.title,
    campaignOrganization: campaign.organization || "",
    donationAmount: donationAmount || "",
    donationType: donationType || "zakat",
  }}
  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#005b49] px-5 py-4 font-bold text-white hover:bg-[#004b3c]"
>
  <HandHeart size={20} />
  Soutenir cette campagne
</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CampaignDetails;
