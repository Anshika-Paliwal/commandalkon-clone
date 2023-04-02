import React from 'react'
import ca_erp_2 from "../assets/ca_erp_2.jpg";
import b_sys from "../assets/b_sys.jpg";
import MaximizeYourIT from "../assets/MaximizeYourIT.jpg";
import { GiTriangleTarget } from "react-icons/gi";
import amber from "../assets/Amber.png";


const BusinessSystems = () => {
  return (
    <>
    <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2018/05/BusinessSystems_Hero-1-1920x1200.jpg')]"
      >
        <h1 class="text-4xl tracking-3 text-center font-bold text-white mb-4">
          BUSINESS SYSTEMS & ANALYTICS
        </h1>
      </div>

      <div class="flex flex-wrap justify-center">
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          CONNEX Insights
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Integra
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          COMMANDSeries
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          COMMANDPerformance
        </a>
      </div>
      <hr />

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={ca_erp_2} alt="connex_eventimage" class="w-full h-auto" />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            ​QUOTE-TO-CASH INTEGRATION
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            All systems work together and cooperate seamlessly: quote, order,
            ticket, deliver, and bill. Share your data to complete projects on
            time and within budget. That’s the name of the game, right?
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            BUSINESS INTELLIGENCE UNLEASHED
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            All the data is united from your operational systems, financial
            applications, and time and attendance programs. Get the insights you
            need to make informed decisions.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={b_sys} alt="connex_eventimage" class="w-full h-auto" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={MaximizeYourIT}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            MAXIMIZE YOUR IT
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Spend less time looking for, organizing, and manipulating the data
            you need. Make the right decisions with the latest information.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-screen bg-gray-50 m-6">
        <GiTriangleTarget className="text-6xl text-red-500 mb-4" />
        <h1 class="p-2 md:p-12 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          “Command Alkon’s systems helped improve the timeliness and accuracy of
          our billing. We now invoice on a daily basis, which is something our
          customers have asked for in the past, but we were just not able to get
          there.”
        </h1>
        <p class="m-4 text-sm text-gray-600 tracking-3 text-center">
          Joe Merlino, Operations Controller, Benevento Companies
        </p>
      </div>

      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center">
            <div class="bg-white max-w-2xl p-4">
              <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
                Business Systems & Analytics PRODUCTS THAT HELP BUILD WHERE WE
                LIVE, WORK AND PLAY
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
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              CONNEX Insights
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">CONNEX Jobsite </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">Integra</h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Integra for ready mix dispatch operations and a full quote-to-cash
            approach to your operations.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              COMMANDseries
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Quote to dispatch to payment - enterprise functionality for ready
            mix operations.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              COMMANDperformance
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Business Intelligence built for Heavy Building Materials providers.{" "}
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
            GET IN TOUCH FOR AN EFFICIENCY CHECK UP
          </h2>
          <p class="m-6 text-sm text-gray-700 tracking-3 text-center">
            Are you getting the most out of your business systems? Speak with
            someone to answer a few short questions and assess if you are ready
            to take the next step.
          </p>
          <button class="bg-red-500 hover:bg-white border-2 hover:border-red-500 hover:text-red-500 text-white tracking-3 text-xs font-semibold py-4 px-6 rounded-full">
            Get in touch today to get started.
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={amber} alt="Image" class="w-full h-auto" />
        </div>
      </div>
    </>
  )
}

export default BusinessSystems