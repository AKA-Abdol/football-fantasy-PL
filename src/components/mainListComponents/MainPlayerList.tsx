import React, { useCallback, useEffect, useState } from "react";
import MainListItem from "./ListItem";
import SearchBox from "./SearchBox";
import DetailBox from "./DetailBox";
import ListHeader from "../ListHeader";
import MainListButton from "./Button";
import MainListPagination from "./Pagination";
import polygon from "../../assets/Polygon 4.svg"
import { playerNameSearchKeyAtom } from './SearchBox';
import { currentPageAtom } from "./Pagination";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { useQuery } from "react-query";
import { QueryFunctionContext } from "react-query";
import { getPlayers } from "../../services/MainListServices";

interface FilterField {
  name: string;
  filterName: string;
}

const filterButtons: FilterField[] = [
  {
    name: "All",
    filterName: "All",
  },
  {
    name: "GK",
    filterName: "Goalkeepers",
  },
  {
    name: "DEF",
    filterName: "Defenders",
  },
  {
    name: "MID",
    filterName: "Midfielders",
  },
  {
    name: "ATT",
    filterName: "Forwards",
  },
];

export type Filter =
  | "All"
  | "Goalkeepers"
  | "Defenders"
  | "Midfielders"
  | "Forwards";

export interface MainListProps {
  name: string;
  club: string;
  role: string;
  pose: number;
  id: number;
  playerStats: {
    score: number;
    price: number;
    weekId: number;
  };
}

export const DEFAULT_PAGE = 1;
export const maxPageAtom = atom({
  key: "maxPage",
  default: DEFAULT_PAGE,
});

export const PlayerListAtom = atom({
  key: "playerList",
  default: [] as MainListProps[],
});

export const FilterAtom = atom({
  key: "filter",
  default: "All" as Filter,
});

export const NUM_OF_PLAYERS = 15;

const MainList = () => {
  const searchKey = useRecoilValue(searchKeyAtom);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom);
  const [filter, setFilter] = useRecoilState(FilterAtom);
  const setMaxPage = useSetRecoilState(maxPageAtom);
  const [maxPlayers, setMaxPlayers] = useState(0);

  const { data, isLoading, isError, isFetching } = useQuery(
    ["playersList", currentPage, searchKey, filter],
    async () => {
      const [players, maxPlayer] = await getPlayers({
        page: currentPage,
        num: NUM_OF_PLAYERS,
        search: searchKey,
        role: filter,
      });
      setMaxPlayers(() => maxPlayer);
      setMaxPage(Math.ceil(maxPlayer / NUM_OF_PLAYERS));
      return players;
    }, {
        keepPreviousData: true
    }
  );

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    console.log("buttonName:", button.name);
    setFilter(button.name as Filter);
    setCurrentPage(DEFAULT_PAGE);
  };

  return (
    <div className="list mx-auto max-w-max flex flex-col  ml-auto rounded-2xl shadow-md pb-1 mb-2 h-full">
      <ListHeader text="انتخاب بازیکن" />
      <div className="w-full px-3">
        <SearchBox />
        <div className="button-group flex justify-center flex-row-reverse">
          {filterButtons.map(({ name, filterName }: FilterField) => (
            <MainListButton
              name={filterName}
              inner={name}
              onclick={handleFilter}
              selected={(filterName as Filter) === filter}
            />
            <div className="w-full px-3">
                <SearchBox
                    whatToSearch="playerName"
                />
                <div className="button-group flex justify-center flex-row-reverse">

                    {
                        filterButtons.map(({ name, filterName }: FilterField) =>
                        (
                            <MainListButton
                                name={filterName}
                                inner={name}
                                onclick={handleFilter}
                                selected={filterName as Filter === filter}
                            />
                        )
                        )
                    }

                </div >
                <DetailBox
                    number={maxPlayers.toString()}
                />
              );
            })
          )}
        </div>

        <MainListPagination
          disabled={isFetching}
        />
      </div>
    </div>
  );
};

export default MainList;
