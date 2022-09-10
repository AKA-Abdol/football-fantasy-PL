import React from 'react';
import Shirt from '../../images/Valencia_college-2-min 1.svg';
import League from '../../images/Vector.svg';
import Primary from './../../images/Premier_League_Rebrands_DesignStudio_06 1.svg';

interface Name {
    name: string
}

const Cover = (name : Name) => {
    return (
        <div className="cover w-max z-50 h-full rounded-l-2xl bg-nameFontColor flex-col justify-center">
            <div className="shirt flex justify-center">
                <img src={Shirt} alt="" />

            </div>
            <div className="league flex justify-center p-4 z-50">
                <img src={League} alt="" />
            </div>
            <div className="primary">
                <img src={Primary} alt="" />
            </div>
        </div>
    );
}

export default Cover;