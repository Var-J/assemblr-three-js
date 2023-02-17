import React, { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [navBar, setNavBar] = useState(false);

  const handlerMenu = () => {
    if (navBar === false) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  return (
    <header
      id="home"
      className="absolute text-black w-full flex justify-between text-2xl p-2 lg:p-5 z-30 mx-20 max-w-7xl border-b-2 border-yellow-400"
    >
      <h1 className="text-3xl">FurnitureBox™</h1>
      <motion.ul
        animate={
          navBar || window.innerWidth > 1024
            ? { display: "flex", opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0, transitionEnd: { display: "none" } }
        }
        className={`max-lg:flex-col lg:space-x-10  lg:items-center max-lg:absolute max-lg:right-2 max-lg:top-12 max-lg:text-right ${
          navBar ? "bg-white/50 rounded-xl p-2" : ""
        }`}
      >
        <li
          className="hover:text-yellow-400 transition-all duration-200"
          onClick={handlerMenu}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className="hover:text-yellow-400 transition-all duration-200"
          onClick={handlerMenu}
        >
          <a href="#furniture">Furnitures</a>
        </li>
        <li
          className="hover:text-yellow-400 transition-all duration-200"
          onClick={handlerMenu}
        >
          <a href="#contactUs">Contact Us</a>
        </li>
      </motion.ul>
      <div className="flex space-x-2 lg:hidden">
        <button onClick={handlerMenu} className="cursor-pointer space-y-1">
          <div
            className={`w-8 h-1 bg-slate-900  transition duration-200 ${
              navBar ? "-rotate-45 translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-slate-900 transition duration-200  ${
              navBar ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-slate-900  transition duration-200 ${
              navBar ? "rotate-45 -translate-y-1" : ""
            }`}
          ></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
