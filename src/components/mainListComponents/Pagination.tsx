import React, {useState} from "react";
import vector from "../../assets/Vector.svg"
import vectorGrey from "../../assets/Vector-low-opacity.svg"
import { atom, useRecoilState } from "recoil";

export const CurrentPageAtom = atom({
    key: "CurrentPage",
    default: 1
})

const MainListPagination = () => {
    const [currentPage, setCurrentPage] = useRecoilState(CurrentPageAtom);
    const allPage = 2;
    // get num of pages
    // get players from backend
    // send number of page to back

    return (
        <div className="pagination flex flex-row-reverse justify-around p-3 mb-7 mt-auto">
            <div className="double-vector flex justify-between rotate-180 cursor-pointer" onClick={() => setCurrentPage(1)}>
                <img src={vectorGrey} alt="" />
                <img src={vectorGrey} alt="" />
            </div>
            <div className="vector w-2 rotate-180 cursor-pointer" onClick={() => (currentPage - 1 >= 1) && setCurrentPage(currentPage - 1)}>
                <img src={vector} alt="vector" />
            </div>
            <div className="text-xs text-nameFontColor flex justify-center" dir="rtl">
                {`${currentPage} از ${allPage}`}
            </div>
            <div className="vector w-2 cursor-pointer" onClick={() => (currentPage + 1 <= allPage) && setCurrentPage(currentPage + 1)}>
                <img src={vector} alt="vector" />
            </div>
            <div className="double-vector flex justify-between cursor-pointer" onClick={() => setCurrentPage(allPage)}>
                <img src={vectorGrey} alt="" />
                <img src={vectorGrey} alt="" />
            </div>
        </div>
    );
}

export default MainListPagination;