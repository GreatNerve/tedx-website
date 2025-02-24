import { cn } from "@/lib/utils";
import React, { useState } from "react";

const AccorionItem = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className="accordion py-8 px-6 border-b-2 rounded-t-lg border-gray-800 transition-all duration-500  hover:bg-[#1e1e20] accordion-active:bg-indigo-50 active"
        id="basic-heading-one-with-arrow"
      >
        <button
          className="accordion-toggle group inline-flex items-center justify-between leading-8  w-full transition duration-500 text-left hover:text-red-600 accordion-active:font-medium accordion-active:text-indigo-600"
          aria-controls="basic-collapse-one-with-arrow"
          onClick={() => setActive((prev) => !prev)}
        >
          <h5>How do I update my billing information?</h5>
          <svg
            className="text-gray-500 transition duration-500 group-hover:text-red-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          id="basic-collapse-one-with-arrow"
          className={cn(
            "accordion-content w-full px-0 overflow-hidden transition-all",
            active ? "h-full" : "h-0"
          )}
          aria-labelledby="basic-heading-one-with-arrow"
          style={{ maxHeight: "250px" }}
        >
          <p className="text-base  leading-6">
            To contact customer support, look for a 'Contact us' or 'Help'
            button or link on the website or platform. You may be able to email,
            call, or chat with customer support for assistance.
          </p>
        </div>
      </div>
    </>
  );
};

const FAQs = () => {
  return (
    <>
      <section className="py-24 bg-[#131313] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-[3rem] font-manrope text-center font-bold  leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </div>

          <div
            className="accordion-group mx-auto max-w-[850px]"
            data-accordion="default-accordion"
          >
            <AccorionItem />
            <AccorionItem />
            <AccorionItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
