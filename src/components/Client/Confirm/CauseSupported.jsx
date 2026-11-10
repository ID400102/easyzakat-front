function CauseSupported({ cause }) {
  if (!cause) {
    return null;
  }

  return (
    <section className="border-t border-gray-200 pt-6">
      <p className="mb-3 text-sm font-medium text-gray-600">
        Cause soutenue
      </p>

      <div className="flex items-center gap-4 rounded-xl bg-indigo-50 px-4 py-3">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-200">
          {cause.image ? (
            <img
              src={cause.image}
              alt={cause.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-500">
              EZ
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-[17px] font-bold text-emerald-950">
            {cause.title}
          </h3>

          <p className="truncate text-sm text-gray-600">
            {cause.organization}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CauseSupported;