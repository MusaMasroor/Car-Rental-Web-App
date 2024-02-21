"use client";
import { CustomButton } from ".";
import { useState } from "react";
import { ContactUs } from "@/types";
import { z } from "zod";

// Define a Zod schema for the RentcontactData type
const ContactDataSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  address: z.string().min(2).max(255),
  message: z.string().min(2).max(255),
});
const Contact = () => {
  const [contactData, setContactData] = useState<ContactUs>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ContactDataSchema.parse(contactData);
    // Send form data to backend
    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (response.ok) {
      setContactData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      alert("Submitted successfully");
    } else {
      alert("Submission failed");
    }
  };

  return (
    <div className="space-y-16">
      <h1 className=" text-4xl m-6 font-bold  border-gray-300 text-black-100 justify-center items-center flex">
        Contact Our Team
      </h1>
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
                  className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData({ ...contactData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                  type="email"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Phone No.
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  value={contactData.phone}
                  onChange={(e) =>
                    setContactData({ ...contactData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Address
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  value={contactData.address}
                  onChange={(e) =>
                    setContactData({ ...contactData, address: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-grey">
                  Message
                </label>

                <textarea
                  className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={contactData.message}
                  onChange={(e) =>
                    setContactData({ ...contactData, message: e.target.value })
                  }
                  required
                ></textarea>
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

export default Contact;
