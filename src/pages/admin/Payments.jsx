import { useState } from 'react';
import  PaymentHero  from '../../components/admin/payments/PaymentHero';
import  PaymentFilterBar  from '../../components/admin/payments/PaymentFilterBar';
import  PaymentTable  from '../../components/admin/payments/PaymentTable';
import  AddPaymentModal  from '../../components/admin/payments/AddPaymentModal';
import { INITIAL_TRANSACTIONS, STATUS_OPTIONS } from '../../Data/paymentData';


function Payments() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === 'ALL' || tx.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  function handleAddTransaction(newTx) {
    setTransactions([newTx, ...transactions]);
  }

  function handleExport() {
    alert(`Exportation de ${filteredTransactions.length} transaction(s) au format CSV...`);
  }

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-10 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <PaymentHero
          onExport={handleExport}
          onOpenAddModal={() => setIsModalOpen(true)}
        />

        <PaymentFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          statusOptions={STATUS_OPTIONS}
        />

        <PaymentTable transactions={filteredTransactions} />

        <AddPaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddTransaction}
        />
      </div>
    </div>
  );
}

export default Payments;