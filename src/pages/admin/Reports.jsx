
import  ReportsGrid  from '../../components/admin/reports/ReportsGrid';
import { REPORTS_LIST } from '../../Data/reportsData';
import ReportsHero from '../../components/admin/reports/ReportsHero';

function Reports() {
  function handleExport(reportId, reportTitle) {
    // Connexion prête pour l'appel API Backend Node/Express (ex: /api/reports/export/:id)
    alert(`Téléchargement du rapport "${reportTitle}" au format CSV (compatible Excel)...`);
  }

  return (
    <div className="min-h-screen px-4 py-5 sm:px-6 md:px-7 md:py-7 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <ReportsHero />
        <ReportsGrid reports={REPORTS_LIST} onExport={handleExport} />
      </div>
    </div>
  );
}

export default Reports;