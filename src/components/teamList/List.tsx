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

    console.log("team", fieldPlayers)
    
    return (
        <div className="flex h-full rounded-2xl">
            <div className="">
                <Cover name = "abbas" />
            </div>
            <div className="list content-center w-full" dir="rtl">
                <div className="border-b-2 flex justify-end">
                    <div className="flex flex-row justify-between mx-10 
                    text-right text-fontGrey text-xs mb-2
                    p-2 w-1/4">
                        <div className="flex items-center">
                            <p>عملکرد</p>
                        </div>
                        <div className="flex items-center">
                            <p>قیمت</p>
                        </div>
                    </div>
                </div>
                <ListItem players = {team} title = "دروازه بانان"/>
                <ListItem players={team} title = "مدافعان" />
                <ListItem players={team} title = "هافبک ها" />
                <ListItem players={team} title = "مهاجمین" />

            </div>
        </div>
    );
}

export default List;