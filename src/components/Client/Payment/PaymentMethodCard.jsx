import { Check } from "lucide-react";

import { PAYMENT_METHOD_CONFIG } from "./paymentMethod";

function PaymentMethodCard({
  id,
  name,
  selected,
  onSelect,
}) {
  const config = PAYMENT_METHOD_CONFIG[id];

  const Icon = config.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        relative
        flex
        min-h-[138px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-[10px]
        border
        bg-white
        px-3
        py-4
        text-center
        transition
        duration-200

        hover:border-[#005B4F]

        sm:min-h-[145px]

        ${
          selected
            ? "border-[#2D806D] bg-[#EAF0FF] shadow-[0_0_0_1px_#2D806D]"
            : "border-[#C8CECC]"
        }
      `}
    >
      {/* Icône sélection */}
      {selected && (
        <span
          className="
            absolute
            right-2
            top-2
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-[#005B4F]
            text-white
          "
        >
          <Check size={12} strokeWidth={3} />
        </span>
      )}

      {/* Icon */}
      <div
        className={`
          flex
          h-[38px]
          w-[38px]
          items-center
          justify-center
          rounded-full
          ${config.iconBackground}
        `}
      >
        <Icon
          size={22}
          strokeWidth={2.3}
          className={config.iconColor}
        />
      </div>

      {/* Name */}
      <span
        className="
          mt-3
          max-w-full
          text-[12px]
          font-bold
          leading-[1.15]
          text-[#252D2C]

          sm:text-[13px]
        "
      >
        {name}
      </span>

      {/* Subtitle */}
      <span
        className="
          mt-1
          max-w-full
          text-[8px]
          font-medium
          uppercase
          tracking-[1px]
          leading-[1.2]
          text-[#737978]

          sm:text-[9px]
        "
      >
        {config.subtitle}
      </span>
    </button>
  );
}

export default PaymentMethodCard;