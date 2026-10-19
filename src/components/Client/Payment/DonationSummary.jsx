import { LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

function DonationSummary({
  donation,
  onPay,
}) {
  return (
    <section
      className="
        w-full
        overflow-hidden
        rounded-[14px]
        bg-white
      "
    >
      {/* Header */}

      <div
        className="
          bg-[#005B4F]
          px-5
          py-5
        "
      >
        <p
          className="
            text-[13px]
            font-medium
            text-[#8DC7BB]
          "
        >
          Résumé du don
        </p>
      </div>

      {/* Details */}

      <div className="px-5 py-5">
        <div className="space-y-4">
          <SummaryRow
            label="Type"
            value={donation.type}
          />

          <SummaryRow
            label="Cause"
            value={donation.cause}
          />

          <SummaryRow
            label="Montant"
            value={`${formatAmount(donation.amount)} FCFA`}
          />

          <SummaryRow
            label="Frais de service"
            value={`${formatAmount(donation.serviceFee)} FCFA`}
            valueClassName="text-[#39806D]"
          />
        </div>

        {/* Separator */}

        <div className="my-5 h-px bg-[#E3E7E5]" />

        {/* Total */}

        <div className="flex items-center justify-between gap-4">
          <span
            className="
              text-[13px]
              font-semibold
              text-[#174E45]
            "
          >
            Total
          </span>

          <span
            className="
              text-[14px]
              font-bold
              text-[#005B4F]
            "
          >
            {formatAmount(donation.total)} FCFA
          </span>
        </div>

        {/* Pay button */}

        <Link
          to="/confirm"
          onClick={onPay}
          className="
            mt-7
            flex
            h-[56px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-[9px]
            bg-[#004D43]
            text-[13px]
            font-medium
            text-white
            shadow-[0_4px_8px_rgba(0,0,0,0.12)]
            transition
            duration-200
            hover:bg-[#003F37]
            active:scale-[0.98]
          "
        >
          <LockKeyhole
            size={17}
            strokeWidth={2}
          />

          <span>Payer maintenant</span>
        </Link>

        {/* Security text */}

        <p
          className="
            mt-7
            text-[10px]
            leading-[1.5]
            text-[#777D7B]
          "
        >
          ♧ Vos données sont cryptées et protégées par les standards de
          sécurité les plus élevés. Aucune information bancaire n'est stockée
          sur nos serveurs.
        </p>
      </div>
    </section>
  );
}

function SummaryRow({
  label,
  value,
  valueClassName = "",
}) {
  return (
    <div
      className="
        flex
        items-start
        justify-between
        gap-4
        border-b
        border-[#F0F1F0]
        pb-3
      "
    >
      <span
        className="
          text-[12px]
          text-[#626967]
        "
      >
        {label}
      </span>

      <span
        className={`
          max-w-[58%]
          text-right
          text-[12px]
          font-semibold
          text-[#303634]

          ${valueClassName}
        `}
      >
        {value}
      </span>
    </div>
  );
}

function formatAmount(amount) {
  return new Intl.NumberFormat("fr-FR").format(amount || 0);
}

export default DonationSummary;