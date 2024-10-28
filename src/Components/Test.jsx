import React from 'react';

function Test() {
  return (
    <div>
      <ul>
        <li className="relative flex flex-col gap-2">
          <div className="flex items-center h-3 gap-4">
            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-1.5 text-white"></span>
            <h6 className="block font-sans text-base antialiased font-semibold leading-none tracking-normal text-blue-gray-900">
              Timeline Title Here.
            </h6>
          </div>
          <div className="flex gap-4 pb-8">
            <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
            <div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
              </p>
            </div>
          </div>
        </li>

        <li className="relative flex flex-col gap-2">
          <span className="absolute left-0 grid justify-center transition-opacity duration-200 bg-transparent">
            <span className="h-full w-0.5 bg-blue-gray-100"></span>
          </span>
          <div className="flex items-center h-3 gap-4">
            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-1.5 text-white"></span>
            <h6 className="block font-sans text-base antialiased font-semibold leading-none tracking-normal text-blue-gray-900">
              Timeline Title Here.
            </h6>
          </div>
          <div className="flex gap-4 pb-8">
            <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
            <div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
              </p>
            </div>
          </div>
        </li>

        <li className="relative flex flex-col gap-2">
          <div className="flex items-center h-3 gap-4">
            <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-gray-900 p-1.5 text-white"></span>
            <h6 className="block font-sans text-base antialiased font-semibold leading-none tracking-normal text-blue-gray-900">
              Timeline Title Here.
            </h6>
          </div>
          <div className="flex gap-4">
            <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
            <div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started. I'm up to something. Fan luv.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};



export default Test