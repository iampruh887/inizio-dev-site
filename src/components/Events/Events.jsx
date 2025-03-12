import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../components_team/Footer";
import Hero from "../Hero";
import "./Events.css";

const events_hero_title = "Events";
const events_hero_desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

const eventsData = [
  {
    title: "IPL Auction 2.0",
    text: "Gear up for an electrifying event at IIIT’s fest! Teams of 4 will battle in two rounds: a quiz to secure a franchise spot, followed by a high-stakes player auction. With 100 crores, build your dream team of 12 players (4 batsmen, 4 bowlers, 2 all-rounders, 1 wicket-keeper, and 1 impact player) while balancing Indian and overseas stars. Master the bidding war, strategize your picks, and aim for the highest team rating to win. Will you outsmart the competition? Join the thrill and showcase your cricketing genius!",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/12/full/1702358133-3099.jpg?im=FeatureCrop,size=(826,465)",
    no: "#001",
  },
  {

    title: "Digital-Duel Challenge",
    text: "Unleash your creativity in this week-long Instagram marketing showdown! Teams of 4-5 will craft and run a dynamic campaign for a given product, posting daily content, reels, and stories to maximize engagement. After 6 days of strategizing and engaging, teams will pitch their campaign results to a panel of judges. Showcase your skills in analytics, content creation, and storytelling to win exciting rewards! Ready to duel? Join the challenge and prove your marketing prowess!",
    image: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2022/12/OG-Social-Media-Trends-You-Need-to-Know-About-for-2023.jpg",
    no: "#002",

  },
  {
    title: "Title 3",
    text: "Don't miss this exclusive session!",
    image:
      "https://s3-alpha-sig.figma.com/img/5fc9/de02/f616f3f264ec4af556c66633956d3b06?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=by6nXD8pEtcJ7yehsxcWcpqsIpbOhUH3Hc6n9ly0H9Nv-aIQLpmyEWeIG7Ksnsc15EienM7jWeO32Ul2l26yrL5wJdFbO6Z83YqukRi-HkNenSPb0KmELiLqY1XnXlCdQezswOqjlCU49qOUIDJiBb3G~Pwmous8UU1cZoDnWlSYjNoAel6Y5DwqHFC7mlkp0w7kqR0DkXMXBp2qERZmyu3gzXbbj~EbItZ4g6BdtUxqFcjq1xRhxPvynw9cKfRa2CxINxs9oBX3SBuByaWDkUWEZpVZHXEv3Ya7TTtCqTf6eSBJdM3gCX8vkIGOnTtG~TlYRUj2vcozPNgzFiMhpA__",
    no: "#003",
  },
  {
    title: "Title 4",
    text: "Final event details here, be ready!",
    image:
      "https://i.ytimg.com/vi/UVlI07Yjov4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDDeQTuU9lrvj-eXLk3g6nJwele9A",
    no: "#004",
  },
];

const EventCard = ({ currentEvent }) => {
  return (
    <AnimatePresence mode="wait">
      <div className="Event-container  flex justify-center gap-6 py-10 bg-yellow-100">
        <div className="rectangle bg-gray-700 text-white p-6 max-w-md">
          {/* <span class="event-title">{eventsData[currentEvent].title}</span> */}
          <p className="event-description">{eventsData[currentEvent].text}</p>
          <div className="event-title-container">
            <div className="event-with-arrow">
              <p className="Event_event">@{eventsData[currentEvent].title}</p>
              <div className="arrow" />
            </div>
            <span className="hash-001">{eventsData[currentEvent].no}</span>
          </div>
        </div>

        <motion.div
          key={currentEvent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <img
            src={eventsData[currentEvent].image}
            alt="Event"
            className="image object-cover"
          />
        </motion.div>
      </div>
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
          className="event-button border p-2 px-4 rounded-lg"
        >
          Event {index + 1}
        </button>
      ))}
    </div>
  );
};

const Event = ({ currentEvent, setCurrentEvent }) => {
  return (
    <div className="event-tab">
      <EventCard currentEvent={currentEvent} />
      <EventNavigation setCurrentEvent={setCurrentEvent} />
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
    <div className="relative">
      <Hero title={events_hero_title} desc={events_hero_desc} />
      <div className="relative z-20 mt-[-100px]">
        {" "}
        {/* Added container with negative margin */}
        <Event currentEvent={currentEvent} setCurrentEvent={setCurrentEvent} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
