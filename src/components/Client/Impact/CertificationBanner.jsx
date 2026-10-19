import {
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

export default function CertificationBanner() {
  return (
    <section className="mt-10 rounded-2xl bg-[#E2E8F8] p-5 sm:p-6 md:p-8">

      <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

        {/* Texte */}
        <div className="max-w-3xl">

          <h2 className="text-2xl font-bold text-[#003527]">
            Certifié et Audité
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            EasyZakat collabore avec des auditeurs indépendants et des
            conseils de Sharia pour garantir que chaque franc CFA est
            utilisé conformément aux principes religieux et aux normes
            de gouvernance internationales.
          </p>

          {/* Badges */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0F3D2E]">
              <BadgeCheck size={17} />
              Sharia Compliant
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0F3D2E]">
              <ShieldCheck size={17} />
              ISO 27001 Certified
            </div>

          </div>

        </div>

        {/* Cercle */}
        <div className="flex justify-center md:justify-end">

          <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-[#75C99A] bg-[#E2E8F8] text-center">

            <div>
              <p className="text-xl font-extrabold text-[#003527]">
                100%
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#0F3D2E]">
                Transparence
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
