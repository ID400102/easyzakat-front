import TotalDonatedCard from "./TotalDonatedCard";
import ImpactCard from "./ImpactCard";

function DonationOverview({ stats }) {
  return (
    <section
      className="
        mt-7
        grid
        grid-cols-1
        gap-5

        sm:grid-cols-2

        lg:gap-6
      "
    >
      <TotalDonatedCard
        totalDonated={stats.totalDonated}
        annualChange={stats.annualChange}
      />

      <ImpactCard
        familiesSupported={stats.familiesSupported}
        foodKits={stats.foodKits}
      />
    </section>
  );
}

export default DonationOverview;