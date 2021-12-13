import React from "react";
import logo from "../../assets/123.png";
import e from "../../assets/e.jpg";
import d from "../../assets/d.jpeg";
import dni from "../../assets/a.jpg";
import dn from "../../assets/isa.jpg";
function Portofolio() {
  return (
    <div className="h-auto bg-black">
      <div className="flex justify-between " data-aos="fade-down">
        <h1 className=" font-extrabold text-white p-3 pl-10 text-2xl">
          Portofolio
        </h1>
        <img src={logo} alt="" className="object-scale-down h-15 w-20 pr-10" />
      </div>
      <div className="border-t-4 ">
        <div className="pt-16">
          <h5
            className="text-white font-bold  text-4xl pl-20 pb-8 "
            data-aos="zoom-in"
          >
            ^ Apk quran
          </h5>
          <img
            src={e}
            alt=""
            className="w-screen  h-96 px-20 "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>

        <div className="pt-16">
          <h5
            className="text-white font-bold  text-4xl pl-20 pb-8 "
            data-aos="zoom-in"
          >
            ^ Editing Video
          </h5>
          <img
            src={d}
            alt=""
            className="w-screen  h-96 px-20 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>

        <div className="pt-16">
          <h5
            className="text-white font-bold  text-4xl pl-20 pb-8 "
            data-aos="zoom-in"
          >
            ^ Tranding
          </h5>
          <img
            src={dni}
            alt=""
            className="w-screen  h-96 px-20 "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>

        <div className="pt-16">
          <h5
            className="text-white font-bold  text-4xl pl-20 pb-8 "
            data-aos="zoom-in"
          >
            ^ Bisnismen
          </h5>
          <img
            src={dn}
            alt=""
            className="w-screen  h-96 px-20 "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
