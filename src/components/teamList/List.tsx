import React from "react";
import { useRecoilState } from "recoil";
import { FieldPlayersAtom } from "../../pages/Home";
import Cover from "./Cover";
import ListItem from "./ListItem";

enum Role {
    Defenders,
    Midfielders,
    Goalkeepers,
    Forwards
}

interface ListProps{
    name: string,
    club: string,
    role: string,
    point: number,
    price: number 
}


const team: ListProps[] = [
    {
        name : "abbas",
        club: "khar",
        role: "forwards",
        point: 3.4,
        price: 20
    },
    {
        name : "abbas",
        club: "khar",
        role: "forwards",
        point: 3.4,
        price: 20
    },
        {
        name : "abbas",
        club: "khar",
        role: "forwards",
        point: 3.4,
        price: 20
    },

]

const List = () => {

    const [fieldPlayers, setFieldPlayers ] = useRecoilState(FieldPlayersAtom);

    const goalKeepers = fieldPlayers.filter(gk => gk.pose < 2);
    const defenders = fieldPlayers.filter(def => def.pose > 1 && def.pose < 7);
    const mids = fieldPlayers.filter(mid => mid.pose > 6 && mid.pose < 12);
    const attacks = fieldPlayers.filter(att => att.pose > 11 && att.pose < 15)

    console.log("gk", goalKeepers);    
    console.log("def", defenders);
    console.log("mid", mids);
    console.log("att", attacks);
    
    
    
    return (
        <div className="flex h-full rounded-2xl w-full z-[1000]">
            <div className="">
                <Cover name = "abbas" />
            </div>
            <div className="list content-center w-full rounded-r-2xl shadow-2xl" dir="rtl">
                <div className="border-b-2 flex justify-end">
                    <div className="flex flex-row justify-between mx-10 
                    text-right text-fontGrey text-xs mb-2
                    p-2 w-1/4 z-[1000000]">
                        <div className="flex items-center">
                            <p>عملکرد</p>
                        </div>
                        <div className="flex items-center">
                            <p>قیمت</p>
                        </div>
                    </div>
                </div>
                <ListItem players = {goalKeepers} title = "دروازه بانان"/>
                <ListItem players={defenders} title = "مدافعان" />
                <ListItem players={mids} title = "هافبک ها" />
                <ListItem players={attacks} title = "مهاجمین" />

            </div>
        </div>
    );
}

export default List;