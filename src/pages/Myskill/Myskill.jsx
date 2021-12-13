import React from "react";
import logo from "../../assets/123.png";
import dani from "../../assets/6.png";
import d from "../../assets/76.png";
import ni from "../../assets/65.png";
import dni from "../../assets/33.png";
import dn from "../../assets/isa.jpg";
import dn1 from "../../assets/a.jpg";

function MySkill() {
  return (
    <div className="h-auto bg-black">
      <div className="flex justify-between " data-aos="fade-down">
        <h1 className=" font-extrabold text-white p-3 pl-10 text-2xl">
          MySKill
        </h1>
        <img src={logo} alt="" className="object-scale-down h-15 w-20 pr-10" />
      </div>

      <div className="border-t-4 ">
        <div className=" p-8">
          <div className="space-y-6 place-content-center pt-16">
            <div className="  flex justify-between ">
              <div className="relative " data-aos="flip-left">
              <img src={d} alt="" className="absolute mx-28 mt-20"/>
              <h4 className="text-blue-400 absolute shadow-lg shadow-blue-500/50 mx-6 mr-14 mt-40 ml-11 text-2xl font-bold">CSS</h4>
              <h2 className="text-yellow-300 absolute mx-6 mr-14 mt-48 ml-11">CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs.</h2>
                <img
                  src={dani}
                  alt=""
                  className=" col-span-4 h-96  w-11/12 pr-7 pl-2  "
                />{" "}
              </div>
              <div className="relative" data-aos="flip-left">
              <img src={dni} alt="" className="absolute mx-28 mt-20"/>
              <h4 className="text-blue-400 absolute shadow-lg shadow-blue-500/50 mx-6 mr-14 mt-40 ml-11 text-2xl font-bold ">HTML</h4>
              <h2 className="text-yellow-300 absolute mx-6 mr-14 mt-48 ml-20">HTML adalah bahasa standar pemrogaman yang digunakan untuk membuat halaman website, yang diakses melalui internet. Singkatan dari "Hypertext Markup Language" atau "bahasa markup".</h2>
                {/* <h1 className="text-white absolute">dajaendfejwedckvfowelas</h1> */}
                <img
                  src={dani}
                  alt=""
                  className=" col-span-4 h-96  w-11/12 pr-7   "
                />
              </div>
              <div className="relative" data-aos="flip-left">
              <img src={ni} alt="" className="absolute mx-28 mt-20"/>
              <h4 className="text-blue-400 absolute shadow-lg shadow-blue-500/50 mx-6 mr-14 mt-40 ml-11 text-2xl font-bold">flutter</h4>
              <h2 className="text-yellow-300 absolute mx-6 mr-16 mt-48 ml-11">Flutter adalah teknologi open source dari Google yang bisa digunakan untuk membuat aplikasi Android dan iOS.Sempat disebutkan di atas bahwa Flutter adalah SDK .</h2>
                <img
                  src={dani}
                  alt=""
                  className=" col-span-4 h-96  w-10/12    "
                />
              </div>
            </div>
            <div className="  flex justify-between pt-10">
              <div className="relative" data-aos="flip-right">
              <img src={d} alt="" className="absolute mx-28 mt-20"/>
              <h4 className="text-blue-400 absolute shadow-lg shadow-blue-500/50 mx-6 mr-14 mt-40 ml-11 text-2xl font-bold">CSS</h4>
              <h2 className="text-yellow-300 absolute mx-6 mr-14 mt-48 ml-11">CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di situs.</h2>
                <img
                  src={dani}
                  alt=""
                  className=" col-span-4 h-96  w-11/12 pr-7 pl-2  "
                />
              </div>
              <div className="relative" data-aos="flip-right">
              <img src={dni} alt="" className="absolute mx-28 mt-20"/>
              <h4 className="text-blue-400 absolute shadow-lg shadow-blue-500/50 mx-6 mr-14 mt-40 ml-11 text-2xl font-bold">HTML</h4>
              <h2 className="text-yellow-300 absolute mx-6 mr-14 mt-48 ml-11">HTML adalah bahasa standar pemrogaman yang digunakan untuk membuat halaman website, yang diakses melalui internet. Singkatan dari "Hypertext Markup Language" atau "bahasa markup".</h2>
                <img
                  src={dani}
                  alt=""
                  className=" col-span-4 h-96  w-11/12 pr-7  "
                />
              </div>
              <div className="relative" data-aos="flip-right">
              <img src={ni} alt="" className="absolute mx-28 mt-20"/>
              <h4 className="text-blue-400 absolute shadow-lg shadow-blue-500/50 mx-6 mr-14 mt-40 ml-11 text-2xl font-bold">flutter</h4>
              <h2 className="text-yellow-300 absolute mx-6 mr-16 mt-48 ml-11 ">Flutter adalah teknologi open source dari Google yang bisa digunakan untuk membuat aplikasi Android dan iOS.Sempat disebutkan di atas bahwa Flutter adalah SDK .</h2>
                <img
                  src={dani}
                  alt=""
                  className=" col-span-4 h-96  w-10/12    "
                />
              </div>
            </div>
            <div className="border-t-4 p-16" >
              <h6 className="text-white font-extrabold text-4xl " data-aos="zoom-in">Skill Misi</h6>
              <div className="pt-6" data-aos="fade-right">
              <h5 className="text-blue-500 font-bold absolute text-6xl py-28 px-96">Bisnismen</h5>
                <img src={dn} alt="" className="w-screen rounded-full h-80 " />
              </div>
              <div className="pt-16" data-aos="fade-left">
              <h5 className="text-blue-500 font-bold absolute text-6xl py-28 px-96">Tranding</h5>
                <img src={dn1} alt="" className="w-screen rounded-full h-80 " />
              </div>
            

          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MySkill;
