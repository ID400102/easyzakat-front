import { useState } from 'react';
import  AuditPageHero  from '../../components/admin/audit/AuditPageHero';
import  AuditFilterBar  from '../../components/admin/audit/AuditFilterBar';
import  AuditTable  from '../../components/admin/audit/AuditTable';
import { INITIAL_AUDIT_LOGS } from '../../Data/auditData';

function Audit() {
  const [auditLogs, setAuditLogs] = useState(INITIAL_AUDIT_LOGS);
  const [filterQuery, setFilterQuery] = useState('');

  // Fonction dynamique pour enregistrer un nouvel événement d'audit depuis n'importe quelle action backend/frontend
  function addAuditLog(action, target, oldValue, newValue, user = 'admin@easyzakat.com') {
    const newLog = {
      id: Date.now().toString(),
      date: new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(',', ''),
      user,
      action,
      target,
      oldValue: oldValue || '—',
      newValue: newValue || '—',
    };

    setAuditLogs((prevLogs) => [newLog, ...prevLogs]);
  }

  // Filtrage réactif
  const filteredLogs = auditLogs.filter((log) => {
    const query = filterQuery.toLowerCase();
    return (
      log.action.toLowerCase().includes(query) ||
      log.user.toLowerCase().includes(query) ||
      log.target.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen px-4 py-5 sm:px-6 md:px-7 md:py-7 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <AuditPageHero />

        <AuditFilterBar
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
        />

        <AuditTable logs={filteredLogs} />
      </div>
    </div>
  );
}

export default Audit;