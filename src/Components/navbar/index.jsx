import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import {
  IoCaretUpSharp,
} from "react-icons/io5";
import clsx from "clsx";
import logotip from '../../assets/logotip.png'
import { navLinks2 } from "../../Constants/navbar_items";
const Navbar = () => {


  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };


  const activeInput = () => {
    setInput(!input);
  };


  const Profile = () => {
    setProfile(!profile);
  };


  // Outside sidebar close
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebar(false);
        setInput(false);
        setProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  // Navbar scrool height
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [input, setInput] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div className="w-full fixed z-30 " ref={sidebarRef}>
      {/* Desktop */}
      <div
        className={clsx(
          "flex justify-between items-center backdrop-blur-lg border-b p-1 max-w-full w-full fixed top-0 left-0",
          scrolled ? "shadow-md" : " "
        )}
      >
        <Link to={"/"} className="block max-lg:hidden">
          <h1 className="text-2xl text-white max-xl:text-sm font-bold logotip pl-2">

            <img className="w-16 h-16" src={logotip} alt="" />
          </h1>
        </Link>

        <Link to="#" className="block text-dark lg:hidden">
          <button onClick={showSidebar}>
            <HiMenuAlt1 className="HiMenuAlt1" size={22} />
          </button>
        </Link>
        <div className="hidden lg:block flex items-center">
          <ul className="flex">
            {navLinks2.map((nav) => (
              <li key={nav.id} className="text-dark mx-5 links">
                <NavLink
                  to={nav.path}
                  className={
                    active === nav.title
                      ? "flex text-blue-800 text-lg font-semibold border-b-2 border-blue-800"
                      : "flex items-center text-lg font-semibold"
                  }
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    document.title = nav.title;
                  }}
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <div>
            <select className="outline-none p-1 text-dark font-semibold text-lg border-2 border-blue-600  rounded-lg  bg-transparent	" >
              <option value="en" className="text-md text-black  bg-transparent  font-semibold mb-10 outline-none" style={{ height: '30px' }}>English</option>
              <option value="uz" className="text-md text-black  bg-transparent  font-semibold mb-10 outline-none">Uzbek</option>
            </select>
          </div>

          <div
            className={
              profile
                ? "absolute top-20 bg-white border shadow-lg w-auto p-3 right-3 max-md:w-1/2 max-lg:w-1/2 max-sm:w-11/12"
                : "absolute top-20 bg-white border shadow-lg w-auto p-3 hidden flex right-3"
            }
          >
            <div className="w-full relative">
              <IoCaretUpSharp size={25} className="absolute -top-8 right-0" />
              

            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <nav
        className={clsx(
          "h-screen fixed top-0 bg-slate-200 transition-all duration-700",
          !sidebar ? "-left-full" : " "
        )}
      >
        <div className="flex justify-between items-center pr-4 pl-2">
          <Link to="/">
            <span>
              {/* <img src={logotip} width={50} className="rounded-full" alt="" /> */}
            </span>
          </Link>
          <CgClose
            size={23}
            className="ml-auto hidden max-lg:block"
            onClick={showSidebar}
          />
        </div>
        <ul className="pl-10 w-100 my-6 mt-8 ">
          {navLinks2.map((nav) => (
            <li
              key={nav.id}
              className={clsx(
                "text-lg mb-3 mr-7 pr-3 links",
                active === nav.title ? " border-r-4 border-blue-400" : " "
              )}
            >
              <NavLink
                to={nav.path}
                className={clsx(
                  "flex p-1 px-2 rounded rounded-lg",
                  active === nav.title
                    ? "w-auto text-blue-800 bg-blue-200 "
                    : "items-center"
                )}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                  setSidebar(!sidebar);
                }}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="px-3 pt-56">
          <div className="flex justify-between relative my-4 items-center">
            <h1 className="mr-3 ml-1">
              | Hello, <span className="font-semibold">John</span>
            </h1>
            <button className="flex items-center" onClick={Profile}>
              {/* <img
                src={logotip}
                alt="person"
                className="w-10 h-10 rounded-full bg-white border-2"
              /> */}
            </button>
          </div>
          <h3 className="text-sm">Restourant Admin Dashboard</h3>
          <p className="text-xs">@2023 All Rights Reserved</p>
          <p className="pt-3 text-xs">Made wuth by Peterdraw</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
 