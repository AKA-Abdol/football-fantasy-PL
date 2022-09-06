import React from "react";
import { useRecoilState } from "recoil";
import { MainListProps } from "./MainPlayerList";
import { PlayerListAtom } from "./MainPlayerList"
import { playerSelectAtom } from "./../SoccerField"
import { FieldPlayersAtom } from "./../../pages/Home"



const MainListItem = (props: MainListProps) => {

    const [playerList, setPlayerList] = useRecoilState<Array<MainListProps>>(PlayerListAtom)
    const [playerSelect, setPlayerSelect] = useRecoilState(playerSelectAtom)
    const [fieldPlayers, setFieldPlayers] = useRecoilState(FieldPlayersAtom);



    return (
        <div
            onClick={() => {
                if (playerSelect.length) {
                    const playerIndex = playerSelect[0] - 1;
                    setFieldPlayers(prevList => {
                        const newList = [...prevList]
                        newList[playerIndex] = {
                            type: "Field",
                            key: props.pose -1,
                            pose:playerIndex + 1,
                            name: props.name,
                            score: props.playerStats.score,
                        }
                        return newList
                    })
                    setPlayerSelect(() => {
                        return [];
                    })
                }

            }}
            className="main-item-list  flex 
        flex-row-reverse border-solid border-t-2 border-borderItemColor hover:bg-gray-200 mx-5 pt-1 cursor-pointer">
            <div className="player-name font-bold text-nameFontColor text-xs ml-auto w-14">
                {props.name}
                <div className="player-name font-bold text-teamFontColor text-9">{props.club}</div>
            </div>
            <div className="player-power text-nameFontColor text-10 pt-10px font-semibold flex justify-center mx-auto">{props.playerStats.score}</div>
            <div className="player-cost text-nameFontColor text-10 pt-10px font-semibold mr-auto pl-4">{props.playerStats.price}</div>
        </div>
    );
}

export default MainListItem;