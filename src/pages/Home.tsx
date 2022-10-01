import React, { useEffect } from "react";
import PlayGroundBar from "../components/transfer/PlayGroundBar";
import { PlayerView } from "../components/SoccerField";
import SoccerField from "../components/transfer/SoccerField";
import PageHeader from "../components/PageHeader";
import MainList from "../components/mainListComponents/MainPlayerList";
import FieldModal from "../components/FieldModal";
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
import NarrowDateBar from "../components/NarrowDateBar";
import TransferList from "../components/transfer/TransferList";
import NarrowDeadlineBar from "../components/NarrowDeadlineBar";

const Home = () => {
  const selTab = useRecoilValue(TransferPlaygroundTabAtom);
  const getPlayerName = (player: PlayerView) => {
    console.log("type:", player.type);
    const existed_player = player as FieldsPlayer;
    return existed_player.name ?? "";
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-row w-2/3 space-x-2">
        <div className="Body flex flex-col mt-16 w-full">
          <div className="flex flex-row w-full justify-between px-1">
            <NarrowDeadlineBar />
            <NarrowDateBar />
          </div>
          <PlayGroundBar />
          {selTab === 1 ? <SoccerField /> : <List />}
        </div>
        <div className="transfer-list-container mt-60">
          <TransferList />
        </div>
      </div>
    </div>
  );
};

export default Home;
