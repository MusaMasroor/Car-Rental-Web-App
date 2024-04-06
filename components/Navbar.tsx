"use client";
import { useState } from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent relative">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="font-extrabold text-3xl text-white">VRx</h1>
        </Link>
        {/* Hamburger menu button */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-white absolute top-4 right-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h18M4 12h11M4 "
                />
              </svg>
            )}
          </button>
        </div>
        {/* End of Hamburger menu button */}
        <div
          className={`${
            navbar ? "block" : "hidden"
          } md:flex justify-center items-center absolute top-full left-0 right-0 bg-transparent md:static md:flex-row md:space-x-0 md:bg-transparent md:block`}
        >
          <Link href="/sign-in">
            <CustomButton
              title="Sign In"
              btnType="button"
              containerStyles="text-white text-lg"
            />
          </Link>
          <Link href="/dashboard">
            <CustomButton
              title="Dashboard"
              btnType="button"
              containerStyles="text-white bg-red-700 rounded-full min-w-[130px]"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
