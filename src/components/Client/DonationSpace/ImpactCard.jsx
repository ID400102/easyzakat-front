import { Heart } from "lucide-react";

function ImpactCard({
  familiesSupported,
  foodKits,
}) {
  return (
    <article
      className="
        relative
        overflow-hidden
        rounded-[12px]
        bg-white
        px-4
        pb-4
        pt-5

        before:absolute
        before:left-0
        before:top-0
        before:h-[3px]
        before:w-full
        before:bg-[#D4AD24]

        sm:px-5
        sm:pt-6
      "
    >
      <div className="flex items-center gap-2">
        <Heart
          size={15}
          strokeWidth={1.8}
          className="text-[#A28A16]"
        />

        <span
          className="
            text-[10px]
            text-[#59615F]
          "
        >
          Votre Impact
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <ImpactRow
          label="Familles soutenues"
          value={familiesSupported}
        />

        <ImpactRow
          label="Kits alimentaires"
          value={foodKits}
        />
      </div>
    </article>
  );
}

function ImpactRow({ label, value }) {
  return (
    <div
      className="
        flex
        min-h-[40px]
        items-center
        justify-between
        gap-4
        rounded-[8px]
        bg-[#EEF1FC]
        px-3
      "
    >
      <span
        className="
          text-[10px]
          text-[#313837]

          sm:text-[11px]
        "
      >
        {label}
      </span>

      <span
        className="
          text-[17px]
          font-semibold
          text-[#004D43]
        "
      >
        {value}
      </span>
    </div>
  );
}

export default ImpactCard;