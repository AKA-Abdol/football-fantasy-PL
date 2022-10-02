import React from "react";
import { useRecoilState } from "recoil";
import SoccerFieldImg from "../../images/SoccerField.png";
import { FieldPlayersAtom } from "../../pages/Transfers";
import DefaultShirt from "./DefaultShirt";
import Shirt from "./Shirt";

const SoccerField = () => {
  const [fieldsPlayer, setFieldsPlayer] = useRecoilState(FieldPlayersAtom);
  console.log("player", fieldsPlayer);

  return (
    <div className="soccer-field flex flex-col py-2 sm:space-y-4 w-full relative z-50 justify-around">
      <img
        src={SoccerFieldImg}
        alt="soccer field"
        className="absolute w-full h-[100%] -z-50"
      />
      <div className="w-full px-4 sm:pt-2 flex flex-row justify-around">
        {fieldsPlayer.slice(0, 2).map((item: any) => {
          if (item.type === "Default") {
            return <DefaultShirt key={item.pose} pose={item.pose} />;
          } else {
            return (
              <Shirt isInTheList={false} name={item.name} pose={item.pose} />
            );
          }
        })}
      </div>
      <div className="w-full  px-4 sm:py-4 flex flex-row justify-around">
        {fieldsPlayer.slice(2, 7).map((item: any) => {
          if (item.type === "Default") {
            return <DefaultShirt key={item.pose} pose={item.pose} />;
          } else {
            return (
              <Shirt isInTheList={false} name={item.name} pose={item.pose} />
            );
          }
        })}
      </div>
      <div className="w-full px-4 sm:py-4 flex flex-row justify-around">
        {fieldsPlayer.slice(7, 12).map((item: any) => {
          if (item.type === "Default") {
            return <DefaultShirt key={item.pose} pose={item.pose} />;
          } else {
            return (
              <Shirt isInTheList={false} name={item.name} pose={item.pose} />
            );
          }
        })}
      </div>
      <div className="w-full py-4 px-6 flex flex-row justify-around">
        {fieldsPlayer.slice(12, 15).map((item: any) => {
          if (item.type === "Default") {
            return <DefaultShirt key={item.pose} pose={item.pose} />;
          } else {
            return (
              <Shirt isInTheList={false} name={item.name} pose={item.pose} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default SoccerField;
