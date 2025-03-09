import React from "react";
import Wheel from "../assets_team/wheel_better.png";
import e_cell_logo from "../assets_team/e-cell-logo.png";
import linkedIn from "../assets_team/linkedIn.png";
import instagram from "../assets_team/Instagram.png";

const Footer = () => {
  return (
      <div className="bg-[#131313] w-full px-5 py-10 flex flex-col items-center rounded-t-[22px] text-white">
        <div className="flex flex-wrap justify-around w-full mb-10">
          {/* Branding Section */}
          <div className="w-full md:w-auto text-center mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center">
              <img
                  src={Wheel}
                  alt="random wheel"
                  className="w-24 h-24 md:w-[161px] md:h-[161px] object-contain"
              />
              <img
                  src={e_cell_logo}
                  alt="e-cell logo"
                  className="w-24 h-24 md:w-[161px] md:h-[161px] object-contain"
              />
            </div>
            <div>
              <div className="text-xl md:text-[20px] font-bold text-center uppercase leading-[30px] max-w-[430px] my-5">
                THE MOST INNOVATIVE
                <br />
                ENTREPRENEURSHIP SUMMIT OF INDIA
              </div>
            </div>
          </div>

          {/* Right side container for the three sections */}
          <div className="w-full md:w-auto flex flex-col">
            {/* Empty space for top margin */}
            <div className="h-16 md:h-24"></div>

            {/* Three sections in a row */}
            <div className="flex flex-wrap justify-around items-start">
              {/* Address Section */}
              <div className="w-full md:w-auto text-center mb-8 md:mb-0 mx-4">
                <h2 className="text-2xl md:text-[36px] font-bold mb-3 md:mb-5 uppercase leading-[30px]">
                  ADDRESS
                </h2>
                <p className="text-lg md:text-[24px] font-semibold leading-[38px]">
                  E-Cell, IIIT Guwahati
                  <br />
                  Assam - 781015
                </p>
              </div>

              {/* Email Section */}
              <div className="w-full md:w-auto text-center mb-8 md:mb-0 mx-4">
                <h2 className="text-2xl md:text-[36px] font-bold mb-3 md:mb-5 uppercase leading-[30px]">
                  EMAIL
                </h2>
                <p className="text-lg md:text-[24px] font-semibold leading-[38px]">
                  ecell@iiitg.ac.in
                </p>
              </div>

              {/* Follow Us Section */}
              <div className="w-full md:w-auto text-center mx-4">
                <h2 className="text-2xl md:text-[36px] font-bold mb-3 md:mb-5 uppercase leading-[30px]">
                  FOLLOW US
                </h2>
                <div className="flex justify-center gap-5">
                  <img
                      src={instagram}
                      alt="Instagram"
                      className="w-12 h-12 md:w-[60px] md:h-[60px] cursor-pointer transition-transform duration-200 hover:scale-110"
                  />
                  <img
                      src={linkedIn}
                      alt="LinkedIn"
                      className="w-12 h-12 md:w-[60px] md:h-[60px] cursor-pointer transition-transform duration-200 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-base md:text-xl mt-10">
          Made in panic by ecell technical team (2025)
        </div>
      </div>
  );
};

export default Footer;