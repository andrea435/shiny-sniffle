"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SocialLinks from "./styled/sociallinks";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const path = usePathname();

  return (
    <header className="z-[99] pb-[5%] flex justify-between items-center shadow-sm absolute w-full left-[50%] translate-x-[-50%] md:bg-transparent bg-white md:bg-gradient-to-b md:from-[#000000]  md:to-[#00000000] ">
      <Link
        href="/"
        className="flex pt-[5%] lg:pt-[2%] pl-[5%] object-contain items-center justify-center overflow-hidden "
      >
        <Image
          src={
            "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
          }
          alt="Tigzozo Logo"
          width={190}
          height={32}
          className={` w-auto h-9`}
        />
      </Link>
      <div
        className={`h-[45px] w-[45px] bg-primary rounded-[50%] relative transition-all duration-[0.7s] ease-in-out ${
          open ? "rotate-180" : ""
        } md:hidden mt-[5%] mr-[5%] `}
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-[60%] h-[3px] absolute top-[50%] left-[50%] rounded-xl -translate-x-[50%] -translate-y-[50%] transition-all duration-[0.9s] ease-in-out 
            ${
              open
                ? "bg-transparent before:top-0 before:rotate-[225deg] after:rotate-[-225deg] after:top-0"
                : "before:top-[-7px] after:top-[7px] bg-indigo-600"
            }
            before:content-[''] before:h-full before:w-full before:bg-indigo-600 before:transition-all before:absolute  before:rounded-xl 
            after:content-[''] after:h-full after:w-full after:bg-indigo-600 after:transition-all after:absolute after:rounded-xl `}
        ></span>
      </div>
      <ul
        className={`${
          open
            ? "py-[30px] px-[30px] max-h-[700px] border-2 bg-[white] md:bg-[transparent] text-secondary md:border-0 md:text-dark md:py-0 md:px-0"
            : "py-0 px-[30px] border-0 max-h-0 md:max-h-[none] bg-[white] md:bg-[transparent] text-secondary md:text-dark md:py-0  md:px-0"
        } md:pt-[5%] md:mr-[5%] lg:mr-0 lg:pt-[2%]  transition-all duration-[0.6s]  overflow-hidden absolute md:static md:items-center md:justify-end lg:justify-center w-[90%] rounded-lg border-[#eaeaea] shadow-lg md:shadow-[none] flex justify-center items-end flex-col md:flex-row  gap-3 lg:gap-[48px] top-[90px] right-[5%] `}
      >
        <li>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`${
              path === "/"
                ? " text-primary  relative md:before:bg-[transparent] before:bg-dark before:w-full before:h-[2px] before:rounded-[10px] transition-all duration-[0.6s] before:bottom-[-3px] before:origin-bottom-right before:right-0 before:absolute before:content-[''] w-max block "
                : " text-secondary  md:text-white"
            } font-primary w-max transition-all duration-[0.6s] uppercase relative before:bg-dark `}
          >
            Home
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/real-weddings"
            onClick={() => setOpen(false)}
            className={`${
              path === "/real-weddings"
                ? " text-primary  relative md:before:bg-[transparent] before:bg-dark before:w-full before:h-[2px] before:rounded-[10px] transition-all duration-[0.6s] before:bottom-[-3px] before:origin-bottom-right before:right-0 before:absolute before:content-[''] w-max block "
                : " text-secondary  md:text-white"
            } font-primary uppercase w-max transition-all duration-[0.6s]  relative before:bg-dark `}
          >
            About
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/real-weddings"
            onClick={() => setOpen(false)}
            className={`${
              path === "/real-weddings"
                ? " text-primary  relative md:before:bg-[transparent] before:bg-dark before:w-full before:h-[2px] before:rounded-[10px] transition-all duration-[0.6s] before:bottom-[-3px] before:origin-bottom-right before:right-0 before:absolute before:content-[''] w-max block "
                : " text-secondary  md:text-white"
            } font-primary uppercase w-max transition-all duration-[0.6s]  relative before:bg-dark `}
          >
            Services
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/who-we-are"
            onClick={() => setOpen(false)}
            className={`${
              path === "/who-we-are"
                ? " text-primary  relative md:before:bg-[transparent] before:bg-dark before:w-full before:h-[2px] before:rounded-[10px] transition-all duration-[0.6s] before:bottom-[-3px] before:origin-bottom-right before:right-0 before:absolute before:content-[''] w-max block "
                : " text-secondary  md:text-white"
            } font-primary uppercase w-max transition-all duration-[0.6s]  relative before:bg-dark `}
          >
            why us
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/enquire"
            onClick={() => setOpen(false)}
            className={`${
              path === "/enquire"
                ? " text-primary  relative md:before:bg-[transparent] before:bg-dark before:w-full before:h-[2px] before:rounded-[10px] transition-all duration-[0.6s] before:bottom-[-3px] before:origin-bottom-right before:right-0 before:absolute before:content-[''] w-max block "
                : " text-secondary  md:text-white"
            } font-primary uppercase w-max transition-all duration-[0.6s]  relative before:bg-dark `}
          >
            Enquire
          </Link>
        </li>{" "}
      </ul>
      <SocialLinks extraClasses="mt-[2%]  mr-[5%] hidden lg:flex" />
    </header>
  );
}
