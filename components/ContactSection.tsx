"use client";

import React, { useState } from "react";
import CardSvg from "./CardSvg";
import ContactTextArea from "./ContactTextArea";
import ContactInputBox from "./ContactInputBox";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import MiniMap from "./MiniMap";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section
        id="contact"
        className="relative z-10 overflow-hidden bg-black py-20 dark:bg-dark "
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-[95%] mx-auto px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <HomeIcon />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <PhoneIcon />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <MailIcon />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[95%] mx-auto px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12 text-black">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                  <ContactTextArea
                    row={6}
                    placeholder="Your Message"
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-lg border border-primary bg-red-600 p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <CardSvg />
              </div>
            </div>
            <MiniMap
              // width={"90%"}
              // height={400}
              // position={[77.0385, 28.6109]}
              className="mx-auto mt-14"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
