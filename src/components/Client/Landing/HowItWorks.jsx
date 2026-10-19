
import {
  Calculator,
  HandHeart,
  CreditCard,
  Receipt,
} from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Calculator,
    title: "Calculer",
    description:
      "Utilisez notre outil conforme à la Sunnah pour évaluer votre Zakat.",
  },
  {
    number: "2",
    icon: HandHeart,
    title: "Choisir",
    description:
      "Sélectionnez la cause ou la campagne que vous souhaitez soutenir.",
  },
  {
    number: "3",
    icon: CreditCard,
    title: "Payer",
    description:
      "Transaction sécurisée par Mobile Money ou carte bancaire.",
  },
  {
    number: "4",
    icon: Receipt,
    title: "Recevoir",
    description:
      "Recevez des rapports d'impact et vos reçus digitaux instantanément.",
  },
];

function HowItWorks() {
  return (
    <section
      id="fonctionnement"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <h2 className="text-base font-semibold text-[#003f35] sm:text-2xl">
            Comment ça marche?
          </h2>

          <div className="mx-auto mt-2 h-0.5 w-8 bg-[#e0b51c]" />
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#003f35] shadow-sm">
                  <Icon size={17} strokeWidth={1.5} />
                </div>

                <p className="mt-3 text-[10px] font-semibold text-[#003f35]">
                  {step.number}. {step.title}
                </p>

                <p className="mx-auto mt-2 max-w-[220px] text-[9px] leading-4 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;