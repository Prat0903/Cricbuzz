import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="px-5 py-3 flex justify-center items-center text-xl ">
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
    </nav>
  );
};

export default Navbar;
