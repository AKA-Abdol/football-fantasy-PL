import React from "react";
import headerBg from "./../images/headerBg.svg"
import fplLogo from "./../images/fplLogo.svg"
import players from "./../images/players.png"
import bgLayer from "./../images/bgLayer.png"
import Navbar from "./Navbar";

export default function PageHeader() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div
                className="relative h-full flex flex-row w-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${headerBg})` }}
                >
                <img src={bgLayer} alt="background layer"
                    className="w-2/3 h-full absolute opacity-5 right-0"
                />
                <div className="flex flex-col justify-end">
                    <img src={players} alt="Football players"
                        className="mt-auto w-full min-w-[150px] max-w-[650px]"
                    />
                </div>


                <div className="min-w-[120px] w-full px-5 flex flex-col-reverse items-center justify-center space-y-6 md:flex-row md:justify-end md:space-x-12">
                    <p className="font-bold text-xl sm:text-3xl lg:text-6xl  text-[#37013B]">فوتبال فانتزی</p>
                    <img src={fplLogo} alt="FPL logo"
                        className="h-1/3"
                    />
                </div>

            </div>
            <Navbar />
        </div>
    )
}