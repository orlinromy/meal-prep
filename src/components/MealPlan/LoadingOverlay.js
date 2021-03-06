import React from "react";
import mixer from "../../assets/mixer.gif";

const LoadingOverlay = () => {
  return (
    <div className="z-10 grid place-items-center h-screen">
      <div className="z-20 drop-shadow-xl grid place-items-center w-96 h-96 rounded-2xl bg-white">
        <img src={mixer} className="w-8/12"></img>
        <a
          className="text-center mr-8 ml-8 mb-4 text-sm"
          href="https://www.flaticon.com/free-animated-icons/mixer"
          title="mixer animated icons"
        >
          Mixer animated icons created by Freepik - Flaticon
        </a>
        <p className="text-2xl mb-8">Mixing stuff...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
