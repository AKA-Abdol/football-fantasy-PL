import React, { useCallback, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { TOKEN_SESSION_NAME } from "../services/SignServices";

const NavbarArray = [
  "MyTeam",
  "Transfer",
  "Event",
  "Profile",
  "Award",
  "Exit",
] as const;
export type NavbarType = typeof NavbarArray[number];

const navbarStateAtom = atom<NavbarType>({
  key: "navbarState",
  default: "MyTeam",
});

const NavbarItem = ({ navbarItem }: { navbarItem: NavbarType }) => {
  const [navbarState, setNavbarState] =
    useRecoilState<NavbarType>(navbarStateAtom);
  const endpoint = navbarItem.toLowerCase();
  return (
    <Link to={`/${endpoint === 'exit' ? '' : endpoint}`}>
      <li
        onClick={() => {
          setNavbarState(navbarItem);
          (endpoint === 'exit') && (localStorage.removeItem(TOKEN_SESSION_NAME));
        }}
        className={
          `rounded-lg hover:bg-teal-200 hover:bg-none` +
          (navbarState === navbarItem
            ? ` bg-gradient-to-l from-detailListBoxColor1
             to-detailListBoxColor2 border-none `
            : ` bg-base-100 `)
        }
      >
        <a> {NavbarDictionary[navbarItem]} </a>
      </li>
    </Link>
  );
};

const NavbarDictionary: Record<NavbarType, string> = {
  Award: "جوایز",
  MyTeam: "تیم من",
  Transfer: "نقل و انتقالات",
  Event: "رویدادها",
  Profile: "پروفایل",
  Exit: 'خروج',
};

const ResponsiveNavbarItem = ({ navbarType }: { navbarType: NavbarType }) => {
  const [navbarState, setNavbarState] =
    useRecoilState<NavbarType>(navbarStateAtom);
  const endpoint = navbarType.toLowerCase();
  return (
    <li
      onClick={() => {
        setNavbarState(navbarType);
        (endpoint === 'exit') && (localStorage.removeItem(TOKEN_SESSION_NAME));
      }}
      className={
        `px-14` +
        (navbarState === navbarType
          ? ` rounded-lg w-64 justify-center text-gradient-to-l text-detailListBoxColor1 `
          : ` bg-base-100 bg-inherit`)
      }
    >
      <Link to={`/${endpoint === 'exit' ? '' : endpoint}`}>{NavbarDictionary[navbarType]}</Link>
    </li>
  );
};

const Navbar = () => {
  const [navbar] = useRecoilState<NavbarType>(navbarStateAtom);

  const [showMenu, setShowMenu] = React.useState(false);
  const handleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const removeToken = useCallback(() => {
    localStorage.removeItem(TOKEN_SESSION_NAME);
  }, []);

  return (
    <div className="navbar w-full h-full sm:max-w-[60%]  bg-base-100 shadow-xl rounded-lg lg:-mt-6 z-50 font-semibold text-nameFontColor">
      <div className="hidden text-xs w-full lg:flex lg:text-xl sm:hidden">
        <ul className="menu  w-full flex flex-row-reverse justify-around rounded-box active:bg-none">
          {NavbarArray.map((x) => (
            <NavbarItem navbarItem={x} key={x} />
          ))}
        </ul>
      </div>
      <div className={showMenu ? "flex w-full lg:hidden" : "hidden"}>
        <ul className="menu menu-horizontal w-full h-full flex flex-col text-xl justify-around items-center rounded-box">
          {NavbarArray.map((x) => (
            <ResponsiveNavbarItem navbarType={x} key={x} />
          ))}
        </ul>
      </div>
      <div
        className={
          showMenu
            ? "hidden"
            : "w-full rounded-lg flex flex-row-reverse text-xl text-detailListBoxColor1 lg:hidden"
        }
      >
        <a className="mx-auto text-2xl sm:text-3xl">
          {NavbarDictionary[navbar]}
        </a>
      </div>
      <AiOutlineMenu
        size={40}
        className={showMenu ? "hidden" : "flex lg:hidden cursor-pointer"}
        onClick={handleMenu}
      />
      <AiOutlineClose
        size={40}
        className={
          showMenu ? "flex mb-auto lg:hidden cursor-pointer" : "hidden"
        }
        onClick={handleMenu}
      />
    </div>
  );
};

export default Navbar;
