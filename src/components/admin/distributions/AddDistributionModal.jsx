import { useState } from 'react';
import { X } from 'lucide-react';

function AddDistributionModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    beneficiary: '',
    origin: '',
    organization: 'Association Al Amane',
    amount: '',
    mode: 'Mobile Money',
    proof: '',
    status: 'PLANNED',
  });

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.beneficiary || !formData.amount) return;

    onAdd({
      ...formData,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
    });

    setFormData({
      beneficiary: '',
      origin: '',
      organization: 'Association Al Amane',
      amount: '',
      mode: 'Mobile Money',
      proof: '',
      status: 'PLANNED',
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
          <h2 className="text-lg font-bold text-[#0F4C3A]">Planifier une Distribution</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Bénéficiaire</label>
            <input
              type="text"
              required
              placeholder="Ex: Famille Ndoye"
              value={formData.beneficiary}
              onChange={(e) => setFormData({ ...formData, beneficiary: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Origine du fonds</label>
            <input
              type="text"
              required
              placeholder="Ex: Fonds urgences"
              value={formData.origin}
              onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Organisation</label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Montant</label>
              <input
                type="text"
                required
                placeholder="75 000 FCFA"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Mode</label>
              <select
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              >
                <option value="Mobile Money">Mobile Money</option>
                <option value="Virement">Virement</option>
                <option value="Espèces">Espèces</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Preuve / Référence</label>
              <input
                type="text"
                placeholder="Ex: WAVE-1234"
                value={formData.proof}
                onChange={(e) => setFormData({ ...formData, proof: e.target.value })}
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

export default AddDistributionModal;