"use client";

import { useEffect, useState } from "react";
import { RentData } from "@/types";
import { TopCards, BarChart, RecentOrders, SideBar } from ".";
const Dashboard = () => {
  const [rentData, setRentData] = useState<RentData[]>([]);

  useEffect(() => {
    // Fetch rent information from the backend when component mounts
    fetchRentData();
  }, []);

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

  return (
    <div className="flex">
      <title>Admin Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
      <SideBar />
      <div className="flex flex-col flex-1">
        <main className="bg-gray-100 min-h-screen">
          <div className="flex justify-between px-4 pt-4">
            <h2 className="text-3xl text-black-100 font-bold flex">
              Dashboard
            </h2>

            <h2 className="text-2xl text-black-100 font-bold flex">
              Welcome Back, Admin
            </h2>
          </div>
          <TopCards />
          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart />
            <RecentOrders rentData={rentData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
