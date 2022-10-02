import React, { useState } from "react";
import { atom, useSetRecoilState } from "recoil";
import SearchIcon from "../../assets/search-normal.svg";
import { currentPageAtom } from "./Pagination";
import { DEFAULT_PAGE } from "./MainPlayerList";
import { getSearchedUsers, EventUser } from "../../services/EventServices";
import { useQuery } from "react-query";

export const playerNameSearchKeyAtom = atom({
    key: "playerNameSearchKey",
    default: ""
})
export const resultedUsersAtom = atom({
    key: "resultedUsers",
    default: [] as EventUser[]
})
export const followListSearchKeyAtom = atom({
    key: "followListSearchKey",
    default: ""
})

interface SearchBoxI {
    whatToSearch: "playerName" | "users" | "followList",
}



const SearchBox = (props: SearchBoxI) => {

    const setPlayerNameSearchKey = useSetRecoilState(playerNameSearchKeyAtom);
    const setResultedUsers = useSetRecoilState(resultedUsersAtom);
    const setFollowListSearchKey = useSetRecoilState(followListSearchKeyAtom);
    const setCurrentPage = useSetRecoilState(currentPageAtom);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, whatToSearch: string) => {
        switch (whatToSearch) {
            case "playerName":
                setPlayerNameSearchKey(event.target.value);
                setCurrentPage(DEFAULT_PAGE);
                break;

            case "users":
                const searchKey = event.target.value;
                const handleSearchedUsers = async () => {
                    const searchedUsers = await getSearchedUsers(searchKey);
                    console.log('resulted users in searchbox: ', searchedUsers);
                    
                    setResultedUsers(() => searchedUsers);
                }
                if(searchKey === ''){
                    setResultedUsers(() => []);
                }
                else{
                    handleSearchedUsers();
                }
                break;

            case "followList":
                setFollowListSearchKey(event.target.value);
                break;
            default:
            // code block
        }


    }

    return (
        <div className="search-box border-solid border-b-2 border-borderSearchBoxColor mt-20px flex justify-end w-full ">
            <div className="mb-2 w-full">
                <input type="text" name="" id="" placeholder="جستجو" dir="rtl" onChange={(event) => handleSearch(event, props.whatToSearch)} className=" w-full text-sm placeholder-placeholderColor placeholder-opacity-70 focus:outline-none" />
            </div>
            <div className="mr-3 mb-1">
                <img src={SearchIcon} alt="search icon" className="ml-2" />
            </div>
        </div>
    );
}

export default SearchBox;