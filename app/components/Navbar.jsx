"use client";
import Link from "next/link";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="w-full flex justify-between p-4">
        <Link href="/">
          <h1 className="text-xl md:text-3xl cursor-pointer">
            <span className="border rounded-full bg-red-900 text-white p-2 md:p4">
              Sc
            </span>
            Tracker
          </h1>
        </Link>
        <nav className="hidden md:flex align-middle text-center">
          <ul className="flex text-xl">
            <Link href="/Login">
              <li className="mr-2">Login</li>
            </Link>
            <li>Toggle Display</li>
          </ul>
        </nav>
        <div onClick={handleOpen} className="flex md:hidden cursor-pointer">
          <MdOutlineMenu size={30} aria-label="open nav" />
        </div>
        {isOpen ? (
          <div
            onClick={handleOpen}
            className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          ></div>
        ) : (
          ""
        )}
        <div
          className={` ${
            isOpen.toString() === "true"
              ? "fixed top-0 right-0 w-[200px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[200px] h-screen bg-white z-10 duration-300"
          }`}
        >
          <MdOutlineClose
            onClick={handleOpen}
            size={30}
            className="z-50 text-black absolute right-8 top-4 cursor-pointer"
            aria-label="close nav"
          />
          <nav>
            <ul className=" flex flex-col p-4 text-black mt-4 text-xl font-bold">
              <Link href="/Login">
                <li className="py-2">Login</li>
              </Link>
              <li className="py-2">Toggle Display</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
