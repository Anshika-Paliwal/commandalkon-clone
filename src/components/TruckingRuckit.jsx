import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsYoutube } from "react-icons/bs";
import computers from "../assets/computers.png";
import OHL_North_America from "../assets/OHL_North_America.png";
import RUCKIT_PICTURE from "../assets/RUCKIT_PICTURE.png";
import RUCKIT_PICTURE1 from "../assets/RUCKIT_PICTURE1.png";
import RUCKIT_PICTURE2 from "../assets/RUCKIT_PICTURE2.png";
import RUCKIT_PICTURE3 from "../assets/RUCKIT_PICTURE3.png";
import RUCKIT_PICTURE4 from "../assets/RUCKIT_PICTURE4.png";
import ruckit_image from "../assets/ruckit_image.png";
import ruckit_card from "../assets/ruckit_card.png";
import ruckit_card1 from "../assets/ruckit_card1.png";
import ruckit_card2 from "../assets/ruckit_card2.png";
import ruckit_card3 from "../assets/ruckit_card3.png";

const TruckingRuckit = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2021/05/ruckit_wp_hero_image-1920x1280.jpg')]"
      >
        <div class="p-8 rounded-lg text-left">
          <h2 class="bg-red-500 w-auto p-2 tracking-3 text-left font-semibold text-white mb-4">
            Trucking Management for Heavy Materials
          </h2>
          <h1 class="text-4xl tracking-3 text-left font-bold text-white mb-4">
            Ruckit
          </h1>
          <p class="text-white mb-4">
            Efficiency in the Field and at the Office
          </p>
          <div class="flex justify-between">
            <button class="bg-white hover:bg-red-500 hover:text-white text-red-500  tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
              WATCH A DEMO
            </button>
            <button class="bg-white hover:bg-red-500 hover:text-white text-red-500  tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row m-6 bg-gray-50">
        <div class="w-full md:w-1/2 flex justify-start items-start p-12">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            class="inset-0 flex items-center justify-center text-white font-bold text-3xl uppercase hover:text-red-500"
          >
            <img
              src={computers}
              alt="trackit_explained"
              class="w-full h-auto cursor-pointer"
            />
            <BsYoutube className="absolute text-6xl hover:text-red-600 text-red-400" />
          </a>
        </div>
        <div class="lg:w-1/2 px-4 lg:px-12 lg:mt-12">
          <h2 class="m-2 text-2xl text-gray-600 tracking-3 text-left font-bold mb-2">
            Optimized Material Hauling Operations
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left">
            Asphalt Paving Companies, Aggregate Suppliers, General Contractors,
            Trucking Companies & Brokers, Drivers – collaborate digitally on a
            single platform with Ruckit.
          </p>
          <ul class="list-disc list-inside">
            <li class="text-sm text-gray-700 tracking-3 text-left mb-2">
              Manage owned fleet and third
            </li>
            <li class="text-sm text-gray-700 tracking-3 text-left mb-2">
              Drag and drop dispatch
            </li>
            <li class="text-sm text-gray-700 tracking-3 text-left mb-2">
              Real-time truck tracking
            </li>
            <li class="text-sm text-gray-700 tracking-3 text-left mb-2">
              Streamlined invoicing
            </li>
            <li class="text-sm text-gray-700 tracking-3 text-left mb-2">
              Faster payments and convenient AP integration
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row m-6">
        <div class="w-full md:w-1/2 flex justify-start items-start text-left p-12 bg-gray-200">
          <img src={OHL_North_America} alt="Image" class="w-full h-auto" />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-200">
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left">
            “Ruckit is a game changer in the industry by integrating modern
            technology to dispatch and monitor trucking on or off the jobsite.
            The application allows for real time tracking and makes the commonly
            painful task of invoicing nearly painless and instant in comparison
            to old methods.”
          </p>
          <h2 class="m-2 text-2xl text-gray-600 tracking-3 text-left font-bold mb-2">
            HECTOR GARCIA
          </h2>
          <h2 class="m-2 text-lg text-gray-600 tracking-3 text-left mb-2">
            PROJECT COORDINATOR, OHL USA
          </h2>
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={RUCKIT_PICTURE}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            NO MORE DROWNING IN PHONE CALLS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Schedule all of your owned, leased-on, and 3rd party trucks assigned
            to your jobs. Auto-assign trucks from previous day with 1 click and
            receive confirmations that drivers have accepted their jobs.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            ​​​NEXT LEVEL TICKET MANAGMENT
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Easily scan tickets with scanner integration and quickly reference
            tickets in the system by searching and sorting. Optical Character
            Recognition extracts and auto-fills ticket info and archives tickets
            on the cloud.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={RUCKIT_PICTURE1} alt="PinPoint" class="w-full h-auto" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={RUCKIT_PICTURE2}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            OPTIMIZE TRUCKING
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Quantify start and stop times and stagger your trucks to minimize
            overpaying for trucks queued up at the plant and job-site. See the
            location and status of every truck on a map and alert crews and
            transportation managers when a truck is falling behind. Handle
            changes and reassign drivers on the fly.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            PAY FOR WHAT YOU RECEIVE
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Save $25,000 per month for every 50 trucks by scheduling and paying
            drivers by the minute. Verify and correct driver timesheets using a
            combination of GPS and Ticket time-stamps and ensure you are paying
            for service time accurately and to the minute.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={RUCKIT_PICTURE3} alt="PinPoint" class="w-full h-auto" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={RUCKIT_PICTURE4}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            GATHER INSIGHTS TO CONTROL COSTS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Use heatmaps and analytics to spot problem areas and precisely
            adjust the number of trucks you need using real-time insights on
            trip-times. Know exactly how long it takes for trucks to unload with
            geofences that automatically identify unloading locations and/or can
            move when asphalt pavers.
          </p>
        </div>
      </div>

      <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2021/03/crane-and-building-construction-site-on-background-YD97VXU-1.jpg')]"
      >
        <div class="text-center">
          <h1 class="lg:mb-8 text-2xl lg:px-16 px-10 tracking-3 text-center font-bold text-white mb-4">
            Built for Asphalt & Paving Companies, Aggregate Suppliers, General
            Contractors and Trucking Companies
          </h1>
          <p class="text-sm tracking-3 text-center text-white mb-4">
            A better way to move heavy building materials.
          </p>
          <div class="flex justify-center">
            <div class="text-center mr-4 lg:mr-8">
              <h1 class="text-3xl lg:text-6xl font-bold text-white">21M</h1>
              <p class="text-sm tracking-3 text-center text-white mb-4">
                Trucking Costs Saved
              </p>
            </div>
            <div class="text-center ml-4 lg:ml-8">
              <h1 class="text-3xl lg:text-6xl font-bold text-white">51K</h1>
              <p class="text-sm tracking-3 text-center text-white mb-4">
                Jobs Managed
              </p>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="text-center ml-4">
              <h1 class="text-6xl font-bold text-white">403K</h1>
              <p class="lg:mt-5 text-sm tracking-3 text-center text-white m-4">
                Loads Delivered
              </p>
              <button class="bg-none text-white hover:bg-red-500 hover:border-transparent tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
                WATCH THE DEMO!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row m-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50">
          <h2 class="m-2 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          STREAMLINE INVOICING, INVENTORY AND AP
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left md:text-center ">
          Get a real-time material inventory without manual data entry of tickets.  Automatically reconcile invoices for both raw materials and hauling. Easily integrate ticket and invoice data into plant operation, job cost control and accounting software.  Pay and/or get paid faster.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={ruckit_image} alt="Image" class="w-full h-auto" />
        </div>
      </div>

      <div class="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="flex justify-center">
          <h1 class="mb-6 text-3xl text-gray-600 tracking-3 text-center font-bold">
            SCHEDULE A DEMO
          </h1>
        </div>
        <div class="container mx-auto px-4 sm:px-6 md:px-8">
          <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            {/* <!-- First Row --> */}
            <div class="flex flex-wrap -mx-4 mb-4">
              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <label
                  for="name"
                  class="block text-gray-700 font-bold mb-2"
                ></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="bg-gray-200 rounded-sm px-4 py-2 w-full"
                  placeholder="First Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-4">
                <label
                  for="email"
                  class="block text-gray-700 font-bold mb-2"
                ></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="bg-gray-200 rounded-sm px-4 py-2 w-full"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* <!-- Second Row --> */}
            <div class="flex flex-wrap -mx-4 mb-4">
              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <label
                  for="phone"
                  class="block text-gray-700 font-bold mb-2"
                ></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="bg-gray-200 rounded-sm px-4 py-2 w-full"
                  placeholder="Company"
                />
              </div>
              <div class="w-full md:w-1/2 px-4">
                <label
                  for="address"
                  class="block text-gray-700 font-bold mb-2"
                ></label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  class="bg-gray-200 rounded-sm px-4 py-2 w-full"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* <!-- Third Row --> */}
            <div class="flex flex-wrap -mx-4 mb-4">
              <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <label
                  for="phone"
                  class="block text-gray-700 font-bold mb-2"
                ></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="bg-gray-200 rounded-sm px-4 py-2 w-full"
                  placeholder="Phone"
                />
              </div>

              <div class="w-full md:w-1/2 px-4">
                <select class=" bg-gray-200 text-slate-400 block appearance-none w-full hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option className="text-muted">Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M3.293 6.293a1 1 0 011.414 0L10 11.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="rounded-lg p-4 mb-4">
              <label
                for="comments"
                class="block text-gray-700 font-bold mb-2"
              ></label>
              <textarea
                id="comments"
                name="comments"
                class="border bg-gray-200 rounded-lg px-4 py-2 w-full"
                placeholder="Comments"
              ></textarea>
            </div>

            <div class="flex align-center justify-center md:flex-row gap-4 m-4 p-4">
              <button
                class="bg-red-500 bg-none text-white tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full"
                type="button"
              >
                SUBMIT!
              </button>
            </div>

            <div>
              <p className="text-center text-xs tracking-3 text-gray-400">
                Command Alkon will use any of the data provided hereunder in
                accordance with the &nbsp;
                <a
                  href="#"
                  className="text-blue-600 underline underline-2 tracking-3 cursor-pointer"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center">
        <h1 class="m-6 text-3xl text-gray-600 tracking-3 text-center font-bold">
        View More Libra Resources
        </h1>
      </div>
      <div class="flex flex-wrap justify-around m-4">
        <div class="m-4 max-w-xs bg-white shadow-xl dark:border-gray-700">
          <a href="#">
            <img src={ruckit_card} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="m-2 text-xs underline decoration-dotted text-gray-500 tracking-3 text-left mb-2 font-semibold">
                2 years ago
              </h5>
              <h5 class="hover:text-black m-2 text-lg text-gray-700 tracking-3 text-left mb-2 font-semibold">
                Libra Loadout
                <br /> Product Page |
              </h5>
            </a>
            <hr />
            <a
              href="#"
              class="no-underline hover:underline text-gray-700 font-semibold hover:text-black inline-flex items-center tracking-3 px-3 py-2 text-sm text-center"
            >
              Read Flipbook
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="m-4 max-w-xs bg-white shadow-xl dark:border-gray-700">
          <a href="#">
            <img src={ruckit_card1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="m-2 text-xs underline decoration-dotted text-gray-500 tracking-3 text-left mb-2 font-semibold">
                2 years ago
              </h5>
              <h5 class="hover:text-black m-2 text-lg text-gray-700 tracking-3 text-left mb-2 font-semibold">
                Libra Assphault
                <br /> Drum Controls
                <br /> Product Page
              </h5>
            </a>
            <hr />
            <a
              href="#"
              class="text-gray-700 font-semibold hover:text-black inline-flex items-center tracking-3 px-3 py-2 text-sm text-center"
            >
              Read Flipbook
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="m-4 max-w-xs bg-white shadow-xl dark:border-gray-700">
          <a href="#">
            <img src={ruckit_card2} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="m-2 text-xs underline decoration-dotted text-gray-500 tracking-3 text-left mb-2 font-semibold">
                about a years ago
              </h5>
              <h5 class="hover:text-black m-2 text-lg text-gray-700 tracking-3 text-left mb-2 font-semibold">
                Asphault
                <br /> Subscription
              </h5>
            </a>
            <hr />
            <a
              href="#"
              class="text-gray-700 font-semibold hover:text-black inline-flex items-center tracking-3 px-3 py-2 text-sm text-center"
            >
              Read Flipbook
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="m-4 max-w-xs bg-white shadow-xl dark:border-gray-700">
          <a href="#">
            <img src={ruckit_card3} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="m-2 text-xs underline decoration-dotted text-gray-500 tracking-3 text-left mb-2 font-semibold">
                2 years ago
              </h5>
              <h5 class="hover:text-black m-2 text-lg text-gray-700 tracking-3 text-left mb-2 font-semibold">
                Supercharge
                <br /> Your Asphault
                <br /> Production
                <br /> Loadout and
              </h5>
            </a>
            <hr />
            <a
              href="#"
              class="text-gray-700 font-semibold hover:text-black inline-flex items-center tracking-3 px-3 py-2 text-sm text-center"
            >
              Watch Video
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TruckingRuckit;
