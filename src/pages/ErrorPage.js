import React from "react";
const ErrorPage = () => {
  return (
    <div className="flex flex-column justify-center items-center text-center h-[80vh] overflow-hidden px-3">
      <p className="text-7xl mb-4">🤯</p>
      <p className="text-3xl">Oops, something went wrong</p>
      <p className="text-xl mt-4">...try again maybe?</p>
      <button
        onClick={() => {
          window.location.reload();
        }}
        className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-xl hover:bg-[#517c74] mt-8"
      >
        Take me back
      </button>
    </div>
  );
};

export default ErrorPage;
