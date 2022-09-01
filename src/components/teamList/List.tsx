import React from "react";
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

    
    return (
        <div className="list h-full" dir="rtl">
            <div className="flex flex-row justify-between mx-7 
            text-right text-fontGrey text-xs mb-2
            border-b-2 p-2">
                <p></p>
                <div className="flex items-center">
                    <p>عملکرد</p>
                </div>
                <div className="flex items-center">
                    <p>قیمت</p>
                </div>
            </div>
             <ListItem players = {team} title = "عباس"/>
             <ListItem players={team} title = "اصغر" />
        </div>
    );
}

export default List;