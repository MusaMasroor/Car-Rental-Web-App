"use client";
import PreLoader from "../public/pre-loader.gif";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="m-2 flex items-center justify-center">
      <Image src={PreLoader} width={50} height={50} alt="pre-loader"></Image>
    </div>
  );
};

export default Loader;
