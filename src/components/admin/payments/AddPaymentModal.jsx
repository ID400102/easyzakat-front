import { useState } from 'react';
import { X } from 'lucide-react';

function AddPaymentModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    donor: '',
    type: 'Urgence sociale',
    destination: 'Fonds Zakat général',
    amount: '',
    fee: '500 FCFA',
    paymentMethod: 'Virement',
    status: 'SUCCESS',
  });

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.donor || !formData.amount) return;

    onAdd({
      ...formData,
      id: Date.now().toString(),
      reference: `EZ-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
    });

    setFormData({
      donor: '',
      type: 'Urgence sociale',
      destination: 'Fonds Zakat général',
      amount: '',
      fee: '500 FCFA',
      paymentMethod: 'Virement',
      status: 'SUCCESS',
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
          <h2 className="text-lg font-bold text-[#0F4C3A]">Ajouter une Transaction</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Donateur</label>
            <input
              type="text"
              required
              placeholder="Ex: Abdoulaye Seck"
              value={formData.donor}
              onChange={(e) => setFormData({ ...formData, donor: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Type de don</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              >
                <option value="Urgence sociale">Urgence sociale</option>
                <option value="Don Ramadan">Don Ramadan</option>
                <option value="Sadaqa">Sadaqa</option>
                <option value="Zakat">Zakat</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Moyen de paiement</label>
              <select
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              >
                <option value="Virement">Virement</option>
                <option value="Carte bancaire">Carte bancaire</option>
                <option value="Free Money">Free Money</option>
                <option value="Orange Money">Orange Money</option>
                <option value="Wave">Wave</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Destination</label>
            <input
              type="text"
              required
              placeholder="Ex: Fonds Zakat général"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Montant</label>
              <input
                type="text"
                required
                placeholder="50 000 FCFA"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Frais</label>
              <input
                type="text"
                required
                value={formData.fee}
                onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              />
            </div>
          </div>

          <div className="pt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0F4C3A] hover:bg-[#0B3B2D] text-white rounded-lg text-xs font-medium"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPaymentModal;