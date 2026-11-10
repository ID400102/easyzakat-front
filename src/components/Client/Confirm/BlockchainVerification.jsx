import { ShieldCheck } from 'lucide-react';

function BlockchainVerification({
  verificationText,
  certifiedText,
  qrCodeUrl,
}) {
  return (
    <section className="rounded-b-xl border-t border-indigo-200 bg-indigo-100 px-5 py-6 sm:px-7 sm:py-7">
      <div className="flex flex-col items-center text-center">
        <p className="max-w-md text-sm leading-5 text-gray-700 sm:text-[15px]">
          {verificationText}
        </p>

        <div className="mt-1 flex items-center gap-1 text-sm font-bold text-yellow-700">
          <ShieldCheck size={15} strokeWidth={2.5} />

          <span>{certifiedText}</span>
        </div>

        {qrCodeUrl && (
          <div className="mt-5 flex h-[98px] w-[98px] items-center justify-center rounded-lg border border-gray-300 bg-white p-2 shadow-sm">
            <img
              src={qrCodeUrl}
              alt="QR code de vérification"
              className="h-full w-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default BlockchainVerification;