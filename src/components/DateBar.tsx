import { useQuery } from 'react-query';
import '../index.css'
import { Eng2Fa, Fa2Eng, getDateString, getOrderedString } from '../UsefullFunctions';
import { getWeek } from '../services/DateServices';

export default function DateBar() {
  const { data, isLoading, isError } = useQuery(
    "week",
    getWeek
  );

  console.log(getDateString(data?.startDate ?? new Date(1)));

  return (
    <div className="DateBar flex flex-row w-[90%] lg:w-1/3 lg:mr-52 py-2 mb-10 rounded-lg bg-[#3D195B] justify-around theme-font">
      {isError ? (
        <p className="text-[#00FF87]">Error!</p>
      ) : isLoading ? (
        <p className="text-[#00FF87]">Loading!</p>
      ) : (
        <>
          <div className="text-white">
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