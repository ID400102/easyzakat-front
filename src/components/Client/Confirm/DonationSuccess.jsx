import { Check } from 'lucide-react';

function DonationSuccess({ title, message }) {
  return (
    <section className="px-5 pt-12 text-center sm:px-8 sm:pt-14 lg:pt-16">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-900 shadow-lg sm:h-24 sm:w-24">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300 sm:h-12 sm:w-12">
          <Check
            size={25}
            strokeWidth={3}
            className="text-emerald-900 sm:h-7 sm:w-7"
          />
        </div>
      </div>

      <h1 className="mx-auto mt-10 max-w-2xl text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-emerald-950 sm:mt-11 sm:text-[30px] lg:text-[35px]">
        {title}
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-[18px] leading-7 text-gray-600 sm:text-[20px] sm:leading-8">
        {message}
      </p>
    </section>
  );
}

export default DonationSuccess;
