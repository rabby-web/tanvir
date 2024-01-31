import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwich = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // dark:text-sky-500 text-indigo-600
  const navLinks = (
    <>
      <li className=" text-dark-01 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "dark:text-sky-500 text-indigo-600"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-dark-01 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "dark:text-sky-500 text-indigo-600"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className=" text-dark-01 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
        <NavLink
          to="/skill"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "dark:text-sky-500 text-indigo-600"
              : ""
          }
        >
          Skill
        </NavLink>
      </li>
      <li className=" text-dark-01 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
        <NavLink
          to="/project"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "dark:text-sky-500 text-indigo-600"
              : ""
          }
        >
          Project
        </NavLink>
      </li>
      <li className=" text-dark-01 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
        <NavLink
          to="/contract"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? "dark:text-sky-500 text-indigo-600"
              : ""
          }
        >
          Contract
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar dark:bg-slate-950 bg-white shadow text-black px-4 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-12 h-8 stroke-current dark:text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content   mt-3 z-[1] p-4 shadow dark:bg-dark-01 bg-white rounded-box w-64 text-2xl "
            >
              <li className=" text-dark-01 text-2xl hover:border-b-2 font-medium hover:text-sky-500 hover:underline dark:text-white">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-xl"
                      : isActive
                      ? "dark:text-sky-500 text-indigo-600 text-xl"
                      : "text-xl"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-dark-01 hover:border-b-2 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-xl"
                      : isActive
                      ? "dark:text-sky-500 text-indigo-600 text-xl"
                      : "text-xl"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className=" text-dark-01 hover:border-b-2 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
                <NavLink
                  to="/skill"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-xl"
                      : isActive
                      ? "dark:text-sky-500 text-indigo-600 text-xl"
                      : "text-xl"
                  }
                >
                  Skill
                </NavLink>
              </li>
              <li className=" text-dark-01 hover:border-b-2 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
                <NavLink
                  to="/project"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-xl"
                      : isActive
                      ? "dark:text-sky-500 text-indigo-600 text-xl"
                      : "text-xl"
                  }
                >
                  Project
                </NavLink>
              </li>
              <li className=" text-dark-01 hover:border-b-2 text-xl font-medium hover:text-sky-500 hover:underline dark:text-white">
                <NavLink
                  to="/contract"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending text-xl"
                      : isActive
                      ? "dark:text-sky-500 text-indigo-600 text-xl"
                      : "text-xl"
                  }
                >
                  Contract
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="p-2 flex  items-center font-bold text-2xl">
            <p className="hidden md:block text-[#44C5DB]">
              <img
                className="h-12 w-10"
                src="https://i.ibb.co/8YwLmY0/6996098-removebg-preview.png"
                alt=""
              />
            </p>
            <p className="text-sky-500">Tanvir</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div></div>
        <div className="navbar-end ">
          <div className="mt-1 mx-2">
            {theme === "dark" ? (
              <button
                onClick={handleThemeSwich}
                className="text-3xl dark:text-white"
              >
                <MdOutlineLightMode />
              </button>
            ) : (
              <button
                onClick={handleThemeSwich}
                className="text-3xl dark:text-white"
              >
                <MdOutlineDarkMode />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
