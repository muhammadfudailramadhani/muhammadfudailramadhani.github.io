import React from "react";
import logo from "../../assets/123.png";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      fristname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      fristname: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(8, "Maximum 8 characters")
        .required("Required!"),
      lastname: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(8, "Maximum 8 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      phone: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required("A phone number is required"),
      message: Yup.string()
        .min(10, "Minimum 10 characters")
        .max(1000, "Maximum 1000 characters"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-h-screen bg-black">
      <div className="flex justify-between " data-aos="fade-down">
        <h1 className=" font-extrabold text-white p-3 pl-10 text-2xl">
          Contact
        </h1>
        <img src={logo} alt="" className="object-scale-down h-15 w-20 pr-10" />
      </div>
      <div className=" border-t-4">
        <div
          class="container mx-auto my-20 w-1/3 border border-purple-500 bg-white"
          data-aos="zoom-in-up"
        >
          <div class="px-5 py-5 space-y-4 shadow-xl">
            <h4 class="text-center text-3xl">Contact Us</h4>

            <form onSubmit={formik.handleSubmit}>
              <div class="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  name="fristname"
                  value={formik.values.fristname}
                  onChange={formik.handleChange}
                  placeholder="First Name"
                />
                {formik.errors.fristname && formik.touched.fristname && (
                  <p>{formik.errors.fristname}</p>
                )}
                <input
                  type="text"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                />
                {formik.errors.lastname && formik.touched.lastname && (
                  <p>{formik.errors.lastname}</p>
                )}
                <input
                  type="text"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email"
                />
                {formik.errors.email && formik.touched.email && (
                  <p>{formik.errors.email}</p>
                )}
                <input
                  type="number"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="phone"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p>{formik.errors.phone}</p>
                )}
                <textarea
                  cols="10"
                  rows="5"
                  name="message"
                  type="text"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Write your message..."
                  value={formik.values.message}
                  onChange={formik.handleChange}
                >
                  {formik.errors.message && formik.touched.message && (
                  <p>{formik.errors.message}</p>
                )}
                </textarea>
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
