import { WalletCards } from "lucide-react";

function TotalDonatedCard({
  totalDonated,
  annualChange,
}) {
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
      <div
        className="
          flex
          h-[32px]
          w-[32px]
          items-center
          justify-center
        "
      >
        <WalletCards
          size={20}
          strokeWidth={1.8}
          className="text-[#005B4F]"
        />
      </div>

      <p
        className="
          mt-2
          text-[10px]
          text-[#59615F]
        "
      >
        Total Donné
      </p>

      <p
        className="
          mt-3
          text-[21px]
          font-semibold
          leading-none
          text-[#004D43]

          sm:text-[24px]

          lg:text-[26px]
        "
      >
        {formatAmount(totalDonated)} FCFA
      </p>

      <span
        className="
          mt-2
          inline-flex
          rounded-full
          bg-[#C9F2E7]
          px-2
          py-1
          text-[8px]
          font-medium
          text-[#56AA95]
        "
      >
        +{annualChange}% vs l'année dernière
      </span>
    </article>
  );
}

function formatAmount(amount) {
  return new Intl.NumberFormat("fr-FR").format(amount || 0);
}

export default TotalDonatedCard;