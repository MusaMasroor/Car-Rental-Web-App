"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});
const SignUp: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      signUpSchema.parse(data);
      const response = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Reset form and clear any error messages
      setData({ firstName: "", lastName: "", email: "", password: "" });
      setError(null);
      router.push("/sign-in");
    } catch (error) {
      console.error("Registration Failed !", error);
    }
  };

  return (
    <div className="space-y-16">
      <h1 className="text-4xl m-6 font-bold border-gray-300 text-black-100 justify-center items-center flex">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
      >
        <div className="w-full bg-white rounded-lg shadow border-2 dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-black-100 md:text-2xl">
              Enter Your Personal Details
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-grey">
                First Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                type="text"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-grey">
                Last Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                type="text"
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-grey">
                Email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                type="text"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-grey">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-black-100 sm:text-sm rounded-lg block w-full p-2.5"
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-[16px] rounded-full bg-red-700 text-white text-[14px] leading-[17px] font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
