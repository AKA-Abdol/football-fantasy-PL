import React from "react";
import PlayGroundBar from "../components/PlayGroundBar";
import SoccerField from "../components/SoccerField";
import PageHeader from "../components/PageHeader";
import MainList from "../components/mainListComponents/MainPlayerList";
import DateBar from "../components/DateBar";

const Home = () => {
    return (
        <div className="flex flex-col h-screen w-full theme-font items-center">
        <div className='Header w-full'>
          <PageHeader/>
        </div>
  
        <div className='Body w-full flex flex-col items-center justify-center lg:flex-row mt-16 lg:space-x-6'>
          <div className='soccer-field-all items-center w-full px-4 sm:max-w-fit flex flex-col'>
            <DateBar/>
            <PlayGroundBar/>
            <SoccerField/>
          </div>
          <MainList/>
        </div>
      </div>
    )
}

export default Home;