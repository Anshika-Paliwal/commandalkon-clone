import React from 'react';
import Apex_Header from "../assets/Apex_Header.jpg";
import readymix_producer_lr from "../assets/readymix_producer_lr.jpg";
import CurtainCosts from "../assets/CurtainCosts.jpg";
import { GiTriangleTarget } from "react-icons/gi";
import Sarah from "../assets/Sarah.png";

const InboundMaterialsManagement = () => {
  return (
    <>
    <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2018/05/ca_directmaterials_hero-1-1920x1200.jpg')]"
      >
        <h1 class="text-4xl tracking-3 text-center font-bold text-white mb-4">
          INBOUND MATERIALS MANAGEMENT
        </h1>
      </div>
      
      <div class="flex flex-wrap justify-center">
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Inbound Materials Management
        </a>
      </div>
        <hr />
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Apex_Header}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            SUPPLY MANAGEMENT REINVENTED
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Have a single source of the truth. Make real-time decisions based on
            actual order, delivery, inventory, and cost information.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            ​PINPOINT YOUR INVENTORY
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            ​Because your inventory connects to all your other systems, you can
            prevent the dreaded out-of-stock and be able to identify the ideal
            time to restock.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={readymix_producer_lr}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={CurtainCosts}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            CURTAIL COSTS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            ​Improve delivery processes and master balancing your supply and
            demand equation. Minimize empty miles, underutilization of assets,
            and misallocation of resources to maximize your profit.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-screen bg-gray-50 m-6">
        <GiTriangleTarget className="text-6xl text-red-500 mb-4" />
        <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          “With Command Alkon, we went from flying blind, to unlocking
          tremendous value through better visibility.”
        </h1>
        <p class="m-4 text-gray-600 tracking-3 text-center">
          Jacob Davis, Area Operations Manager, Wayne Davis Concrete
        </p>
      </div>

      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center">
            <div class="bg-white max-w-2xl p-4">
              <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
                Inbound Materials Management PRODUCTS THAT HELP BUILD WHERE WE
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
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/4 border border-gray-300 rounded-md p-4 m-4 hover:shadow-xl">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-600 text-lg font-medium mx-2 text-center">
              CONNEX Inbound Materials
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Digitize material and haul tickets and automate processes for your
            inbound raw materials.{" "}
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
            GET IN TOUCH FOR A READINESS ASSESSMENT
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left md:text-center ">
            Not sure if our inbound materials management line is for you? A few
            short questions can assess if you are ready to take the next step.
          </p>
          <h2 class="m-2 text-md text-gray-600 tracking-3 text-right font-bold mb-2">
            Get in touch today to get started.
          </h2>
          <button class="bg-red-500 m-6 text-white tracking-3 text-xs font-semibold hover:border-2 focus:ring-red-500 py-4 px-6 rounded-full">
            CONTACT US
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={Sarah} alt="Image" class="w-full h-auto" />
        </div>
      </div>
    </>
  )
}

export default InboundMaterialsManagement