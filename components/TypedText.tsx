"use client";

import { useEffect } from "react";
import Typed from "typed.js";
const TypedText = () => {
  useEffect(() => {
    // Create a new instance of Typed.js
    const options = {
      strings: [
        "Streamline your car rental experience with",
        "our effortless booking process.",
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
  return <span className="typed-text"></span>;
};

export default TypedText;
