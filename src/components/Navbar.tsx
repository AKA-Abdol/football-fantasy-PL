import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {Link} from 'react-router-dom'
import { atom, useRecoilState } from "recoil";

export type NavbarType = "MyTeam" | "Transfer" | "Event" | "Profile" | "Award";

const navbarStateAtom = atom<NavbarType>({
    key: "navbarState",
    default: "MyTeam"
})

const NavbarItem = (props: NavbarType, item: string) => {
    const [navbarState, setNavbarState] = useRecoilState<NavbarType>(navbarStateAtom);
    const endpoint = props.toLowerCase();
    return (
        <li
            onClick={() => {
                setNavbarState(props)
            }}
            className = {`rounded-lg hover:bg-teal-200 hover:bg-none` + 
            (navbarState === props ? ` bg-gradient-to-l from-detailListBoxColor1
             to-detailListBoxColor2 border-none ` 
            : ` bg-base-100 `)}>
            <a><Link to={`/${endpoint}`}>{item}</Link></a>
        </li>
    )
}

const ResponsiveNavbarItem = (props: NavbarType, item: string) => {
    const [navbarState, setNavbarState] = useRecoilState<NavbarType>(navbarStateAtom);
    const endpoint = props.toLowerCase();
    return (
        <li 
        onClick={() => {
            setNavbarState(props)
        }}
        className = {`px-14` + 
        (navbarState === props ? ` rounded-lg w-64 justify-center text-gradient-to-l text-detailListBoxColor1 ` : ` bg-base-100 bg-inherit `)}>
        <Link to={`/${endpoint}`}>{item}</Link>
        </li>
    )
}

const Navbar = () => {
    const navbarState = useRecoilState<NavbarType>(navbarStateAtom);

    const [showMenu, setShowMenu] = React.useState(false);
    const handleMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    
    return (
        <div className="navbar w-full h-full sm:max-w-[60%]  bg-base-100 shadow-xl rounded-lg lg:-mt-6 z-50 font-semibold text-nameFontColor">
                <div className="hidden text-xs w-full lg:flex lg:text-xl sm:hidden">
                    <ul className="menu  w-full flex flex-row justify-around rounded-box active:bg-none">
                        {NavbarItem("Award", "جوایز")}
                        {NavbarItem("Profile", "پروفایل")}
                        {NavbarItem("Event", "رویدادها")}
                        {NavbarItem("Transfer", "نقل و انتقالات")}
                        {NavbarItem("MyTeam", "تیم من")}
                    </ul>
                </div>
                <div className={showMenu ? "flex w-full lg:hidden" : "hidden"}>
                    <ul className="menu menu-horizontal w-full h-full flex flex-col-reverse text-xl justify-around items-center rounded-box">
                        {ResponsiveNavbarItem("Award", "جوایز")}
                        {ResponsiveNavbarItem("Profile", "پروفایل")}
                        {ResponsiveNavbarItem("Event", "رویدادها")}
                        {ResponsiveNavbarItem("Transfer", "نقل و انتقالات")}
                        {ResponsiveNavbarItem("MyTeam", "تیم من")}
                        
                    </ul>
                </div>
                <div
                    className={showMenu ? "hidden" : "w-full rounded-lg flex flex-row-reverse text-xl text-detailListBoxColor1 lg:hidden"}

                ><a className="mx-auto text-2xl sm:text-3xl">
                    {navbarState[0] === "Award" ? "جوایز":
                    navbarState[0] === "MyTeam" ? "تیم من":
                    navbarState[0] === "Event" ? "رویدادها":
                    navbarState[0] === "Transfer" ? "نقل و انتقالات":
                    navbarState[0] === "Profile"? "پروفایل" :
                    "تیم من"}
                </a></div>
                <AiOutlineMenu size={40}
                    className={showMenu ? "hidden" : "flex lg:hidden cursor-pointer"}
                    onClick={handleMenu}
                />
                <AiOutlineClose size={40}
                    className={showMenu ? "flex mb-auto lg:hidden cursor-pointer" : "hidden"}
                    onClick={handleMenu}
                />
            </div>
    )
}

export default Navbar;