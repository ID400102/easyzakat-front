import { ArrowDownLeft } from "lucide-react";
import MoneyInput from "./MoneyInput";

function ZakatDebts({ form, handleChange, onCalculate }) {
  return (
    <section className="rounded-[10px] border border-[#dddcb7] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.04)]">

      <div className="border-t-[2px] border-[#8b8535] px-4 pb-2 pt-4 sm:px-6 sm:pt-5">

        <div className="flex items-center gap-2">

          <ArrowDownLeft
            size={17}
            className="text-[#7b7425]"
          />

          <h2 className="text-[17px] font-bold text-[#5f5b20] sm:text-lg">
            Dettes
          </h2>

        </div>

      </div>

      <div className="px-4 pb-5 sm:px-6 sm:pb-7">

        <MoneyInput
          label="Dettes à court terme (Dues maintenant)"
          value={form.debts}
          onChange={(value) =>
            handleChange("debts", value)
          }
        />

        <div className="mt-4">
          <MoneyInput
            label="Obligations immédiates"
            value={form.immediateObligations}
            onChange={(value) =>
              handleChange("immediateObligations", value)
            }
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onCalculate}
            className="rounded-lg bg-[#0d6b50] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#095940]"
          >
            Calculer ma Zakat
          </button>
        </div>

      </div>

    </section>
  );
}

export default ZakatDebts;