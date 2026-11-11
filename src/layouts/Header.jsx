import { NavLink, Link, useNavigate } from "react-router-dom";

// Déterminer la destination selon la session actuelle
function getHomePath() {
  const token = localStorage.getItem("token");

  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    user = null;
  }

  // Visiteur non connecté
  if (!token || !user) {
    return "/";
  }

  const role = String(user.role || "").toLowerCase();

  // Administrateur
  if (role === "admin" || role === "superadmin") {
    return "/admin";
  }

  // Donateur connecté
  return "/home";
}

function Header() {
  const navigate = useNavigate();

  // Calculer la destination au clic, et non uniquement au rendu
  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate(getHomePath());
  };

  const homePath = getHomePath();

  return (
    <header className="sticky top-0 border-b border-gray-100 bg-white w-full z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-10 lg:px-14">

        {/* Logo */}
        <Link
          to={homePath}
          onClick={handleHomeClick}
          className="flex items-center gap-2"
        >
          <span className="text-lg font-extrabold text-[#0F3D2E]">
            EasyZakat
          </span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-16 md:flex pr-20">

          {/* Accueil */}
          <NavLink
            to={homePath}
            onClick={handleHomeClick}
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
      </div>
    </header>
  );
}

export default Header;