import { Download, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ramadanImage from "../../assets/ramadan.png";
import bilanImage from "../../assets/bilan.png";
import educationImage from "../../assets/education.png";

const reports = [
  {
    title: "Campagne Ramadan 2026",
    description:
      "Rapport de démonstration sur la collecte et la distribution des repas et kits alimentaires.",
    image: ramadanImage,
    size: "4.2 MB",
    file: "/reports/ramadan-2026.pdf",
  },
  {
    title: "Bilan Annuel Zakat 2026",
    description:
      "Rapport de démonstration sur les indicateurs financiers et l'impact social.",
    image: bilanImage,
    size: "8.1 MB",
    file: "/reports/bilan-zakat-2026.pdf",
  },
  {
    title: "Programme Éducation 2026",
    description:
      "Rapport de démonstration sur le suivi d'un programme d'aide à la scolarité.",
    image: educationImage,
    size: "3.5 MB",
    file: "/reports/education-2026.pdf",
  },
];

function ReportCard({ report }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={report.image}
          alt={report.title}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#0F3D2E] px-3 py-1 text-[11px] font-bold text-white">
          PDF • Démonstration
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-[#0F3D2E]">{report.title}</h3>

        <p className="mt-2 text-sm leading-5 text-gray-500">
          {report.description}
        </p>

        <div className="mt-5 flex gap-2">
          <a
            href={report.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#0F3D2E] px-3 py-3 text-sm font-bold text-[#0F3D2E] transition hover:bg-[#E7F8EE]"
          >
            <Eye size={17} />
            Voir
          </a>

          <a
            href={report.file}
            download
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0F3D2E] px-3 py-3 text-sm font-bold text-white transition hover:bg-[#15543F]"
          >
            <Download size={16} />
            Télécharger
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ImpactReports() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0F3D2E]">
            Rapports d'impact détaillés
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Consultez nos rapports de démonstration et de transparence.
          </p>
        </div>

        <Link
          to="/rapports"
          className="flex items-center gap-1 text-sm font-bold text-[#0F3D2E]"
        >
          Tout voir <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {reports.map((report) => (
          <ReportCard key={report.title} report={report} />
        ))}
      </div>
    </section>
  );
}