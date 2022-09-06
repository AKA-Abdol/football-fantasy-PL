import React, { useCallback, useEffect, useState } from "react";
import MainListItem from "./ListItem";
import SearchBox from "./SearchBox";
import DetailBox from './DetailBox'
import ListHeader from "../ListHeader";
import MainListButton from "./Button";
import MainListPagination from "./Pagination";
import polygon from "../../assets/Polygon 4.svg"
import { searchKeyAtom } from './SearchBox';
import { currentPageAtom } from "./Pagination";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useQuery } from "react-query";
import { getPlayers } from "../../services/MainListServices";

interface FilterField {
    name: string,
    filterName: string
}

const filterButtons: FilterField[] = [
    {
        name: "All",
        filterName: "All"
    },
    {
        name: "GK",
        filterName: "Goalkeepers"
    },
    {
        name: "DEF",
        filterName: "Defenders"
    },
    {
        name: "MID",
        filterName: "Midfielders"
    },
    {
        name: "ATT",
        filterName: "Forwards"
    }
]


export type Filter = "All" | "Goalkeepers" | "Defenders" | "Midfielders" | "Forwards";


export interface MainListProps {
    name: string,
    club: string,
    role: string,
    pose: number,
    playerStats: {
        score: number,
        price: number,
        weekId: number
    }
}

export const DEFAULT_PAGE = 1;
export const maxPageAtom = atom({
    key: "maxPage",
    default: DEFAULT_PAGE
})

export const PlayerListAtom = atom({
    key: "playerList",
    default: [] as MainListProps[]
})

export const FilterAtom = atom({
    key:"filter",
    default:"All" as Filter
})

export const NUM_OF_PLAYERS = 16;

const MainList = () => {

    const searchKey = useRecoilValue(searchKeyAtom);
    const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
    const [filter, setFilter] = useRecoilState(FilterAtom);
    const setMaxPage = useSetRecoilState(maxPageAtom);

    const make_query = useCallback( () => {
        let query = '?';
        query += `page=${currentPage}&num=${NUM_OF_PLAYERS}&search=${searchKey}&role=${filter}`;
        return query;
    }, [currentPage, searchKey, filter]);

    const {data, isLoading, isError} = useQuery(['playersList', currentPage, searchKey, filter], async () => {
        const [ players, maxPlayer ] = await getPlayers(make_query());
        setMaxPage(Math.ceil(maxPlayer / NUM_OF_PLAYERS));
        return players;
    });

    //the api that get all players...

    const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event.currentTarget;
        console.log("buttonName:", button.name);
        setFilter(button.name as Filter);
        setCurrentPage(DEFAULT_PAGE);
    }

    return (
        <div className="list mx-auto max-w-max flex flex-col  ml-auto rounded-2xl shadow-md pb-1 mt-4 h-full">
            <ListHeader />
            <SearchBox />
            <div className="button-group flex justify-center mx-4 flex-row-reverse">

                {
                    filterButtons.map(({name, filterName}: FilterField) => 
                        (
                            <MainListButton
                                name={filterName}
                                inner={name}
                                onclick={handleFilter}
                                selected = {filterName as Filter === filter}
                            />
                        )
                    )
                }

            </div >
            <DetailBox />
            <div className="flex flex-row-reverse justify-between mx-5 
                text-right text-fontGrey text-xs mb-2">
                <p className="w-16">نام بازیکن</p>
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
                {isError ? (<div>Error!</div>) :
                 isLoading ? (<div>Loading!</div>) :
                 (data.map( (player: any) => {
                    return(
                            <MainListItem
                                name = {player.secondName}
                                club = {player.club}
                                role = {player.role}
                                pose = {player.pose}
                                playerStats = {player.playerStats}
                            />
                    )
                }))}
            </div>

            <MainListPagination />
        </div >
    )

}

export default MainList;