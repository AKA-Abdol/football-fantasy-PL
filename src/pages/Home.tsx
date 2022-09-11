import React from "react";
import PlayGroundBar from "../components/PlayGroundBar";
import SoccerField, { PlayerView } from "../components/SoccerField";
import PageHeader from "../components/PageHeader";
import MainList from "../components/mainListComponents/MainPlayerList";
import RemoveModal from './../components/RemoveModal';
import DateBar from "../components/DateBar";
import { dummyGenerator } from './../components/SoccerField'
import { atom, useRecoilState } from "recoil";
import { useQuery } from "react-query";
import { getTeamPlayers } from "../services/TeamPlayerServices";
import { DefaultView } from "../components/SoccerField";
import { FieldsPlayer } from "../components/SoccerField";
import { makeWebName } from "../UsefullFunctions";
import SuccessToast, { ErrorToast, WarningToast, successText } from "../components/Toasts";
import { } from "./../components/Toasts"
import { PlayerToRemoveAtom } from "./../components/SelectedPlayer"
import { playerSelectAtom } from "./../components/SoccerField"


export const isErrorVisibleAtom = atom({
  key: "isErrorVisible",
  default: { active: false, msg: "" }
})
export const isSuccessVisibleAtom = atom({
  key: "isSuccessVisible",
  default: { active: false, msg: "" }
})
export const isWarningVisibleAtom = atom({
  key: "isWarningVisible",
  default: { active: false, msg: "" }
})

const dummyData = dummyGenerator();
console.log(dummyData)

export const FieldPlayersAtom = atom({
  key: "FieldPlayers",
  default: dummyData
})

interface PlayerProps {
  firstName: string,
  secondName: string,
  club: string,
  role: string,
  id: number,
  positionNum: number,
  playerStats: {
    score: number,
    price: number,
    weekId: number
  }
}

const make_mockett = () => {
  const list: Array<PlayerView> = [];
  for (let i = 0; i < 15; i++) {
    const new_player: DefaultView = {
      type: "Default",
      pose: i,
    };
    list.push(new_player);
  }
  return list;
}

const dbPlayerToFieldsPlayer = (dbPlayer: PlayerProps) => {
  const newFieldsPlayer: FieldsPlayer = {
    type: "Field",
    pose: dbPlayer.positionNum,
    name: makeWebName(`${dbPlayer.secondName}`),
    score: dbPlayer.playerStats.score,
    key: dbPlayer.positionNum
  }
  return newFieldsPlayer;
}

const addPlayersToField = (dbPlayers: PlayerProps[]) => {
  const list = make_mockett();
  dbPlayers.forEach((player) => {
    list.splice(player.positionNum, 1, dbPlayerToFieldsPlayer(player));
  })
  return list;
}



const Home = () => {

  const [fieldPlayers, setFieldPlayers] = useRecoilState(FieldPlayersAtom);
  const [isErrorVisible, setIsErrorVisible] = useRecoilState(isErrorVisibleAtom);
  const [isSuccessVisible, setIsSuccessVisible] = useRecoilState(isSuccessVisibleAtom);
  const [isWarningVisible, setIsWarningVisible] = useRecoilState(isWarningVisibleAtom);
  const [playerToRemove, setPlayerToRemove] = useRecoilState(PlayerToRemoveAtom)
  const [playerSelect, setPlayerSelect] = useRecoilState(playerSelectAtom)




  const { data, isLoading, isError } = useQuery("teamPlayers", async () => {
    const players = await getTeamPlayers();
    console.log('here');
    setFieldPlayers(addPlayersToField(players));
    return players;
  });

  const getPlayerName = (player: PlayerView) => {
    console.log("type:", player.type)
    const existed_player = player as FieldsPlayer;
    return existed_player.name ?? '';
  }


  return (
    <div className="relative">
      <RemoveModal
        playerName={playerToRemove.length ? getPlayerName(fieldPlayers[playerToRemove[0]]) : ""}
      />
      <div className="flex flex-col h-screen w-full theme-font items-center">
        <div className='Header w-full'>
          <PageHeader />
        </div>
        <div className='Body w-full flex flex-col items-center justify-center mt-16 lg:space-x-6'>
          <DateBar />
          <div className="flex flex-col px-2 w-full lg:w-2/3 lg:flex-row">
            <div className='soccer-field-all w-full px-4 sm:max-w-screen-md flex flex-col items-center'>

              <PlayGroundBar />
              <SoccerField
                props={fieldPlayers}
              />
            </div>
            <MainList />
          </div>

        </div>






      </div>
      {isErrorVisible.active && <ErrorToast message={isErrorVisible.msg} />}
      {isSuccessVisible.active && <SuccessToast message={isSuccessVisible.msg} />}
      {isWarningVisible.active && <WarningToast />}
    </div>

  )
}

export default Home;