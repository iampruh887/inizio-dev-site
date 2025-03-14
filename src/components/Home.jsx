import "./style.css";
import React, { useState } from "react";
import Footer from "../components_team/Footer";
import EventCard from "./Events/EventCard";
import m1_front from "../assets/m1_front.jpeg";
import m2_front from "../assets/m2_front.jpeg";
import m1_back from "../assets/m1_back.jpeg";
import m2_back from "../assets/m2_back.jpeg";
import InsightArena from "../components/InsightArena";
import img_2025 from "../assets/2025.png";
import magnifier from "../assets/magnifier.png";

function Home() {
  const [merchImages, setMerchImages] = useState([
    {
      frontImage: m1_front,
      backImage: m1_back,
      isFlipped: false,
    },
    {
      frontImage: m2_front,
      backImage: m2_back,
      isFlipped: false,
    },
    {
      frontImage: m1_front,
      backImage: m1_back,
      isFlipped: false,
    },
  ]);

  const handleImageFlip = (index, e) => {
    e.stopPropagation();
    setMerchImages(
      merchImages.map((merch, i) =>
        i === index ? { ...merch, isFlipped: !merch.isFlipped } : merch,
      ),
    );
  };

  const handleImageClick = (image) => {
    window.open(image, "_blank");
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>INIZIO - 25</title>
      <link rel="stylesheet" href="style.css" />

      <section>
        <>
          <div style={{ textAlign: "center", marginBottom: "40px", marginTop: "145px", }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 10vw, 7rem)",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                color: "#FFF5CF",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: "1",
              }}
            >
              THE GENESIS OF
            </h1>
            <h1
              style={{
                fontSize: "clamp(5rem, 18vw, 12rem)",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                color: "#FFF5CF",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: 0,
                lineHeight: "1",
              }}
            >
              INNOVATION
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "200px",
              flexWrap: "wrap",
              paddingBottom: "25px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFF5CF",
                borderRadius: "15px",
                padding: "20px",
                width: "45%",
                maxWidth: "400px",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#000",
                  margin: "0 0 10px 0",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                INIZIO 2025
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#333",
                  fontStyle: "italic",
                  lineHeight: "1.4",
                  marginBottom: "15px",
                }}
              >
                IIITG's First Independent E-Summit — A launchpad for
                entrepreneurs, tech enthusiasts, and visionaries.
                <br />
                <b>
                  Connect, innovate, and take your startup journey to the next
                  level!
                </b>
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #000",
                    padding: "10px 18px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                >
                  Get Your Passes
                </button>
              </div>
            </div>

            <div
              style={{ width: "70%", maxWidth: "850px", textAlign: "center" }}
            >
              <img
                src={img_2025}
                alt="2025"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </>
      </section>
      <section>
        <div className="overlay-box">
          <div className="body-csntent">
            <div className="bg-gear">
              <div className="article-l padd">
                <div className="wide">
                  <div>
                    <div className="head-title-l">
                      <h3 className="big-title">inizio:</h3>
                      <span className="headline-l">
                        WHAT IS INIZIO? - WHERE INNOVATION MEETS OPPORTUNITY!
                      </span>
                    </div>
                    <div className="head-title-l down-title">
                      <h3 className="big-title">the genesis hub</h3>
                      <span>
                        <img
                          className="title-gear"
                          src="assets/transp-gear.svg"
                          alt="Gear"
                        />
                      </span>
                    </div>
                    <div className="headline-l hid-des">
                      WHAT IS INIZIO? - WHERE INNOVATION MEETS OPPORTUNITY!
                    </div>
                  </div>
                  <div className="text-cont">
                    <div className="head-des">
                      INIZIO 2025, IIITG'S FIRST INDEPENDENT E-SUMMIT, HAPPENING
                      ON 29TH MARCH 2025!
                    </div>
                    <div className="para">
                      <p>
                        A melting pot of entrepreneurs, tech pioneers, industry
                        leaders, and investors, INIZIO is designed to spark
                        game-changing ideas, foster collaborations, and propel
                        startups to new heights. Whether you're looking to pitch
                        your next big idea, gain insights from visionary
                        speakers, or connect with like-minded innovators, this
                        summit is your ultimate launchpad.
                        <br />
                        <br />
                        From power-packed speaker sessions and hands-on
                        workshops to networking opportunities and exclusive
                        merchandise, INIZIO 2025 promises an electrifying
                        experience. Dive into discussions on the latest industry
                        trends, engage in thought-provoking panels, and seize
                        the chance to interact with investors and mentors who
                        can fuel your journey. If you're an aspiring
                        entrepreneur, a tech enthusiast, or simply someone who
                        thrives on innovation, this is where your future begins!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="article-r">
              <div className="wide">
                <div>
                  <div className="head-title-r">
                    <h3 className="big-title">event-nexus:</h3>
                  </div>
                  <div className="head-title-r down-title">
                    <h3 className="big-title">where action unfolds</h3>
                  </div>
                </div>
                <div className="text-cont right">
                  <div className="headline-r">
                    EVENT STATION - YOUR GATEWAY TO GROUNDBREAKING EXPERIENCES!
                  </div>
                  <div className="para">
                    <p>
                      Step into Event-Nexus, the heartbeat of INIZIO, where
                      groundbreaking ideas take center stage. This is where
                      startups pitch their visions, industry leaders share
                      transformative insights, and innovators spark discussions
                      that shape the future. Whether you're an aspiring
                      entrepreneur, a tech enthusiast, or a business strategist,
                      this space is designed to fuel your curiosity and expand
                      your knowledge. From high-energy panel discussions and
                      keynote speeches to interactive workshops and fireside
                      chats, every moment here is an opportunity to learn,
                      connect, and grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-16"
              style={{ maxWidth: "900px", margin: "0 auto", marginTop: 120 }}
            >
              <EventCard
                title="IPL Auction 2.0"
                description="Join the thrill and show your cricket genius!"
              />
              <EventCard
                title="Digital-Duel Challenge"
                description="Join the challenge and prove your marketing prowess!"
                reversed={true}
              />
            </div>

            <div className="article-l">
              <div className="wide">
                <div>
                  <div className="head-title-l">
                    <h3 className="big-title">brand forge:</h3>
                    <span className="headline-l">
                      EXCLUSIVE GEAR TO WEAR YOUR AMBITION!
                    </span>
                  </div>
                  <div className="head-title-l down-title">
                    <h3 className="big-title">the identity hub</h3>
                  </div>
                  <div className="headline-l hid-des">
                    EXCLUSIVE GEAR TO WEAR YOUR AMBITION!
                  </div>
                </div>
                <div className="text-cont">
                  <div className="head-des">
                    CRAFT YOUR LEGACY WITH EXCLUSIVE INIZIO MERCH!
                  </div>
                  <div className="para">
                    <p>
                      From statement tees to sleek accessories, Brand Forge is
                      where style meets innovation. Wear your ambition,
                      represent the spirit of entrepreneurship, and take home a
                      piece of the summit!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="merch-container">
              <div className="wide">
                <div className="merches">
                  {merchImages.map((merch, index) => (
                    <div className="merch" key={index}>
                      <div className="merch-outline">
                        <div 
                          className={`merch-img-container`}
                          onClick={(e) => handleImageFlip(index, e)}
                        >
                          {/* Single button that stays in place */}
                          <button
                            className="click-me-button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageFlip(index, e);
                            }}
                          >
                            Click to Flip!
                          </button>

                          {/* Wrapper that handles the flip */}
                          <div
                            className={`merch-img-wrapper ${merch.isFlipped ? "flipped" : ""}`}
                          >
                            <div
                              className="merch-img-front"
                              style={{
                                backgroundImage: `url(${merch.frontImage})`,
                              }}
                            >
                              <button
                                className={`magnifier-button ${merch.isFlipped ? "flipped" : ""}`}
                                onClick={() => handleImageClick(merch.frontImage)}
                              >
                                <img className="magnifier" src={magnifier} ></img>
                              </button>
                            </div>
                              
                            <div
                              className="merch-img-back"
                              style={{
                                backgroundImage: `url(${merch.backImage})`,
                              }}
                            >
                              <button
                                  className={`magnifier-button ${merch.isFlipped ? "flipped" : ""}`}
                                  onClick={() => handleImageClick(merch.backImage)}
                                >
                                  <img className="magnifier" src={magnifier} ></img>
                                </button>
                              </div>
                              
                          </div>
                        </div>
                      </div>
                      <div className="merch-data">
                        <div className="merch-name">Merch {index + 1}</div>
                        <div className="merch-avail">Size Available:</div>
                        <div className="merch-size">
                          <p className="sold">XS</p>
                          <p className="avail">S</p>
                          <p className="avail">M</p>
                          <p className="avail">L</p>
                          <p className="avail">XL</p>
                          <p className="avail">XXL</p>
                        </div>
                        <div className="merch-buy">
                          <button>I WANT IT NOW!</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <InsightArena />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Home;
