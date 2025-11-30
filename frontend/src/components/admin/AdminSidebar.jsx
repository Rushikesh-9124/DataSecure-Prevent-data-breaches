import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FilePlus,
  FileEdit,
  LogOut,
} from "lucide-react";

const menu = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/admin" },
  { label: "Lessons", icon: <BookOpen size={18} />, path: "/admin/lessons" },
  {
    label: "Create Lesson",
    icon: <FilePlus size={18} />,
    path: "/admin/create-lesson",
  },
  {
    label: "Create Question",
    icon: <FileEdit size={18} />,
    path: "/admin/create-question",
  },
];

const AdminSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/dashboard");
  };

  return (
    <aside
      className="
      w-64 min-h-screen fixed left-0 top-0
      bg-neutral-900/60 backdrop-blur-xl 
      border-r border-white/10
      text-white p-6 flex flex-col
    "
    >
      <h1 className="text-2xl font-bold bg-linear-to-b from-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-6">
        Admin Panel
      </h1>

      {/* MENU */}
      <nav className="space-y-2 flex-1">
        {menu.map((item, i) => {
          const active = pathname === item.path;
          return (
            <Link
              key={i}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-2 rounded-lg transition
                ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="
          flex items-center gap-3 px-4 py-2 rounded-lg transition
          text-neutral-400 hover:text-white hover:bg-white/5
        "
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
