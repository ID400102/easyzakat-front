import { Info } from "lucide-react";

function ZakatNote() {
  return (
    <section className="rounded-[10px] border border-[#d9dcef] bg-[#f1f2ff] p-4 sm:p-6">

      <div className="flex gap-3">

        <div className="mt-[2px] shrink-0">
          <Info
            size={17}
            className="text-[#174b3e]"
          />
        </div>

        <div>

          <h3 className="text-[12px] font-bold text-[#174b3e] sm:text-sm">
            Note Religieuse & Disclaimer
          </h3>

          <p className="mt-2 text-[12px] leading-[18px] text-[#555b67] sm:text-[13px] sm:leading-5">
            La Zakat est due si votre patrimoine dépasse le seuil du Nisab
            et qu’il a été maintenu pendant une année lunaire (Hawl).
            Ce calculateur utilise un taux standard de 2,5%. Veuillez
            consulter un érudit local pour des cas complexes liés à
            l’immobilier ou aux investissements spécifiques.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ZakatNote;