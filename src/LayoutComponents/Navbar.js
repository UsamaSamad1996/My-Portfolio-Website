import { MenuBookRounded } from "@mui/icons-material";
import React, { useState } from "react";
import Resume from "../Images/usamaResume.pdf";
import "./style.css";

const Navbar = () => {
  /////////////////////////////////////////////////////////////////////

  const [isOpen, setIsOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("");

  const openResume = () => {
    window.open(Resume);
  };

  /////////////////////////////////////////////////////////////////////

  return (
    <nav className="flex items-center h-[5rem] bg-black text-white w-full  justify-between  ">
      <div className="svg w-[105px] h-full flex justify-center items-center">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#05FDD8"
          stroke="#05FDD8"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#05FDD8"
              d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
            ></path>
          </g>
        </svg>
      </div>
      <section className="logo flex  items-center justify-center  whitespace-nowrap  h-full  mx-10 ">
        <h1 className="font-semibold text-xl tracking-wide font-libra text-aqua">
          Usama <span className="opacity-70 text-white">Abdul Samad</span>
        </h1>
      </section>
      <div className="botton md:hidden w-[1rem] mr-10">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuBookRounded className="text-white" />
        </button>
      </div>
      <section className=" hidden md:flex justify-evenly items-center font-semibold capitalize text-sm tracking-wide w-full text-white ">
        <a
          href="#about"
          onClick={() => setActiveTab("about")}
          style={{
            borderBottom:
              activeTab === "about" ? "4px solid #05FDD8" : "4px solid black",
          }}
          className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
        >
          About
        </a>
        <a
          href="#work"
          onClick={() => setActiveTab("work")}
          style={{
            borderBottom:
              activeTab === "work" ? "4px solid #05FDD8" : "4px solid black",
          }}
          className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
        >
          Work
        </a>
        {/* <a
          href="3"
          className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
        >
          Projects
        </a> */}
        <a
          href="3"
          className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
        >
          Education
        </a>
        <a
          href="3"
          className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
        >
          Skills
        </a>
        <a
          href="3"
          className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
        >
          Contact
        </a>

        <button
          onClick={openResume}
          className="button border-2 border-aqua  rounded-md hover:scale-105  py-1 px-5  text-base text-aqua font-normal "
        >
          Resume
        </button>
      </section>

      {isOpen ? (
        <section className="absolute left-0 top-[7rem] h-[80vh]  w-screen z-10 flex flex-col items-center gap-16 font-bold uppercase text-base tracking-wide pt-10  border-t-[1px] border-[#2b2929] bg-green-500    ">
          <a
            href="3"
            className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
            onClick={() => setIsOpen(false)}
          >
            Trending Media
          </a>
          <a
            href="3"
            className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
            onClick={() => setIsOpen(false)}
          >
            Movies
          </a>
          <a
            href="3"
            className="hover:text-aqua transition-all duration-200 hover:border-b-4 hover:border-aqua h-[79px] flex items-center justify-center border-b-4 border-black"
            onClick={() => setIsOpen(false)}
          >
            Tv Shows
          </a>
        </section>
      ) : null}
    </nav>
  );
};

export default Navbar;
