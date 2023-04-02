import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import ca_plantwatcher from "../assets/ca_plantwatcher.jpg";
import article7 from "../assets/article7.jpg";
import TruimphTogether from "../assets/TruimphTogether.jpg";
import amber from "../assets/Amber.png";
import { GiRoad } from "react-icons/gi";
import { AiOutlineDotChart } from "react-icons/ai";
import { GiStoneWall } from "react-icons/gi";

const Solutions = () => {
  return (
    <>
    <Navbar />
      <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2018/05/ReadMix_HERO-1920x1200.jpg')]"
      >
        <h1 class="text-4xl tracking-3 text-center font-bold text-white mb-4">
          READY MIX PRODUCER
        </h1>
      </div>

      <div class="flex flex-wrap justify-center">
        <a
          href="#"
          class="m-2 px-4 text-gray-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Inbound Materials Management
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Production & QC
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Dispatch & Logistics
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Trucking & Telematics
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Business Systems & Analytics
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Sales Automation
        </a>
      </div>
      <hr />

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={ca_plantwatcher}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            AUTOMATION DRIVES BETTER PERFORMANCE
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Replace manual processes with real-time monitoring and tracking.
            Deliver efficiency across your operations and drive more dollars.
            Your bottom line will love you.
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            VISIBILITY = THE FACTS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Arm your team with insights into every aspect of your operational
            and supply chain puzzle. From sales and production to material and
            delivery needs, use information to be proactive.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={article7} alt="connex_eventimage" class="w-full h-auto" />
        </div>
      </div>

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={TruimphTogether}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            TRIUMPH TOGETHER
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Work side by side with your supply chain partners to balance your
            inbound and outbound needs. Make more accurate forecasts and
            allocate resources more efficiently.
          </p>
        </div>
      </div>

      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center">
            <div class="bg-white max-w-2xl p-4">
              <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
                A Next-Gen Technology Stack That Helps You Build Amazing
              </h1>
              <p class="m-4 text-gray-600 tracking-3 text-center">
                Command Alkon’s products are powerful on their own, but they are
                even better together. Our solutions suite is perfectly designed
                to integrate into your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GiRoad className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              Inbound Materials Management
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Balance your incoming material needs with your outbound delivery
            requirements.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <AiOutlineDotChart className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              Production & QC
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Automate manual processes and promote quality and productivity.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GiStoneWall className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              Dispatch & Logistics
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Simplify complex tasks and have the right information to make the
            right decisions.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GiRoad className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              Trucking & Telematics
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Real-time visibility to really manage your fleet.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <AiOutlineDotChart className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              Business Systems & Analytics
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Enable the flow of information across your enterprise.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GiStoneWall className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              Sales Automation
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Ensure timely and accurate sales transactions that expedite
            deliveries, payments, and planning.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row m-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50">
          <h2 class="m-2 text-2xl text-gray-600 tracking-3 text-right font-bold mb-2">
            READY TO BUILD AMAZING?
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left md:text-center ">
            Learn how we can help you automate your operations and digitize and
            streamline your workflows with your customers.
          </p>
          <button class="bg-red-500 m-6 text-white tracking-3 text-xs font-semibold hover:border-2 focus:ring-red-500 py-4 px-6 rounded-full">
            CONTACT US TODAY
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={amber} alt="Image" class="w-full h-auto" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Solutions