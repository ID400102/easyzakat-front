export const API_URL = import.meta.env.VITE_API_URL;
export const registerUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Erreur lors de l'inscription"
      );
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Erreur lors de la connexion"
    );
  }

  return result;
};


// ==========================================
// CALCUL ZAKAT
// ==========================================

export const calculateZakat = async (data) => {
  try {
    console.log("📤 Données Zakat envoyées :", data);
    console.log("🌐 URL :", `${API_URL}/zakat/calculate`);

    const token = localStorage.getItem("token");

    const response = await fetch(
      `${API_URL}/zakat/calculate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {}),
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message ||
          "Erreur lors du calcul de la Zakat"
      );
    }

    return result;
  } catch (error) {
    console.error("❌ Erreur API Zakat :", error);
    throw error;
  }
};

export const createDonation = async (data) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/donations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Erreur lors de la création du don"
    );
  }

  return result;
};



export const createPayment = async (data) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Erreur lors de la création du paiement"
    );
  }

  return result;
};


export const createReceipt = async (paymentId) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/receipts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ paymentId }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Erreur lors de la création du reçu"
    );
  }

  return result;
};

// ==========================================
// RÉCUPÉRER UN PAIEMENT
// ==========================================

export const getPaymentById = async (paymentId) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/payments/${paymentId}`, {
    method: "GET",
    headers: {
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ||
        "Erreur lors de la récupération du paiement"
    );
  }

  return result;
};

// ==========================================
// RÉCUPÉRER UN PAIEMENT
// ==========================================

