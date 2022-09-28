import { useState, useEffect } from "react";
import "../index.css";
import PlayGroundBarSideTab from "./PlayGroundBarSideTab";
import { Eng2Fa } from "../UsefullFunctions";
import PToggleTab from "./PageToggleTab";
import DateBar from "./DateBar";
import PlayerLogo from "../images/user-octagon.svg";
import WalletLogo from "../images/empty-wallet.svg";
import RahnemaEngLogo from "../images/rahnema-college-logo-eng.svg";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { FieldPlayersAtom } from "../pages/Transfers";
import { useQuery } from "react-query";
import { getCredit } from "../services/CreditServices";

const MAX_PLAYER = 15;

export default function PlayGroundBar() {
  const fieldPlayers = useRecoilValue(FieldPlayersAtom);

  const { data, isLoading, isError, isFetching } = useQuery(
    ["credit", fieldPlayers],
    getCredit,
    {
      keepPreviousData: true,
    }
  );

  const numOfSelectedPlayerAtom = atom({
    key: "numOfPlayer",
    default: 0,
  });

  const [numOfSelectesPlayer, setNumOfSelectesPlayer] = useRecoilState(
    numOfSelectedPlayerAtom
  );

  const playerNumSetter = () => {
    const filter = fieldPlayers.filter((selected) => selected.type === "Field");
    const number = filter.length;
    setNumOfSelectesPlayer(number);
  };

  useEffect(() => {
    playerNumSetter();
  }, [fieldPlayers]);

  return (
    <div className="px-[4px] flex flex-row w-full bg-white -mb-5 lg:-mb-9 -z-index-[100]">
      <div className="w-[48%] lg:w-[45%] mt-auto lg:mt-0 mr-auto">
        <PlayGroundBarSideTab
          leftText={Eng2Fa(`${MAX_PLAYER}/${MAX_PLAYER - numOfSelectesPlayer}`)}
          rightLogo={PlayerLogo}
          rightText="بازیکن باقی مانده"
        />
      </div>
      <div className="flex flex-col w-[48%] lg:mr-auto lg:flex-row lg:w-full">
        <div className="between-logo min-w-[170px] flex flex-col items-center pl-3 lg:mx-auto -ml-[190px]">
          <div className="bg-white flex items-center justify-center sw-1/4 h-[40%] rounded-lg box-shadow-sm -z-index-[100]">
            <img
              className="py-4 px-1 w-[90%]"
              src={RahnemaEngLogo}
              alt="Rahnema Logo"
            />
          </div>
          <div className="mx-auto w-full">
            <PToggleTab />
          </div>
        </div>
        <div className="w-full lg:w-[45%] ml-auto">
          <PlayGroundBarSideTab
            leftText={
              isError
                ? `Error!`
                : isLoading
                ? `Loading...`
                : Eng2Fa(`${data / 10}`)
            }
            rightLogo={WalletLogo}
            rightText="باقی مانده پول"
          />
        </div>
      </div>
    </div>
  );
}
