import React from "react";
import Shirt from "../../images/default_shirt.png";
import In from "../../images/Vector_in.svg";
import Out from "../../images/Vector_out.svg";

const DefaultShirt = ({ pose }: { pose: number }) => {
  return (
    <div className="shirt relative w-[15%]">
      <div className="flex flex-row relative justify-center">
        <img src={Shirt} alt="shirt" className="flex justify-center" />
      </div>
    </div>
  );
};

export default DefaultShirt;
