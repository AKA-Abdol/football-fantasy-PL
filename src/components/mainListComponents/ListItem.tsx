import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MainListProps } from "./MainPlayerList";
import { PlayerListAtom } from "./MainPlayerList";
import { playerSelectAtom } from "./../SoccerField";
import { FieldPlayersAtom } from "../../pages/Transfers";
import { addPlayer, ErrorMessageAtom } from "../../services/MainListServices";
import { makeWebName } from "../../UsefullFunctions";
import { toastShow } from "../FieldModal";
import {
  isSuccessVisibleAtom,
  isErrorVisibleAtom,
} from "../../pages/Transfers";

const MainListItem = (props: MainListProps) => {
  const [playerSelect, setPlayerSelect] = useRecoilState(playerSelectAtom);
  const setFieldPlayers = useSetRecoilState(FieldPlayersAtom);
  const setIsSuccessVisible = useSetRecoilState(isSuccessVisibleAtom);
  const setIsErrorVisible = useSetRecoilState(isErrorVisibleAtom);
  const [errorMessage, setErrorMessage] = useRecoilState(ErrorMessageAtom);

  return (
    <div
      onClick={async () => {
        const playerIndex = playerSelect[0];
        console.log("selPlayerIndex:", playerIndex);
        const response = await addPlayer(playerIndex, props.id);
        if (playerSelect.length && response.isSuccessful) {
          setFieldPlayers((prevList) => {
            const newList = [...prevList];
            newList[playerIndex] = {
              type: "Field",
              key: props.pose,
              pose: playerIndex,
              name: makeWebName(props.name),
              score: props.playerStats.score,
              price: props.playerStats.price,
              isPlaying: props.isPlaying,
            };
            return newList;
          });
          setPlayerSelect(() => {
            return [];
          });
          toastShow(setIsSuccessVisible, "بازیکن با موفقیت اضافه شد");
        } else if (playerSelect.length && !response.isSuccessful) {
          console.log("isAdd false shod");
          toastShow(setIsErrorVisible, response.res);
        }
      }}
      className="main-item-list  flex 
        flex-row-reverse border-solid border-t-2 border-borderItemColor hover:bg-gray-200 pt-1 cursor-pointer"
    >
      <div className="player-name font-bold text-nameFontColor text-xs ml-auto w-14">
        {props.name}
        <div className="player-name font-bold text-teamFontColor text-9">
          {props.club}
        </div>
      </div>
      <div className="player-power text-nameFontColor text-10 pt-10px font-semibold flex justify-center mx-auto">
        {props.playerStats.score}
      </div>
      <div className="player-cost text-nameFontColor text-10 pt-10px font-semibold mr-auto pl-4">
        {props.playerStats.price / 10}
      </div>
    </div>
  );
};

export default MainListItem;
