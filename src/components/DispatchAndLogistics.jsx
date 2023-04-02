import React from 'react'
import Explore_home from "../assets/Explore_home.jpg";
import cmd_series_header2 from "../assets/cmd_series_header2.jpg";
import ca_trackit_time from "../assets/ca_trackit_time.jpg";
import { GiTriangleTarget } from "react-icons/gi";
import Karli from "../assets/Karli.png";

const DispatchAndLogistics = () => {
  return (
    <>
    <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2018/05/DispatchLog_HERO-1920x1200.jpg')]"
      >
        <h1 class="text-4xl tracking-3 text-center font-bold text-white mb-4">
          DISPATCH & LOGISITICS
        </h1>
      </div>

      <div class="flex flex-wrap justify-center">
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          MOBILEticket
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          MOBILEjobsite
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
          COMMANDoptimize
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          COMMANDse
        </a>
      </div>
      <hr />

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Explore_home}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            CONNECTED INCREASES CONTROL
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            When your systems integrate and data flows from quote through to
            payment across your projects and your enterprise productivity and
            control will soar.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            THINK LOGISTICS, NOT JUST DISPATCH
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            With integrated data and the free flow of information, your
            decisions will be more informed—helping you utilize your resources
            more effectively.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={cmd_series_header2}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={ca_trackit_time}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            REAL-TIME INSIGHTS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Fresh insights on your deliveries, your assets, your materials, and
            your staff help you make decisions that can ensure quality and
            maximize efficiency.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-screen bg-gray-50 m-6">
        <GiTriangleTarget className="text-6xl text-red-500 mb-4" />
        <h1 class="p-2 md:p-12 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          “The more we integrated Command Alkon’s products into our workflow the
          more visibility and control we’ve achieved. Our systems talk to one
          another and we’re finding more efficiency than we thought possible.”
        </h1>
        <p class="m-4 text-gray-600 tracking-3 text-center">
          Shane Hegarty, Dispatch Manager, Anderson Concrete
        </p>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="flex justify-center">
          <div class="bg-white max-w-2xl p-4">
            <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
              Dispatch & Logistics PRODUCTS THAT HELP BUILD WHERE WE LIVE, WORK
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

      <div class="flex flex-wrap justify-center">
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">MOBILEticket</h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Electronic signature capture and proof of delivery.{" "}
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
              MOBILEjobsite
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            MOBILEjobsite gives your customers real-time visibility into their
            deliveries.{" "}
          </p>
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
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              COMMANDoptimize
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Optimized ready mix dispatch decision making.{" "}
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

      <div class="flex flex-col md:flex-row m-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50">
          <h2 class="m-2 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
            GET IN TOUCH FOR AN EFFICIENCY CHECK UP
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left md:text-center ">
            Are you getting the most out of your dispatch & logistics systems?
            Speak with someone to answer a few short questions and assess if you
            are ready to take the next step.
          </p>
          <h2 class="m-2 text-md text-gray-600 tracking-3 text-right font-bold mb-2">
            Get in touch today to get started.
          </h2>
          <button class="bg-red-500 m-6 text-white hover:bg-white hover:text-red-500 hover:border-red-500 tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
            CONTACT US
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={Karli} alt="Image" class="w-full h-auto" />
        </div>
      </div>
    </>
  )
}

export default DispatchAndLogistics