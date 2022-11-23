import React from "react";
import headerBg from "./../images/headerBg.svg";
import fplLogo from "./../images/fplLogo.svg";
import players from "./../images/players.png";
import bgLayer from "./../images/bgLayer.png";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Typist from "react-typist";

export default function PageHeader() {
  return (
    <div className="flex flex-col w-full theme-font items-center relative">
      <div className="flex flex-col justify-center items-center w-full">
        {/* <div
                className="relative h-full flex flex-row w-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${headerBg})` }}
            >
                <img src={bgLayer} alt="background layer"
                    className="w-2/3 h-full absolute opacity-5 right-0"
                />
                <div className="flex flex-col justify-end">
                    <img src={players} alt="Football players"
                        className="mt-auto w-full min-w-[150px] max-w-[650px]"
                    />
                </div>


                <div className="min-w-[120px] w-full px-5 flex flex-col-reverse items-center justify-center space-y-6 md:flex-row md:justify-end md:space-x-12">
                    <p className="font-bold text-xl sm:text-3xl lg:text-6xl  text-[#37013B]">فوتبال فانتزی</p>
                    <img src={fplLogo} alt="FPL logo"
                        className="h-1/3"
                    />
                </div>

            </div> */}
        <div className="flex flex-col justify-center items-center w-full text-xl font-extrabold bg-[#03FBB8] text-black" dir="rtl">
          <Typist className="my-8 text-[#3D195B]">

            <span>الان حوالی ۱:۳۰ صبحه و خستم واقعا</span>
            <Typist.Backspace count={35} delay={3000} />
            <span>احتمالا ۸ ۹ ساعت دیگه داری اینو میخونی</span>
            <Typist.Backspace count={42} delay={3000} />
            <span>منم دیگه فکرم کار نمیکنه و جملات آخره</span>
            <Typist.Backspace count={42} delay={3000} />
            <span>از اون روز خاص هم چند روزی گذشته</span>
            <Typist.Backspace count={42} delay={3000} />
            <span>اما این باعث نمیشه که ما یادمون بره</span>
            <Typist.Backspace count={42} delay={3000} />
            <span>دختر sensitive گروه عجیب High5</span>
            <Typist.Backspace count={42} delay={3000} />
            <span>تولدت خیلی خیلی مبارکه</span>
            <Typist.Backspace count={32} delay={2000} />
            <span>*--* تولدت مبارک سارا *--*</span>

          </Typist>
        </div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}
