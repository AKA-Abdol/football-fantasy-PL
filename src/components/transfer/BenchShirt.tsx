import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import SelectedShirt from "../../images/selected_shirt.png";
import In from "../../images/Vector_in.svg";
import Out from "../../images/Vector_out.svg";
import { dilikhAtom, HomePlayersAtom } from "../../pages/Home";
import { FieldPlayersAtom } from "../../pages/Transfers";
import { swapPlayers } from "../../services/TransferServices";
import { playerSelectAtom } from "../SoccerField";

export const TransferSelectAtom = atom({
  key: "transferSelectAtom",
  default: [] as number[],
});

interface filterFieldsI {
  "1": number[];
  "6": number[];
  "11": number[];
  "14": number[];
}
type filterPose = keyof filterFieldsI;
const filterFields: filterFieldsI = {
  "1": [0],
  "6": [2, 3, 4, 5],
  "11": [7, 8, 9, 10],
  "14": [12, 13],
};

export const BenchShirt = ({
  name,
  pose,
  isInTheList,
}: {
  name: string;
  pose: number;
  isInTheList: boolean;
}) => {
  console.log("pose: ", pose);
  const setDilikh = useSetRecoilState(dilikhAtom);
  //const setFieldsPlayer = useSetRecoilState(HomePlayersAtom);
  const navigate = useNavigate();
  const [transferSelect, setTransferSelect] =
    useRecoilState(TransferSelectAtom);

  const handleClick = async () => {
    await swapPlayers({
      position1: pose,
      position2: transferSelect[0] ?? pose,
    });
    setDilikh(currVal => !currVal);
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
      </div>
      <div
        className={
          (filterFields[pose.toString() as filterPose] ?? []).includes(
            transferSelect[0] ?? -1
          )
            ? `text-black font-bold text-[0.5rem] sm:text-xs
               rounded flex items-center justify-center
               mt-1 p-1 bg-[#05F1FF]`
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
