
import { useMemo, useState } from "react";

import CampaignsHero from "../../components/admin/campaigns/CampaignsHero";
import CampaignFilters from "../../components/admin/campaigns/CampaignFilters";
import CampaignTable from "../../components/admin/campaigns/CampaignTable";
import CampaignEditModal from "../../components/admin/campaigns/CampaignEditModal";

import CAMPAIGNS_DATA from "../../Data/campaignsData";
import { filterCampaigns } from "../../Data/campaignUtils";

function exportCampaigns(campaigns) {
  const columns = [
    ["Nom", "name"],
    ["Organisation", "organization"],
    ["Catégorie", "category"],
    ["Objectif FCFA", "goal"],
    ["Collecté FCFA", "collected"],
    ["Date de début", "startDate"],
    ["Date de fin", "endDate"],
    ["Région", "region"],
    ["Département", "department"],
    ["Commune", "commune"],
    ["Statut", "status"],
  ];

  const escapeCSV = (value) =>
    `"${String(value ?? "").replace(/"/g, '""')}"`;

  const csv = [
    columns.map(([label]) => escapeCSV(label)).join(";"),
    ...campaigns.map((campaign) =>
      columns
        .map(([, key]) => escapeCSV(campaign[key]))
        .join(";")
    ),
  ].join("\r\n");

  const blob = new Blob(
    ["\uFEFF", csv],
    { type: "text/csv;charset=utf-8;" }
  );

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "campagnes-easyzakat.csv";
  link.click();

  URL.revokeObjectURL(url);
}

function Campaigns({ initialCampaigns = CAMPAIGNS_DATA }) {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("tous");
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const filteredCampaigns = useMemo(
    () => filterCampaigns(campaigns, search, status),
    [campaigns, search, status]
  );

  function handleSave(updatedCampaign) {
    setCampaigns((previous) =>
      previous.map((campaign) =>
        campaign.id === updatedCampaign.id
          ? updatedCampaign
          : campaign
      )
    );

    setSelectedCampaign(null);
  }

  function handleAdd() {
    // Le formulaire de création sera ajouté séparément.
    // On évite de confondre création et modification.
    alert("Le formulaire de création sera intégré dans une prochaine étape.");
  }

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 md:px-7 md:py-7 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <CampaignsHero
          onExport={() => exportCampaigns(filteredCampaigns)}
          onAdd={handleAdd}
        />

        <CampaignFilters
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
        />

        <CampaignTable
          campaigns={filteredCampaigns}
          onEdit={setSelectedCampaign}
        />

        <CampaignEditModal
          campaign={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
          onSave={handleSave}
        />
      </div>
    </main>
  );
}

export default Campaigns;
