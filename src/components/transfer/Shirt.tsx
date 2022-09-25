import React from "react";
import SelectedShirt from "../../images/selected_shirt.png";
import In from "../../images/Vector_in.svg";
import Out from "../../images/Vector_out.svg";

const Shirt = ({ name, rightIcon }: { name: string; rightIcon: boolean }) => {
  return (
    <div className="shirt relative">
      <div className="flex flex-row relative">
        <img src={SelectedShirt} alt="shirt" className="flex justify-center" />
        {rightIcon
          ? `<div className="in-out bg-[#FFE870C9] p-1 rounded absolute bottom-0 right-0">
          <img src={Out} alt="vector out" className="w-3 mr-1 mb-auto" />
          <img src={In} alt="vector in" className="w-3 ml-auto mt-auto" />
        </div>`
          : ""}
      </div>
      <div
        className="bg-[#37013B] sm:py-1
             text-white font-bold text-[0.5rem] sm:text-xs
                rounded flex items-center justify-center
                mt-1 p-1"
      >
        {name}
      </div>
    </div>
  );
};

export default Shirt;
