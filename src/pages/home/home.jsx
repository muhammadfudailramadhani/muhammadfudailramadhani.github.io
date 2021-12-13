import React from "react";
// import Navbar from "../../components/Navbar";
import "./home.css";
import pp from "../../assets/isa.jpg";
function Home() {
  return (
    <div className="Home bg-black ">
      {/* Body */}
      {/* Top */}
      <div className="flex sm:flex-row flex-col justify-center sm:justify-between items-center w-5/6 mx-auto  gap-x-0">
        <div className="contentRight w-1/2 text-white pt-10">
          <h1 className="text-5xl font-bold " data-aos="flip-down">
            HI THERE, I’M A SOFTWARE ENGENEERING
          </h1>
          <p className="text-2xl font-light w-10/12 pt-9" data-aos="flip-down">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quam
            mollis porttitor pulvinar. Ullamcorper vitae eget nec diam bibendum
            scelerisque. Luctus scelerisque et blandit sed eu commodo feugiat
            proin. Pretium amet sit sed ac ut amet netus porta mi. Dictumst
            dolor a velit sem neque massa in tincidunt sollicitudin. Posuere
            risus tortor, euismod at porttitor et mi nunc. In ornare ultricies
            sed fusce quis quam. Vestibulum porta adipiscing tellus egestas
            vitae.
          </p>
        </div>
        <div className="contentLeft text-white justify-start pt-24">
          <h1
            className="text-3xl font-light pb-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Nice to meet You
          </h1>
          <img src={pp} alt="" data-aos="fade-up-left" />
        </div>
      </div>
      {/* Top */}
      {/* Bottom */}
      <div className="bottom mx-auto text-white flex flex-col justify-start pl-36">
        <h1 className="text-5xl font-bold w-1/2 pt-10" data-aos="flip-up">
          And knowing about fish is my hobby
        </h1>
        <p className="w-11/12 pt-12 text-2xl pb-28" data-aos="flip-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus quam
          mollis porttitor pulvinar. Ullamcorper vitae eget nec diam bibendum
          scelerisque. Luctus scelerisque et blandit sed eu commodo feugiat
          proin. Pretium amet sit sed ac ut amet netus porta mi. Dictumst dolor
          a velit sem neque massa in tincidunt sollicitudin. Posuere risus
          tortor, euismod at porttitor et mi nunc. In ornare ultricies sed fusce
          quis quam. Vestibulum porta adipiscing tellus egestas vitae. Sit erat
          nibh dignissim ipsum, sed dignissim purus, pretium. Vitae pretium
          dolor vitae, in a elementum, vel tristique.
        </p>
      </div>
      {/* Bottom */}
      {/* Body */}
    </div>
  );
}

export default Home;
