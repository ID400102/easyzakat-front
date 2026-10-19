function PaymentIntro() {
  return (
    <section
      className="
        w-full
        max-w-[650px]
      "
    >
      <h1
        className="
          text-[27px]
          font-semibold
          leading-[1.2]
          tracking-[-0.5px]
          text-[#004D43]

          sm:text-[31px]

          lg:text-[36px]
        "
      >
        Finalisez votre don
      </h1>

      <p
        className="
          mt-2
          max-w-[580px]
          text-[14px]
          leading-[1.45]
          text-[#606566]

          sm:text-[15px]

          lg:text-[16px]
        "
      >
        Vérifiez vos informations et choisissez votre mode de paiement
        sécurisé.
      </p>
    </section>
  );
}

export default PaymentIntro;