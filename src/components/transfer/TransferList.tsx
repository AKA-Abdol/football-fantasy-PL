import React from "react";
import ListHeader from "../ListHeader";
import Shirt from "./Shirt";
import { useRecoilState } from "recoil";
import { FieldPlayersAtom } from "../../pages/Transfers";
import DefaultShirt from "./DefaultShirt";
import { BenchShirt } from "./BenchShirt";
import { HomePlayersAtom } from "../../pages/Home";

type BenchPose = 1 | 6 | 11 | 14;
const benchPoseList: BenchPose[] = [1, 6, 11, 14];

const TransferList = () => {
  const [fieldsPlayer, setFieldsPlayer] = useRecoilState(HomePlayersAtom);
  return (
    <div className="list mx-auto w-max h-full flex flex-col ml-auto rounded-2xl shadow-xl">
      <ListHeader text="بازیکنان ذخیره" />
      <div className="w-full px-11 py-10 h-full">
        <div
          className="flex flex-col justify-between
                text-right text-fontGrey text-xs h-full
                rounded-t"
        >
          {benchPoseList.map((current) => {
            const currBenchPlayer = fieldsPlayer[current];
            if (currBenchPlayer.type === "Default") {
              return (
                <DefaultShirt
                  key={currBenchPlayer.pose}
                  pose={currBenchPlayer.pose}
                />
              );
            } else {
              return (
                <BenchShirt
                  isInTheList={true}
                  name={currBenchPlayer.name}
                  pose={currBenchPlayer.pose}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TransferList;
