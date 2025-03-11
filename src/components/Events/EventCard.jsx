import React from "react";
import PropTypes from "prop-types";

const EventCard = ({ title, description, reversed = false }) => {
  const Card = () => (
    <div className="flex relative mb-8 h-[399px] max-md:flex-col max-md:h-auto">
      <div className="flex flex-col flex-1 gap-3 px-6 py-14 bg-orange-500 rounded-3xl max-md:px-5 max-md:py-10">
        <div className="text-8xl font-bold text-black leading-[81px] max-md:text-6xl max-md:leading-tight max-sm:text-5xl">
          {title}
        </div>
        <div className="mt-3 text-xl font-medium leading-8 text-black max-w-[575px] max-md:text-lg max-md:leading-normal max-sm:text-base">
          {description}
        </div>
      </div>
      <div className="relative rounded-3xl bg-neutral-900 shadow-[-21px_0_0_#FFF5CF] w-[424px] max-md:w-full max-md:h-[200px] max-md:shadow-[-10px_0_0_#FFF5CF] max-sm:h-[150px]">
        <div className="absolute left-6 bottom-[25px] text-2xl font-bold leading-10 text-orange-500 uppercase tracking-[11.04px]">
          {title.toLowerCase()}
        </div>
      </div>
    </div>
  );

  const ReversedCard = () => (
    <div className="flex flex-row-reverse relative mb-8 h-[399px] max-md:flex-col max-md:h-auto">
      <div className="flex flex-col flex-1 gap-3 px-6 py-14 bg-orange-500 rounded-3xl max-md:px-5 max-md:py-10">
        <div className="text-8xl font-bold text-black leading-[81px] max-md:text-6xl max-md:leading-tight max-sm:text-5xl">
          {title}
        </div>
        <div className="mt-3 text-xl font-medium leading-8 text-black max-w-[575px] max-md:text-lg max-md:leading-normal max-sm:text-base">
          {description}
        </div>
      </div>
      <div className="relative rounded-3xl bg-neutral-900 shadow-[21px_0_0_#FFF5CF] w-[424px] max-md:w-full max-md:h-[200px] max-md:shadow-[10px_0_0_#FFF5CF] max-sm:h-[150px]">
        <div className="absolute right-6 bottom-[25px] text-2xl font-bold leading-10 text-orange-500 uppercase tracking-[11.04px]">
          {title.toLowerCase()}
        </div>
      </div>
    </div>
  );

  return reversed ? <ReversedCard /> : <Card />;
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reversed: PropTypes.bool,
};

export default EventCard;
