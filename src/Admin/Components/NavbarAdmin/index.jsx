import React, { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import {
  IoCaretUpSharp,
} from "react-icons/io5";
import clsx from "clsx";
// import logotip from '../../assets/logotip.png'
import './styles.scss'
import { useScroll } from "../../../Constants/useScroll";
import { navLinks2 } from "../../../Constants/navbar_items";
import { useAuth } from "../../../Pages/login";
import UseAuth from "../../../Constants/functions/useAuth";
import { navLinks_admin } from "../../../Constants/nav_items_admin";
const NavbarAdmin = () => {


  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);
  const {logout} = useAuth()
  const {currentUser} = UseAuth()
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
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
  const { scrollX, scrollY, scrollDirection } = useScroll();


  // NavbarAdmin scrool height
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
  const handleLogout = ()=>{
     logout()
  }
  return (
    <div className={clsx(
      scrollDirection !== "up" || scrollDirection === undefined || scrollY === undefined ? "  transform translate-y-0 visible  transition duration-1000" : ( "transform translate-y-full invisible transition duration-200"),
      "w-full fixed z-30 top-0 left-0",
                     
    )} ref={sidebarRef}>
      {/* Desktop */}
      <div
        className={clsx(
          "flex justify-between items-center bg-white border-b p-1 max-w-full w-full fixed top-0 left-0",
          scrolled ? "shadow-md" : " "
        )}
      >
        <Link to={"/admin"} className="block max-lg:hidden">
          <h1 className="text-2xl text-black max-xl:text-sm font-bold logotip pl-2">

            {/* <img className="w-16 h-16" src={logotip} alt="" /> */}
            Admin
          </h1>
        </Link>

        <Link to="#" className="block text-dark lg:hidden">
          <button onClick={showSidebar}>
            <HiMenuAlt1 className="HiMenuAlt1" size={22} />
          </button>
        </Link>
        <div className="hidden lg:block  items-center">
          <ul className="flex">
            {navLinks_admin.map((nav) => (
              <li key={nav.id} className="text-dark w-auto">
                <NavLink
                  to={nav.path}
                  className={
                   active === nav.title
                      ? "flex mx-4 text-violet-800 text-lg font-semibold border-b-2 border-violet-800"
                      : "flex mx-4 items-center text-lg font-semibold"
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
          <div className="mr-3 max-md:hidden">
            {
              currentUser ? 
              <button onClick={handleLogout} className="text-lg  bg-red-600 hover:bg-red-700 p-1 px-2 rounded text-white">Logout</button>
              :
              <Link to={'/login'} className="text-lg  bg-[#7c3aed] hover:bg-[#6d28d9] p-1 px-2 rounded text-white">Login</Link>
            }
          </div>
          <div>
            <select className="outline-none p-1 text-dark font-semibold text-sm border-2 border-[#6d28d9]  rounded-lg  bg-transparent	" >
              <option value="en" className="text-md text-black  bg-transparent  font-semibold mb-10 outline-none" style={{ height: '30px' }}>ENG</option>
              <option value="uz" className="text-md text-black  bg-transparent  font-semibold mb-10 outline-none">UZB</option>
            </select>
          </div>

         

          <div
            className={
              profile
                ? "absolute top-20 bg-white border shadow-lg w-auto p-3 right-3 max-md:w-1/2 max-lg:w-1/2 max-sm:w-11/12"
                : "absolute top-20 bg-white border shadow-lg w-auto p-3 hidden  right-3"
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
        <div className="flex justify-between items-center pr-4 pl-2 pt-5">
          
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
                active === nav.title ? " border-r-4 border-violet-400" : " "
              )}
            >
              <NavLink
                to={nav.path}
                className={clsx(
                  "flex p-1 px-2 rounded",
                  active === nav.title
                    ? "w-auto text-violet-800 bg-violet-200 "
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
        <div className="px-3 pt-80">
          <div className="ml-3">
            <Link className="text-xl  bg-[#7c3aed] hover:bg-[#6d28d9] p-1 px-2 rounded text-white">Login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
 