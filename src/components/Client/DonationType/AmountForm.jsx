import { ArrowRight } from "lucide-react";

function AmountForm({
  amount,
  anonymous,
  onAmountChange,
  onAnonymousChange,
  onContinue,
}) {
  return (
    <section
      className="
        mx-auto
        mt-10
        w-full
        max-w-[650px]
        rounded-[16px]
        bg-[#EEF1FC]
        p-6

        sm:p-7

        lg:max-w-[700px]
      "
    >
      {/* Label */}

      <label
        htmlFor="donationAmount"
        className="
          block
          text-[14px]
          font-medium
          text-[#424847]
        "
      >
        Montant du don (FCFA)
      </label>

      {/* Input */}

      <div
        className="
          mt-2
          flex
          h-12.25
          w-full
          items-center
          overflow-hidden
          rounded-lg
          border
          border-[#BDC4C2]
          bg-white

          focus-within:border-[#005B4F]
          focus-within:ring-1
          focus-within:ring-[#005B4F]
        "
      >
        <input
          id="donationAmount"
          type="number"
          min="0"
          value={amount}
          onChange={onAmountChange}
          placeholder="Entrez le montant"
          className="
            h-full
            min-w-0
            flex-1
            bg-transparent
            px-5
            text-[16px]
            font-medium
            text-[#303634]
            outline-none
            placeholder:text-[#727A86]
          "
        />

        <span
          className="
            px-5
            text-[14px]
            font-semibold
            text-[#004D43]
          "
        >
          FCFA
        </span>
      </div>

      {/* Checkbox */}

      <label
        htmlFor="anonymousDonation"
        className="
          mt-6
          flex
          cursor-pointer
          items-center
          gap-4
        "
      >
        <input
          id="anonymousDonation"
          type="checkbox"
          checked={anonymous}
          onChange={onAnonymousChange}
          className="
            h-6
            w-6
            shrink-0
            cursor-pointer
            accent-[#005B4F]
          "
        />

        <span
          className="
            text-[15px]
            text-[#303634]
          "
        >
          Faire ce don anonymement
        </span>
      </label>

      {/* Bouton */}

      <button
        type="button"
        onClick={onContinue}
        className="
          mt-6
          flex
          h-[56px]
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#005B4F]
          text-[20px]
          font-semibold
          text-[#8DC7BB]
          transition
          duration-200

          hover:bg-[#004D43]
          active:scale-[0.98]
        "
      >
        <span>Continuer</span>

        <ArrowRight
          size={23}
          strokeWidth={2}
        />
      </button>
    </section>
  );
}

export default AmountForm;