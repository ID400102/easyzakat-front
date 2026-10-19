export function formatFCFA(amount) {
  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(amount)} FCFA`;
}

export function searchDonors(donors, searchTerm) {
  const normalizedSearch = searchTerm
    .trim()
    .toLocaleLowerCase("fr");

  return donors
    .filter((donor) =>
      donor.name.toLocaleLowerCase("fr").includes(normalizedSearch)
    )
    .sort((a, b) => b.totalAmount - a.totalAmount);
}