import React, { useState } from 'react';
import { useQuery } from 'react-query';
import '../index.css'
import { Eng2Fa } from '../UsefullFunctions';
import { getWeek } from '../services/DateServices';

export default function DateBar(){

    const { data, isLoading, isError } = useQuery("sara", async () => await getWeek());

    console.log("date", data?.startDate.getHours());
    
    
    return (
        <div className='DateBar flex flex-row w-full lg:w-2/3 py-2 mb-10 rounded-lg bg-[#3D195B] justify-around theme-font'>
            <div className='ml-5 text-white'>{Eng2Fa("شنبه ۳۰ مرداد ۱۴۰۰ - ساعت ۱۷")}</div>
            <div className='text-[#00FF87]'>{Eng2Fa("هفته سوم")}</div>
        </div>
    );
};