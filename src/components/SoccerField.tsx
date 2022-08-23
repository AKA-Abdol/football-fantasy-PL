import React from "react";
import SoccerFieldImg from "./../images/SoccerField.png"
import defaultShirt from "./../images/default_shirt.png"
import selectedShirt from "./../images/selected_shirt.png"
import addCircle from "./../images/add-circle.png"

export default function SoccerField() {
    return (
        <div
            className="flex flex-col w-full relative max-w-3xl z-50"
        >
            <img
                src={SoccerFieldImg}
                alt="Soccer field"
                className="absolute w-full h-full -z-50"
            />
            <div
                className="flex flex-row justify-around mx-8"
            >


                <DefaultPlayer />
                <SelectedPlayer />
            </div>
            <div
                className="flex flex-row justify-around mx-6"
            >
                <SelectedPlayer />
                <SelectedPlayer />
                <SelectedPlayer />
                <SelectedPlayer />
                <SelectedPlayer />

            </div>
            <div
                className="flex flex-row justify-around mx-6"
            >
                <SelectedPlayer />
                <SelectedPlayer />
                <SelectedPlayer />
                <SelectedPlayer />
                <SelectedPlayer />

            </div>
            <div
                className="flex flex-row justify-around mx-6"
            >
                <SelectedPlayer />
                <SelectedPlayer />
                <SelectedPlayer />

            </div>
        </div>
    )

    function DefaultPlayer() {
        return (
            <div
                className="flex mb-2 items-center justify-center w-1/6 mt-6 relative"
            >
                <img className="w-full" src={defaultShirt} alt="default T-shirt" />
                <img className="h-1/6 z-50 absolute" src={addCircle} alt="add circle icon" />
            </div>);
    }
    function SelectedPlayer() {
        return (
            <div
                className="flex flex-col items-center justify-center w-1/6 mt-2 relative"
            >
                <img className="w-full" src={selectedShirt} alt="default T-shirt" />
                <div className="flex flex-col w-full">
                    <div>
                        <div className="bg-[#37013B] py-1 px-4 text-white font-bold text-xs rounded-t-2xl flex items-center justify-center">Handerson</div>
                        <div className="bg-white/50 font-bold text-sm rounded-b-2xl flex items-center justify-center">55</div>
                    </div>
                </div>
            </div>);
    }
}