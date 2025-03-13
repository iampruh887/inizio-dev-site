import Img from "../assets/Group.svg";
import Team from "../assets_team/wheel_better.png"; // Import your team image

const Loader = () => {
  return (
    <div className="w-full min-h-screen bg-[#ff6b00]">
      <div
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <img
            src={Team}
            alt="Loading..."
            className="w-32 h-32 animate-spin"
            style={{
              animationDuration: "3s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
