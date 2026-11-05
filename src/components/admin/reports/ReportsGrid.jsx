import  ReportCard  from './ReportCard';

function ReportsGrid({ reports, onExport }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} onExport={onExport} />
      ))}
    </div>
  );
}

export default ReportsGrid;