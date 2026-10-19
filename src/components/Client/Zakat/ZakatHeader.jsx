import { Menu } from "lucide-react";

function ZakatHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e7e7] bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        <div className="flex items-center gap-3">

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#174b3e] hover:bg-[#f2f5f3] md:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="text-[19px] font-bold tracking-[-0.4px] sm:text-[21px]">
            EasyZakat
          </div>

        </div>

        <button
          type="button"
          className="rounded-full bg-[#0d6b50] px-5 py-2 text-[12px] font-medium text-white transition hover:bg-[#095940] sm:px-6 sm:py-2.5"
        >
          Donate Now
        </button>

      </div>

    </header>
  );
}

export default ZakatHeader;