
import { WalletCards } from "lucide-react";

function TotalDonatedCard({ totalDonated = 0, annualChange = null }) {
  const hasAnnualChange =
    annualChange !== null &&
    annualChange !== undefined &&
    Number.isFinite(Number(annualChange));

  const isPositive = Number(annualChange) >= 0;

  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-[12px]
        bg-white
        px-4
        pb-5
        pt-5
        before:absolute
        before:left-0
        before:top-0
        before:h-[3px]
        before:w-full
        before:bg-[#005B4F]
        sm:px-5
        sm:pt-6
      "
    >
      <div className="flex h-[32px] w-[32px] items-center justify-center">
        <WalletCards
          size={20}
          strokeWidth={1.8}
          className="text-[#005B4F]"
        />
      </div>

      <p className="mt-2 text-[10px] text-[#59615F]">
        Total Donné
      </p>

      <p className="mt-3 text-[21px] font-semibold leading-none text-[#004D43] sm:text-[24px] lg:text-[26px]">
        {formatAmount(totalDonated)} FCFA
      </p>

      <span
        className={`
          mt-2
          inline-flex
          rounded-full
          px-2
          py-1
          text-[8px]
          font-medium
          ${
            hasAnnualChange
              ? isPositive
                ? "bg-[#C9F2E7] text-[#24866F]"
                : "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-500"
          }
        `}
      >
        {hasAnnualChange
          ? `${isPositive ? "+" : ""}${Number(annualChange).toLocaleString("fr-FR")}% vs l'année dernière`
          : "Évolution annuelle indisponible"}
      </span>
    </article>
  );
}

function formatAmount(amount) {
  return new Intl.NumberFormat("fr-FR").format(
    Number(amount) || 0
  );
}

export default TotalDonatedCard;
