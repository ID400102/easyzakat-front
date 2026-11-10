import { NavLink, Link } from "react-router-dom";

// Déterminer la page d'accueil selon l'utilisateur connecté
function getHomePath() {
  const token = localStorage.getItem("token");

  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (error) {
    user = null;
  }

  // Visiteur non connecté
  if (!token || !user) {
    return "/";
  }

  // Administrateur ou superadministrateur
  if (user.role === "admin" || user.role === "superadmin") {
    return "/admin";
  }

  // Donateur connecté
  return "/home";
}

function LandingHeader() {
  const homePath = getHomePath();

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-10 lg:px-14">

        {/* Logo */}
        <Link
          to={homePath}
          className="flex items-center gap-2"
        >
          <span className="text-lg font-extrabold text-[#0F3D2E]">
            EasyZakat
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-12 md:flex">

          {/* Accueil */}
          <NavLink
            to={homePath}
            end
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "font-bold text-[#0F3D2E]"
                  : "text-gray-500 hover:text-[#0F3D2E]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Accueil

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#0F3D2E]" />
                )}
              </>
            )}
          </NavLink>

          {/* Calculer */}
          <NavLink
            to="/calculer-zakat"
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "font-bold text-[#0F3D2E]"
                  : "text-gray-500 hover:text-[#0F3D2E]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Calculer

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#0F3D2E]" />
                )}
              </>
            )}
          </NavLink>

          {/* Impact */}
          <NavLink
            to="/impact"
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "font-bold text-[#0F3D2E]"
                  : "text-gray-500 hover:text-[#0F3D2E]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Impact

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#0F3D2E]" />
                )}
              </>
            )}
          </NavLink>

          {/* Profil */}
          <NavLink
            to="/profil"
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "font-bold text-[#0F3D2E]"
                  : "text-gray-500 hover:text-[#0F3D2E]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Profil

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#0F3D2E]" />
                )}
              </>
            )}
          </NavLink>

        </nav>

        {/* Bouton Connexion */}
        <Link
          to="/login"
          className="rounded-full bg-[#0F3D2E] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0a2e23] sm:px-5 sm:text-sm"
        >
          Connexion
        </Link>

      </div>
    </header>
  );
}

export default LandingHeader;