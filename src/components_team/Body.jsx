import React from "react";
import TeamInfo from "./TeamInfo";
import TeamCard from "./TeamCard";
import skull from "../assets_team/skull.png";

export default function Body() {
  return (
    <div className="bg-[#FFF5Cf] w-full sm:w-[85%] sm:rounded-tr-3xl sm:rounded-br-3xl p-8 mb-[100px]">
      <TeamInfo
        team_name="core team !!"
        team_description="Lorem ipsum dolor sit amet sin quint usum. Proin gravi daibhe lesorem quis"
      >
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
      </TeamInfo>

      <TeamInfo
        team_name="tech team !!"
        team_description="Lorem ipsum dolor sit amet sin quint usum. Proin gravi daibhe lesorem quis"
      >
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
      </TeamInfo>

      <TeamInfo
        team_name="marketing team !!"
        team_description="Lorem ipsum dolor sit amet sin quint usum. Proin gravi daibhe lesorem quis"
      >
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
        <TeamCard
          name="tatya bichu"
          designation="team head"
          instaUrl="instagram.com"
          linkedinUrl="linkedin.com"
          phone="1234567890"
          image={skull}
        />
      </TeamInfo>
    </div>
  );
}
