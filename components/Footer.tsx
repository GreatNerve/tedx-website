import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="flex items-center justify-between px-7 py-6  bg-black border-t-2 border-gray-800"
      >
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={170} height={170} />
        </Link>
        <ul className="flex items-center gap-5">
          <li className="hover:bg-red-600 rounded-full p-1 transition-all">
            <a href="#">
              <Facebook />
            </a>
          </li>
          <li className="hover:bg-red-600 rounded-full p-1 transition-all">
            <a href="#">
              <TwitterIcon />
            </a>
          </li>
          <li className="hover:bg-red-600 rounded-full p-1 transition-all">
            <a href="#">
              <Linkedin />
            </a>
          </li>
          <li className="hover:bg-red-600 rounded-full p-1 transition-all">
            <a href="#">
              <Youtube />
            </a>
          </li>
          <li className="hover:bg-red-600 rounded-full p-1 transition-all">
            <a href="#">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
