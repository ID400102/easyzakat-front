import { useRef, useState } from "react";
import {
  HandHeart,
  User,
  Users,
  FileText,
} from "lucide-react";

import BeneficiaryHeader from "../../components/admin/beneficiaries/BeneficiaryHeader";
import FormSection from "../../components/admin/beneficiaries/FormSection";
import FormInput from "../../components/admin/beneficiaries/FormInput";
import FormSelect from "../../components/admin/beneficiaries/FormSelect";
import UrgencySelector from "../../components/admin/beneficiaries/UrgencySelector";
import FileUpload from "../../components/admin/beneficiaries/FileUpload";
import FormActions from "../../components/admin/beneficiaries/FormActions";

function Beneficiaries() {

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    region: "Dakar",
    dependents: "",
    incomeCategory: "Aucun revenu",
    aidType: "Aide alimentaire",
    estimatedAmount: "0",
    urgency: "Élevé",
  });

  const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUrgency = (level) => {
    setFormData((prev) => ({
      ...prev,
      urgency: level,
    }));
  };

  const handleFiles = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setFiles((prev) => [
      ...prev,
      ...selectedFiles,
    ]);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFiles = Array.from(
      e.dataTransfer.files
    );

    setFiles((prev) => [
      ...prev,
      ...droppedFiles,
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dossier soumis :", formData);
    console.log("Fichiers :", files);
  };

  const handleDraft = () => {
    console.log(
      "Brouillon sauvegardé :",
      formData
    );
  };

  return (
    <div className="min-h-screen rounded-2xl pb-24 text-slate-700 md:pb-8">

      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        {/* TITRE */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-[#0F3D2E] sm:text-3xl">
            Inscrire un bénéficiaire
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Veuillez remplir les informations ci-dessous avec précision pour
            faciliter l'évaluation du dossier.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* INFORMATIONS PERSONNELLES */}
          <FormSection
            icon={User}
            title="Informations personnelles"
            description="Informations générales du bénéficiaire"
          >

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <FormInput
                label="Nom complet"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ex: Moussa Ndiaye"
              />

              <FormInput
                label="Téléphone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+221 -- --- -- --"
              />

              <div className="md:col-span-2">

                <FormSelect
                  label="Région / Localité"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  options={[
                    "Dakar",
                    "Thiès",
                    "Diourbel",
                    "Saint-Louis",
                    "Louga",
                    "Kaolack",
                    "Ziguinchor",
                    "Fatick",
                    "Kolda",
                    "Matam",
                    "Tambacounda",
                    "Kaffrine",
                    "Sédhiou",
                  ]}
                />

              </div>

            </div>

          </FormSection>


          {/* SITUATION SOCIALE */}
          <FormSection
            icon={Users}
            title="Situation sociale"
            description="Situation familiale et financière"
          >

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <FormInput
                label="Nb de personnes à charge"
                name="dependents"
                type="number"
                min="0"
                value={formData.dependents}
                onChange={handleChange}
                placeholder="Ex: 5"
              />

              <FormSelect
                label="Catégorie de revenu"
                name="incomeCategory"
                value={formData.incomeCategory}
                onChange={handleChange}
                options={[
                  "Aucun revenu",
                  "Revenu faible",
                  "Revenu moyen",
                  "Revenu régulier",
                ]}
              />

            </div>

          </FormSection>


          {/* BESOIN ET URGENCE */}
          <FormSection
            icon={HandHeart}
            title="Besoin et Urgence"
            description="Définissez le type d'aide nécessaire"
          >

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <FormSelect
                label="Type d'aide sollicitée"
                name="aidType"
                value={formData.aidType}
                onChange={handleChange}
                options={[
                  "Aide alimentaire",
                  "Aide médicale",
                  "Aide financière",
                  "Logement",
                  "Éducation",
                ]}
              />

              <FormInput
                label="Montant estimé (FCFA)"
                name="estimatedAmount"
                type="number"
                min="0"
                value={formData.estimatedAmount}
                onChange={handleChange}
              />

              <UrgencySelector
                value={formData.urgency}
                onChange={handleUrgency}
              />

            </div>

          </FormSection>


          {/* PIECES JUSTIFICATIVES */}
          <FormSection
            icon={FileText}
            title="Pièces justificatives"
            description="Documents nécessaires au dossier"
          >

            <FileUpload
              files={files}
              fileInputRef={fileInputRef}
              onFiles={handleFiles}
              onDrop={handleDrop}
            />

          </FormSection>


          {/* ACTIONS */}
          <FormActions
            onDraft={handleDraft}
          />

        </form>

      </main>

    </div>
  );
}

export default Beneficiaries;