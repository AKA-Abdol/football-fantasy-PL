import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {Link} from 'react-router-dom'

export type NavbarType = "MyTeam" | "Transfer" | "Event" | "Profile" | "Price"

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const [navbarState, setNavbarState] = useState<NavbarType>("MyTeam");
    const handleMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    
    return (
        <div className="navbar w-full sm:max-w-[60%] bg-base-100 shadow-xl rounded-lg lg:-mt-6 z-50 font-semibold">
                <div className="hidden text-xs w-full lg:flex lg:text-xl">
                    <ul className="menu menu-horizontal w-full flex flex-row justify-around">
                        <li
                            onClick={() => {
                                setNavbarState("Price")
                            }}
                            className = {`rounded-lg hover:rounded-lg` + 
                            (navbarState === "Price" ? ` bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 border-none ` : ` bg-base-100 `)}>
                            <Link to={"/prices"}>جوایز</Link></li>
                        <li 
                            onClick={() => {
                                setNavbarState("Profile")
                            }}
                            className = {`rounded-lg ` + 
                            (navbarState === "Profile" ? ` bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 border-none ` : ` bg-base-100 `)}>
                            <Link to={"/profile"}>پروفایل</Link></li>
                        <li 
                            onClick={() => {
                                setNavbarState("Event")
                            }}
                            className = {`rounded-lg ` + 
                            (navbarState === "Event" ? ` bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 border-none ` : ` bg-base-100 `)}>
                            <Link to={"/events"}>آخرین رویدادها</Link></li>
                        <li 
                            onClick={() => {
                                setNavbarState("Transfer")
                            }}
                            className = {`rounded-lg ` + 
                            (navbarState === "Transfer" ? ` bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 border-none ` : ` bg-base-100`)}>
                            <Link to={"/transfer"}>نقل و انتقالات</Link></li>
                        <li
                            onClick={() => {
                                setNavbarState("MyTeam")
                            }}
                            className = {`rounded-lg ` + 
                            (navbarState === "MyTeam" ? ` bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 border-none ` : ` bg-base-100`)}
                        ><Link to={"/"}>تیم من</Link></li>
                    </ul>
                </div>
                <div className={showMenu ? "relative flex w-full lg:hidden" : "hidden"}>
                    <ul className="menu menu-horizontal w-full flex flex-col-reverse text-xl justify-around items-center">
                        <li 
                            onClick={() => {
                                setNavbarState("Price")
                            }}
                            className = {`px-14` + 
                            (navbarState === "Price" ? ` rounded-lg px-20 bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 ` : ` bg-base-100 `)}>
                            <Link to={"/prices"}>جوایز</Link></li>
                        <li 
                            onClick={() => {
                                setNavbarState("Profile")
                            }}
                            className = {`px-14 hover:bg-base-100` + 
                            (navbarState === "Profile" ? ` rounded-lg px-20 bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 ` : ` bg-base-100 `)}>
                            <Link to={"/profile"}>پروفایل</Link></li>
                        <li 
                            onClick={() => {
                                setNavbarState("Event")
                            }}
                            className = {`px-14` + 
                            (navbarState === "Event" ? ` rounded-lg px-20 bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 ` : ` bg-base-100 `)}>
                            <Link to={"/events"}>آخرین رویدادها</Link></li>
                        <li 
                            onClick={() => {
                                setNavbarState("Transfer")
                            }}
                            className = {`px-14` + 
                            (navbarState === "Transfer" ? ` rounded-lg px-20 bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 ` : ` bg-base-100 `)}>
                            <Link to={"/transfer"}>نقل و انتقالات</Link></li>
                        <li
                            
                            onClick={() => {
                                setNavbarState("MyTeam")
                            }}
                            className = {`px-14` + 
                            (navbarState === "MyTeam" ? ` rounded-lg px-20 bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 ` : ` bg-base-100 `)}>
                        <Link to={"/"}>تیم من</Link></li>
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