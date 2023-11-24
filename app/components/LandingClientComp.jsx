"use client";
import Link from "next/link";
export default function LandingClientComp() {
  return (
    <div className=" pt-4 flex justify-around mx-auto cursor-pointer">
      <input
        type="text"
        className="bg-gray-50 border border-black rounded-md text-center text-black "
        placeholder="Enter your email"
      />
      <Link href="/SignUp">
        <button className="px-5 border bg-red-900 rounded-md text-white">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
