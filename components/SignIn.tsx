"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from "zod";
import Link from "next/link";
const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const SignIn: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      signInSchema.parse(data);
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      // Reset form and clear any error messages
      setData({ email: "", password: "" });
      setError(null);
      if (response?.ok) {
        router.push("/");
      } else {
        router.push("/sign-up");
      }
    } catch (error) {
      console.error("Log In Failed !", error);
    }
  };

  return (
    <div className="space-y-16">
      <h1 className="text-4xl m-6 font-bold border-gray-300 text-black-100 justify-center items-center flex">
        Log In
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
      >
        <div className="w-full bg-white rounded-lg shadow border-2 dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
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
              <h1 className="block mt-2 text-sm font-medium text-grey">
                Don&apos;t have an account ?{" "}
                <Link
                  href="/sign-up"
                  className="font-bold text-black-100 underline"
                >
                  Sign Up
                </Link>
              </h1>
            </div>

            <button
              type="submit"
              className="w-full py-[16px] rounded-full bg-red-700 text-white text-[14px] leading-[17px] font-bold"
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
