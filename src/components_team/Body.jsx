import React from "react";
import TeamInfo from "./TeamInfo";
import TeamCard from "./TeamCard";
import skull from "../assets_team/skull.png";

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

  // Technical Team Members
  const techTeamMembers = [
    {
      name: "alice smith",
      designation: "tech lead",
      instaUrl: "instagram.com/alice",
      linkedinUrl: "linkedin.com/in/alice",
      phone: "3456789012",
      image: skull,
    },
    {
      name: "bob brown",
      designation: "developer",
      instaUrl: "instagram.com/bob",
      linkedinUrl: "linkedin.com/in/bob",
      phone: "4567890123",
      image: skull,
    },
  ];

  // Marketing Team Members
  const marketingTeamMembers = [
    {
      name: "abcd?",
      designation: "marketing head",
      instaUrl: "instagram.com/emma",
      linkedinUrl: "linkedin.com/in/emma",
      phone: "5678901234",
      image: skull,
    },
    {
      name: "abcd?",
      designation: "social media manager",
      instaUrl: "instagram.com/charles",
      linkedinUrl: "linkedin.com/in/charles",
      phone: "6789012345",
      image: skull,
    },
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
    </div>
  );
}
