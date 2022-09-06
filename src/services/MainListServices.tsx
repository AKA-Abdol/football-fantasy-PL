import http from "./http";
import { Filter } from "../components/mainListComponents/MainPlayerList";

const PLAYER_PREFIX = "/player/";
const ALL_PLAYERS = PLAYER_PREFIX + "all";

export const getPlayers = async (query: string) => {
    const response = await http.get(ALL_PLAYERS + query);
    const data = response.data;
    return data.players;
}

const MAX_NUM_OF_PLAYERS = 1000;
export const calcMaxPlayer = async (searchKey: string, filter: Filter) => {
    const maxPlayersUrl = `${ALL_PLAYERS}?num=${MAX_NUM_OF_PLAYERS}&search=${searchKey}&role=${filter}`;
    const response = await http.get(maxPlayersUrl);
    const data = response.data;
    return data.players.length;
}
