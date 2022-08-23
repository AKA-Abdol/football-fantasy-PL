import React from "react";

interface MainListProps{
    name: string,
    team: string,
    power: number,
    cost: number 
}

const MainListItem = (props : MainListProps) => {
    return (
        <div className="main-item-list  flex justify-between 
        flex-row-reverse border-solid border-t-2 border-borderItemColor mx-5 pt-1">
            <div className="player-name font-bold text-nameFontColor text-xs">
                {props.name}
                <div className="player-name font-bold text-teamFontColor text-9">{props.team}</div>
            </div>
            <div className="player-power text-nameFontColor text-10 pt-10px font-semibold flex justify-center">{props.power}</div>
            <div className="player-cost text-nameFontColor text-10 pt-10px font-semibold ml-4">{props.cost}</div>
        </div>
    );
}

export default MainListItem;