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
        <div className=" ml-7">
            <div className="title-item font-bold text-sm w-32 rounded bg-placeholderColor text-titleListColor mr-7 px-3 py-1 my-3">{props.title}</div>
            <div className="players">
                {props.players.map(player => {
                    return (
                        <div className="item flex justify-between border-b-2 mr-7">
                            <div className="player-name font-semibold text-nameFontColor text-xs px-4 pt-1 pb-2">{player.name}</div>
                            <p></p>
                            <p></p>
                            <p></p>
                            <div className="player-point font-semibold text-nameFontColor text-10 pt-1 pb-2">{player.point}</div>
                            <div className="player-price font-semibold text-nameFontColor text-10 pt-1 pb-2 ml-7">{player.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListItem;