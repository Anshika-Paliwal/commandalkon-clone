import { useState, React } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
// import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  // let Links = [
  //   { name: "CLIENT LOGIN", Link: "/login" },
  //   { name: "PLATFORM", Link: "/platform" },
  //   { name: "SOLUTIONS", Link: "/solutions" },
  //   { name: "RESOURCES", Link: "/resources" },
  //   { name: "EVENTS", Link: "/events" },
  //   { name: "SUPPORT", Link: "/support" },
  //   { name: "ABOUT", Link: "/about" },
  // ];
  return (
    <>
      <nav className="bg-gray-800">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <a href="/">
              <img src={logo} alt="logo" className="md:cursor-pointer h-9" />
            </a>
            <div
              className="text-3xl text-gray-400 md:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-6">
            <li>
              <Link
                to="/platform"
                className="inline-block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md duration-500 text-xs font-semibold"
              >
                PLATFORM
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link
                to="/"
                className="inline-block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md duration-500 text-xs font-semibold"
              >
                RESOURCES
              </Link>
              <Link
                to="/support"
                className="inline-block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md duration-500 text-xs font-semibold"
              >
                SUPPORT
              </Link>
              <Link
                to="/about"
                className="inline-block text-gray-300 hover:text-red-500 px-3 py-2 rounded-md duration-500 text-xs font-semibold"
              >
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link
                to="/platform"
                className="inline-block text-black px-3 py-2 text-lg hover:text-red-500  rounded-md duration-500 font-semibold"
              >
                PLATFORM
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link
                to="/support"
                className="inline-block text-black px-3 py-2 text-lg hover:text-red-500  rounded-md duration-500 font-semibold"
              >
                SUPPORT
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="inline-block text-black px-3 py-2 text-lg hover:text-red-500  rounded-md duration-500 font-semibold"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/platform"
                className="inline-block text-black px-3 py-2 text-lg hover:text-red-500  rounded-md duration-500 font-semibold"
              >
                RESOURCES
              </Link>
            </li>
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </nav>

      {/* Start */}
      {/* <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-gray-800 py-4 md:px-10 px-0">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
            <a href="/">
              <img
                src={logo}
                className="lg:w-50 sm:h-10 m-8 mt-4 object-contain"
                alt="logo"
              />
            </a>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
          >
            <RxHamburgerMenu
              className="text-white mt-8"
              name={open ? "close" : "menu"}
            ></RxHamburgerMenu>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-800 text-white text-xs font-semibold md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                  href="/clientlogin"
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  CLIENT LOGIN
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                  href="/platform"
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  PLATFORM
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                  href="/solutions"
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  SOLUTIONS
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                  href="/resources"
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  RESOURCES
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                  href="/events"
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  EVENTS
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                  href="/support"
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  SUPPORT
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                  href="/about"
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  ABOUT
              </a>
            </li> */}
      {/* {Links.map((Link) => (
              <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={Link.Link}
                  onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
                  className="text-white hover:text-red-500 duration-500 text-xs font-semibold"
                >
                  {Link.name}
                </a>
                <div className={`absolute ${isOpen ? "block" : "hidden"}`}>
                <ul className="bg-gray-800 text-white py-2 px-4 rounded-md">
                  <li className="text-gray-500 hover:text-red-500 duration-500 text-xs font-semibold">Ready Mix Producer</li>
                  <li className="text-gray-500 hover:text-red-500 duration-500 text-xs font-semibold">Asphault Producer</li>
                  <li className="text-gray-500 hover:text-red-500 duration-500 text-xs font-semibold">Aggregate & Cement Supplier</li>
                  <li className="text-gray-500 hover:text-red-500 duration-500 text-xs font-semibold">Bulk Materials Hauler</li>
                  <li className="text-gray-500 hover:text-red-500 duration-500 text-xs font-semibold">Contractor</li>
                </ul>
              </div>
              </li>
            ))} */}
      {/* <Button
              type="button"
              className="text-sm rounded-full hover:bg-red-500"
            >
              CONTACT
            </Button> */}
      {/* <BiSearch className="text-lg mx-4 cursor-pointer hover:text-orange-700 text-white float-right" /> */}
      {/* </ul>
          <hr />
        </div>
      </div> */}
      {/* End */}

      {/* <div className="w-full flex flex-row bg-gray-800">
      <nav class="flex flex-row">
        <div class="w-full flex flex-row">
          <ul class="flex flex-row align-center justify-around text-white m-auto text-xs font-semibold">
            <li class="underline hover:underline-offset-8 px-2">PLATFORM</li>
            <li class="underline hover:underline-offset-8 px-2">SOLUTIONS</li>
            <li class="underline hover:underline-offset-8 px-2">RESOURCES</li>
            <li class="underline hover:underline-offset-8 px-2">EVENTS</li>
            <li class="underline hover:underline-offset-8 px-2">SUPPORT</li>
            <li class="underline hover:underline-offset-8 px-2">ABOUT</li>
          </ul>
          <div className="realtive flex flex-wrap justify-end">
          <button type="button"
          // text-white tracking-3 text-xs font-semibold hover:border-2 focus:ring-red-500 py-4 px-6 rounded-full
          className="text-white absolute top-0 right-0 mx-2 my-8 px-2 border-2 hover:bg-red-500 hover:border-none text-xs font-semibold rounded-full float-right">CONTACT</button>
          </div>
        </div>
      </nav>
      </div> */}
    </>
  );
};

export default Navbar;
