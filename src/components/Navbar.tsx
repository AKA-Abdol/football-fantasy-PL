import React from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);


    const handleMenu = () => {
        console.log("alo")
        setShowMenu(prevState => !prevState)
    }

    
    return (
        <div className="navbar w-full sm:max-w-[60%] bg-base-100 shadow-xl rounded-lg lg:-mt-6 z-50 font-semibold">
                <div className="hidden text-xs w-full lg:flex lg:text-xl">
                    <ul className="menu menu-horizontal w-full flex flex-row justify-around">
                        <li className="px-4"><a href="/prices">جوایز</a></li>
                        <li className="px-4"><a href="/profile">پروفایل</a></li>
                        <li className="px-4"><a href="/events">آخرین رویدادها</a></li>
                        <li className="px-4"><a href="/sth">نقل و انتقالات</a></li>
                        <li
                            className="rounded-lg  bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2"

                        ><a href="/">تیم من</a></li>
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
    )
}

export default Navbar;