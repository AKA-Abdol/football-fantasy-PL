import React from 'react'
import { atom, SetterOrUpdater, useRecoilState } from 'recoil'


export const EventTabToggleAtom = atom({
    key: 'eventToggle',
    default: 1
})

export const toggleHandler = (tabNumber: number, setter: SetterOrUpdater<number>) => {
    console.log(tabNumber);
    
    setter(tabNumber)
}

export default function EventTab() {

    const [eventTabToggle, setEventTabToggle] = useRecoilState(EventTabToggleAtom);

    return (
        <ul className="lg:hidden flex flex-wrap rounded-lg px-2 py-1 text-sm bg-[#F7F7F7] font-medium text-center text-gray-500 dark:text-gray-400">
            <li
                onClick={() => toggleHandler(3, setEventTabToggle)}
                className="mr-4">
                <button className={"inline-block text-lg py-1 px-4 rounded-lg text-[#3D195B] " + (eventTabToggle === 3 ? "bg-white font-bold": "")}>دنبال شوندگان</button>
            </li>
            <li
                onClick={() => toggleHandler(2, setEventTabToggle)}
                className="mr-4">
                <button className={"inline-block text-lg py-1 px-4 rounded-lg text-[#3D195B] " + (eventTabToggle === 2 ? "bg-white font-bold": "")}>دنبال کنندگان</button>
            </li>
            <li className="mr-1">
                <button
                    onClick={() => toggleHandler(1, setEventTabToggle)}
                    className={"inline-block text-lg py-1 px-4 rounded-lg text-[#3D195B] " + (eventTabToggle === 1 ? "bg-white font-bold": "")}>آخرین رویدادها</button>
            </li>
        </ul>
    )
}
