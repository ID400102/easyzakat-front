import { useState } from 'react';
import  DistributionsHero  from '../../components/admin/distributions/DistributionsHero';
import  DistributionsFilterBar  from '../../components/admin/distributions/DistributionsFilterBar';
import  DistributionsTable  from '../../components/admin/distributions/DistributionsTable';
import  AddDistributionModal  from '../../components/admin/distributions/AddDistributionModal';
import { INITIAL_DISTRIBUTIONS, STATUS_OPTIONS } from '../../Data/distributionsData';

function DistributionsPage() {
  const [distributions, setDistributions] = useState(INITIAL_DISTRIBUTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDistributions = distributions.filter((dist) => {
    const matchesSearch =
      dist.beneficiary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dist.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dist.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dist.proof.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === 'ALL' || dist.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  function handleAddDistribution(newDist) {
    setDistributions([newDist, ...distributions]);
  }

  function handleExport() {
    alert(`Exportation de ${filteredDistributions.length} distribution(s) au format CSV...`);
  }

  return (
    <div className="min-h-screen px-4 py-5 sm:px-6 md:px-7 md:py-7 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        <DistributionsHero
          onExport={handleExport}
          onOpenAddModal={() => setIsModalOpen(true)}
        />

        <DistributionsFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          statusOptions={STATUS_OPTIONS}
        />

        <DistributionsTable distributions={filteredDistributions} />

        <AddDistributionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddDistribution}
        />
      </div>
    </div>
  );
}

export default DistributionsPage;