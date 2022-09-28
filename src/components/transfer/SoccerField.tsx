import React from "react";
import { useRecoilState } from "recoil";
import SoccerFieldImg from "../../images/SoccerField.png";
import { FieldPlayersAtom } from "../../pages/Transfers";
import DefaultShirt from "./DefaultShirt";
import Shirt from "./Shirt";

const SoccerField = () => {
  const [fieldsPlayer, setFieldsPlayer] = useRecoilState(FieldPlayersAtom);

  return (
    <div className="soccer-field flex flex-col py-2 sm:space-y-4 w-full relative z-50 justify-around">
      <img
        src={SoccerFieldImg}
        alt="soccer field"
        className="absolute w-full h-max -z-50"
      />
      <div className="w-full h-[15%] px-4 mt-5 sm:pt-2 flex flex-row justify-around">
        {fieldsPlayer.slice(0, 1).map((item, index) => {
          if (item.type === "Default") {
            return <DefaultShirt key={item.pose} pose={item.pose} />;
          } else {
            return (
              <Shirt isInTheList={false} name={item.name} pose={item.pose} />
            );
          }
        })}
      </div>
      <div className="w-full h-[15%] px-4 sm:py-4 flex flex-row justify-around">
        {fieldsPlayer.slice(2, 6).map((item) => {
          if (item.type === "Default") {
            return <DefaultShirt key={item.pose} pose={item.pose} />;
          } else {
            return (
              <Shirt isInTheList={false} name={item.name} pose={item.pose} />
            );
          }
        })}
      </div>
      <div className="w-full h-[15%] px-4 sm:py-4 flex flex-row justify-around">
        {fieldsPlayer.slice(7, 11).map((item) => {
          if (item.type === "Default") {
            return <DefaultShirt key={item.pose} pose={item.pose} />;
          } else {
            return (
              <Shirt isInTheList={false} name={item.name} pose={item.pose} />
            );
          }
        })}
      </div>
      <div className="w-full h-[15%] py-4 px-6 flex flex-row justify-around">
        {fieldsPlayer.slice(12, 15).map((item) => {
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