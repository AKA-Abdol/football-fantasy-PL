import http from "./http";

const PLAYER_PREFIX = "/player/";
const ALL_PLAYERS = PLAYER_PREFIX + "all";

export const getPlayers = async (query: string) => {
    const response = await http.get(ALL_PLAYERS + query);
    const data = response.data.players;
    return [data.players, data.count];
}