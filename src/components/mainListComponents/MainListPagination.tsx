import React from "react";
import vector from "../../assets/Vector.svg"
import vectorGrey from "../../assets/Vector-low-opacity.svg"

const MainListPagination = () => {
    return (
        <div className="pagination flex flex-row-reverse justify-around p-3 mb-7">
            <div className="double-vector flex justify-between rotate-180">
                <img src={vectorGrey} alt="" />
                <img src={vectorGrey} alt="" />
            </div>
            <div className="vector w-2 rotate-180">
                <img src={vector} alt="vector" />
            </div>
            <div className="text-xs text-nameFontColor flex justify-center">
                صفحه 1 از 2
            </div>
            <div className="vector w-2">
                <img src={vector} alt="vector" />
            </div>
            <div className="double-vector flex justify-between">
                <img src={vectorGrey} alt="" />
                <img src={vectorGrey} alt="" />
            </div>
        </div>
    );
}

export default MainListPagination;