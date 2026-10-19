
export function formatFCFA(amount) {
  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(amount)} FCFA`;
}

export function getCampaignProgress(campaign) {
  if (!campaign.goal || campaign.goal <= 0) {
    return 0;
  }

  return Math.min(
    100,
    Math.round((campaign.collected / campaign.goal) * 100)
  );
}

export function formatCampaignDate(date) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(`${date}T12:00:00`))
    .replace(".", "");
}

export function filterCampaigns(campaigns, search, status) {
  const query = search.trim().toLocaleLowerCase("fr");

  return campaigns.filter((campaign) => {
    const matchesSearch = [
      campaign.name,
      campaign.organization,
      campaign.category,
      campaign.region,
      campaign.department,
      campaign.commune,
    ].some((value) =>
      (value || "").toLocaleLowerCase("fr").includes(query)
    );

    const matchesStatus =
      status === "tous" || campaign.status === status;

    return matchesSearch && matchesStatus;
  });
}
