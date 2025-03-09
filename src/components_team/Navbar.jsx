import { useState } from "react";
import { Menu, X } from "lucide-react";
import eCellLogo from "../assets_team/e-cell-logo.png";
import wheelIcon from "../assets_team/wheel.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white px-6 pb-6 select-none">
      <div className="flex justify-between items-center  mx-auto">
        <div>
          <img src={eCellLogo} alt="E-Cell Logo" className="h-25" />
        </div>

        <div className="hidden md:flex items-center gap-15 font-semibold">
          <a href="home.com">HOME</a>
          <a href="events.com">EVENTS</a>
          <img src={wheelIcon} alt="Wheel Icon" className="h-8" />
          <a href="teams.com">TEAMS</a>
          <a href="sponsors.com">SPONSORS</a>
        </div>

        <div className="hidden md:block">
          <a href="contact.com" className="font-semibold">
            CONTACT US
          </a>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 bg-[#b8450b]/80 p-4 py-8 rounded-lg shadow-lg backdrop-blur-md">
          {["HOME", "EVENTS", "TEAMS", "SPONSORS", "CONTACT US"].map(
            (item, index) => (
              <a
                key={index}
                href={`${item.toLowerCase().replace(" ", "")}.com`}
                className="w-full max-w-[300px] text-white text-lg font-medium py-3 rounded-md shadow-md text-center transition-all duration-200
                        hover:bg-white hover:text-[#ff7833] hover:border-[#ff7833] hover:shadow-lg bg-[#db5918] "
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}
