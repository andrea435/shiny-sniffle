import Link from 'next/link';
import React from 'react'

export default function Banner() {
  return (
    <div className="w-full">
      <div className="flex bg-white h-[100vh]">
        <div className="flex items-center text-center lg:text-left px-[5%] md:px-[6%] lg:w-1/2">
          <div>
            <h1 className="text-3xl lg:text-7xl font-semibold text-gray-800 md:text-4xl">
              Build Your New <span className="text-indigo-600">Idea</span>
            </h1>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className="h-full object-cover bg-[url('/images/shein.png')]">
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
