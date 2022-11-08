import React, { useEffect } from "react";
import PlayGroundBar from "../components/transfer/PlayGroundBar";
import { addPlayersToField, PlayerView } from "../components/SoccerField";
import SoccerField from "../components/transfer/SoccerField";
import PageHeader from "../components/PageHeader";
import MainList from "../components/mainListComponents/MainPlayerList";
import FieldModal from "../components/FieldModal";
import { dummyGenerator } from "../components/SoccerField";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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
import ResponsiveList from "../components/transfer/ResponsiveList";
import { getTeamPlayers } from "../services/TeamPlayerServices";
import { TOKEN_SESSION_NAME } from "../services/SignServices";
import { FieldPlayersAtom } from "./Transfers";

export const dilikhAtom = atom({
  key: 'dilikh',
  default: false,
})

export const HomePlayersAtom = atom({
  key: 'home-players',
  default: dummyGenerator(),
})

const Home = () => {
  const selTab = useRecoilValue(TransferPlaygroundTabAtom);
  const dilikh = useRecoilValue(dilikhAtom);
  const setFieldsPlayer = useSetRecoilState(HomePlayersAtom);
  const getPlayerName = (player: PlayerView) => {
    console.log("type:", player.type);
    const existed_player = player as FieldsPlayer;
    return existed_player.name ?? "";
  };

  useEffect(() => {
    const setProps = async () => {
      const response = await getTeamPlayers();
      if (response.isSuccessful) {
        setFieldsPlayer(addPlayersToField(response.res));
        return;
      }

      switch (response.errorType) {
        case "NotAuthorized":
          localStorage.removeItem(TOKEN_SESSION_NAME);
          //navigate('/');
          break;
        default:
          console.log("was here");
      }
    };
    setProps();
  }, [dilikh]);

  return (
    <div className="w-full flex justify-center">
      <div className="md:flex md:flex-row w-2/3 space-x-2">
        <div className="Body flex flex-col mt-16 w-full">
          <div className="md:flex md:flex-row w-full justify-between px-1">
            <NarrowDeadlineBar />
            <NarrowDateBar />
          </div>
          <PlayGroundBar />
          {selTab === 1 ? <SoccerField /> : <List />}
        </div>
        <div className="transfer-list-container mt-60 hidden md:block">
          <TransferList />
        </div>
        <div className="responsive-list md:hidden w-[100%]">
          <ResponsiveList />
        </div>
      </div>
    </div>
  );
};

export default Home;


