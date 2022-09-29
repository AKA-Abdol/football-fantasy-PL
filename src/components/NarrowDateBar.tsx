import { useQuery } from "react-query";
import "../index.css";
import { Eng2Fa, Fa2Eng, getOrderedString } from "../UsefullFunctions";
import { getWeek } from "../services/DateServices";

export default function NarrowDateBar() {
  const { data, isLoading, isError } = useQuery("week", getWeek);

  const getDateString = (date: Date) => {
    console.log(date);
    const FA_DAY: string[] = [
      "دوشنبه",
      "سه شنبه",
      "چهارشنبه",
      "پنج شنبه",
      "جمعه",
      "شنبه",
      "یکشنبه",
    ];
    const weekDay: string = FA_DAY[date.getDay()];
    const FA_MONTH: string[] = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const farsiDate = date.toLocaleDateString("fa-IR").split("/");
    const day: string = farsiDate[2];
    const month: string = FA_MONTH[parseInt(Fa2Eng(farsiDate[1])) - 1];
    const year: string = farsiDate[0];
    const time: string = Eng2Fa(`${date.getHours()}:${date.getMinutes()}`);
    return `${weekDay} ${day} ${month} ${year} - ساعت ${time}`;
  };

  console.log(getDateString(data?.startDate ?? new Date(1)));

  return (
    <div className="DateBar flex flex-row px-2 py-2 mb-7 rounded-lg bg-[#3D195B] justify-around theme-font text-sm">
      {isError ? (
        <p className="text-[#00FF87]">Error!</p>
      ) : isLoading ? (
        <p className="text-[#00FF87]">Loading!</p>
      ) : (
        <>
          <div className="text-white mr-4">
            {getDateString(data?.startDate ?? new Date(0))}
          </div>
          <div className="text-[#00FF87]">{`هفته ${getOrderedString(
            data?.weekNum ?? 1
          )}`}</div>
        </>
      )}
    </div>
  );
}
