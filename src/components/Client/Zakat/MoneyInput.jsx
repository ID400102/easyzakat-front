function MoneyInput({ label, value, onChange }) {
  return (
    <div>

      <label className="mb-[6px] block text-[10px] font-medium text-[#65615c] sm:text-[12px]">
        {label}
      </label>

      <div className="relative">

        <input
          type="number"
          min="0"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="
            h-[38px]
            w-full
            rounded-[6px]
            border
            border-[#dedde5]
            bg-[#fafafe]
            px-3
            pr-[65px]
            text-[12px]
            text-[#59605d]
            outline-none
            transition
            focus:border-[#0d6b50]
            focus:ring-2
            focus:ring-[#0d6b50]/10
            sm:h-[42px]
            sm:text-[13px]
          "
        />

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#50535a] sm:text-[12px]">
          FCFA
        </span>

      </div>

    </div>
  );
}

export default MoneyInput;