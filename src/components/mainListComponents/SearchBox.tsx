import React from "react";
import { atom, useSetRecoilState } from "recoil";
import SearchIcon from "../../assets/search-normal.svg";
import { currentPageAtom } from "./Pagination";
import { DEFAULT_PAGE } from "./MainPlayerList";

export const playerNameSearchKeyAtom = atom({
    key: "playerNameSearchKey",
    default: ""
})
export const usersSearchKeyAtom = atom({
    key: "usersSearchKey",
    default: ""
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
    const setUsersSearchKey = useSetRecoilState(usersSearchKeyAtom);
    const setFollowListSearchKey = useSetRecoilState(followListSearchKeyAtom);
    const setCurrentPage = useSetRecoilState(currentPageAtom);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, whatToSearch: string) => {
        switch (whatToSearch) {
            case "playerName":
                setPlayerNameSearchKey(event.target.value);
                setCurrentPage(DEFAULT_PAGE);
                break;
            case "users":
                setUsersSearchKey(event.target.value);
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