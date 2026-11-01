import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/Api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Gérer les champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Connexion
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(formData);

      console.log("Connexion réussie :", response);

      // Accepter une réponse directe ou une réponse dans data
      const authData = response.data || response;

      const token = authData.token;
      const user = authData.user;

      if (!token || !user) {
        throw new Error(
          "Le backend n'a pas retourné le token ou les informations utilisateur."
        );
      }

      // Enregistrer la session
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setMessage("Connexion réussie !");

      // Rediriger selon le rôle réel de l'utilisateur
      const role = String(user.role || "").toLowerCase();

      setTimeout(() => {
        if (role === "admin" || role === "superadmin") {
          navigate("/admin", { replace: true });
        } else {
          navigate("/home", { replace: true });
        }
      }, 500);

    } catch (err) {
      console.error("Erreur connexion :", err);

      setError(
        err.message || "Email ou mot de passe incorrect."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-sm sm:p-8">

        {/* TITRE */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#003f35]">
            Bienvenue sur EasyZakat
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Connectez-vous à votre compte
          </p>
        </div>

        {/* MESSAGE SUCCÈS */}
        {message && (
          <div className="mt-6 rounded-xl bg-green-100 px-4 py-3 text-sm text-green-700">
            {message}
          </div>
        )}

        {/* MESSAGE ERREUR */}
        {error && (
          <div className="mt-6 rounded-xl bg-red-100 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* FORMULAIRE */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#005b49]"
            />
          </div>

          {/* MOT DE PASSE */}
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Mot de passe
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#005b49]"
            />
          </div>

          {/* MOT DE PASSE OUBLIÉ */}
          <div className="text-right">
            <Link
              to="/mdp"
              className="text-sm text-[#005b49] underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {/* BOUTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#005b49] py-3 font-bold text-white transition hover:bg-[#00483b] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        {/* INSCRIPTION */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Vous n'avez pas de compte ?{" "}

          <Link
            to="/register"
            className="font-semibold text-[#005b49]"
          >
            Créer un compte
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;