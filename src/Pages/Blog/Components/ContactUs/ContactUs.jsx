import React, { useState } from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Password not match";
    }
    if (!formData.country.trim()) {
      validationErrors.country = "Country name is required";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };
  return (
    <>
      <Container>
        <div className=" mt-[100px] mb-[100px] grid lg:grid-cols-[55%_46%]">
          <div className="text-center lg:text-left">
            <div className="text-center lg:text-left">
              <span className="text-[#FF5E3A] font-bold font-roboto text-[14px] uppercase">
                ------ contact
              </span>
              <h4 className="font-bold text-[72px] text-[#FFFFFF] font-roboto mb-[30px] leading-[72px]">
                Get In Touch
              </h4>

              <div className=" items-center mb-[30px]">
                <span className="text-[#82869A] font-bold font-roboto text-[24px] mr-4">
                  For more information, contact us at
                </span>
                <span className="text-[#FFFFFF] font-bold font-roboto text-[24px] ">
                  info@filmina.com
                </span>
              </div>
              <h4 className="text-[36px] font-bold font-roboto text-[#ffffff] mb-[20px]">
                Keep in touch
              </h4>

              <p className="text-[#82869A] font-normal mb-[10px] font-inter text-[16px]">
                768 Market Street San Francisco, CA 64015, United States
              </p>
              <div className="lg:flex mx-[90px] md:mx-[185px] lg:mx-0 gap-x-[50px] mb-[20px] text-[#82869A] font-normal font-inter text-[20px] ">
                <p>info@filmina.com</p>
                <p>(+021) 345 678 910</p>
              </div>
            </div>
            <div className="object-cover overflow-hidden">
              <img
                src="assets/img/camerab.jpg"
                alt="img"
                className="w-[390px] h-[300px] mx-auto lg:mx-0 md:h-[280px] md:w-[600px]  rounded-[5px] "
              />
            </div>
          </div>
          <div className="mx-auto lg:mx-0 w-[80vw] lg:w-full">
            <form
              onSubmit={handleSubmit}
              className="mt-[50px] p-[30px] bg-white rounded-[5px] shadow-[0px_8px_25px_8px] "
            >
              <div className="items-center justify-center">
                <h4 className="text-[36px] font-bold font-roboto text-[#11121E] mb-[20px]">
                  Send us message
                </h4>
                <p className="text-[#82869A] font-normal font-inter text-[16px] mb-[20px] w-[108%]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a
                </p>
              </div>
              <div className="mb-[20px]">
                <input
                  className="p-[10px] outline-none border border-[#D9D9D9] rounded-[5px] w-[100%]"
                  name="username"
                  type="text"
                  autocomplete="off"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
              </div>

              <div className="mb-[20px]">
                <input
                  className="p-[10px] outline-none border border-[#D9D9D9] rounded-[5px] w-[100%]"
                  name="email"
                  type="email"
                  autocomplete="off"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />

                {errors.email && <span>{errors.email}</span>}
              </div>

              <div className="mb-[20px]">
                <input
                  className="p-[10px] outline-none border border-[#D9D9D9] rounded-[5px] w-[100%]"
                  name="subject"
                  type="text"
                  autocomplete="off"
                  placeholder="Enter your subject"
                  onChange={handleChange}
                />

                <div className="error">
                  {errors.country && <span>{errors.country}</span>}
                </div>
              </div>
              <div className="mb-[20px]">
                <textarea
                  onChange={handleChange}
                  className="p-[30px] outline-none border border-[#D9D9D9] rounded-[5px] w-[100%]"
                />

                <div className="error">
                  {errors.country && <span>{errors.country}</span>}
                </div>
              </div>
              <div className="mb-[20px]">
                <Button className="cursor-pointer p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-black">
                  send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUs;
