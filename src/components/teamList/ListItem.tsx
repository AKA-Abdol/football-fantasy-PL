import React from "react";
import { PlayerView } from "../SoccerField";

interface Detail {
    players: PlayerView[],
    title: string
}

const ListItem = (props : Detail) => {
    return (
        <div className=" ml-7 z-50">
            <div className="title-item font-bold text-sm w-32 rounded bg-placeholderColor text-titleListColor mr-7 px-3 py-1 my-3">{props.title}</div>
            <div className="players">
                {props.players.map(player => {
                    return (
                        <div className="item flex justify-between border-b-2 mr-7">
                            <div className = {`player-name font-semibold text-nameFontColor text-xs px-4 pt-1 pb-2` + 
                                (player.type === "Default" ? ` font-normal ` : ` font-semibold `)}>
                                    {player.type === "Field" ? player.name : "none"}
                                </div>
                            <div className="flex justify-between w-1/4">
                                <div className={`player-point font-semibold text-nameFontColor text-10 pt-1 pb-2`
                            + (player.type === "Default" ? ` font-normal ` : ` font-semibold `)}>{player.type === "Field" ? player.score : "--"}</div>
                                <div className={`player-price font-semibold text-nameFontColor text-10 pt-1 pb-2 ml-7`
                            + (player.type === "Default" ? ` font-normal ` : ` font-semibold `)}>{player.type === "Field" ? player.price / 10 : "--"}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListItem;