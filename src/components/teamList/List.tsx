import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FieldPlayersAtom } from "../../pages/Transfers";
import Cover from "./Cover";
import ListItem from "./ListItem";

const List = () => {

    const fieldPlayers = useRecoilValue(FieldPlayersAtom);

    const goalKeepers = fieldPlayers.filter(gk => gk.pose < 2);
    const defenders = fieldPlayers.filter(def => def.pose > 1 && def.pose < 8);
    const mids = fieldPlayers.filter(mid => mid.pose > 7 && mid.pose < 13);
    const attacks = fieldPlayers.filter(att => att.pose > 12 && att.pose < 16);

    console.log(fieldPlayers);
    

    return (
        <div className="flex h-full rounded-2xl w-full z-50relative px-1 rounded-tl-lg">
            <div className="w-[45%]">
                <Cover name = "abbas" />
            </div>
            <div className="list content-center w-full rounded-r-2xl shadow-2xl h-full" dir="rtl">
                <div className="border-b-2 flex justify-end  bg-white rounded-tr-2xl">
                    <div className="flex flex-row justify-between mx-10 
                    text-right text-fontGrey text-xs mb-2
                    p-2 w-1/4 z-[1000] relative ">
                        <div className="flex items-center">
                            <p>عملکرد</p>
                        </div>
                        <div className="flex items-center">
                            <p>قیمت</p>
                        </div>
                    </div>
                </div>
                <div className="pb-8">
                    <ListItem players = {goalKeepers} title = "دروازه بانان"/>
                    <ListItem players={defenders} title = "مدافعان" />
                    <ListItem players={mids} title = "هافبک ها" />
                    <ListItem players={attacks} title = "مهاجمین" />
                </div>

            </div>
        </div>
    );
}

export default List;