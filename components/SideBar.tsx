"use client";
import Link from "next/link";
import Image from "next/image";
import home from "../public/home.svg";
import user from "../public/user.svg";
import setting from "../public/setting.svg";
import carIcon from "../public/car-icon.svg";
import phone from "../public/phone.svg";
const Sidebar = () => {
  return (
    <div className="flex">
      <div className=" w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/dashboard">
            <div className="bg-purple-800  p-3 rounded-lg inline-block">
              <Image src={home} width={30} height={30} alt="home-icon" />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/car-orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-1 rounded-lg inline-block">
              <Image src={carIcon} width={50} height={50} alt="car-icon" />
            </div>
          </Link>
          <Link href="/users">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <Image src={user} width={30} height={30} alt="user-icon" />
            </div>
          </Link>
          <Link href="/contact-dashboard">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <Image src={phone} width={30} height={30} alt="phone-icon" />
            </div>
          </Link>
          <Link href="/settings">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <Image src={setting} width={30} height={30} alt="setting-icon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
