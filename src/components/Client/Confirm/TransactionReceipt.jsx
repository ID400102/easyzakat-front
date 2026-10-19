import { CircleDollarSign } from 'lucide-react';

import CauseSupported from './CauseSupported';
import BlockchainVerification from './BlockchainVerification';

function formatAmount(amount, currency = 'FCFA') {
  if (typeof amount !== 'number') {
    return amount;
  }

  return `${new Intl.NumberFormat('fr-FR').format(amount)} ${currency}`;
}

function TransactionReceipt({
  transaction,
  cause,
  blockchain,
}) {
  return (
 <section
  id="transaction-receipt"
  className="mx-5 mt-12 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm sm:mx-8 sm:mt-14 lg:mx-0"
>
      {/* Header du reçu */}
      <div className="bg-emerald-950 px-5 py-4 text-white sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-300">
              Reçu de transaction
            </p>

            <p className="mt-1 text-[16px] font-medium tracking-wide">
              ID: #{transaction.id}
            </p>
          </div>

          <span className="inline-flex w-fit items-center rounded-full bg-emerald-800 px-4 py-2 text-xs font-bold text-white">
            {transaction.status}
          </span>

        </div>
      </div>

      {/* Informations */}
      <div className="space-y-6 px-5 py-6 sm:px-6 sm:py-7">

        <div>
          <p className="text-sm text-gray-600">
            Date & Heure
          </p>

          <p className="mt-1 text-[17px] font-bold text-gray-900">
            {transaction.date}, {transaction.time}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Type de Don
          </p>

          <p className="mt-1 text-[17px] font-bold text-gray-900">
            {transaction.zakatType}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Montant Total
          </p>

          <p className="mt-1 text-[18px] font-extrabold text-emerald-950">
            {formatAmount(
              transaction.amount,
              transaction.currency
            )}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Méthode
          </p>

          <div className="mt-1 flex items-center gap-2 text-[17px] font-bold text-gray-900">
            <CircleDollarSign
              size={16}
              strokeWidth={2}
            />

            <span>
              {transaction.paymentMethod}
            </span>
          </div>
        </div>

        <CauseSupported
          cause={cause}
        />

      </div>

      {/* Blockchain */}
      <BlockchainVerification
        {...blockchain}
      />

    </section>
  );
}

export default TransactionReceipt;