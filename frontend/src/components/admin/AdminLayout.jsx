import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-white flex">

      <AdminSidebar />

      <div className="ml-64 w-full">
        <AdminNavbar />

        <main className="pt-20 px-10 pb-20">
          {children}
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
