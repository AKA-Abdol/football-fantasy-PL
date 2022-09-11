import React from "react";
import { Eng2Fa } from "../../UsefullFunctions";

interface DetailBoxI{
    number:string
}

const DetailBox = (props:DetailBoxI) => {
    return (
        <div className="box text-11 text-center bg-slate-400 w-11/12 m-auto rounded-lg py-3
        bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 my-5
        flex justify-center items-center">
            <p dir="rtl">{Eng2Fa(props.number)} بازیکن نمایش داده شده است  </p>
        </div>
    );
}

export default DetailBox;