
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Megaphone,
  Building2,
  HandHeart,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const icons = {
  LayoutDashboard,
  Users,
  CreditCard,
  Megaphone,
  Building2,
  HandHeart,
  BarChart3,
};

function Sidebar({
  menuItems = [],
  user = {},
  permissions = [],
  isOpen = false,
  onClose = function () {},
  onLogout,
}) {
  const location = useLocation();

  // Vérifie si l'utilisateur possède une permission.
  function hasPermission(permission) {
    // Un élément sans permission explicite reste public
    // dans la navigation. Les éléments protégés doivent
    // déclarer leur permission dans la configuration.
    if (permission) {
      return true;
    }

    return permissions.includes(permission);
  }

  // Affiche uniquement les liens autorisés.
  const visibleMenuItems = menuItems.filter(function (item) {
    return hasPermission(item.permission);
  });

  // Informations du profil reçues du parent.
  const fullName = user.name || "Administrateur";

  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(function (part) {
      return part.charAt(0).toUpperCase();
    })
    .join("");

  return (
    <>
      {/* Fond sombre du menu mobile et tablette */}
      {isOpen && (
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        id="admin-sidebar"
        aria-label="Navigation administrateur"
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-[135px] flex-col
          border-r border-[#e4e6ef]
          bg-[#f0f1ff] px-3 py-4
          transition-transform duration-200 ease-in-out
          lg:translate-x-0
          md:w-[200px]
          xl:w-[190px]
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* En-tête */}
        <div className="mb-8 flex items-center justify-between px-1">
          <h1 className="text-[16px] font-bold text-[#075b45]">
            EasyZakat
          </h1>
        </div>

        {/* Profil utilisateur */}
        <div className="mb-7 flex items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#087653] text-[10px] font-medium text-white">
            {initials || "AD"}
          </div>

          <div className="min-w-0">
            <p className="truncate text-[9px] font-bold text-[#173d34]">
              {fullName}
            </p>

            <p className="truncate text-[7px] text-[#777]">
              {user.roleLabel || "Administrateur"}
            </p>
          </div>
        </div>

        {/* Navigation filtrée par permissions */}
        <nav className="space-y-1">
          {visibleMenuItems.map(function (item) {
            const Icon = icons[item.icon];

            // Évite une erreur si une icône est absente
            // de notre registre.
            if (!Icon) {
              return null;
            }

            const active =
              location.pathname === item.path ||
              (item.path !== "/" &&
                item.path !== "/admin" &&
                location.pathname.startsWith(item.path + "/"));

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-[12px] md:text-[20px] gap-4 lg:text-[18px] ${
                active
                    ? "bg-[#075b45] text-white"
                    : "text-[#344842] hover:bg-white"
                }`}
              >
                <Icon size={13} />
                <span className="min-w-0 truncate">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Paramètres en bas */}
        {hasPermission("settings:read") && (
          <Link
            to="/admin/parametres"
            onClick={onClose}
            className={`mt-auto flex items-center gap-2 rounded-md px-2 py-2 text-[9px] ${
              location.pathname === "/admin/parametres"
                ? "bg-[#075b45] text-white"
                : "text-[#344842] hover:bg-white"
            }`}
          >
            <Settings size={13} />
            <span>Settings</span>
          </Link>
        )}

        {/* Déconnexion facultative */}
        {onLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="mt-2 flex items-center gap-2 px-2 py-2 text-left text-[9px] text-[#344842] hover:bg-white"
          >
            Déconnexion
          </button>
        )}
      </aside>
    </>
  );
}

export default Sidebar;
