import React from "react";

const Error = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center underline underline-1 text-gray-800 text-2xl font-bold m-6 lg:m-10 p-6 lg:p-10 tracking-3">
          ERROR 404 - OOPS! PAGE NOT FOUND
        </div>
        <p className="flex items-center justify-center text-center text-gray-600 text-xl font-semibold m-6 lg:m-10 p-6 lg:p-10 tracking-3">
          Please check the URL for proper spelling and capitalization. If you're
          having trouble locating a destination, try visiting the home page.
        </p>
      </div>
    </>
  );
};

export default Error;
