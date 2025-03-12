import React from "react";
import TeamInfo from "./TeamInfo";
import TeamCard from "./TeamCard";
import skull from "../assets_team/skull.png";

const memberImages = {};
const images = import.meta.glob('../assets_team/member_imgs/*.jpg', { eager: true });
Object.entries(images).forEach(([path, module]) => {
    const fileName = path.replace(/^.*[\\/]/, '');
    memberImages[fileName] = module.default;
});

export default function Body() {
  // Core Team Members
  const coreTeamMembers = [
    {
      name: "tatya bichu",
      designation: "team head",
      instaUrl: "instagram.com",
      linkedinUrl: "linkedin.com",
      phone: "1234567890",
      image: skull,
    },
    {
      name: "john doe",
      designation: "developer",
      instaUrl: "instagram.com/john",
      linkedinUrl: "linkedin.com/in/john",
      phone: "2345678901",
      image: skull,
    },
    {
      name: "john doe",
      designation: "developer",
      instaUrl: "instagram.com/john",
      linkedinUrl: "linkedin.com/in/john",
      phone: "2345678901",
      image: skull,
    },
    {
      name: "john doe",
      designation: "developer",
      instaUrl: "instagram.com/john",
      linkedinUrl: "linkedin.com/in/john",
      phone: "2345678901",
      image: skull,
    },
    {
      name: "john doe",
      designation: "developer",
      instaUrl: "instagram.com/john",
      linkedinUrl: "linkedin.com/in/john",
      phone: "2345678901",
      image: skull,
    },
    {
      name: "john doe",
      designation: "developer",
      instaUrl: "instagram.com/john",
      linkedinUrl: "linkedin.com/in/john",
      phone: "2345678901",
      image: skull,
    },
  ];


    const techTeamMembers = [
        { name: "Alok Vishwakarma", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (7).jpg"] },
        { name: "Ansik Singh Tomar", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (5).jpg"] },
        { name: "Anuved Pratap Singh", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: skull },
        { name: "Ashish Sharma", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: skull },
        { name: "Garv Roy", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (3).jpg"] },
        { name: "L Vishnu Vardhan", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (1).jpg"] },
        { name: "Pradyumn Ojha", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: skull },
        { name: "Prince Raj", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (2).jpg"] },
        { name: "Riya Badhani", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (8).jpg"] },
        { name: "Shreyas Satish S", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (4).jpg"] },
        { name: "Tanishk Gupta", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["tech (6).jpg"] }
    ];

    const marketingTeamMembers = [
        { name: "Divyanshi Jaiswal", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["marketing (1).jpg"] },
        { name: "Guthikonda Sree Praneeth", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["marketing (2).jpg"] },
        { name: "Harsh Brijesh Dubey", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["marketing (3).jpg"] },
        { name: "Harshu Prasad Shukla", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["marketing (4).jpg"] },
        { name: "Mohit Soni", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["marketing (5).jpg"] }
    ];

    const emTeamMembers = [
        { name: "Abhiraj Tomar", designation: "Team Head", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (1).jpg"] },
        { name: "Anshu Priya", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (9).jpg"] },
        { name: "Ashish Sinha", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (7).jpg"] },
        { name: "Kushagra Mishra", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (6).jpg"] },
        { name: "Madhav Raj Goyal", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (2).jpg"] },
        { name: "Prachi Priya", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (3).jpg"] },
        { name: "Sai Yuvraj Bhegde", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (5).jpg"] },
        { name: "Saurabh Bhagwat", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (8).jpg"] },
        { name: "Vedanshi Aryan", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["em (4).jpg"] }
    ];

    const pcrTeamMembers = [
        { name: "Chiranjit Saha", designation: "Team Head", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (1).jpg"] },
        { name: "A S Bhavya Priya", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (6).jpg"] },
        { name: "Afreen Nesha", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (5).jpg"] },
        { name: "Anvesha Ayushi", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (4).jpg"] },
        { name: "Aryan Sanjay Singh", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (8).jpg"] },
        { name: "Kamireddy Hema Hasini", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (3).jpg"] },
        { name: "Kausik Vaibhav Patra", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (9).jpg"] },
        { name: "Sanjana Kumari", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (7).jpg"] },
        { name: "Siddhesh Singh", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["pcr (2).jpg"] }
    ];

    const sponsorTeamMembers = [
        { name: "Anmol Kumar", designation: "Team Member", instaUrl: "", linkedinUrl: "", phone: "", image: memberImages["sponsor (1).jpg"] }
    ];



  const renderTeamCards = (members) =>
    members.map((member, index) => (
      <TeamCard
        key={index}
        name={member.name}
        designation={member.designation}
        instaUrl={member.instaUrl}
        linkedinUrl={member.linkedinUrl}
        phone={member.phone}
        image={member.image}
      />
    ));

  // ------------------Maybe Dont Change after this-------------------- //
  return (
    <div className="bg-[#FFF5Cf] w-full sm:w-[85%] sm:rounded-tr-3xl sm:rounded-br-3xl p-8 mb-[100px]">
      {/* Core Team */}
      <TeamInfo
        team_name="core team !!"
        team_description="Lorem ipsum dolor sit amet sin quint usum. Proin gravi daibhe lesorem quis"
      >
        {renderTeamCards(coreTeamMembers)}
      </TeamInfo>

      {/* Technical Team */}
      <TeamInfo
        team_name="tech team !!"
        team_description="Lorem ipsum dolor sit amet sin quint usum. Proin gravi daibhe lesorem quis"
      >
        {renderTeamCards(techTeamMembers)}
      </TeamInfo>

      {/* Marketing Team */}
      <TeamInfo
        team_name="marketing team !!"
        team_description="Lorem ipsum dolor sit amet sin quint usum. Proin gravi daibhe lesorem quis"
      >
        {renderTeamCards(marketingTeamMembers)}
      </TeamInfo>

      {/* Event Management Team */}
      <TeamInfo
          team_name="event management team !!"
          team_description="From coordinating schedules to ensuring that every session runs smoothly, the Event
          Management Team is the powerhouse behind the execution of our summit. They are the planners, problem-solvers,
           and crisis managers who ensure that every attendee has an experience to remember."
      >
        {renderTeamCards(emTeamMembers)}
      </TeamInfo>

      {/* Public & Corporate relations Team */}
      <TeamInfo
          team_name="public & corporate relations team !!"
          team_description="The voice of our event, the Public Relations Team, ensures that our message reaches the
          right people at the right time. They manage communication, handle media relations, and create impactful
          narratives that position our summit as a must-attend experience for entrepreneurs, innovators, and leaders
          alike"
      >
        {renderTeamCards(pcrTeamMembers)}
      </TeamInfo>

      {/* sponsorship Team */}
      <TeamInfo
          team_name="sponsorship team !!"
          team_description="Opportunities don’t just happen; they are created by our Sponsorship Team. They work
          tirelessly to bring in valuable partnerships, secure funding, and build meaningful collaborations that take
          our event to the next level. Their efforts help us provide the best resources, experiences, and opportunities
           for our audience."
      >
        {renderTeamCards(sponsorTeamMembers)}
      </TeamInfo>
    </div>
  );
}
