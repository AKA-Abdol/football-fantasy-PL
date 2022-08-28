import React from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import headerBg from "./../images/headerBg.svg"
import fplLogo from "./../images/fplLogo.svg"
import players from "./../images/players.png"
import bgLayer from "./../images/bgLayer.png"

export default function PageHeader() {

    const [showMenu, setShowMenu] = React.useState(false);

    const handleMenu = () => {
        console.log("alo")
        setShowMenu(prevState => !prevState)
    }


    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div
                className="relative h-full flex flex-row w-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${headerBg})` }}
            >
                <img src={bgLayer} alt="background layer"
                    className="w-2/3 h-[100%] absolute opacity-5 right-0"
                />
                <div className="flex flex-col justify-end">
                    <img src={players} alt="Football players"
                        className="mt-auto w-full min-w-[330px] max-w-[650px]"
                    />
                </div>


                <div className="min-w-[180px] w-full px-5 flex flex-col-reverse items-center justify-center space-y-6 md:flex-row md:justify-end md:space-x-12">
                    <p className="font-bold text-xl sm:text-3xl lg:text-6xl  text-[#37013B]">فوتبال فانتزی</p>
                    <img src={fplLogo} alt="FPL logo"
                        className="h-1/2"
                    />
                </div>


            </div>

            <div className="navbar w-full sm:max-w-[60%] bg-base-100 shadow-xl rounded-lg lg:-mt-6 z-50 font-semibold">
                <div className="hidden text-xs w-full lg:flex lg:text-xl">
                    <ul className="menu menu-horizontal w-full flex flex-row justify-around">
                        <li className="px-4"><a>جوایز</a></li>
                        <li className="px-4"><a>پروفایل</a></li>
                        <li className="px-4"><a>آخرین رویدادها</a></li>
                        <li className="px-4"><a>آخرین رویدادها</a></li>
                        <li className="px-4"><a>نقل و انتقالات</a></li>
                        <li
                            className="rounded-lg  bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2"

                        ><a>تیم من</a></li>
                    </ul>
                </div>
                <div className={showMenu ? "relative flex w-full lg:hidden" : "hidden"}>
                    <ul className="menu menu-horizontal w-full flex flex-col text-xl justify-around items-center">
                        <li className="px-14"><a>جوایز</a></li>
                        <li className="px-14"><a>پروفایل</a></li>
                        <li className="px-14"><a>آخرین رویدادها</a></li>
                        <li className="px-14"><a>نقل و انتقالات</a></li>
                        <li
                            className="rounded-lg px-20 bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2"

                        ><a>تیم من</a></li>
                    </ul>
                </div>
                <div
                    className={showMenu ? "hidden" : "w-full rounded-lg flex flex-row-reverse text-xl text-detailListBoxColor1 lg:hidden"}

                ><a className="mx-auto text-2xl sm:text-3xl">تیم من</a></div>
                <AiOutlineMenu size={40}
                    className={showMenu ? "hidden" : "flex lg:hidden"}
                    onClick={handleMenu}
                />
                <AiOutlineClose size={40}
                    className={showMenu ? "flex mb-auto lg:hidden" : "hidden"}
                    onClick={handleMenu}
                />
            </div>

        </div>
    )
}