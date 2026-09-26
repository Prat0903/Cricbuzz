import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/api.auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";

const AppLayout = () => {
  let { pathname } = useLocation();
  let dispatch = useDispatch();

  let { data } = useQuery({
    queryKey: ["getMe"],
    queryFn: getMe,
    enabled: pathname !== "/login",
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data && data?.data?.data) {
      dispatch(setUser(data?.data?.data));
    }
  });

  return (
    <div className="px-5 py-3">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
