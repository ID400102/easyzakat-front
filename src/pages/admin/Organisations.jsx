import { useState } from 'react';
import { OrganisationsHero } from '../../components/admin/organisations/OrganisationsHero';
import { FilterBar } from '../../components/admin/organisations/FilterBar';
import { OrganizationTable } from '../../components/admin/organisations/OrganizationTable';
import { AddOrganizationModal } from '../../components/admin/organisations/AddOrganizationModal';
import { INITIAL_ORGANIZATIONS, STATUS_OPTIONS } from '../../Data/organisationsData';
import { EditOrganizationModal } from '../../components/admin/organisations/EditOrganizationModal';



function Organizations() {
  const [organizations, setOrganizations] = useState(INITIAL_ORGANIZATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentOrgToEdit, setCurrentOrgToEdit] = useState(null);

  const filteredOrganizations = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.manager.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.contact.includes(searchQuery);

    const matchesStatus =
      selectedStatus === 'ALL' || org.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  function handleAddOrganization(newOrg) {
    setOrganizations([newOrg, ...organizations]);
  }

  function handleUpdateOrganization(updatedOrg) {
    setOrganizations(
      organizations.map((org) => (org.id === updatedOrg.id ? updatedOrg : org))
    );
  }

  function handleDeleteOrganization(id) {
    setOrganizations(organizations.filter((org) => org.id !== id));
  }

  function handleOpenEditModal(org) {
    setCurrentOrgToEdit(org);
    setIsEditModalOpen(true);
  }

  function handleExport() {
    alert(`Exportation de ${filteredOrganizations.length} organisation(s) au format CSV...`);
  }

  return (
    <div className="min-h-screen px-4 py-5 sm:px-6 md:px-7 md:py-7 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <OrganisationsHero
          onExport={handleExport}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          statusOptions={STATUS_OPTIONS}
        />

        <OrganizationTable
          organizations={filteredOrganizations}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteOrganization}
        />

        <AddOrganizationModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddOrganization}
        />

        <EditOrganizationModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          organization={currentOrgToEdit}
          onUpdate={handleUpdateOrganization}
        />
      </div>
    </div>
  );
}

export default Organizations;