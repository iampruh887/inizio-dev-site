import Img from "../assets/Group.svg";

const Background = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen bg-[#ff6b00]"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundRepeat: "repeat",
        // Optional: you can adjust the size of the pattern
        backgroundSize: "2500px",
      }}
    >
      <div className="relative w-full min-h-screen">
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default Background;
