import { ReportsHeader } from '../components/reports/ReportsHeader';
import { ReportsGrid } from '../components/reports/ReportsGrid';
import { REPORTS_LIST } from '../constants/reportsData';

function ReportsPage() {
  function handleExport(reportId, reportTitle) {
    // Connexion prête pour l'appel API Backend Node/Express (ex: /api/reports/export/:id)
    alert(`Téléchargement du rapport "${reportTitle}" au format CSV (compatible Excel)...`);
  }

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-10 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <ReportsHeader />
        <ReportsGrid reports={REPORTS_LIST} onExport={handleExport} />
      </div>
    </div>
  );
}

export default ReportsPage;