import React from "react";
import HeroSection from "./Components/HeroSection";
import Layout from "./LayoutComponents/Layout";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center scrollbar-thin scrollbar-thumb-aqua scroll-smooth overflow-y-auto">
      <div className=" w-full max-w-[1450px] h-full bg-black">
        <Layout>
          <div className="ApplicationContainer flex justify-center w-full  flex-col ">
            <HeroSection />
            <div className="AppWrapper w-[85%] bg-black "></div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
