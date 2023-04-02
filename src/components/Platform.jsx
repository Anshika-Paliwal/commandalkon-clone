import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import { FaDigitalOcean } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import CONNEX_Platform_700 from "../assets/CONNEX_Platform_700.png";
import connex_new_hotspot from "../assets/connex_new_hotspot.png";
import video_bg_man from "../assets/video_bg_man.png";
import { GiLinkedRings } from "react-icons/gi";
import quote from "../assets/quote.png";
import Vista from "../assets/Vista.png";
import CMIC from "../assets/CMIC.png";
import DocExpress from "../assets/DocExpress.png";
import ELO from "../assets/ELO.png";
import HCSS from "../assets/HCSS.png";
import { FaRedhat } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { BiTrafficCone } from "react-icons/bi";
import zachry from "../assets/zachry.png";
import webber from "../assets/webber.png";
import Kiewit_1 from "../assets/Kiewit_1.png";
import thomas from "../assets/webber.png";
import summit from "../assets/summit.png";
// import Video_Image1.png from "../assets/Video_Image1.png";
// import Video_Image2.png from "../assets/Video_Image1.png";
// import Video_Image3.png from "../assets/Video_Image1.png";
// import Video_Image4.png from "../assets/Video_Image1.png";

const Platform = () => {
  return (
    <>
    <Header />
    <Navbar />
    
    <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2021/02/connex_header_image-1920x1280.jpg')]"
      >
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 class="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold leading-tight">
            The CONNEX Platform
          </h1>
          <h2 class="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-4 leading-tight">
            For Heavy Building Materials Suppliers, Haulers, and Buyers
          </h2>
          <p class="text-white text-sm font-semibold sm:text-lg mt-4 leading-relaxed italic">
            "When we work together, we accomplish more than we do on our own."
          </p>
          <p class="text-white text-sm sm:text-lg mt-4 leading-relaxed">
            Chris Strickland | VP of Products
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM A READY MIX PRODUCER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM AN ASPHALT PRODUCER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM AN AGGREGATE CEMENT SUPPLIER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM A BULK MATERIAL HAULER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM A CONTRACTOR
            </p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center">
            <div class="bg-white max-w-2xl p-4">
              <h1 class="sm:mt-10 text-2xl text-gray-600 tracking-3 text-center font-bold">
                What is The CONNEX Platform?
              </h1>
              <p class="m-4 text-gray-600 tracking-3 text-center">
                CONNEX is a secure, cloud-based technology platform that links
                people and processes outside of their own four walls, delivering
                insight into every aspect of the supply chain to all
                construction materials suppliers, haulers, and buyers – at
                plants, in quarries, on the road, and at the jobsite.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 md:w-1/3 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <FaDigitalOcean className="text-6xl" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">DIGITIZE</h2>
          </div>
          <p class="text-gray-600 mt-4">
            Take your supply chain processes out of the dark ages by eliminating
            paper, automating workflows, and capturing real-time information,
            not only within your operations, but for all of your daily
            transactions with your material vendors, haulers, and/or buyers.{" "}
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GrSettingsOption className="text-6xl" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">COLLABORATE</h2>
          </div>
          <p class="text-gray-600 mt-4">
            Use the power of the platform to electronically exchange orders,
            tickets, invoices, and information with all of your construction
            materials partners and customers. Execute transactions for all of
            your heavy materials – cement, rock, admixtures, ready mix, asphalt,
            liquids – and with all of your vendors or customers – on one
            platform!{" "}
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GoSearch className="text-6xl" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">ANALYZE</h2>
          </div>
          <p class="text-gray-600 mt-4">
            With all of your transaction data in one location, unleash
            operational and financial insights at an entirely new level.
            Real-time intelligence and actionable recommendations allow you and
            your trading partners to act with speed and confidence to mitigate
            disruptions and make impactful business decisions.{" "}
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="bg-white max-w-2xl p-4">
          <img
            src={CONNEX_Platform_700}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
          <p class="m-4 text-gray-600 tracking-3 text-center text-sm">
            Look beyond your four walls with a platform approach that allows you
            to digitize your supply chain experience and work collaboratively
            with all of your trading partners. One platform for all of your
            supply chain partners and for all of types of heavy building
            materials!
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <img
          src={connex_new_hotspot}
          class="w-full max-w-md mx-h-full mx-auto"
        />
        <span class="text-center mt-4">Your text goes here</span>
      </div>

      <div class="flex flex-col md:flex-row m-6">
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img
            src={video_bg_man}
            alt="video_bg_man"
            class="w-full h-auto cursor-pointer"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50">
          <h2 class="m-2 text-2xl text-gray-600 tracking-3 text-left font-bold mb-2">
            CONNECTING INFORMATION AND PEOPLE TO GET WORK DONE
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left">
            Embrace digital collaboration and work more efficiently with your
            trading partners. The CONNEX Platform provides tailored experiences
            for the operational needs of all your users, connectivity to empower
            data, analytics to help you manage by exception, and actionable
            intelligence for improved decision-making.
          </p>
        </div>
      </div>

      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center">
            <div class="bg-white max-w-2xl p-4">
              <img src={quote} class="w-20 max-w-md mx-h-full mx-auto" />
              <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
                I would recommend CONNEX to anyone in this industry. Use it!
                Especially if you are the least bit busy!
              </h1>
              <p class="m-4 text-gray-600 tracking-3 text-center font-bold italic">
                Casey Lawson | Sensible Concrete
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/perticketbg.png')]"
      >
        <div class="text-center">
          <h1 class="text-2xl tracking-3 text-center font-bold text-white mb-4">
            CONNEX COMMUNITY
          </h1>
          <p class="text-sm tracking-3 text-center text-white mb-4">
            Bring Your Supply Chain Community Together
          </p>
          <div class="flex justify-center">
            <div class="text-center mr-4">
              <h1 class="text-2xl font-bold text-white">100M+</h1>
              <p class="text-sm tracking-3 text-center text-white mb-4">
                Material Tickets Digitized
              </p>
            </div>
            <div class="text-center ml-4">
              <h1 class="text-2xl font-bold text-white">2,000+</h1>
              <p class="text-sm tracking-3 text-center text-white mb-4">
                Companies CONNEX Connected
              </p>
            </div>
          </div>
          <button class="bg-none text-white tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full hover:border-red-500 hover:bg-red-500 sm:text-white transition-all duration-200 ease-in-out">
            SEE WHO IS ON THE CONNEX COMMUNITY
          </button>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="flex justify-center">
          <div class="bg-white max-w-2xl p-4">
            <div class="h-40 flex justify-center items-center">
              <GiLinkedRings className="text-8xl text-red-500" />
            </div>
            <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
              CONNEX Partners & Integrations
            </h1>
            <p class="m-4 text-gray-600 tracking-3 text-center">
              Industry leading technology providers that deliver value to the
              heavy work community are joining us in our digital collaboration
              journey. We are currently integrating with these providers and
              continue to build our network of partners and integrators to
              maximize cross platform effectiveness and streamline digital
              workflows for your projects and organizations.
            </p>
          </div>
        </div>
      </div>

      <div class="overflow-hidden my-36">
        <div class="carousel flex transition-all duration-500">
          <img src={Vista} alt="Vicat" class="w-full h-full object-cover" />
          <img
            src={CMIC}
            alt="MartinMarietta"
            class="w-full h-full object-cover"
          />
          <img
            src={DocExpress}
            alt="Cemex"
            class="w-full h-full object-cover"
          />
          <img src={ELO} alt="Boral" class="w-full h-full object-cover" />
          <img src={HCSS} alt="Kiewit" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="flex justify-center">
          <div class="bg-white max-w-2xl p-4">
            <h1 class="text-3xl text-gray-600 tracking-3 text-center font-bold">
              A DEEPER DIVE INTO THE VALUE OF CONNEX
            </h1>
            <p class="m-4 text-gray-600 tracking-3 text-center">
              How can CONNEX help you in your daily transactions with your
              trading partners – your materials suppliers, haulers, and buyers?
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <FaRedhat className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              CONNEX Ticket Portal
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            The ticket is the Unit of Measure for transactional exchange of
            materials and logistics services for the industry. Make your tickets
            living, breathing sources of information instead of snapshots of
            time that are quickly outdated. Find out what eTicketing really
            means on CONNEX and how your operations and projects can benefit.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <SiMaterialdesign className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              CONNEX Inbound Materials
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            If you receive materials at ready mix or asphalt operations, then
            CONNEX Inbound Materials can help you digitize your inbound delivery
            tickets and invoices for materials and hauling. Automatically update
            inventory levels, reconcile invoices, and speed up payment
            processes. Give your inbound processes the same attention you do the
            outbound side of your operations and see your performance soar.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <BiTrafficCone className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              CONNEX Jobsite
            </h2>
          </div>
          <p class="text-gray-600 mt-4 text-center">
            Contractors and Project Owners need to manage material and haul
            costs daily. CONNEX Jobsite can make this happen by digitizing 100%
            of your material/haul tickets and invoices, while also automatically
            reconciling invoices and speeding up payment processes. Realize
            improvements in transportation/material costs and eliminate tedious,
            manual tasks to improve efficiency.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <button class="bg-none text-red-500 tracking-3 text-xs font-semibold border-2 border-red-500 py-4 px-6 rounded-full">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center">
            <div class="bg-white max-w-2xl p-4">
              <img src={quote} class="w-20 max-w-md mx-h-full mx-auto" />
              <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
                We were amazed at how quickly we had customers on board. Within
                a day we had five customers on, and the process was painless.
                Every customer that I’ve spoken with so far loves it!
              </h1>
              <p class="m-4 text-gray-600 tracking-3 text-center font-bold italic">
                Linda Coleman | NEBCO
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center bg-red-500 py-8 ">
        <p class="flex justify-center items-center text-lg text-white tracking-3 text-center font-bold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl">
          Trusted by Contractors and Suppliers Everywhere
        </p>
      </div>
      <div class="flex flex-wrap justify-center bg-red-500">
        <div class="w-full md:w-1/5 md:max-h-full">
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
        </div>
        <div class="w-full md:w-1/5 md:max-h-full">
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
        </div>
        <div class="w-full md:w-1/5 md:max-h-full">
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
        </div>
        <div class="w-full md:w-1/5 md:max-h-full">
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
        </div>
        <div class="w-full md:w-1/5 md:max-h-full">
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
          <img src={Kiewit_1} class="w-full md:max-h-full" />
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
            View More CONNEX Resources
          </h1>
        </div>
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <div
            class="bg-cover bg-center rounded-lg overflow-hidden
            bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/perticketbg.png')]"
          >
            <div class="bottom-0 left-0 p-4">
              <h3 class="text-white text-lg font-medium mb-2">How to use Financial System to Streamline</h3>
              <a
                href="#"
                class="inline-block py-1 px-4 rounded-full bg-white text-gray-800 font-semibold"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <div
            class="bg-cover bg-center rounded-lg overflow-hidden
            bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/perticketbg.png')]"
          >
            <div class="bottom-0 left-0 p-4">
              <h3 class="text-white text-lg font-medium mb-2">Graniterock Hikes Productivity Levels Up with</h3>
              <a
                href="#"
                class="inline-block py-1 px-4 rounded-full bg-white text-gray-800 font-semibold"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <div
            class="bg-cover bg-center rounded-lg overflow-hidden
            bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/perticketbg.png')]"
          >
            <div class="bottom-0 left-0 p-4">
              <h3 class="text-white text-lg font-medium mb-2">CONNEX Jobsite User Community Workshop</h3>
              <a
                href="#"
                class="inline-block py-1 px-4 rounded-full bg-white text-gray-800 font-semibold"
              >
                Watch Video
              </a>
            </div>
            <div class="top-0 left-0 w-full h-full z-10">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <div
            class="bg-cover bg-center rounded-lg overflow-hidden
            bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/perticketbg.png')]"
          >
            <div class="bottom-0 left-0 p-4">
              <h3 class="text-white text-lg font-medium mb-2">Connex Feature Highlight | Replenishment</h3>
              <a
                href="#"
                class="inline-block py-1 px-4 rounded-full bg-white text-gray-800 font-semibold"
              >
                Watch Video
              </a>
            </div>
            <div class="top-0 left-0 w-full h-full z-10">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Platform