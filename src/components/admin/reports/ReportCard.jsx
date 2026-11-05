import { Download } from 'lucide-react';

function ReportCard({ report, onExport }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-[#0F4C3A] font-serif mb-2">
          {report.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
          {report.description}
        </p>
      </div>

      <button
        onClick={() => onExport(report.id, report.title)}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all text-xs sm:text-sm shadow-xs self-start"
      >
        <Download className="w-4 h-4 text-gray-600" />
        <span>{report.buttonText}</span>
      </button>
    </div>
  );
}

export default ReportCard;