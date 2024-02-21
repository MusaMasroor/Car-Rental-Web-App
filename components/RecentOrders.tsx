"use client";
import carIcon from "../public/car-icon.svg";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import Loader from "./Loader";
import { useState, useEffect } from "react";
const RecentOrders = ({ rentData }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Set isLoading to false once rentData is available
    if (rentData && rentData.length > 0) {
      setIsLoading(false);
    }
  }, [rentData]); // Run this effect every time rentData changes

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1 className="text-2xl text-black-100 font-bold">Recent Car Rentals</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {rentData.map((rent) => (
            <li
              key={rent.email}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="p-3">
                <Image src={carIcon} width={50} height={50} alt="car-icon" />
              </div>
              <div className="pl-4">
                <p className="text-black-100 text-md font-bold capitalize">
                  {rent.name}
                </p>
                <p className="text-gray-600 capitalize">
                  {rent.car.make}
                  {rent.car.model}
                </p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm text-black-100">
                {formatDistanceToNow(rent.createdAt, { addSuffix: true })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentOrders;
