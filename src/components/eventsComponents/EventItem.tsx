import React from "react";
import Like from "../../assets/Like.svg";
import Avatar from "../../assets/WIN_20220906_19_33_10_Pro.jpg";
import In from "../../images/Vector_in.svg";
import Out from "../../images/Vector_out.svg";
import Star from "../../images/Vector_star.svg";
import PlayerSubstitution from "./PlayerSubstitution";
const EventItem = () => {
  return (
    <div
      dir="rtl"
      className="max-w-xl event-container py-4 px-1 bg-[#fbfbfb] rounded-lg w-full flex"
    >
      <div className="avatar w-1/4 ml-auto flex flex-col justify-center items-center">
        <div className="avatar-photo w-1/2 rounded-full mb-1">
          <img src={Avatar} alt="avatar" />
        </div>
        <p className=" text-xs font-semibold mb-2">امیرمحمد مهری</p>
        <div className="like w-5 h-5 cursor-pointer">
          <img src={Like} alt="like" />
        </div>
      </div>
      <div className="detail w-3/4 bg-white rounded-lg  mr-auto p-3 text-xs">
        <div className="score font-semibold flex flex-row items-center py-2">
          <div className="">امتیاز هفته</div>
          <div className="score-bar flex flex-row align-middle items-center justify-around bg-gradient-to-l
           from-detailListBoxColor1 to-detailListBoxColor2 px-3 rounded mr-4">
            <img src={Star} alt="vector" className="w-3 mb-[2px] ml-1" />
            <p className="text-base mt-1">104</p>
          </div>
        </div>
        <div className="flex">
          <div className="substitution-container w-full">
            <p className="font-semibold mb-4">‌تعویض‌ها</p>
            <div className="substitution flex flex-col justify-between">
              <PlayerSubstitution />
              <PlayerSubstitution />
              <PlayerSubstitution />
            </div>
          </div>
          <div
            className="week text-[#3d195b] bg-[#3d195b0f] h-1/3 p-1 mr-auto
         rounded flex justify-center items-center -rotate-90 font-semibold text-2xs"
          >
            <p>#هفته_پنجم</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default EventItem;
