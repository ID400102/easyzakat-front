
import { UserRound, Phone, Mail, MapPin, MessageCircle, ReceiptText } from "lucide-react";

function DonorInformation({ formData, onChange }) {
  const handleChange = (field, value) => {
    if (onChange) {
      onChange(field, value);
    }
  };

  const inputClassName =
    "mt-2 w-full rounded-lg border border-[#D7DEDB] bg-white px-4 py-3 text-sm text-[#252D2C] outline-none transition placeholder:text-[#9AA3A0] focus:border-[#005B4F] focus:ring-1 focus:ring-[#005B4F]";

  return (
    <section className="w-full rounded-[14px] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] sm:p-6 lg:p-7">
      <div className="flex items-center gap-2">
        <UserRound
          size={20}
          strokeWidth={2}
          className="text-[#005B4F]"
        />
        <h2 className="text-[19px] font-semibold text-[#174E45] sm:text-[21px]">
          Informations du donateur
        </h2>
      </div>

      <p className="mt-2 text-sm leading-6 text-[#737978]">
        Renseignez vos coordonnées pour assurer le suivi de votre don et recevoir votre reçu.
      </p>

      <div className="mt-5 space-y-4">
        {/* Nom complet */}
        <div>
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-[#252D2C]"
          >
            Nom complet <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <UserRound
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9691]"
            />
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Ex. : Hawa Sow"
              className={`${inputClassName} pl-10`}
            />
          </div>
        </div>

        {/* Téléphone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-medium text-[#252D2C]"
          >
            Numéro de téléphone <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9691]"
            />
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Ex. : +221 77 123 45 67"
              className={`${inputClassName} pl-10`}
            />
          </div>
        </div>

        {/* Adresse e-mail */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-[#252D2C]"
          >
            Adresse e-mail <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9691]"
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Ex. : hawa@email.com"
              className={`${inputClassName} pl-10`}
            />
          </div>
        </div>

        {/* Ville */}
        <div>
          <label
            htmlFor="city"
            className="text-sm font-medium text-[#252D2C]"
          >
            Ville de résidence <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9691]"
            />
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              placeholder="Ex. : Dakar"
              className={`${inputClassName} pl-10`}
            />
          </div>
        </div>
      </div>

      {/* Préférences de réception */}
      <div className="mt-6 border-t border-[#E8ECEA] pt-5">
        <h3 className="text-sm font-semibold text-[#174E45]">
          Préférences de réception
        </h3>

        <label className="mt-4 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="whatsappReceipt"
            checked={Boolean(formData.whatsappReceipt)}
            onChange={(e) =>
              handleChange("whatsappReceipt", e.target.checked)
            }
            className="mt-1 h-4 w-4 accent-[#005B4F]"
          />

          <span className="flex items-start gap-2 text-sm leading-5 text-[#4B5551]">
            <MessageCircle
              size={17}
              className="mt-0.5 shrink-0 text-[#005B4F]"
            />
            Recevoir mon reçu par WhatsApp
          </span>
        </label>

        <label className="mt-3 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="emailReceipt"
            checked={Boolean(formData.emailReceipt)}
            onChange={(e) =>
              handleChange("emailReceipt", e.target.checked)
            }
            className="mt-1 h-4 w-4 accent-[#005B4F]"
          />

          <span className="flex items-start gap-2 text-sm leading-5 text-[#4B5551]">
            <ReceiptText
              size={17}
              className="mt-0.5 shrink-0 text-[#005B4F]"
            />
            Recevoir mon reçu par e-mail
          </span>
        </label>

        <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg bg-[#F8F9FD] p-3">
          <input
            type="checkbox"
            name="anonymous"
            checked={Boolean(formData.anonymous)}
            onChange={(e) => handleChange("anonymous", e.target.checked)}
            className="mt-1 h-4 w-4 accent-[#005B4F]"
          />

          <span className="text-sm leading-5 text-[#4B5551]">
            Effectuer ce don anonymement
            <span className="mt-1 block text-xs text-[#737978]">
              Votre nom ne sera pas affiché publiquement.
            </span>
          </span>
        </label>
      </div>

      <p className="mt-4 text-xs text-[#737978]">
        <span className="text-red-500">*</span> Champs obligatoires.
      </p>
    </section>
  );
}

export default DonorInformation;
