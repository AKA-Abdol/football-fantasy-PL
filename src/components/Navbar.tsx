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
            className = {`rounded-lg hover:rounded-lg` + 
            (navbarState === props ? ` bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 border-none ` : ` bg-base-100 `)}>
            <Link to={`/${endpoint}`}>{item}</Link>
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
        (navbarState === props ? ` rounded-lg px-20 bg-gradient-to-l from-detailListBoxColor1 to-detailListBoxColor2 ` : ` bg-base-100 `)}>
        <Link to={`/${endpoint}`}>{item}</Link></li>
    )
}

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const handleMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    
    return (
        <div className="navbar w-full sm:max-w-[60%] bg-base-100 shadow-xl rounded-lg lg:-mt-6 z-50 font-semibold">
                <div className="hidden text-xs w-full lg:flex lg:text-xl">
                    <ul className="menu menu-horizontal w-full flex flex-row justify-around">
                        {NavbarItem("Award", "جوایز")}
                        {NavbarItem("Profile", "پروفایل")}
                        {NavbarItem("Event", "آخرین رویدادها")}
                        {NavbarItem("Transfer", "نقل و انتقالات")}
                        {NavbarItem("MyTeam", "تیم من")}
                    </ul>
                </div>
                <div className={showMenu ? "relative flex w-full lg:hidden" : "hidden"}>
                    <ul className="menu menu-horizontal w-full flex flex-col-reverse text-xl justify-around items-center">
                        {ResponsiveNavbarItem("Award", "جوایز")}
                        {ResponsiveNavbarItem("Profile", "پروفایل")}
                        {ResponsiveNavbarItem("Event", "آخرین رویدادها")}
                        {ResponsiveNavbarItem("Transfer", "نقل و انتقالات")}
                        {ResponsiveNavbarItem("MyTeam", "تیم من")}
                        
                    </ul>
                </div>
                <div
                    className={showMenu ? "hidden" : "w-full rounded-lg flex flex-row-reverse text-xl text-detailListBoxColor1 lg:hidden"}

                ><a className="mx-auto text-2xl sm:text-3xl">تیم من</a></div>
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