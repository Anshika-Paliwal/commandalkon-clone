import React from 'react'
import sales_automation1 from "../assets/sales_automation1.jpg";
import DataFingertips from "../assets/DataFingertips.jpg";
import Paperless from "../assets/Paperless.jpg";
import { GiTriangleTarget } from "react-icons/gi";
import Sarah from "../assets/Sarah.png";

const SalesAutomation = () => {
  return (
    <>
    <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2018/05/SalesAuto_HERO2-1920x1200.jpg')]"
      >
        <h1 class="sm:mt-10 text-4xl tracking-3 text-center font-bold text-white mb-4">
          SALES AUTOMATION
        </h1>
      </div>

      <div class="flex flex-wrap justify-center">
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          MOBILEsales
        </a>
      </div>
      <hr />

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={sales_automation1}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            ​STAY IN FRONT OF CUSTOMERS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Your team makes a greater impact when they’re out in the field, not
            in the office. Give them the tools they need on the go so they don’t
            have to go back to the office to track bids or send quotes.
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            DATA AT YOUR FINGERTIPS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Have the right data at the right time, and right at your fingertips.
            Eliminate rework later in your business process flow by ensuring
            your sales team has access to real-time information.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={DataFingertips} alt="PinPoint" class="w-full h-auto" />
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={Paperless} alt="cp" class="w-full h-auto" />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            ​GOODBYE, PAPER
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            When sales integrates with logistics, there are far fewer mistakes
            because everything is streamlined—it’s digital. Reduce data entry
            duplication and errors.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-screen bg-gray-50 m-6">
        <GiTriangleTarget className="text-6xl text-red-500 mb-4" />
        <h1 class="p-2 md:p-12 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          “Maschmeyer Concrete chose MOBILEsales to streamline the
          bid-to-project process. Since implementation, we have replaced four
          sales tools with one application. MOBILEsales has enabled our sales
          team to spend more time in the field servicing accounts and generating
          business.”
        </h1>
        <p class="m-4 text-sm text-gray-600 tracking-3 text-center">
          Steve Bishop, Vice President, Maschmeyer Concrete
        </p>
      </div>

      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center">
            <div class="bg-white max-w-2xl p-4">
              <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
                Sales Automation PRODUCTS THAT HELP BUILD WHERE WE LIVE, WORK
                AND PLAY
              </h1>
              <p class="m-4 text-gray-600 tracking-3 text-center">
                Command Alkon’s products are powerful on their own, but they are
                even better together. Our ecosystem is perfectly designed to
                integrate into your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">MOBILEsales</h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Sales automation designed specifically for heavy building materials
            providers.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row m-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50">
          <h2 class="m-2 p-4 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
            GET IN TOUCH FOR A READINESS ASSESSMENT
          </h2>
          <p class="m-6 text-sm text-gray-700 tracking-3 text-center">
            Not sure if our sales line is for you? A few short questions can
            assess if you are ready to take the next step.
          </p>
          <button class="bg-red-500 hover:bg-white border-2 hover:border-red-500 hover:text-red-500 text-white tracking-3 text-xs font-semibold py-4 px-6 rounded-full">
            Get in touch today to get started.
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={Sarah} alt="Image" class="w-full h-auto" />
        </div>
      </div>
    </>
  )
}

export default SalesAutomation