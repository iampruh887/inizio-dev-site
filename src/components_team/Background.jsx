import Img from "../assets/background.jpg";

const Background = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#ff6b00]">
      {" "}
      {/* Add orange background */}
      <div className="relative w-full min-h-screen">
        <img
          src={Img}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-color-dodge"
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default Background;
