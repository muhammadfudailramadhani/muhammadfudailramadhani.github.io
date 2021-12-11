import React from "react";
import logo from "../../assets/123.png";
import e from "../../assets/e.jpg";
import d from "../../assets/d.jpeg"
import dni from "../../assets/a.jpg"
import dn from "../../assets/isa.jpg"
function Portofolio() {
  return (
    <div className="h-auto bg-black">
      <div className="flex justify-between ">
        <h1 className=" font-extrabold text-white p-3 pl-10 text-2xl">
          Portofolio
        </h1>
        <img src={logo} alt="" className="object-scale-down h-15 w-20 pr-10" />
      </div>
      <div className="border-t-4">
        <div className="pt-16">
          <h5 className="text-white font-bold  text-4xl pl-20 pb-8 ">
            
            ^ Apk quran
          </h5>
          <img src={e} alt="" className="w-screen  h-96 px-20 " />
        </div>


        <div className="pt-16">
          <h5 className="text-white font-bold  text-4xl pl-20 pb-8 ">
            
            ^ Editing Video
          </h5>
          <img src={d} alt="" className="w-screen  h-96 px-20 " />
        </div>


        <div className="pt-16">
          <h5 className="text-white font-bold  text-4xl pl-20 pb-8 ">
            
            ^ Tranding
          </h5>
          <img src={dni} alt="" className="w-screen  h-96 px-20 " />
        </div>


        <div className="pt-16">
          <h5 className="text-white font-bold  text-4xl pl-20 pb-8 ">
            
            ^ Bisnismen
          </h5>
          <img src={dn} alt="" className="w-screen  h-96 px-20 " />
        </div>

      </div>
    </div>
  );
}

export default Portofolio;
