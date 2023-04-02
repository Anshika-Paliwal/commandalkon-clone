import React from 'react'
import Automation1 from "../assets/Automation1.jpg";
import ProactiveAddress from "../assets/ProactiveAddress.jpg";
import man_eticketing from "../assets/man_eticketing.jpg";
import { GiTriangleTarget } from "react-icons/gi";
import Lori from "../assets/Lori.png";

const ProductionQC = () => {
  return (
    <>
    <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2021/04/Clark_Asphalt-0066-1920x1280.jpg')]"
      >
        <h1 class="text-4xl tracking-3 text-center font-bold text-white mb-4">
          PRODUCTION & QC
        </h1>
      </div>

      <div class="flex flex-wrap justify-center">
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          COMMANDqc
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          COMMANDbatch CP
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          COMMANDbatch
        </a>
        <a
          href="#"
          class="m-2 px-4 text-gray-500 hover:text-red-500 py-2 tracking-3 font-semibold text-xs cursor-pointer text-center"
        >
          COMMANDassurance
        </a>
      </div>
      <hr />

      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Automation1}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            AUTOMATION IS KEY
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            Replace manual and complex tasks with streamlined and simplified
            processes. Guarantee quality, enhance production of asphalt and
            ready mix concrete, and increase efficiency—not to mention customer
            satisfaction.
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            DELIVER PROFITS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            When you provide quality consistently, you build trust and ensure
            profitability. Less time spent reworking and more time spent growing
            your business.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={ProactiveAddress}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-6">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={man_eticketing}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            PROACTIVELY ADDRESS PROBLEMS
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            ​When you can address a situation before it becomes a problem, you
            save time, resources, and materials. Enjoy alerts before that allow
            you to manage exceptions and stay ahead of the game.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center h-screen bg-gray-50 m-6">
        <GiTriangleTarget className="text-6xl text-red-500 mb-4" />
        <h1 class="p-2 md:p-12 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          “One of the things that attracted us to Command Alkon is that they
          have different modules that work together and talk together all the
          way from production, to invoicing, allowing us to capture information
          all along the way. We were able to reduce our order to cash process by
          2/3 just automating it through batch control systems.”
        </h1>
        <p class="m-4 text-gray-600 tracking-3 text-center">
          Hank Hauge, Technical Services Engineer, Strata Inc.
        </p>
      </div>

      <div class="flex flex-col items-center justify-center m-6">
        <h1 class="p-2 md:p-8 text-2xl text-gray-600 tracking-3 text-center font-bold mb-2">
          Production & QC PRODUCTS THAT HELP BUILD WHERE WE LIVE, WORK AND PLAY
        </h1>
        <p class="m-4 text-gray-600 tracking-3 text-center">
          Command Alkon’s products are powerful on their own, but they are even
          better together. Our ecosystem is perfectly designed to integrate into
          your business.
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-center items-center p-4 rounded-lg">
        <div class="border-gray-300 border p-4 md:m-4 rounded-lg text-center hover:shadow-xl">
          <h2 class="text-gray-600 text-lg font-medium mx-2 text-center">
            COMMANDqc
          </h2>
          <p class="text-gray-600 mt-4 text-center">
            Get your concrete right the first time. Quality Control for Your
            Ready Mix Operations.
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="border-gray-300 border p-4 md:m-4 rounded-lg text-center hover:shadow-xl">
          <h2 class="text-gray-600 text-lg font-medium mx-2 text-center">
            COMMANDbatch CP
          </h2>
          <p class="text-gray-600 mt-4 text-center">
            A fully customizable and complete manufactured concrete process
            control system. Batch with speed and accuracy.
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="border-gray-300 border p-4 md:m-4 rounded-lg text-center hover:shadow-xl">
          <h2 class="text-gray-600 text-lg font-medium mx-2 text-center">
            COMMANDbatch
          </h2>
          <p class="text-gray-600 mt-4 text-center">
            A fully customizable and complete ready mix batching system. Batch
            with speed and accuracy.
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 hover:text-white hover:bg-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="border-gray-300 border p-4 md:m-4 rounded-lg text-center hover:shadow-xl">
          <h2 class="text-gray-600 text-lg font-medium mx-2 text-center">
            COMMANDassurance
          </h2>
          <p class="text-gray-600 mt-4 text-center">
            Real-time data for ready mix operations. Capture visibility into
            exactly what's going on inside the drum of your ready mix truck.
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
            Are you getting the most out of your production & QC? Speak with
            someone to answer a few short questions and assess if you are ready
            to take the next step.
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
    </>
  )
}

export default ProductionQC