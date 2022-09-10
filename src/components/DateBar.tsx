import '../index.css'
import { Eng2Fa } from '../UsefullFunctions';
export default function DateBar(){
    return (
        <div className='DateBar flex flex-row w-[90%] lg:w-1/3 lg:mr-52 py-2 mb-10 rounded-lg bg-[#3D195B] justify-around theme-font'>
            <div className='ml-5 text-white'>{Eng2Fa("شنبه ۳۰ مرداد ۱۴۰۰ - ساعت ۱۷")}</div>
            <div className='text-[#00FF87]'>{Eng2Fa("هفته سوم")}</div>
        </div>
    );
};