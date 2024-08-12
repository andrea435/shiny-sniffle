"use client";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialLinks({ extraClasses }: { extraClasses?: any }) {
  return (
    <div className={`${extraClasses} text-[20px] lg:flex text-white gap-2 `}>
      <Link href="/">
        <FaInstagram />
      </Link>
      <Link href="/">
        <FaLinkedinIn />
      </Link>
      <Link href="/">
        <FaFacebookF />
      </Link>
      <Link href="/">
        <FaYoutube />
      </Link>
    </div>
  );
}
