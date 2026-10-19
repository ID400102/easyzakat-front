import { Download, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ramadanImage from "../../../assets/ramadan.png";
import bilanImage from "../../../assets/bilan.png";
import educationImage from "../../../assets/education.png";
const reports = [
  {
    title: "Campagne Ramadan 2026",
    description:
      "Rapport complet sur la collecte et distribution des repas et kits alimentaires.",
    image: ramadanImage,
    size: "4.2 MB",
  },
  {
    title: "Bilan Annuel Zakat 2026",
    description:
      "Analyse financière globale et impact social sur les 14 régions du Sénégal.",
    image: bilanImage,
    size: "8.1 MB",
  },
  {
    title: "Programme Éducation 2026",
    description:
      "Impact du fonds de scolarité sur l'autonomisation des jeunes étudiants.",
    image: educationImage,
    size: "3.5 MB",
  },
];

function ReportCard({ report }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">

      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={report.image}
          alt={report.title}
          className="h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#0F3D2E] px-3 py-1 text-[11px] font-bold text-white">
          PDF • {report.size}
        </span>
      </div>

      {/* Contenu */}
      <div className="p-5">

        <h3 className="font-bold text-[#0F3D2E]">
          {report.title}
        </h3>

        <p className="mt-2 text-sm leading-5 text-gray-500">
          {report.description}
        </p>

        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#0F3D2E] px-4 py-3 text-sm font-bold text-[#0F3D2E] transition hover:bg-[#E7F8EE]"
        >
          <Eye size={17} />

          Voir le rapport

          <Download size={16} />
        </button>

      </div>
    </article>
  );
}

export default function ImpactReports() {
  return (
    <section className="mt-10">

      {/* Titre */}
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">

        <div>
          <h2 className="text-2xl font-extrabold text-[#0F3D2E]">
            Rapports d'impact détaillés
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Consultez nos rapports financiers audités et transparents.
          </p>
        </div>

        <Link
          to="/rapports"
          className="flex items-center gap-1 text-sm font-bold text-[#0F3D2E]"
        >
          Tout voir
          <ArrowRight size={16} />
        </Link>

      </div>

      {/* Cartes */}
      <div className="grid gap-5 md:grid-cols-3">
        {reports.map((report) => (
          <ReportCard
            key={report.title}
            report={report}
          />
        ))}
      </div>

    </section>
  );
}

