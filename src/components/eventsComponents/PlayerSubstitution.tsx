import React from 'react'
import In from "../../images/Vector_in.svg";
import Out from "../../images/Vector_out.svg";

export default function PlayerSubstitution() {
    return (
        <div className='flex flex-row text-sm'>
            <div className="flex flex-row space-x-8">
                <img src={In} alt="vector" className="ml-2" />
                <p>yasin</p>
            </div>
            <div className="flex flex-row space-x-8">
                <img src={Out} alt="vector" className="ml-2" />
                <p>yasin</p>
            </div>
        </div>
    )
}
