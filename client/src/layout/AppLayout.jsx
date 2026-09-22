import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/api.auth";

const AppLayout = () => {
  useQuery({
    queryKey: ["getMe"],
    queryFn: getMe,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="px-5 py-3">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
