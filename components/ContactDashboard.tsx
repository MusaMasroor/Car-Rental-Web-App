"use client";

import { SideBar } from ".";
import { useEffect, useState } from "react";
import { ContactUs } from "@/types";
import { Loader } from ".";
const ContactDashboard = () => {
  const [userContact, setUserContact] = useState<ContactUs[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/contact-dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const contactInfo = await response.json();
      setUserContact(contactInfo);
    } catch (error) {
      console.error("Registration Failed !", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const filteredData = userContact.filter(
    (data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      setIsLoading(false);
    }
  }, [filteredData]);
  return (
    <div className="flex">
      <title>Contacts - Admin Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
      <SideBar />
      <div className="flex flex-col flex-1">
        <h2 className=" text-4xl m-6 font-bold  border-gray-300 text-black-100 justify-center items-center flex">
          Contacts
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
                        <span>Contact No.</span>
                      </th>
                      <th className="px-6 py-3  text-black-100">Name</th>
                      <th className="px-6 py-3  text-black-100">Email</th>{" "}
                      <th className="px-6 py-3  text-black-100">Phone No.</th>{" "}
                      <th className="px-6 py-3  text-black-100">Address</th>{" "}
                      <th className="px-6 py-3  text-black-100">Message</th>{" "}
                    </tr>
                  </thead>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    filteredData.map((data, index) => (
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
                            {data.name}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {data.email}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {data.phone}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {data.address}
                          </td>
                          <td className="px-6 text-sm font-medium text-black-100">
                            {data.message}
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

export default ContactDashboard;
