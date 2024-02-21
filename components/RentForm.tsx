"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RentFormData, CarProps } from "../types/index";
import { generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { CustomButton } from ".";
import { z } from "zod";

// Define a Zod schema for the RentFormData type
const RentFormDataSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  address: z.string().min(2).max(255),
});
const RentForm = () => {
  const searchParams = useSearchParams();
  const carItems = searchParams.get("car");
  const router = useRouter();

  const [formData, setFormData] = useState<RentFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const parsedCar: CarProps = JSON.parse(carItems);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    RentFormDataSchema.parse(formData);
    // Send form data to backend
    const response = await fetch("/api/rent-car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, car: parsedCar }),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", phone: "", address: "" });
      alert("Submitted successfully");

      router.push("/");
    } else {
      alert("Submission failed");
    }
  };

  // Sample images for the slider
  const sampleImages = [
    generateCarImageUrl(parsedCar),
    generateCarImageUrl(parsedCar, "29"),
    generateCarImageUrl(parsedCar, "33"),
    generateCarImageUrl(parsedCar, "13"),
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sampleImages.length);
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? sampleImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col space-y-16 my-6">
      <h2 className="text-4xl text-black-100 font-bold flex items-center justify-center">
        Rent Car
      </h2>

      <div className="relative w-full h-96 bg-pattern bg-cover bg-center rounded-lg mb-6">
        {/* Previous button */}

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* Image */}
        <Image
          src={sampleImages[currentImageIndex]}
          alt="car model"
          className="object-contain w-full h-full rounded-lg"
          fill
          priority
        />

        {/* Next button */}
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextImage}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white  rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Car Specs */}

      <h3 className="text-4xl text-black-100 font-bold mb-2 items-center justify-center flex">
        Car Specs
      </h3>

      <table className="w-full text-sm text-left rtl:text-right items-center justify-center flex">
        <tbody>
          {Object.entries(parsedCar).map(([key, value]) => (
            <tr className="border-2 dark:border-gray-700" key={key}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-grey whitespace-nowrap capitalize"
              >
                {key.split("_").join(" ")}
              </th>

              <td className="px-6 py-4 text-black-100 font-semibold">
                {" "}
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border-2 dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-black-100 md:text-2xl">
                Enter Your Personal Details
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Full Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Phone No.
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Address
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                />
              </div>

              <CustomButton
                title="Submit"
                containerStyles="w-full py-[16px] rounded-full bg-red-700"
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
                btnType="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RentForm;
