"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      {" "}
      <section className="flex items-center h-screen">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <h2 className="pb-2 text-4xl font-bold text-black-100 flex items-center justify-center">
            Facilities
          </h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-2xl font-bold  text-black-100">
                We Offer Superior Services
              </h2>
              <p className="mb-4 text-base leading-7 text-black-100 ">
                At our car rental company, we prioritize providing exceptional
                services to our customers. Whether you're planning a weekend
                getaway or a business trip, we ensure your experience with us is
                nothing short of excellent.
              </p>
              <ul className="mb-10">
                <li className="flex items-center mb-4 text-base text-black-100">
                  <span className="mr-3  text-red-700 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Quality and Affordability
                </li>
                <li className="flex items-center mb-4 text-base text-black-100">
                  <span className="mr-3  text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Easy Booking Process
                </li>
                <li className="flex items-center mb-4 text-base text-black-100">
                  <span className="mr-3  text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Flexible Rental Options
                </li>
                <li className="flex items-center mb-4 text-base text-black-100">
                  <span className="mr-3  text-red-700 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                  </span>
                  Comfort and Convenience
                </li>
              </ul>
            </div>
            <div className="about__image-container">
              <motion.div
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="about__image"
              >
                <Image
                  src="/about.png"
                  alt="about"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
