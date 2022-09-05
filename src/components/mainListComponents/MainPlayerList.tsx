import React, { useEffect, useState } from "react";
import MainListItem from "./ListItem";
import SearchBox from "./SearchBox";
import DetailBox from './DetailBox'
import ListHeader from "../ListHeader";
import MainListButton from "./Button";
import MainListPagination from "./Pagination";
import polygon from "../../assets/Polygon 4.svg"
import axios from "axios";


enum Role {
    Defenders,
    Midfielders,
    Goalkeepers,
    Forwards
}

interface MainListProps{
    name: string,
    club: string,
    role: string,
    point: number,
    price: number 
}


const MainList = () => {
    const [playerList, setPlayerList] = useState<Array<MainListProps>>([])

    //the api that get all players...

useEffect(() => {
    axios.get(`http://localhost:5000/api/player/all/`)
    .then(res => {
        const allPlayers = res.data.players;
        const list:MainListProps[] = []
        for (let i = 0; i < 14; i = i + 1) {
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

    const myProps: {name:string[]} = {
        name:["All", "GK", "DEF", "MID", "ATT"]
    }


    return (
        <div className="list max-w-max flex flex-col  ml-auto rounded-2xl shadow-md pb-1 mt-20 h-full">
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

export default MainPlayerList;