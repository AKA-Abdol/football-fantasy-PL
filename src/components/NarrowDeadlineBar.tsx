import { useQuery } from "react-query";
import "../index.css";
import { Eng2Fa, Fa2Eng, getDateString, getOrderedString } from "../UsefullFunctions";
import { getDeadline } from "../services/DateServices";

export default function NarrowDeadlineBar() {
  const { data, isLoading, isError } = useQuery("deadline", getDeadline);

  return (
    <div className="DateBar flex flex-row px-2 py-2 mb-7 rounded-lg bg-[#3D195B] justify-around theme-font text-sm">
      {isError ? (
        <p className="text-[#00FF87]">Error!</p>
      ) : isLoading ? (
        <p className="text-[#00FF87]">Loading!</p>
      ) : (
        <>
          <div className="text-white mr-4">
            {getDateString(data ?? new Date(0))}
          </div>
          <div className="text-[#00FF87]">{`مهلت تغییرات`}</div>
        </>
      )}
    </div>
  );
}
