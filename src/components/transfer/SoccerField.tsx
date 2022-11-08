import React, { useState } from "react";
import { useRecoilState } from "recoil";
import SoccerFieldImg from "../../images/SoccerField.png";
import { HomePlayersAtom } from "../../pages/Home";
import { FieldPlayersAtom } from "../../pages/Transfers";
import DefaultShirt from "./DefaultShirt";
import Shirt, { TransferSelectAtom } from "./Shirt";

const SoccerField = () => {
  const [fieldsPlayer, setFieldsPlayer] = useRecoilState(HomePlayersAtom);
  const [transferSelect, setTransferSelect] =
    useRecoilState(TransferSelectAtom);

  console.log("player", fieldsPlayer);

  const handleClick = () => {
    setTransferSelect(() => {
      const newState: number[] = [];
      return newState;
    });
  };

  return (
    <div
      onClick={handleClick}
      className="soccer-field flex flex-col py-2 sm:space-y-4 w-full h-full relative z-50 justify-around"
    >
      <img
        src={SoccerFieldImg}
        alt="soccer field"
        className="absolute w-full h-[100%] -z-50"
      />
      <div className="w-full px-4 sm:pt-2 flex flex-row justify-around">
        {fieldsPlayer.slice(0, 2).map((item: any) => {
          if (item.isPlaying === true) {
            if (item.type === "Default") {
              return <DefaultShirt key={item.pose} pose={item.pose} />;
            } else {
              return (
                <Shirt isInTheList={false} name={item.name} pose={item.pose} />
              );
            }
          }
          // if (item.type === "Field" && item.isPlaying === true) {
          //   return (
          //     <Shirt isInTheList={false} name={item.name} pose={item.pose} />
          //   );
          // } else {
          //   return <DefaultShirt key={item.pose} pose={item.pose} />;
          // }
        })}
      </div>
      <div
        className={
          // transferSelect
          //   ? `bg-[#111]`
          `w-full  px-4 sm:py-4 flex flex-row justify-around`
        }
      >
        {fieldsPlayer.slice(2, 7).map((item: any) => {
          if (item.isPlaying === true) {
            if (item.type === "Default") {
              return <DefaultShirt key={item.pose} pose={item.pose} />;
            } else {
              return (
                <Shirt isInTheList={false} name={item.name} pose={item.pose} />
              );
            }
          }
          // if (item.isPlaying === true) {
          // if (item.type === "Field" && item.isPlaying === true) {
          //   return (
          //     <Shirt isInTheList={false} name={item.name} pose={item.pose} />
          //   );
          // } else {
          //   return <DefaultShirt key={item.pose} pose={item.pose} />;
          // }
          // }
        })}
      </div>
      <div className="w-full px-4 sm:py-4 flex flex-row justify-around">
        {fieldsPlayer.slice(7, 12).map((item: any) => {
          if (item.isPlaying === true) {
            if (item.type === "Default") {
              return <DefaultShirt key={item.pose} pose={item.pose} />;
            } else {
              return (
                <Shirt isInTheList={false} name={item.name} pose={item.pose} />
              );
            }
          }
          // if (item.type === "Field" && item.isPlaying === true) {
          //   return (
          //     <Shirt isInTheList={false} name={item.name} pose={item.pose} />
          //   );
          // } else {
          //   return <DefaultShirt key={item.pose} pose={item.pose} />;
          // }
        })}
      </div>
      <div className="w-full py-4 px-6 flex flex-row justify-around">
        {fieldsPlayer.slice(12, 15).map((item: any) => {
          if (item.isPlaying === true) {
            if (item.type === "Default") {
              return <DefaultShirt key={item.pose} pose={item.pose} />;
            } else {
              return (
                <Shirt isInTheList={false} name={item.name} pose={item.pose} />
              );
            }
          }
          // if (item.type === "Field" && item.isPlaying === true) {
          //   return (
          //     <Shirt isInTheList={false} name={item.name} pose={item.pose} />
          //   );
          // } else {
          //   return <DefaultShirt key={item.pose} pose={item.pose} />;
          // }
        })}
      </div>
    </div>
  );
};

export default SoccerField;
