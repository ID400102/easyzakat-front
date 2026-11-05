import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function EditOrganizationModal({ isOpen, onClose, organization, onUpdate }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Association',
    manager: '',
    region: '',
    contact: '',
    status: 'VALIDATED',
  });

  useEffect(() => {
    if (organization) {
      setFormData({
        name: organization.name || '',
        type: organization.type || 'Association',
        manager: organization.manager || '',
        region: organization.region || '',
        contact: organization.contact || '',
        status: organization.status || 'VALIDATED',
      });
    }
  }, [organization]);

  if (!isOpen || !organization) return null;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate({
      ...organization,
      ...formData,
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-gray-100">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
          <h2 className="text-lg font-bold text-[#0F4C3A]">Modifier l'Organisation</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Nom de l'organisation</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              >
                <option value="Association">Association</option>
                <option value="Daara">Daara</option>
                <option value="Fonds social">Fonds social</option>
                <option value="Fondation">Fondation</option>
                <option value="Mosquée">Mosquée</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Région</label>
              <input
                type="text"
                required
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Responsable</label>
            <input
              type="text"
              required
              value={formData.manager}
              onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Contact</label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Statut</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0F4C3A]/20 focus:border-[#0F4C3A] outline-none"
              >
                <option value="VALIDATED">Validée</option>
                <option value="TO_VERIFY">À vérifier</option>
                <option value="DRAFT">Brouillon</option>
              </select>
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
              Mettre à jour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}