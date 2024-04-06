"use client";
import { useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    // Create a new instance of Typed.js
    const options = {
      strings: [
        "Streamline your car",
        "rental experience",
        "with",
        "our effortless",
        "booking process.",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    };
    const typed = new Typed(".typed-text", options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs once
  return (
    <div className="hero pt-16 md:pt-0">
      {" "}
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className="hero__subtitle">
          <span className="typed-text"></span>
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-red-700 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.jpeg" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
