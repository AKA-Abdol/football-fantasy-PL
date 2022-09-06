import React, { useEffect } from "react";
import MainListItem from "./MainListItem";
import SearchBox from "./SearchBox";
import DetailBox from './DetailBox'
import ListHeader from "../ListHeader";
import MainListButton from "./MainListButton";
import MainListPagination from "./MainListPagination";
import polygon from "../../assets/Polygon 4.svg";
import axios from "axios";
import { atom, useRecoilState } from "recoil";




// const playerList: MainListProps[] = [
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "asghar",
//         team: "gav",
//         power: 45,
//         cost: 37
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "asghar",
//         team: "gav",
//         power: 45,
//         cost: 37
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "asghar",
//         team: "gav",
//         power: 45,
//         cost: 37
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "asghar",
//         team: "gav",
//         power: 45,
//         cost: 37
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },
//     {
//         name: "abbas",
//         team: "khar",
//         power: 40,
//         cost: 24
//     },



// ];

// interface MainListProps {
//     name: string,
//     team: string,
//     power: number,
//     cost: number
// }
export interface MainListProps {
    name: string,
    club: string,
    role: string,
    pose:number,
    playerStats: {
        score: number,
        price: number,
        weekId: number
    }
}

export const PlayerListAtom = atom({
    key: "playerList",
    default: [] as MainListProps[]
})


const MainPlayerList = () => {

    const [playerList,setPlayerList] = useRecoilState<Array<MainListProps>>(PlayerListAtom)

    useEffect(() => {
        axios.get("http://localhost:5000/api/player/all/")
            .then(res => {
                const allPlayers = res.data.players;
                const list: MainListProps[] = []
                for (let i = 0; i < 14; i = i + 1) {
                    let playerObj: MainListProps = {
                        name: allPlayers[i].firstName,
                        club: allPlayers[i].club,
                        role: allPlayers[i].role,
                        pose:i,
                        playerStats: allPlayers[i].playerStats
                    }

                    list.push(playerObj)
                }

                setPlayerList(() => {
                    console.log("ListeBazikonaaaaa",list)
                    return list
                })
            })

    }, []);

    const myProps: { name: string[] } = {
        name: ["All", "GK", "DEF", "MID", "ATT"]
    }
    return (
        <div className="list mx-auto max-w-max flex flex-col  ml-auto rounded-2xl shadow-md pb-1 mt-20 h-full">
            <ListHeader />
            <SearchBox />
            <div className="button-group flex justify-center mx-4 flex-row-reverse">
                <MainListButton
                    name={myProps.name[0]} />

                <MainListButton
                    name={myProps.name[1]} />

                <MainListButton
                    name={myProps.name[2]} />

                <MainListButton
                    name={myProps.name[3]} />

                <MainListButton
                    name={myProps.name[4]} />



            </div>
            <DetailBox />
            <div className="flex flex-row-reverse justify-between mx-5 
            text-right text-fontGrey text-xs mb-2">
                <p>نام بازیکن</p>
                <div className="flex items-center">
                    <img src={polygon} alt="vec" className="mr-1px" />
                    <p>عملکرد</p>
                </div>
                <div className="flex items-center">
                    <img src={polygon} alt="vec" className="mr-1px" />
                    <p>قیمت</p>
                </div>
            </div>
            <div className="bg-white-100 text-right">
                {playerList.map(player => {
                    return (
                        <MainListItem
                            name={player.name}
                            club={player.club}
                            role={player.role}
                            pose={player.pose}
                            playerStats={player.playerStats}
                        />

                    )
                })}
            </div>

            <MainListPagination />
        </div>
    )

}

export default MainPlayerList;