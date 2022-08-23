import React from "react";
import headerBg from "./../images/headerBg.svg"
import fplLogo from "./../images/fplLogo.svg"
import players from "./../images/players.png"
import bgLayer from "./../images/bgLayer.png"

export default function PageHeader() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div
                className="relative flex flex-row w-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${headerBg})` }}
            >
                <img src={bgLayer} alt="background layer"
                    className="w-2/3 h-[100%] absolute opacity-5 right-0"
                />
                <div className="w-2/3 flex flex-col justify-end">
                    <img src={players} alt="Football players"
                        className="w-2/3 mt-auto"
                    />
                </div>

                <div className="w-2/3 flex justify-center ml-auto mr-24">

                    <div className="w-full py-6 flex flex-row items-center justify-end space-x-12">
                        <p className="font-bold text-6xl text-[#37013B]">فوتبال فانتزی</p>
                        <img src={fplLogo} alt="FPL logo"
                            className="w-1/6"
                        />
                    </div>
                </div>

            </div>

            <div className="navbar bg-base-100 w-2/3 shadow-xl rounded-lg -mt-6 z-50 font-semibold">
                <div className="hidden w-full lg:flex">
                    <ul className="menu menu-horizontal w-full flex flex-row space-x-5 justify-around">
                        <li><a>جوایز</a></li>
                        <li><a>پروفایل</a></li>
                        <li><a>آخرین رویدادها</a></li>
                        <li><a>نقل و انتقالات</a></li>
                        <li
                            className="rounded-lg bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2"

                        ><a>تیم من</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}