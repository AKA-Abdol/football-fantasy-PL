import { useState } from 'react';
import '../index.css';
import  PlayGroundBarSideTab from './PlayGroundBarSideTab';
import { Eng2Fa } from '../UsefullFunctions';
import PToggleTab from './PageToggleTab';
import DateBar from './DateBar';
import PlayerLogo from '../images/user-octagon.svg';
import WalletLogo from '../images/empty-wallet.svg';
import RahnemaEngLogo from '../images/rahnema-college-logo-eng.svg'


const MAX_PLAYER = 15;

interface StateInterface{
    playerCount: number,
    money: number,
    selTab: number
};

export default function PlayGroundBar(){
    const [PGState, setPGState] = useState<StateInterface>({
        playerCount: 12,
        money: 68.3,
        selTab: 1
    });
    return (
        <div className="px-[4px] flex flex-row w-full bg-white justify-around -mb-4 -z-index-[100]">
            <PlayGroundBarSideTab
                leftText={Eng2Fa(`${MAX_PLAYER}/${PGState.playerCount}`)}
                rightLogo={PlayerLogo}
                rightText='بازیکن باقی مانده'
            />
            <div className='between-logo flex flex-col w-1/3 items-center'>
                <div className='bg-white sw-1/4 h-1/2 rounded-lg box-shadow-sm -z-index-[100]'>
                    <img className='mb-5 -mt-1' src={RahnemaEngLogo} alt='Rahnema Logo'/>
                </div>
                <PToggleTab
                    currentTab={PGState.selTab}
                    setSelTab={setPGState}
                />
            </div>
            <PlayGroundBarSideTab
                leftText={Eng2Fa(`${PGState.money}`)}
                rightLogo={WalletLogo}
                rightText='باقی مانده پول'
            />
        </div>
    );
}
