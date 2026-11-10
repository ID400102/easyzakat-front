import { WalletCards } from "lucide-react";
import MoneyInput from "./MoneyInput";

function ZakatAssets({ form, handleChange }) {
  return (
    <section className="rounded-[10px] border border-[#d8dfdc] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)]">

      <div className="border-t-[2px] border-[#174b3e] px-4 pb-2 pt-4 sm:px-6 sm:pt-5">

        <div className="flex items-center gap-2">

          <WalletCards
            size={16}
            strokeWidth={2}
            className="text-[#174b3e]"
          />

          <h2 className="text-[17px] font-bold sm:text-lg">
            Actifs
          </h2>

        </div>

      </div>

      <div className="space-y-4 px-4 pb-5 sm:px-6 sm:pb-7">

        <MoneyInput
          label="Épargne"
          value={form.savings}
          onChange={(value) => handleChange("savings", value)}
        />

        <MoneyInput
          label="Épargne et Cash"
          value={form.cash}
          onChange={(value) => handleChange("cash", value)}
        />

        <MoneyInput
          label="Banque (Comptes courants)"
          value={form.bank}
          onChange={(value) => handleChange("bank", value)}
        />

        <MoneyInput
          label="Valeur de l'Or"
          value={form.gold}
          onChange={(value) => handleChange("gold", value)}
        />

        <MoneyInput
          label="Valeur de l'Argent (Métal)"
          value={form.silver}
          onChange={(value) => handleChange("silver", value)}
        />

        <MoneyInput
          label="Marchandises en stock"
          value={form.merchandise}
          onChange={(value) =>
            handleChange("merchandise", value)
          }
        />

        <MoneyInput
          label="Créances (Argent dû)"
          value={form.receivables}
          onChange={(value) =>
            handleChange("receivables", value)
          }
        />

      </div>

    </section>
  );
}

export default ZakatAssets;