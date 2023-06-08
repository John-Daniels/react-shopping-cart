import React from "react";
import voidIcon from "../../assets/void.svg";

const CovidStats = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <img src={voidIcon} alt="void" className="h-[200px]" />

      <p className="mt-6 text-[grey]">Stats are not available for now!</p>
    </div>
  );
};

export default CovidStats;
