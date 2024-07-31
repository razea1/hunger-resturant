import React from "react";
import Button from "../layouts/Button.jsx";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('/photos/backgroundImage.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div style={backgroundImageStyle} className="min-h-screen flex flex-col justify-center items-start lg:px-32 px-5 text-left">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">Elevate your Inner Foodie</h1>
        <p className="text-backgroundColor text-lg">All the food you need is available here. The best smoked meat.</p>
        <div className="mt-5">
          <Button title="תפריט" />
        </div>
        <Button title="הזמן עכשיו" />
      </div>
    </div>
  );
};

export default Home;
