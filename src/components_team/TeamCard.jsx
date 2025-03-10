import React from "react";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const TeamCard = ({ name, designation, instaUrl, linkedinUrl, phone, image }) => {
    return (
        <div className="relative w-[300px] h-[250px] lg:w-[345px] lg:h-[295px] flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] lg:w-[220px] lg:h-[220px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] rotate-[-90deg] flex flex-wrap items-center text-sm font-semibold lg:text-lg whitespace-normal break-words max-w-[180px] lg:max-w-[210px]">
                <span className="text-black">{name}</span>
                <span className="text-[#FF7833] ml-1">/ {designation}</span>
            </div>

            <div className="absolute -bottom-1.5 left-14 flex gap-4 p-2 text-[#333]">
                <a href={instaUrl} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-xl hover:text-pink-500 transition lg:text-2xl" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl hover:text-blue-500 transition lg:text-2xl" />
                </a>
                <a href={`tel:${phone}`} className="text-xl hover:text-green-500 transition lg:text-2xl">
                    <FaPhone />
                </a>
            </div>
        </div>
    );
};

export default TeamCard;
