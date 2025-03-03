import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import './Events.css';

const events_hero_title = "Events";
const events_hero_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

const eventsData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://s3-alpha-sig.figma.com/img/5fc9/de02/f616f3f264ec4af556c66633956d3b06?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=by6nXD8pEtcJ7yehsxcWcpqsIpbOhUH3Hc6n9ly0H9Nv-aIQLpmyEWeIG7Ksnsc15EienM7jWeO32Ul2l26yrL5wJdFbO6Z83YqukRi-HkNenSPb0KmELiLqY1XnXlCdQezswOqjlCU49qOUIDJiBb3G~Pwmous8UU1cZoDnWlSYjNoAel6Y5DwqHFC7mlkp0w7kqR0DkXMXBp2qERZmyu3gzXbbj~EbItZ4g6BdtUxqFcjq1xRhxPvynw9cKfRa2CxINxs9oBX3SBuByaWDkUWEZpVZHXEv3Ya7TTtCqTf6eSBJdM3gCX8vkIGOnTtG~TlYRUj2vcozPNgzFiMhpA__",
  },
  {
    text: "Another amazing event happening soon!",
    image: "https://via.placeholder.com/400",
  },
  {
    text: "Don't miss this exclusive session!",
    image: "https://s3-alpha-sig.figma.com/img/5fc9/de02/f616f3f264ec4af556c66633956d3b06?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=by6nXD8pEtcJ7yehsxcWcpqsIpbOhUH3Hc6n9ly0H9Nv-aIQLpmyEWeIG7Ksnsc15EienM7jWeO32Ul2l26yrL5wJdFbO6Z83YqukRi-HkNenSPb0KmELiLqY1XnXlCdQezswOqjlCU49qOUIDJiBb3G~Pwmous8UU1cZoDnWlSYjNoAel6Y5DwqHFC7mlkp0w7kqR0DkXMXBp2qERZmyu3gzXbbj~EbItZ4g6BdtUxqFcjq1xRhxPvynw9cKfRa2CxINxs9oBX3SBuByaWDkUWEZpVZHXEv3Ya7TTtCqTf6eSBJdM3gCX8vkIGOnTtG~TlYRUj2vcozPNgzFiMhpA__",
  },
  {
    text: "Final event details here, be ready!",
    image: "https://via.placeholder.com/400",
  },
];

const EventCard = ({ currentEvent }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentEvent}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-6 py-10 bg-yellow-100"
      >
        <div className="rectangle bg-gray-700 text-white p-6 max-w-md">
          <p className="event-description">{eventsData[currentEvent].text}</p>
          <p className="event text-orange-500 mt-2">@event</p>
          <span className="hash-001">#001</span>
          <div className="arrow" />
        </div>

        <img
          src={eventsData[currentEvent].image}
          alt="Event"
          className="image object-cover"
        />
      </motion.div>
    </AnimatePresence>
  );
};
const EventNavigation = ({ setCurrentEvent }) => {
  return (
    <div className="flex justify-center gap-4 py-6">
      {eventsData.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentEvent(index)}
          className="border p-2 px-4 rounded-lg"
        >
          Event {index + 1}
        </button>
      ))}
    </div>
  );
};



const App = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % eventsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero title={events_hero_title} desc={events_hero_desc} />
      <EventCard currentEvent={currentEvent} />
      <EventNavigation setCurrentEvent={setCurrentEvent} />
      <Footer />
    </div>
  );
};

export default App;