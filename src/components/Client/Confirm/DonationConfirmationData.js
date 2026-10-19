export const DEFAULT_DONATION_CONFIRMATION = {
  transaction: {
    id: 'ZK-8829-4401',
    status: 'Paiement confirmé',
    date: '24 Octobre 2023',
    time: '14:32',
    zakatType: 'Zakat Al-Maal',
    amount: 450000,
    currency: 'FCFA',
    paymentMethod: 'Wave (Orange Money)',
  },

  cause: {
    title: 'Éducation pour Orphelins',
    organization: 'ONG Darou Salam, Dakar',
    image: '/images/causes/orphans.jpg',
  },

  blockchain: {
    verificationText:
      "Scan pour vérifier l'authenticité sur la blockchain EasyZakat.",

    certifiedText: 'Certifié conforme Sharia',

    qrCodeUrl:
      '/images/qr/transaction-ZK-8829-4401.png',
  },

  footer: {
    copyright:
      '© 2024 EasyZakat. Spiritual Serenity in Finance.',

    links: [
      'Transparency',
      'Zakat Guide',
      'Impact Reports',
      'Privacy Policy',
    ],
  },
};

export const DONATION_ACTIONS = {
  download: 'Télécharger PDF',
  whatsapp: 'Partager sur WhatsApp',
  dashboard: 'Tableau de bord',
  newDonation: 'Nouveau don',
};