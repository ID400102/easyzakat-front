
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  CAMPAIGN_CATEGORIES,
  CAMPAIGN_STATUSES,
} from "../../../Data/campaignsData";

const EMPTY_CAMPAIGN = {
  name: "",
  organization: "",
  category: "Autre",
  description: "",
  goal: "",
  collected: "",
  startDate: "",
  endDate: "",
  region: "",
  department: "",
  commune: "",
  status: "brouillon",
};

function CampaignEditModal({
  campaign,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState(EMPTY_CAMPAIGN);
  const [error, setError] = useState("");

  useEffect(() => {
    if (campaign) {
      setFormData({
        ...EMPTY_CAMPAIGN,
        ...campaign,
        goal: String(campaign.goal ?? ""),
        collected: String(campaign.collected ?? ""),
      });
      setError("");
    }
  }, [campaign]);

  useEffect(() => {
    if (!campaign) return;

    function handleEscape(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [campaign, onClose]);

  if (!campaign) return null;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const goal = Number(formData.goal);
    const collected = Number(formData.collected);

    if (
      !formData.name.trim() ||
      !formData.organization.trim()
    ) {
      setError("Le nom et l'organisation sont obligatoires.");
      return;
    }

    if (
      formData.goal === "" ||
      formData.collected === "" ||
      !Number.isFinite(goal) ||
      !Number.isFinite(collected) ||
      goal < 0 ||
      collected < 0
    ) {
      setError("Les montants doivent être des nombres positifs ou nuls.");
      return;
    }

    if (
      formData.startDate &&
      formData.endDate &&
      formData.endDate < formData.startDate
    ) {
      setError("La date de fin doit être postérieure à la date de début.");
      return;
    }

    onSave({
      ...formData,
      id: campaign.id,
      name: formData.name.trim(),
      organization: formData.organization.trim(),
      goal,
      collected,
    });
  }

  const inputClass =
    "mt-1 w-full min-w-0 rounded-lg border border-[#E2DCCF] bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-[#168568] focus:ring-2 focus:ring-[#168568]/15";

  const labelClass =
    "block text-sm font-medium text-slate-700";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-modal-title"
        className="flex max-h-[95dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-[#FBF9F4] shadow-2xl sm:max-w-2xl sm:rounded-2xl"
      >
        <header className="flex items-center justify-between gap-3 border-b border-[#E2DCCF] px-5 py-4 sm:px-6">
          <h2
            id="campaign-modal-title"
            className="font-serif text-2xl font-semibold text-[#006B5D]"
          >
            Modifier · Campagnes
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le formulaire"
            className="rounded-lg p-2 text-slate-500 hover:bg-[#EEEAE1]"
          >
            <X size={20} />
          </button>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col"
        >
          <div className="grid gap-4 overflow-y-auto px-5 py-5 sm:grid-cols-2 sm:px-6">
            <div>
              <label className={labelClass} htmlFor="campaign-name">
                Nom *
              </label>
              <input
                id="campaign-name"
                className={inputClass}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-organization">
                Organisation *
              </label>
              <input
                id="campaign-organization"
                className={inputClass}
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-category">
                Catégorie
              </label>
              <select
                id="campaign-category"
                className={inputClass}
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {CAMPAIGN_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-status">
                Statut
              </label>
              <select
                id="campaign-status"
                className={inputClass}
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                {CAMPAIGN_STATUSES.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="campaign-description">
                Description
              </label>
              <textarea
                id="campaign-description"
                className={inputClass}
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-goal">
                Objectif (FCFA) *
              </label>
              <input
                id="campaign-goal"
                className={inputClass}
                type="number"
                min="0"
                step="1"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-collected">
                Montant collecté (FCFA) *
              </label>
              <input
                id="campaign-collected"
                className={inputClass}
                type="number"
                min="0"
                step="1"
                name="collected"
                value={formData.collected}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-start">
                Date de début
              </label>
              <input
                id="campaign-start"
                className={inputClass}
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-end">
                Date de fin
              </label>
              <input
                id="campaign-end"
                className={inputClass}
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-region">
                Région
              </label>
              <input
                id="campaign-region"
                className={inputClass}
                name="region"
                value={formData.region}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="campaign-department">
                Département
              </label>
              <input
                id="campaign-department"
                className={inputClass}
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="campaign-commune">
                Commune
              </label>
              <input
                id="campaign-commune"
                className={inputClass}
                name="commune"
                value={formData.commune}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="sm:col-span-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}
          </div>

          <footer className="flex flex-col-reverse gap-3 border-t border-[#E2DCCF] bg-[#FBF9F4] px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#DCD5C8] px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#EEEAE1]"
            >
              Annuler
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#155E4F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#104B3F]"
            >
              Enregistrer
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}

export default CampaignEditModal;
