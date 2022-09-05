import React from "react";

interface MainListButtonProps{
    name: string
}

const MainListButton = (props:MainListButtonProps) => {
    return (
        <div className="flex flex-row-reverse mt-5">
            <button className="bg-white text-sm font-semibold py-1 px-2 border-2 rounded-lg border-borderItemColor 
                text-black normal-case ml-10px hover:bg-white">
                {props.name}
            </button>
        </div>
    );
}

export default MainListButton;