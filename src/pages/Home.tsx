import React, { useEffect } from "react";
import PlayGroundBar from "../components/transfer/PlayGroundBar";
import SoccerField, { PlayerView } from "../components/SoccerField";
import PageHeader from "../components/PageHeader";
import MainList from "../components/mainListComponents/MainPlayerList";
import RemoveModal from "../components/RemoveModal";
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
import { TransferPlaygroundTabAtom } from "../components/transfer/PageToggleTab";

const Home = () => {
  const selTab = useRecoilValue(TransferPlaygroundTabAtom);
  const getPlayerName = (player: PlayerView) => {
    console.log("type:", player.type);
    const existed_player = player as FieldsPlayer;
    return existed_player.name ?? "";
  };

  return (
    <div className="w-full">
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
    </div>
  );
};

export default Home;
