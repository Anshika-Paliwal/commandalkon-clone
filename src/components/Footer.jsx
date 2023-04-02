import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer class="bg-slate-800 text-gray-300 py-12">
      <div class="container m-4 flex flex-wrap justify-self-start">
        <div class="w-full md:w-1/4">
          <a href="#">
            <img src={logo} className="w-50 h-30 object-contain" alt="logo" />
          </a>
          <div class="w-full md:w-1/2 md:order-1 text-left text-xs tracking-3">
            <p class="text-gray-400 m-">
                <br />
              Transforming your operations by
              replacing manual and complex tasks
              and processes with efficient,
              scalable, and reliable solutions.
            </p>
            <br />
            <a href="#">
              <p class="text-gray-400 mb-4">
                <strong className="text-white tracking-3 text-sm">
                  Global HQ
                </strong>
                <br />
                1800 International Park Drive Suite 400 Birmingham, AL 35243
                <br />
                <br />
                Site v2.0
              </p>
            </a>
            <div class="flex justify-start">
              <a href="#" class="mr-4">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="mr-4">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="mr-4">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="mr-4">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="mr-4">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-4">
          <h4 class="font-semibold tracking-3 text-gray-400 text-xs mb-4">SOLUTIONS</h4>
          <ul class="text-gray-300 font-semibold tracking-3 text-xs mb-4 list-reset leading-loose">
            <li>
              <a href="/platform">CONNEX Platform</a>
            </li>
            <li>
              <a href="/readymixproducer">Ready Mix Producer</a>
            </li>
            <li>
              <a href="#">Aggregate & Cement Supplier</a>
            </li>
            <li>
              <a href="#">Bulk Materials Hauler</a>
            </li>
            <li>
              <a href="#">Contractor</a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 p-4">
          <h4 class="font-semibold tracking-3 text-gray-400 text-xs mb-4">ABOUT</h4>
          <ul class="text-gray-300 font-semibold tracking-3 text-xs mb-4 list-reset leading-loose">
            <li>
              <a href="#">CAREERS</a>
            </li>
            <li>
              <a href="#">ASSOCIATIONS</a>
            </li>
          </ul>
          <br />
          <h4 class="font-semibold tracking-3 text-gray-400 text-xs mb-4">EVENTS</h4>
          <ul class="text-gray-300 font-semibold tracking-3 text-xs mb-4 list-reset leading-loose">
            <li>
              <a href="#">ELEVATE</a>
            </li>
            <li>
              <a href="#">TRAININGDAYS</a>
            </li>
            <li>
              <a href="#">INDUSTRY</a>
            </li>
          </ul>
          <br />
          <h4 class="font-semibold tracking-3 text-gray-400 text-xs mb-4">LEGAL</h4>
          <ul class="text-gray-300 font-semibold tracking-3 text-xs mb-4 list-reset leading-loose">
            <li>
              <a href="#">COOKIE CONSENT</a>
            </li>
            <li>
              <a href="#">PRODUCT PRIVACY</a>
            </li>
            </ul>
        </div>
        <div class="w-full md:w-1/4 p-4">
          <ul class="text-gray-400 font-semibold tracking-3 text-xs mb-4 list-reset leading-loose">
            <li>
              <a href="#">MASTERY HUB</a>
            </li>
            <li>
              <a href="#">SOLUTIONS VIDEO HUB</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
            <li>
              <a href="#">CLIENT LOGIN</a>
            </li>
            <li>
              <a href="#">LOCATIONS</a>
            </li>
            <li>
              <a href="#">LATAM</a>
            </li>
            <li>
              <a href="#">BRAZIL</a>
            </li>
            <li>
              <a href="#">EMEA</a>
            </li>
            <li>
              <a href="#">NETHERLANDS</a>
            </li>
            <li>
              <a href="#">FRANCE</a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <div>
        <p className="text-center text-xs tracking-3 text-gray-400">
          Copyright © 2023 Command Alkon Incorporated. All rights reserved.
          &nbsp;
          <a
            href="#"
            className="text-white tracking-3 cursor-pointer hover:text-gray-400"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
