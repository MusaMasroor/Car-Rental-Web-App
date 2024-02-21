"use client";

import { useEffect, useState } from "react";
import { RentData } from "@/types";
import { SideBar, Loader } from ".";

const CarOrders = () => {
  const [rentData, setRentData] = useState<RentData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchRentData = async () => {
    try {
      const response = await fetch("/api/dashboard");
      if (response.ok) {
        const data = await response.json();
        setRentData(data);
      } else {
        console.error("Failed to fetch rent data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Filter rent data based on search query
  const filteredData = rentData.filter(
    (rent) =>
      rent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rent.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Fetch rent information from the backend when component mounts
    fetchRentData();
  }, []);

  useEffect(() => {
    // Set isLoading to false once rentData is available
    if (filteredData && filteredData.length > 0) {
      setIsLoading(false);
    }
  }, [filteredData]); // Run this effect every time rentData changes
  return (
    <div className="flex">
      <title>Car Orders - Admin Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
      <SideBar />
      <div className="flex flex-col flex-1">
        <h2 className=" text-4xl m-6 font-bold  border-gray-300 text-black-100 justify-center items-center flex">
          Car Orders
        </h2>
        <section className="items-center lg:flex  lg:h-screen  ">
          <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="overflow-x-auto bg-white rounded shadow">
              <div>
                <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b ">
                  <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0 ">
                    <input
                      type="text"
                      className="w-full pr-4 text-sm  bg-white text-black-100 placeholder-text-100 "
                      placeholder="search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <table className="w-full table-auto">
                  <thead className="bg-gray-100 ">
                    <tr className="text-md text-left text-gray-500 font-bold border-b border-gray-200 ">
                      <th className="flex items-center py-3 pl-6  text-black-100">
                        <input className="mr-4" type="checkbox" name="" id="" />
                        <span>Rental No.</span>
                      </th>
                      <th className="px-6 py-3  text-black-100">Name</th>
                      <th className="px-6 py-3  text-black-100">Email</th>{" "}
                      <th className="px-6 py-3  text-black-100">Phone No.</th>
                      <th className="px-6 py-3  text-black-100">Address</th>
                      <th className="px-6 py-3  text-black-100">Status</th>
                      <th className="px-6 py-3  text-black-100">City Mpg</th>
                      <th className="px-6 py-3  text-black-100">Class</th>
                      <th className="px-6 py-3  text-black-100">
                        Combination Mpg
                      </th>
                      <th className="px-6 py-3  text-black-100">Cylinders</th>
                      <th className="px-6 py-3  text-black-100">
                        Displacement
                      </th>
                      <th className="px-6 py-3  text-black-100">Drive</th>
                      <th className="px-6 py-3  text-black-100">FuelType</th>
                      <th className="px-6 py-3  text-black-100">Highway Mpg</th>
                      <th className="px-6 py-3  text-black-100">Make</th>
                      <th className="px-6 py-3  text-black-100">Model</th>
                      <th className="px-6 py-3  text-black-100">
                        Transmission
                      </th>
                      <th className="px-6 py-3  text-black-100">Year</th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    filteredData.map((rent, index) => (
                      <tbody key={index}>
                        <tr className="border-b border-gray-200 ">
                          <td className="flex items-center px-6 py-3 text-sm font-medium">
                            <input
                              className="mr-4"
                              type="checkbox"
                              name=""
                              id=""
                            />
                            <p className="text-black-100">{index}</p>
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.name}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.email}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.phone}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            <span className="inline-block px-2 py-1  text-black-100">
                              {rent.address}
                            </span>
                          </td>
                          <td className="px-6 text-sm">
                            <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-md ">
                              Paid
                            </span>
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.city_mpg}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.class}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.combination_mpg}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.cylinders}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.displacement}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.drive}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.fuel_type}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.highway_mpg}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.make}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.model}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.transmission}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {rent.car.year}
                          </td>
                        </tr>
                      </tbody>
                    ))
                  )}
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarOrders;
