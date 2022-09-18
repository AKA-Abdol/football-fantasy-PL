import React from "react";
import { atom, useSetRecoilState } from "recoil";
import SearchIcon from "../../assets/search-normal.svg";
import { currentPageAtom } from "./Pagination";
import { DEFAULT_PAGE } from "./MainPlayerList";

export const searchKeyAtom = atom({
    key: "SearchKey",
    default: ""
})

const SearchBox = () => {

    const setSearchKey = useSetRecoilState(searchKeyAtom);
    const setCurrentPage = useSetRecoilState(currentPageAtom);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(event.target.value);
        setCurrentPage(DEFAULT_PAGE);
    }

    return (
        <div className="search-box border-solid border-b-2 border-borderSearchBoxColor mt-20px flex justify-end w-full ">
            <div className="mb-2">
                <input type="text" name="" id="" placeholder="جستجو" dir="rtl" onChange={handleSearch}  className=" w-full text-sm placeholder-placeholderColor placeholder-opacity-70 focus:outline-none"/>
            </div>
            <div className="mr-3 mb-1">
                <img src={SearchIcon} alt="search icon" className="ml-2"/>
            </div>
        </div>
    );
}

export default SearchBox;