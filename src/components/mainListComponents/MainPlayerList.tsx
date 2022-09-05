import React, { useEffect, useState } from "react";
import MainListItem from "./ListItem";
import SearchBox from "./SearchBox";
import DetailBox from './DetailBox'
import ListHeader from "../ListHeader";
import MainListButton from "./Button";
import MainListPagination from "./Pagination";
import polygon from "../../assets/Polygon 4.svg"
import axios from "axios";
import { searchKeyAtom } from './SearchBox';
import { useRecoilValue } from "recoil";

const filterButtons: string[] = [
    "All", "GK", "DEF", "MID", "ATT"
]


type Filter = "All" | "GK" | "DEF" | "MID" | "ATT";

interface MainListProps{
    name: string,
    club: string,
    role: string,
    point: number,
    price: number 
}


const MainList = () => {
    const [playerList, setPlayerList] = useState<Array<MainListProps>>([])

    const searchKey = useRecoilValue(searchKeyAtom);
    const [filter, setFilter] = useState<Filter>('All');

    //the api that get all players...

    const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event.currentTarget;
        setFilter(button.name as Filter);
    }

useEffect(() => {
    axios.get(`http://localhost:5000/api/player/all/`)
    .then(res => {
        const allPlayers = res.data.players;
        const list:MainListProps[] = []
        for (let i = 0; i < 17; i = i + 1) {
            let playerObj : MainListProps = {
                name : allPlayers[i].firstName,
                club : allPlayers[i].club,
                role : allPlayers[i].role,
                point : allPlayers[i].point,
                price : allPlayers[i].price
            }

            list.push(playerObj)
        }
        setPlayerList( () => {
            return list
        })
    })

},[])

    return (
        <div className="list max-w-max flex flex-col  ml-auto rounded-2xl shadow-md pb-1 mt-20 h-full">
            <ListHeader />
            <SearchBox />
            <div className="button-group flex justify-center mx-4 flex-row-reverse">
                {
                    filterButtons.map((name) => 
                        (
                            <MainListButton
                                name={name}
                                onclick={handleFilter}
                                selected = {filter === name as Filter}
                            />
                        )
                    )
                }
            </div>
            <DetailBox />
            <div className="flex flex-row-reverse justify-between mx-5 
            text-right text-fontGrey text-xs mb-2">
                <p>نام بازیکن</p>
                <div className="flex items-center">
                    <img src={polygon} alt="vec" className="mr-1px"/>
                    <p>عملکرد</p>
                </div>
                <div className="flex items-center">
                    <img src={polygon} alt="vec" className="mr-1px" />
                    <p>قیمت</p>
                </div>
            </div>
            <div className="bg-white-100 text-right">
                {playerList.map( player => {
                    console.log(playerList)
                    return(
                            <MainListItem
                                name = {player.name}
                                club = {player.club}
                                point = {player.point}
                                price = {player.price}
                                role = {player.role}
                            />
                    )
                })}
            </div>

            <MainListPagination />
        </div>
    )

}

export default MainList;