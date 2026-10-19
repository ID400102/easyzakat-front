
import { useState } from "react";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

import Sidebar from "../layouts/sidebar";
import { AdminMenuItems } from "../config/navigationConfig";

function AdminLayout({ user, permissions, onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-white">
      <Sidebar
        menuItems={AdminMenuItems}
        user={user}
        permissions={permissions}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        onLogout={onLogout}
      />

      {/* Contenu principal */}
      <div className="min-h-screen lg:ml-[140px] xl:ml-[145px]">
        {/* Barre mobile et tablette */}
        <header className="flex items-center gap-3 border-b border-[#e4e6ef] bg-white px-4 py-3 lg:hidden">
          <button
            type="button"
            onClick={openSidebar}
            aria-label="Ouvrir le menu de navigation"
            aria-controls="admin-sidebar"
            aria-expanded={isSidebarOpen}
            className="rounded-md p-2 text-[#075b45] hover:bg-[#f0f1ff]"
          >
            <Menu size={22} />
          </button>

          <span className="text-sm font-bold text-[#075b45]">
            EasyZakat
          </span>
        </header>

        {/* Les pages administratives s'affichent ici */}
        <main className="min-w-0 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
