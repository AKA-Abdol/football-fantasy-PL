import React from "react";
import PlayGroundBar from "../components/PlayGroundBar";
import SoccerField from "../components/SoccerField";
import PageHeader from "../components/PageHeader";
import MainList from "../components/mainListComponents/MainPlayerList";
import RemoveModal from './../components/RemoveModal';
import DateBar from "../components/DateBar";
import { dummyGenerator } from './../components/SoccerField'
import { atom, useRecoilState } from "recoil";

const dummyData = dummyGenerator();
console.log(dummyData)

export const FieldPlayersAtom = atom({
  key:"FieldPlayers",
  default:dummyData
})

const Home = () => {

const [fieldPlayers,setFieldPlayers] = useRecoilState(FieldPlayersAtom);


  return (
    <div>
      <RemoveModal
        playerName='bagher'
      />
      <div className="flex flex-col h-screen w-full theme-font items-center">
        <div className='Header w-full'>
          <PageHeader />
        </div>
        <div className='Body w-full flex flex-col items-center justify-center lg:flex-row mt-16 lg:space-x-6'>
          <div className='soccer-field-all w-full px-4 sm:max-w-screen-md flex flex-col items-center'>
            <DateBar />
            <PlayGroundBar />
            <SoccerField
              props={fieldPlayers}
            />
          </div>
          <MainList />
        </div>
      </div>
    </div>

  )
}

export default Home;