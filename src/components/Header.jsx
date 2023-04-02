import React from "react";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <nav class="bg-gray-800">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <a href="/" class="text-white font-bold text-xl">
              </a>
            </div>
            <div class="hidden sm:flex sm:items-center">
              <a
                href="/clientlogin"
                class="text-gray-300 hover:text-red-500 px-4 py-2 rounded-md text-xs font-medium"
              >
                CLIENT LOGIN 
              </a>
              <a
                href="/region"
                class="text-gray-300 hover:text-red-500 px-4 py-2 rounded-md text-xs font-medium"
              >
                REGION
              </a>
              <a
                href="/"
                class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <BiSearch className="hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-300 opacity-50" />
      </nav>

      {/* <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-6">
      <div class="flex sm:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger icon -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
    </div>
  </div>
</nav> */}

      {/* <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">My Website</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Link 1
            </a>
            <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Options
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 3
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 4
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 5
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Option 6
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav> */}

      {/* <nav className="w-full flex align-center justify-end bg-gray-800">
      <div className="flex justify-end mx-auto px-4 sm:px-6 lg:px-8 m-0">
        <div className="flex justify-end m-0 px-4">
          <div className="w-full flex justify-end">
            <a
              href="#"
              className="px-6 text-xs font-semibold text-white hover:text-orange-700"
            >
              CLIENT LOGIN 
            </a>
            
            <div className="text-xs font-semibold text-white hover:text-orange-700">
              REGION
              <select name="regions" id="regions">
                <option value="latam">LATAM</option>
                <option value="brazil">BRAZIL</option>
                <option value="ociania">OCIANIA</option>
                <option value="emea">EMEA</option>
                <option value="netherlands">NETHERLANDS</option>
                <option value="france">FRANCE</option>
              </select>
            </div>
            <BiSearch className="mx-2 cursor-pointer hover:text-orange-700 text-white float-right" />
            <hr className="m-2" />
          </div>
        </div>
      </div>
    </nav> */}
    </>
  );
};

export default Header;
