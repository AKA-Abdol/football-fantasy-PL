import React, {useState} from "react";
import vector from "../../assets/Vector.svg"
import vectorGrey from "../../assets/Vector-low-opacity.svg"
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { maxPageAtom } from "./MainPlayerList";

export const currentPageAtom = atom({
    key: "CurrentPage",
    default: 1
})

interface MainListPagProps {
    disabled: boolean
}

const MainListPagination = ({ disabled }: MainListPagProps) => {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
    const allPage = useRecoilValue(maxPageAtom);
    console.log("pagination again: ", allPage);

    return (
        <div className="pagination flex flex-row-reverse justify-around p-3 mt-auto">
            <div className={`double-vector flex justify-between rotate-180 cursor-pointer ${disabled ? 'pointer-events-none' : ''}`} onClick={() => setCurrentPage(1)}>
                <img src={vectorGrey} alt="" />
                <img src={vectorGrey} alt="" />
            </div>
            <div className={`vector w-2 rotate-180 cursor-pointer ${disabled ? 'pointer-events-none' : ''}`} onClick={() => (currentPage - 1 >= 1) && setCurrentPage(currentPage - 1)}>
                <img src={vector} alt="vector" />
            </div>
            <div className="text-xs text-nameFontColor flex justify-center" dir="rtl">
                {`${currentPage} از ${allPage}`}
            </div>
            <div className={`vector w-2 cursor-pointer ${disabled ? 'pointer-events-none' : ''}`} onClick={() => (currentPage + 1 <= allPage) && setCurrentPage(currentPage + 1)}>
                <img src={vector} alt="vector" />
            </div>
            <div className={`double-vector flex justify-between cursor-pointer ${disabled ? 'pointer-events-none' : ''}`} onClick={() => setCurrentPage(allPage)}>
                <img src={vectorGrey} alt="" />
                <img src={vectorGrey} alt="" />
            </div>
        </div>
    );
}

export default MainListPagination;