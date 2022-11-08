import React, { useState } from "react";
import { atom, useRecoilState } from "recoil";
import SelectedShirt from "../../images/selected_shirt.png";
import In from "../../images/Vector_in.svg";
import Out from "../../images/Vector_out.svg";
import { playerSelectAtom } from "../SoccerField";

export const TransferSelectAtom = atom({
  key: "transferSelectAtom",
  default: [] as number[],
});

const Shirt = ({
  name,
  pose,
  isInTheList,
}: {
  name: string;
  pose: number;
  isInTheList: boolean;
}) => {
  const [transferSelect, setTransferSelect] =
    useRecoilState(TransferSelectAtom);

  const handleClick = () => {
    setTransferSelect(() => {
      let newState = [];
      if (!transferSelect.includes(pose)) {
        newState.push(pose);
      } else {
        newState = [];
      }
      console.log("newState", newState);
      return newState;
    });
  };

  return (
    <div
      className="shirt relative cursor-pointer"
      onClick={(event) => {
        event.stopPropagation();
        handleClick();
      }}
    >
      <div className="flex flex-row relative justify-center">
        <img src={SelectedShirt} alt="shirt" className="flex justify-center" />
        {!isInTheList ? (
          <div className="in-out bg-[#FFE870C9] p-1 rounded absolute bottom-0 right-0 cursor-pointer">
            <img src={Out} alt="vector out" className="w-3 mr-1 mb-auto" />
            <img src={In} alt="vector in" className="w-3 ml-auto mt-auto" />
          </div>
        ) : undefined}
      </div>
      <div
        className={
          transferSelect.includes(pose)
            ? isInTheList
              ? `sm:py-1
            text-black font-bold text-[0.5rem] sm:text-xs
               rounded flex items-center justify-center
               mt-1 p-1 bg-[#05f1ff]`
              : `text-black font-bold text-[0.5rem] sm:text-xs
               rounded flex items-center justify-center
               mt-1 p-1 bg-[#ebff00]`
            : `bg-[#37013B] sm:py-1
             text-white font-bold text-[0.5rem] sm:text-xs
                rounded flex items-center justify-center
                mt-1 p-1`
        }
      >
        {name}
      </div>
    </div>
  );
};

export default Shirt;
