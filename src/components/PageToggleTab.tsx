import { useState } from "react";
import "../index.css";

interface ToggleTabProps {
  currentTab: number;
  setSelTab: any;
}

export default function PToggleTab({ currentTab, setSelTab }: ToggleTabProps) {
  return (
    <div className="tabs tabs-boxed mx-auto h-full w-1/2 lg:w-full justify-center items-center bg-gray-100 theme-font -mt-[1px] -z-index-[50]">
      <a
        className={`tab py-[3px] h-full px-1 w-1/2 rounded-l-lg text-[0.58rem] text-black hover:font-bold ${
          currentTab === 0 ? "bg-white font-bold" : null
        }`}
        onClick={() =>
          setSelTab((pastState: any) => ({ ...pastState, selTab: 0 }))
        }
      >
        مشاهده لیست
      </a>
      <a
        className={`tab py-[3px] h-full px-1 w-1/2 rounded-r-lg text-[0.58rem] text-black hover:font-bold ${
          currentTab === 1 ? "bg-white font-bold" : null
        }`}
        onClick={() =>
          setSelTab((pastState: any) => ({ ...pastState, selTab: 1 }))
        }
      >
        شماتیک ترکیب
      </a>
    </div>
  );
}
