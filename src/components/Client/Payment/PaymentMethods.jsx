import { WalletCards } from "lucide-react";

import { PAYMENT_METHODS } from "./paymentMethod";
import PaymentMethodCard from "./PaymentMethodCard";

function PaymentMethods({
  methods = PAYMENT_METHODS,
  selectedMethod = "wave",
  onMethodChange,
}) {
  function handleMethodSelect(methodId) {
    if (onMethodChange) {
      onMethodChange(methodId);
    }
  }

  const availableMethods = methods.filter(
    (method) => method.enabled
  );

  return (
    <section
      className="
        w-full
        rounded-[14px]
        bg-white
        p-5
        shadow-[0_2px_8px_rgba(0,0,0,0.02)]
        sm:p-6
        lg:p-7
      "
    >
      {/* Titre */}

      <div className="flex items-center gap-2">
        <WalletCards
          size={20}
          strokeWidth={2}
          className="text-[#005B4F]"
        />

        <h2
          className="
            text-[19px]
            font-semibold
            text-[#174E45]
            sm:text-[21px]
          "
        >
          Modes de paiement
        </h2>
      </div>

      {/* Méthodes de paiement */}

      <div
        className="
          mt-5
          grid
          grid-cols-2
          gap-3
          sm:gap-4
          lg:grid-cols-3
        "
      >
        {availableMethods.map((method) => (
          <PaymentMethodCard
            key={method.id}
            id={method.id}
            name={method.name}
            selected={selectedMethod === method.id}
            onSelect={() => handleMethodSelect(method.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default PaymentMethods;