import React from 'react'
import { useNavigate } from 'react-router-dom';
import pp from "../assets/Ellipse 2.png"
function Navbar() {
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div>
            <div className="flex justify-center bg-purple-800">
        <div className="flex items-center justify-between z-20 py-5 my-auto  w-11/12">
          <div className="flex gap-x-5">
            <img className="w-14" src={pp} alt="" />
            <h1 className="sm:text-3xl text-xl text-white logo">
              Fudail Ramadhani
            </h1>
          </div>
          <div>
            <svg
              onClick={() => setNavbarOpen(!navbarOpen)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6   text-white flex mx-auto sm:hidden"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>

            <ul className="hidden sm:flex text-sm mr-7 mt-0 text-white cursor-pointer">
              <li onClick={() => {
                navigate("/")
              }} className="mr-7 hover:opacity-75 ">Home</li>
              <li  onClick={() => {
                navigate("/MySkill")
              }} className="mr-7 hover:opacity-75">My Skill</li>
              <li  onClick={() => {
                navigate("/Portofolio")
              }} className="mr-7 hover:opacity-75">Portofolio</li>
              <li onClick={() => {
                navigate("/Contact")
              }} className="hover:opacity-75">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-grow items-center sm:hidden" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
              href="#home"
            >
              <i className="fab fa-facebook-square  leading-lg text-white opacity-75"></i>
              <span className="ml-2">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
              href="#skills"
            >
              <i className="fab fa-twitter  leading-lg text-white opacity-75"></i>
              <span className="ml-2">Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
              href="#services"
            >
              <i className="fab fa-pinterest  leading-lg text-white opacity-75"></i>
              <span className="ml-2">Services</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs   leading-snug text-white hover:opacity-75"
              href="#project"
            >
              <i className="fab fa-pinterest  leading-lg text-white opacity-75"></i>
              <span className="ml-2">My Project</span>
            </a>
          </li>
        </ul>
      </div>
        </div>
    )
}

export default Navbar
