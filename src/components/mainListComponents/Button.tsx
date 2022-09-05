import React from "react";

interface MainListButtonProps{
    name: string,
    onclick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    selected: boolean
}

const MainListButton = ({name, onclick, selected}: MainListButtonProps) => {
    return (
        <div className="flex flex-row-reverse mt-5">
            <button name={name} onClick={onclick} className={`text-sm font-semibold py-1 border-2 rounded-lg border-borderItemColor w-10
                text-black normal-case ml-10px` + 
                (selected ? ` bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 border-none ` : ` bg-white`)}>
                {name}
            </button>
        </div>
    );
}

export default MainListButton;