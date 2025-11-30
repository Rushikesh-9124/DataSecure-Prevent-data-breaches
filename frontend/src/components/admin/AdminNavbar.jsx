import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <header className="
      w-full h-16 fixed top-0 left-64
      bg-neutral-900/40 backdrop-blur-xl 
      border-b border-white/10
      flex items-center justify-end px-6
    ">
      <Button
        className="bg-white text-black hover:bg-neutral-200"
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  );
};

export default AdminNavbar;
