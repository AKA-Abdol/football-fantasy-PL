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

interface Detail {
    players: ListProps[],
    title: string
}

const ListItem = (props : Detail) => {
    return (
        <div className="">
            <div className="title-item w-32 rounded bg-placeholderColor text-titleListColor mr-7">{props.title}</div>
            <div className="players">
                {props.players.map(player => {
                    return (
                        <div className="item flex justify-between border-b-2 mx-7">
                            <div className="player-name font-semibold text-nameFontColor text-xs">{player.name}</div>
                            <div className="player-point font-semibold text-nameFontColor text-xs">{player.point}</div>
                            <div className="player-price font-semibold text-nameFontColor text-xs">{player.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListItem;