import React from "react";
import Like from "../../assets/Like.svg";
import Avatar from "../../assets/WIN_20220906_19_33_10_Pro.jpg";
import In from "../../images/Vector_in.svg";
import Out from "../../images/Vector_out.svg";
import Star from "../../images/Vector_star.svg";
const EventItem = () => {
  return (
    <div
      dir="rtl"
      className="event-container bg-[#fbfbfb] p-3 rounded-lg w-[640px] flex"
    >
      <div className="avatar mx-auto flex flex-col justify-center items-center">
        <div className="avatar-photo w-20 h-20 rounded-full mb-1">
          <img src={Avatar} alt="avatar" />
        </div>
        <p className=" text-xs font-semibold mb-2">امیرمحمد مهری</p>
        <div className="like w-5 h-5 cursor-pointer">
          <img src={Like} alt="like" />
        </div>
      </div>
      <div className="detail bg-white rounded-lg w-[484px]  mr-auto py-4 pr-4 text-xs">
        <div className="score font-semibold flex flex-row items-center py-4">
          <div className="">امتیاز هفته</div>
          <div className="score-bar flex flex-row items-center justify-around bg-gradient-to-l
           from-detailListBoxColor1 to-detailListBoxColor2 px-3 rounded mr-4">
            <img src={Star} alt="vector" className="w-3 h-3 ml-1"/>
            <p className="text-base">104</p>
          </div>
        </div>
        <div className="flex">
        <div className="substitution-container w-1/3">
          <p className="font-semibold mb-4">‌تعویض‌ها</p>
          <div className="substitution flex justify-between">
            <div className="col-1">
              <div className="player-in">
                <div className="flex mb-1">
                  <img src={In} alt="vector" className="ml-2"/>
                  <p>yasin</p>
                </div>
                <div className="flex mb-1">
                  <img src={In} alt="vector" className="ml-2"/>
                  <p>yasin</p>
                </div>
                <div className="flex mb-1">
                  <img src={In} alt="vector" className="ml-2"/>
                  <p>yasin</p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="player_out">
                <div className="flex mb-1">
                    <img src={Out} alt="vector" className="ml-2"/>
                    <p>yasin</p>
                  </div>
                  <div className="flex mb-1">
                    <img src={Out} alt="vector" className="ml-2"/>
                    <p>yasin</p>
                  </div>
                  <div className="flex mb-1">
                    <img src={Out} alt="vector" className="ml-2"/>
                    <p>yasin</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div
          className="week text-[#3d195b] bg-[#3d195b0f] w-[106px] h-[30px] mr-auto
         rounded flex justify-center items-center -rotate-90 font-semibold"
        >
          <p>#هفته_پنجم</p>
        </div>
        </div>
      </div>

      
    </div>
  );
};

export default EventItem;
