import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AdminLayout = () => {
  return (
    <div className="px-5 py-3">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
