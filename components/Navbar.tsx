"use client";

import { navData } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({
  scrolled,
  activeSection,
}: {
  scrolled: boolean;
  activeSection: string;
}) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <nav
        className={cn(
          `absolute top-0 left-0 w-full lg:px-16 z-50 px-7 py-7 transition-all flex items-center justify-between`,
          scrolled &&
            "w-auto sticky rounded-md top-3 lg:px-7 px-4 lg:mx-10 mx-4 glass-morph"
        )}
      >
        {/* <h1 className="text-2xl font-bold text-red-600">TEDxNSUT</h1> */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={170} height={170} />
        </Link>
        <button className="md:hidden" onClick={() => setMenuActive(true)}>
          <Menu />
        </button>
        <div
          className={cn(
            "absolute top-0 left-0 w-full overflow-hidden bg-white transition-all",
            menuActive ? "h-screen" : "h-0"
          )}
        >
          <h1 className="text-2xl font-bold ml-7 mt-7 text-red-600">
            TEDxNSUT
          </h1>

          <button
            onClick={() => setMenuActive(false)}
            className="absolute top-7 right-7"
          >
            <X color="#000" />
          </button>
          <ul className="space-y-7 px-7 py-16">
            {navData.map((item, ind) => (
              <li key={ind}>
                <Link
                  href={`#${item.link}`}
                  className={cn(
                    "font-medium text-4xl text-black hover:text-red-600 transition-all",
                    activeSection === item.link && "text-red-600"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="md:flex hidden items-center justify-between gap-8 ">
          {navData.map((item, ind) => (
            <li key={ind}>
              <Link
                href={`#${item.link}`}
                className={cn(
                  "font-semibold text-[18px] hover:text-red-600 transition-all",
                  activeSection === item.link && "text-red-600"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
