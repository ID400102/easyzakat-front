import {
  Download,
  Share2,
  LayoutDashboard,
  Plus,
} from 'lucide-react';

function DonationActions({
  labels,
  onDownload,
  onShare,
  onDashboard,
  onNewDonation,
}) {
  return (
    <section className="mx-5 mt-16 space-y-4 sm:mx-8 sm:mt-20 lg:mx-0">

      <button
        type="button"
        onClick={onDownload}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 px-5 text-[16px] font-medium text-white transition hover:bg-emerald-900 active:scale-[0.99]"
      >
        <Download size={19} />

        <span>
          {labels.download}
        </span>
      </button>

      <button
        type="button"
        onClick={onShare}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-5 text-[16px] font-medium text-white transition hover:bg-green-600 active:scale-[0.99]"
      >
        <Share2 size={19} />

        <span>
          {labels.whatsapp}
        </span>
      </button>

      <button
        type="button"
        onClick={onDashboard}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-indigo-100 px-5 text-[16px] font-medium text-gray-700 transition hover:bg-indigo-200 active:scale-[0.99]"
      >
        <LayoutDashboard size={19} />

        <span>
          {labels.dashboard}
        </span>
      </button>

      <button
        type="button"
        onClick={onNewDonation}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald-950 bg-transparent px-5 text-[16px] font-medium text-emerald-950 transition hover:bg-emerald-50 active:scale-[0.99]"
      >
        <Plus size={21} />

        <span>
          {labels.newDonation}
        </span>
      </button>

    </section>
  );
}

export default DonationActions;