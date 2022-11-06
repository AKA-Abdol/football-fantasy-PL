import React, { useEffect } from "react";
import PlayGroundBar from "../components/PlayGroundBar";
import SoccerField, { PlayerView } from "../components/SoccerField";
import PageHeader from "../components/PageHeader";
import MainList from "../components/mainListComponents/MainPlayerList";
import FieldModal from "../components/FieldModal";
import DateBar from "../components/DateBar";
import { dummyGenerator } from "../components/SoccerField";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { FieldsPlayer } from "../components/SoccerField";
import SuccessToast, {
  ErrorToast,
  WarningToast,
  successText,
} from "../components/Toasts";
import {} from "../components/Toasts";
import { PlayerToRemoveAtom } from "../components/SelectedPlayer";
import List from "../components/teamList/List";
import { PlaygroundTabAtom } from "../components/PageToggleTab";
import { useNavigate } from "react-router-dom";

export const isErrorVisibleAtom = atom({
  key: "isErrorVisible",
  default: { active: false, msg: "" },
});
export const isSuccessVisibleAtom = atom({
  key: "isSuccessVisible",
  default: { active: false, msg: "" },
});
export const isWarningVisibleAtom = atom({
  key: "isWarningVisible",
  default: { active: false, msg: "" },
});

const dummyData = dummyGenerator();

export const FieldPlayersAtom = atom({
  key: "FieldPlayers",
  default: dummyData,
});

const Transfers = () => {
  const fieldPlayers = useRecoilValue(FieldPlayersAtom);
  const isErrorVisible = useRecoilValue(isErrorVisibleAtom);
  const isSuccessVisible = useRecoilValue(isSuccessVisibleAtom);
  const isWarningVisible = useRecoilValue(isWarningVisibleAtom);
  const playerToRemove = useRecoilValue(PlayerToRemoveAtom);
  const selTab = useRecoilValue(PlaygroundTabAtom);

  const getPlayerName = (player: PlayerView) => {
    console.log("type:", player.type);
    const existed_player = player as FieldsPlayer;
    return existed_player.name ?? "";
  };

  return (
    <div className="w-full">
      <FieldModal
        playerName={
          playerToRemove.length
            ? getPlayerName(fieldPlayers[playerToRemove[0]])
            : ""
        }
        actionText="تعویض"
        buttonColor="red"
      />
      {/* <div className="flex flex-col h-screen w-full theme-font items-center"> */}
      {/* <div className='Header w-full'>
          <PageHeader />
        </div> */}
      <div className="Body w-full flex flex-col items-center justify-center mt-16 lg:space-x-6">
        <DateBar />
        <div className="flex flex-col px-2 w-full lg:w-2/3 lg:flex-row">
          <div className="soccer-field-all w-full px-4 sm:max-w-screen-md flex flex-col items-center">
            <PlayGroundBar />
            {selTab === 1 ? <SoccerField /> : <List />}
          </div>
          <MainList />
        </div>
      </div>
      {/* </div> */}

      {isErrorVisible.active && <ErrorToast message={isErrorVisible.msg} />}
      {isSuccessVisible.active && (
        <SuccessToast message={isSuccessVisible.msg} />
      )}
      {isWarningVisible.active && <WarningToast />}
    </div>
  );
};

export default Transfers;
