import "./style.css";
import Footer from "../components_team/Footer";
function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>INIZIO - 25</title>
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <main>
        <section>
          <div className="banner">
            <div>
              <h1 className="title-text">THE GENESIS OF</h1>
              <h1 className="title-text">INNOVATION</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="overlay-box">
            <div className="body-content">
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
                        INIZIO 2025, IIITG’S FIRST INDEPENDENT E-SUMMIT,
                        HAPPENING ON 29TH MARCH 2025!
                      </div>
                      <div className="para">
                        <p>
                          {" "}
                          A melting pot of entrepreneurs, tech pioneers,
                          industry leaders, and investors, INIZIO is designed to
                          spark game-changing ideas, foster collaborations, and
                          propel startups to new heights. Whether you’re looking
                          to pitch your next big idea, gain insights from
                          visionary speakers, or connect with like-minded
                          innovators, this summit is your ultimate launchpad.
                          <br />
                          <br />
                          From power-packed speaker sessions and hands-on
                          workshops to networking opportunities and exclusive
                          merchandise, INIZIO 2025 promises an electrifying
                          experience. Dive into discussions on the latest
                          industry trends, engage in thought-provoking panels,
                          and seize the chance to interact with investors and
                          mentors who can fuel your journey. If you’re an
                          aspiring entrepreneur, a tech enthusiast, or simply
                          someone who thrives on innovation, this is where your
                          future begins!
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
                      EVENT STATION - YOUR GATEWAY TO GROUNDBREAKING
                      EXPERIENCES!
                    </div>
                    <div className="para">
                      <p>
                        Step into Event-Nexus, the heartbeat of INIZIO, where
                        groundbreaking ideas take center stage. This is where
                        startups pitch their visions, industry leaders share
                        transformative insights, and innovators spark
                        discussions that shape the future. Whether you’re an
                        aspiring entrepreneur, a tech enthusiast, or a business
                        strategist, this space is designed to fuel your
                        curiosity and expand your knowledge. From high-energy
                        panel discussions and keynote speeches to interactive
                        workshops and fireside chats, every moment here is an
                        opportunity to learn, connect, and grow.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="event-list">
                  <div className="events">
                    <div className="event event-l wide">
                      <div className="event-text">
                        <h3 className="event-title">Event 01</h3>
                        <p className="event-des">
                          Where ideas collide and opportunities emerge!
                          Experience startup showcases, power-packed panels, and
                          game-changing networking at the heart of innovation.
                        </p>
                      </div>
                      <div className="event-outline">
                        <div className="event-img-l">
                          <div className="event-tag">EVENT 01</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="events">
                    <div className="event event-r wide">
                      <div className="event-outline">
                        <div className="event-img-r">
                          <div className="event-tag tag-r">EVENT 02</div>
                        </div>
                      </div>
                      <div className="event-text">
                        <h3 className="event-title">Event 02</h3>
                        <p className="event-des">
                          Where ideas collide and opportunities emerge!
                          Experience startup showcases, power-packed panels, and
                          game-changing networking at the heart of innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="merch-container">
                <div className="wide">
                  <div className="merches">
                    <div className="merch">
                      <div className="merch-outline">
                        <div className="merch-img"></div>
                      </div>
                      <div className="merch-data">
                        <div className="merch-name">Merch 01</div>
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
                    <div className="merch">
                      <div className="merch-outline">
                        <div className="merch-img"></div>
                      </div>
                      <div className="merch-data">
                        <div className="merch-name">Merch 02</div>
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
                    {/* <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div className="merch">
                        <div className="merch-outline">
                          <div className="merch-img"></div>
                        </div>
                        <div className="merch-data">
                          <div className="merch-name">Merch 03</div>
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
                    </div> */}
                    {/* <div class="merch">
                     <div class="merch-outline">
                        <div class="merch-img">
                        </div>
                     </div>
                     <div class="merch-data">
                        <div class="merch-name">
                           Merch 04
                        </div>
                        <div class="merch-avail">
                           Size Available:
                        </div>
                        <div class="merch-size">
                           <p class="sold">XS</p>
                           <p class="avail">S</p>
                           <p class="avail">M</p>
                           <p class="avail">L</p>
                           <p class="avail">XL</p>
                           <p class="avail">XXL</p>
                        </div>
                        <div class="merch-buy">
                           <button>I WANT IT NOW!</button>
                        </div>
                     </div>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="article-r">
                <div className="wide">
                  <div>
                    <div className="head-title-r">
                      <h3 className="big-title">insight arena:</h3>
                    </div>
                    <div className="head-title-r down-title">
                      <h3 className="big-title">
                        where visionaries
                        <br /> take the stage
                      </h3>
                    </div>
                  </div>
                  <div className="text-cont right">
                    <div className="headline-r">
                      SPEAKER EXPRESS – INSIGHTS FROM THE BEST IN THE GAME!
                    </div>
                    <div className="para">
                      <p>
                        Fast-track your learning with industry giants, startup
                        founders, and thought leaders. This isn’t just another
                        talk—it’s a masterclass on the future. Buckle up and get
                        ready to be inspired!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer>
        <div className="footer overlay-box">
          <div className="foot-content">
            <div className="f-logo-box">
              <div>
                <div className="foot-gear" />
                <div className="foot-logo" />
              </div>
              <div className="logo-des">
                THE MOST INNOVATIVE ENTREPRENEURSHIP
                <br />
                SUMMIT OF INDIA
              </div>
            </div>
            <div className="foot-text">
              <div id="address">
                <h4>ADDRESS</h4>
                <p>E-CELL, IIIT GUWAHATI</p>
                <p>ASSAM 781015</p>
              </div>
              <div id="contact">
                <h4>EMAIL</h4>
                <p>ecell@iiitg.ac.in</p>
              </div>
              <div id="follow">
                <h4>FOLLOW US</h4>
                <div className="icons">
                  <div className="icon">
                    <a
                      id="insta"
                      href="https://www.instagram.com/inizio.iiitguwahati?utm_source=qr&igsh=MWhwaGM1dTVjazd6aA=="
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                  <div id="linkedin" className="icon">
                    <a
                      href="https://www.linkedin.com/company/e-cell-iiit-guwahati/?originalSubdomain=in"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>MADE IN PANIC BY ECELL TECHNICAL TEAM (2025)</p>
          </div>
        </div>
      </footer> */}
      <Footer />
    </>
  );
}

export default Home;
