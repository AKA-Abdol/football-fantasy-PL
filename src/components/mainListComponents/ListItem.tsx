import React from "react";

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

const ListItem = (props : ListProps) => {
    return (
        <div className="main-item-list  flex justify-between 
        flex-row-reverse border-solid border-t-2 border-borderItemColor mx-5 pt-1">
            <div className="player-name font-bold text-nameFontColor text-xs">
                {props.name}
                <div className="player-name font-bold text-teamFontColor text-9">{props.club}</div>
            </div>
            <div className="player-power text-nameFontColor text-10 pt-10px font-semibold flex justify-center">{props.point}</div>
            <div className="player-cost text-nameFontColor text-10 pt-10px font-semibold ml-4">{props.price}</div>
        </div>
    );
}

export default ListItem;