import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const fmt = (n) =>
  new Intl.NumberFormat("fr-FR").format(Number(n) || 0) + " FCFA";

function Recapitulatif({
  totalActifs = 0,
  dettes = 0,
  assiette = 0,
  zakat = 0,
  onDonate = () => {},
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden lg:block sticky top-6 bg-emerald-900 text-white rounded-2xl shadow-xl p-8">
        <h2 className="text-xl font-semibold mb-6">
          Récapitulatif
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Total des Actifs</span>
            <span>{fmt(totalActifs)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span>Dettes Déductibles</span>
            <span className="text-yellow-200">
              {fmt(dettes)}
            </span>
          </div>

          <div className="border-t border-white/10 pt-4 flex items-center justify-between">
            <span>Assiette de Calcul</span>
            <span className="text-2xl font-bold">
              {fmt(assiette)}
            </span>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-6 text-center mt-6">
          <p className="text-xs tracking-wide text-emerald-200">
            MONTANT DE VOTRE ZAKAT (2,5%)
          </p>

          <p className="text-4xl font-extrabold text-emerald-200 mt-2">
            {fmt(zakat)}
          </p>
        </div>

        <button
          type="button"
          onClick={onDonate}
          className="w-full bg-[#c9a227] hover:brightness-110 text-emerald-950 font-semibold rounded-xl py-3 mt-6 transition"
        >
          Donner ce montant
        </button>

        <p className="text-xs text-emerald-200/70 text-center mt-4">
          Paiement sécurisé via Orange Money, Wave ou CB
        </p>
      </div>

      {/* MOBILE + TABLETTE */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-emerald-900 text-white rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.25)] pb-[env(safe-area-inset-bottom)]">
        {/* Chevron */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-900 rounded-full p-2"
          aria-label={
            open
              ? "Fermer le récapitulatif"
              : "Afficher le récapitulatif"
          }
        >
          {open ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronUp size={20} />
          )}
        </button>

        {/* Détail */}
        <div
          className={`grid transition-all duration-300 ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 pt-5 pb-2 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Total des Actifs</span>
                <span>{fmt(totalActifs)}</span>
              </div>

              <div className="flex justify-between">
                <span>Dettes Déductibles</span>
                <span className="text-yellow-200">
                  {fmt(dettes)}
                </span>
              </div>

              <div className="border-t border-white/10 pt-3 flex justify-between">
                <span>Assiette de Calcul</span>
                <span className="font-bold">
                  {fmt(assiette)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Barre compacte */}
        <div className="p-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-emerald-200">
              Montant de votre Zakat
            </p>

            <p className="text-xl font-bold text-emerald-200">
              {fmt(zakat)}
            </p>
          </div>

          <button
            type="button"
            onClick={onDonate}
            className="bg-[#c9a227] text-emerald-950 font-semibold rounded-xl px-4 py-2 whitespace-nowrap"
          >
            Donner ce montant
          </button>
        </div>
      </div>
    </>
  );
}

export default Recapitulatif;
