import React, { useState } from "react";
import Hero from "./Hero";
import './css/Home.css';
import Gear from "../assets/wheel.png";

const App = () => {
    return (
        <div>
            <main>
                <Hero title="The Genesis of Innovation"/>

                <section>
                    <div className={`overlay-box `}>
                        <div className="Landing_body-content">
                            <div className="Landing_bg-gear">
                                <div className="Landing_article-l padd">
                                    <div className="Landing_wide">
                                        <div>
                                            <div className="Landing_head-title-l">
                                                <h3 className="Landing_big-title">inizio:</h3>
                                                <span className="Landing_headline-l">WHAT IS INIZIO? - WHERE INNOVATION MEETS OPPORTUNITY!</span>
                                            </div>
                                            <div className="Landing_head-title-l down-title">
                                                <h3 className="Landing_big-title">the genesis hub</h3>
                                                <span><img className="Landing_title-gear" src={Gear} alt="Gear" /></span>
                                            </div>
                                            <div className="Landing_headline-l hid-des">WHAT IS INIZIO? - WHERE INNOVATION MEETS OPPORTUNITY!</div>
                                        </div>
                                        <div className="Landing_text-cont">
                                            <div className="Landing_head-des">INIZIO 2025, IIITG’S FIRST INDEPENDENT E-SUMMIT, HAPPENING ON 29TH MARCH 2025!</div>
                                            <div className="Landing_para">
                                                <p> A melting pot of entrepreneurs, tech pioneers, industry leaders, and investors, INIZIO is designed to spark game-changing ideas, foster collaborations, and propel startups to new heights...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Landing_article-r">
                                <div className="Landing_wide">
                                    <div>
                                        <div className="Landing_head-title-r">
                                            <h3 className="Landing_big-title">event-nexus:</h3>
                                        </div>
                                        <div className="Landing_head-title-r down-title">
                                            <h3 className="Landing_big-title">where action unfolds</h3>
                                        </div>
                                    </div>
                                    <div className="Landing_text-cont right">
                                        <div className="Landing_headline-r">EVENT STATION - YOUR GATEWAY TO GROUNDBREAKING EXPERIENCES!</div>
                                        <div className="Landing_para">
                                            <p>Step into Event-Nexus, the heartbeat of INIZIO, where groundbreaking ideas take center stage...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Landing_event-list">
                                <div className="Landing_events">
                                    <div className="Landing_event event-l wide">
                                        <div className="Landing_event-text">
                                            <h3 className="Landing_event-title">Event 01</h3>
                                            <p className="Landing_event-des">Where ideas collide and opportunities emerge! Experience startup
                                                showcases,
                                                power-packed panels, and game-changing networking at the heart of innovation.</p>
                                        </div>
                                        <div className="Landing_event-outline">
                                            <div className="Landing_event-img-l">
                                                <div className="Landing_event-tag">
                                                    EVENT 01
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Landing_events">
                                    <div className="Landing_event event-r wide">
                                        <div className="Landing_event-text right">
                                            <h3 className="Landing_event-title">Event 02</h3>
                                            <p className="Landing_event-des">Where ideas collide and opportunities emerge! Experience startup
                                                showcases,
                                                power-packed panels, and game-changing networking at the heart of innovation.</p>
                                        </div>
                                        <div className="Landing_event-outline">
                                            <div className="Landing_event-img-r">
                                                <div className="Landing_event-tag tag-r">
                                                    EVENT 02
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Landing_article-l">
                                <div className="Landing_wide">
                                    <div>
                                        <div className="Landing_head-title-l">
                                            <h3 className="Landing_big-title">brand forge:</h3>
                                            <span className="Landing_headline-l">EXCLUSIVE GEAR TO WEAR YOUR AMBITION!</span>
                                        </div>
                                        <div className="Landing_head-title-l down-title">
                                            <h3 className="Landing_big-title">the identity hub</h3>
                                        </div>
                                        <div className="Landing_headline-l hid-des">EXCLUSIVE GEAR TO WEAR YOUR AMBITION!</div>
                                    </div>
                                    <div className="Landing_text-cont">
                                        <div className="Landing_head-des">CRAFT YOUR LEGACY WITH EXCLUSIVE INIZIO MERCH!</div>
                                        <div className="Landing_para">
                                            <p>From statement tees to sleek accessories, Brand Forge is where style meets innovation...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Landing_merch-container">
                                <div className="Landing_wide">
                                    <div className="Landing_merches">
                                        <div className="Landing_merch">
                                            <div className="Landing_merch-outline">
                                                <div className="Landing_merch-img">
                                                </div>
                                            </div>
                                            <div className="Landing_merch-data">
                                                <div className="Landing_merch-name">
                                                    Merch 01
                                                </div>
                                                <div className="Landing_merch-avail">
                                                    Size Available:
                                                </div>
                                                <div className="Landing_merch-size">
                                                    <p className="Landing_sold">XS</p>
                                                    <p className="Landing_avail">S</p>
                                                    <p className="Landing_avail">M</p>
                                                    <p className="Landing_avail">L</p>
                                                    <p className="Landing_avail">XL</p>
                                                    <p className="Landing_avail">XXL</p>
                                                </div>
                                                <div className="Landing_merch-buy">
                                                    <button>I WANT IT NOW!</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Landing_merch">
                                            <div className="Landing_merch-outline">
                                                <div className="Landing_merch-img">
                                                </div>
                                            </div>
                                            <div className="Landing_merch-data">
                                                <div className="Landing_merch-name">
                                                    Merch 02
                                                </div>
                                                <div className="Landing_merch-avail">
                                                    Size Available:
                                                </div>
                                                <div className="Landing_merch-size">
                                                    <p className="Landing_sold">XS</p>
                                                    <p className="Landing_avail">S</p>
                                                    <p className="Landing_avail">M</p>
                                                    <p className="Landing_avail">L</p>
                                                    <p className="Landing_avail">XL</p>
                                                    <p className="Landing_avail">XXL</p>
                                                </div>
                                                <div className="Landing_merch-buy">
                                                    <button>I WANT IT NOW!</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Landing_merch">
                                            <div className="Landing_merch-outline">
                                                <div className="Landing_merch-img">
                                                </div>
                                            </div>
                                            <div className="Landing_merch-data">
                                                <div className="Landing_merch-name">
                                                    Merch 03
                                                </div>
                                                <div className="Landing_merch-avail">
                                                    Size Available:
                                                </div>
                                                <div className="Landing_merch-size">
                                                    <p className="Landing_sold">XS</p>
                                                    <p className="Landing_avail">S</p>
                                                    <p className="Landing_avail">M</p>
                                                    <p className="Landing_avail">L</p>
                                                    <p className="Landing_avail">XL</p>
                                                    <p className="Landing_avail">XXL</p>
                                                </div>
                                                <div className="Landing_merch-buy">
                                                    <button>I WANT IT NOW!</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Landing_merch">
                                            <div className="Landing_merch-outline">
                                                <div className="Landing_merch-img">
                                                </div>
                                            </div>
                                            <div className="Landing_merch-data">
                                                <div className="Landing_merch-name">
                                                    Merch 04
                                                </div>
                                                <div className="Landing_merch-avail">
                                                    Size Available:
                                                </div>
                                                <div className="Landing_merch-size">
                                                    <p className="Landing_sold">XS</p>
                                                    <p className="Landing_avail">S</p>
                                                    <p className="Landing_avail">M</p>
                                                    <p className="Landing_avail">L</p>
                                                    <p className="Landing_avail">XL</p>
                                                    <p className="Landing_avail">XXL</p>
                                                </div>
                                                <div className="Landing_merch-buy">
                                                    <button>I WANT IT NOW!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Landing_article-r">
                                <div className="Landing_wide">
                                    <div>
                                        <div className="Landing_head-title-r">
                                            <h3 className="Landing_big-title">insight arena:</h3>
                                        </div>
                                        <div className="Landing_head-title-r down-title">
                                            <h3 className="Landing_big-">where visionaries take the stage</h3>
                                        </div>
                                    </div>
                                    <div className="Landing_text-cont right">
                                        <div className="Landing_headline-r">SPEAKER EXPRESS – INSIGHTS FROM THE BEST IN THE GAME!</div>
                                        <div className="Landing_para">
                                            <p>Fast-track your learning with industry giants, startup founders, and thought leaders...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>            
        </div>
    );
};

export default App;
