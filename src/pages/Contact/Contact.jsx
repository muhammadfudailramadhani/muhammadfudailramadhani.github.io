import React from 'react';
import logo from "../../assets/123.png";

function Contact() {
  return (
    <div className="h-screen bg-black">
      <div className="flex justify-between ">
        <h1 className=" font-extrabold text-white p-3 pl-10 text-2xl">
          Contact
        </h1>
        <img src={logo} alt="" className="object-scale-down h-15 w-20 pr-10" />
      </div>
      <div className=" border-t-4">
      <div class="container mx-auto my-20 w-1/3 border border-purple-500 bg-white">
  <div class="p-5 space-y-5 shadow-xl">
    <h4 class="text-center text-3xl">Contact Us</h4>

    <form>
      <div class="grid grid-cols-2 gap-5">
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="First Name"
        />
        <input
          type="text"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="Last Name"
        />
        <input
          type="email"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Email"
        />
        <input
          type="tel"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Phone"
        />
        <textarea
          cols="10"
          rows="5"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send Message"
        class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
      />
    </form>
  </div>
</div>
      </div>
      </div>
  );
}

export default Contact;
