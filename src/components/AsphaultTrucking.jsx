import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Empower from "../assets/Empower.jpg";
import trucking from "../assets/trucking.jpg";
import eo from "../assets/eo.jpg";
import { GiTriangleTarget } from "react-icons/gi";
import Lori from "../assets/Lori.png";

const AsphaultTrucking = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2021/04/190828-commandalkon-ultracem-04-%C2%A9andrewburns-1920x1280.jpg')]"
      >
        <h1 class="text-4xl tracking-3 text-center font-bold text-white mb-4">
          TRUCKING & TELEMATICS
        </h1>
      </div>

      <div class="flex flex-wrap justify-center">
        <a
          href="/ruckit"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          Ruckit
        </a>
        <a
          href="/trackit"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          TrackIt
        </a>
      </div>
      <hr />

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={Empower} alt="connex_eventimage" class="w-full h-auto" />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            EMPOWERMENT IN THE CAB
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Enable drivers with information that promotes better communication
            with dispatch and on the jobsite. Deliver quality products and
            quality experiences to your customers.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            ELIMINATE PAPER
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Tickets, timesheets – too much paper in the cab and in the office.
            Take the paper out of your processes and speed up the delivery of
            information and payments.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={trucking} alt="connex_eventimage" class="w-full h-auto" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img src={eo} alt="connex_eventimage" class="w-full h-auto" />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            LOGGING, ALERTS AND MORE
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            ​Make decisions on the fly with real-time updates. Incorporate
            Electronic Logging, Driver Behavior Monitoring, Engine and Vehicle
            Maintenance. The list of opportunities is endless.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-screen bg-gray-50 m-6">
        <GiTriangleTarget className="text-6xl text-red-500 mb-4" />
        <h1 class="p-2 md:p-12 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          “Overnight, we went from effectively flying blind to knowing exactly
          what status every driver is in during every minute of the day.”
        </h1>
        <p class="m-4 text-sm text-gray-600 tracking-3 text-center">
          Joe Merlino, Operations Controller, Benevento Companies
        </p>
      </div>

      <div class="flex flex-col items-center justify-center m-6">
        <h1 class="p-2 md:p-8 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          Trucking & Telematics PRODUCTS THAT HELP BUILD WHERE WE LIVE, WORK AND
          PLAY
        </h1>
        <p class="m-4 text-gray-600 tracking-3 text-center">
          Command Alkon’s products are powerful on their own, but they are even
          better together. Our ecosystem is perfectly designed to integrate into
          your business.
        </p>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">TFleet</h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">TFleet </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              COMMANDassurance
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Real-time data for ready mix operations. Capture visibility into
            exactly what's going on inside the drum of your ready mix truck.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="cursor-pointer w-full sm:w-1/2 md:w-1/3 border border-gray-300 hover:shadow-xl rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">TrackIt</h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            GPS fleet management software built specifically for heavy building
            materials suppliers and haulers{" "}
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
            Are you getting the most out of your trucking & telematics systems?
            A few short questions can assess if you are ready to take the next
            step.
          </p>
          <h2 class="m-2 text-md text-gray-600 tracking-3 text-right font-bold mb-2">
            Get in touch today to get started.
          </h2>
          <button class="bg-red-500 m-6 text-white tracking-3 text-xs font-semibold hover:border-2 focus:ring-red-500 py-4 px-6 rounded-full">
            CONTACT US
          </button>
        </div>
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={Lori} alt="Image" class="w-full h-auto" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AsphaultTrucking