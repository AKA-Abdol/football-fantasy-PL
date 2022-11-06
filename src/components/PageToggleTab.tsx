import { atom, useRecoilState } from "recoil";
import "../index.css";

export const PlaygroundTabAtom = atom({
  key: "PGTab",
  default: 1,
});

export default function PToggleTab() {
  const [selTab, setSelTab] = useRecoilState(PlaygroundTabAtom);

  return (
    <div className="tabs tabs-boxed mx-auto h-full w-[90%] lg:w-full justify-center items-center bg-gray-100 theme-font -mt-[1px] -z-index-[50]">
      <a
        className={`tab py-[3px] h-full px-1 w-1/2 rounded-l-lg text-[0.58rem] text-black hover:font-bold ${
          selTab === 0 ? "bg-white font-bold" : null
        }`}
        onClick={() => setSelTab(0)}
      >
        مشاهده لیست
      </a>
      <a
        className={`tab py-[3px] h-full px-1 w-1/2 rounded-r-lg text-[0.58rem] text-black hover:font-bold ${
          selTab === 1 ? "bg-white font-bold" : null
        }`}
        onClick={() => setSelTab(1)}
      >
        شماتیک ترکیب
      </a>
    </div>
  );
}
