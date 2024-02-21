"use client";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div>
      <section className="text-black-100 body-font">
        <h1 className="flex justify-center items-center text-4xl font-bold">
          {" "}
          Testimonials
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/pfp1.jpg"
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">
                  I&apos;ve tried many car rental apps, but this one stands out.
                  The interface is intuitive, the prices are competitive, and
                  the customer service is exceptional. Will definitely be using
                  it again!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className=" font-semibold title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/pfp2.jpg"
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">
                  Thanks to this car rental app, I was able to find a vehicle at
                  the last minute for my business trip. The process was quick,
                  and I was on the road in no time. Super convenient!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className=" font-semibold title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/pfp3.jpg"
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">
                  I travel frequently for work, and this car rental app has
                  become my go-to solution. It&apos;s reliable, convenient, and
                  offers a wide range of vehicles to suit my needs. Highly
                  recommended for anyone on the go!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className=" font-semibold title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
