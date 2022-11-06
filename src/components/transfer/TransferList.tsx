import React from "react";
import ListHeader from "../ListHeader";
import Shirt from "./Shirt";
import { useRecoilState } from "recoil";
import { FieldPlayersAtom } from "../../pages/Transfers";
import DefaultShirt from "./DefaultShirt";

const TransferList = () => {
  const [fieldsPlayer, setFieldsPlayer] = useRecoilState(FieldPlayersAtom);
  return (
    <div className="list mx-auto w-max h-full flex flex-col ml-auto rounded-2xl shadow-xl">
      <ListHeader text="بازیکنان ذخیره" />
      <div className="w-full px-11 py-10 h-full">
        <div
          className="flex flex-col justify-between
                text-right text-fontGrey text-xs h-full
                rounded-t"
        >
          <div className="w-full px-4 sm:pt-2 flex flex-row justify-around">
            {fieldsPlayer.slice(0, 2).map((item: any) => {
              if (item.isPlaying === false) {
                if (item.type === "Default") {
                  return <DefaultShirt key={item.pose} pose={item.pose} />;
                } else {
                  return (
                    <Shirt
                      isInTheList={false}
                      name={item.name}
                      pose={item.pose}
                    />
                  );
                }
              }
            })}
          </div>
          <div className="w-full  px-4 sm:py-4 flex flex-row justify-around">
            {fieldsPlayer.slice(2, 7).map((item: any) => {
              if (item.isPlaying === false) {
                if (item.type === "Default") {
                  return <DefaultShirt key={item.pose} pose={item.pose} />;
                } else {
                  return (
                    <Shirt
                      isInTheList={false}
                      name={item.name}
                      pose={item.pose}
                    />
                  );
                }
              }
            })}
          </div>
          <div className="w-full px-4 sm:py-4 flex flex-row justify-around">
            {fieldsPlayer.slice(7, 12).map((item: any) => {
              if (item.isPlaying === false) {
                if (item.type === "Default") {
                  return <DefaultShirt key={item.pose} pose={item.pose} />;
                } else {
                  return (
                    <Shirt
                      isInTheList={false}
                      name={item.name}
                      pose={item.pose}
                    />
                  );
                }
              }
            })}
          </div>
          <div className="w-full py-4 px-6 flex flex-row justify-around">
            {fieldsPlayer.slice(12, 15).map((item: any) => {
              if (item.isPlaying === false) {
                if (item.type === "Default") {
                  return <DefaultShirt key={item.pose} pose={item.pose} />;
                } else {
                  return (
                    <Shirt
                      isInTheList={false}
                      name={item.name}
                      pose={item.pose}
                    />
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
