import React from "react";
import team from "../assets_team/WeAreTheTeam.png";

const TeamPic = ({ imageUrl }) => {
  return (
    <div className="relative flex items-center justify-center p-4 pt-0">
      <div className="relative w-full max-w-[1400px] mx-auto">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Background"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[64%] h-auto object-cover"
          />
        )}

        <img
          src={team}
          alt="Team overlay"
          className="relative z-10 w-full h-auto pb-8 drop-shadow-team"
        />
      </div>
    </div>
  );
};

export default TeamPic;
