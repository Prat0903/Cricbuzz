import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const Navbar = () => {
  let user = useSelector((state) => state.user);

  return (
    <nav className="px-5 py-3 flex justify-between items-center text-xl">
      <div className="flex gap-7">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400 font-semibold " : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400 font-semibold" : ""
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-400 font-semibold" : ""
          }
          to="/admin"
        >
          Admin
        </NavLink>
      </div>
      <div className="h-15 w-15 rounded-full overflow-hidden bg-white">
        <img
          src={user.picture || "https://px.pixxo.io/test/user.png"}
          alt="me"
          className="object-fit h-full w-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
