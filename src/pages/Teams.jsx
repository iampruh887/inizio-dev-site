import React from "react";
import Navigation from "../components/shared/Navigation";
import Footer from "../components/shared/Footer";
import "../styles/Teams.css";

const Teams = () => {
  // Sample data with different number of members per section
  const teamSections = [
    {
      title: "Core Team",
      description:
        "The leaders driving innovation and entrepreneurship at IIITG",
      members: [
        {
          name: "John Doe",
          role: "President",
          image: "https://source.unsplash.com/300x300/?professional,person,1",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/twitter.svg", url: "#" },
            { icon: "/github.svg", url: "#" },
          ],
        },
        {
          name: "Jane Smith",
          role: "Vice President",
          image: "https://source.unsplash.com/300x300/?professional,person,2",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/twitter.svg", url: "#" },
          ],
        },
      ],
    },
    {
      title: "Technical Team",
      description: "The builders behind our digital presence and innovations",
      members: [
        {
          name: "Mike Johnson",
          role: "Tech Lead",
          image: "https://source.unsplash.com/300x300/?professional,person,3",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/github.svg", url: "#" },
          ],
        },
        {
          name: "Sarah Brown",
          role: "Developer",
          image: "https://source.unsplash.com/300x300/?professional,person,4",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/github.svg", url: "#" },
          ],
        },
        {
          name: "Tom Wilson",
          role: "Designer",
          image: "https://source.unsplash.com/300x300/?professional,person,5",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/github.svg", url: "#" },
          ],
        },
      ],
    },
    {
      title: "Marketing Team",
      description:
        "The creative minds spreading our message and building our brand",
      members: [
        {
          name: "Emily Davis",
          role: "Marketing Lead",
          image: "https://source.unsplash.com/300x300/?professional,person,6",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/twitter.svg", url: "#" },
            { icon: "/instagram.svg", url: "#" },
          ],
        },
        {
          name: "Alex Turner",
          role: "Content Strategist",
          image: "https://source.unsplash.com/300x300/?professional,person,7",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/twitter.svg", url: "#" },
          ],
        },
        {
          name: "Rachel Chen",
          role: "Social Media Manager",
          image: "https://source.unsplash.com/300x300/?professional,person,8",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/instagram.svg", url: "#" },
          ],
        },
        {
          name: "David Kim",
          role: "Brand Designer",
          image: "https://source.unsplash.com/300x300/?professional,person,9",
          socials: [
            { icon: "/linkedin.svg", url: "#" },
            { icon: "/dribbble.svg", url: "#" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="teams">
      <section className="teams__hero">
        <img
          src="https://source.unsplash.com/1920x1080/?abstract"
          className="teams__hero-bg"
          alt="Hero background"
        />

        <Navigation />

        <h1 className="teams__title">Our Team</h1>
        <p className="teams__description">
          Meet the passionate individuals driving innovation at E-Cell IIITG
        </p>
      </section>

      <main className="teams__content">
        {teamSections.map((section, index) => (
          <section
            key={index}
            className="team-section"
            // Add data attribute for member count
            data-member-count={section.members.length}
          >
            <h2 className="team-section__title">{section.title}</h2>
            <div className="team-section__divider" />
            <p className="team-section__description">{section.description}</p>

            <div className="team-section__grid">
              {section.members.map((member, memberIndex) => (
                <div key={memberIndex} className="team-member">
                  <div className="team-member__image-container">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-member__info">
                    <h3 className="team-member__name">{member.name}</h3>
                    <p className="team-member__role">{member.role}</p>
                    <div className="team-member__socials">
                      {member.socials.map((social, socialIndex) => (
                        <a
                          key={socialIndex}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-icon"
                        >
                          <img src={social.icon} alt="social" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        <Footer />
      </main>
    </div>
  );
};

export default Teams;
