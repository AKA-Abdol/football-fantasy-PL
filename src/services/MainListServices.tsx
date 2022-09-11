import http from "./http";
import { TEAM_PREFIX } from "./TeamPlayerServices";
import { TOKEN_SESSION_NAME } from "./SignServices";
import axios, { AxiosError } from "axios";

const PLAYER_PREFIX = "/player";
const ALL_PLAYERS = PLAYER_PREFIX + "/all";
const TEAM_PLAYER_PREFIX = TEAM_PREFIX + PLAYER_PREFIX;


export const getPlayers = async (query: string) => {
    const response = await http.get(ALL_PLAYERS + query);
    const data = response.data.players;
    return [data.players, data.count];
}

export const addPlayer = async (pose: number, id: number) => {
    console.log("position:", pose, "id:", id);
    const body = {
        position_num: pose,
        player_id: id
    }
    console.log(body);
    try {
        const response = await http.post(TEAM_PLAYER_PREFIX, body, {
            headers: {
                Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`
            }
        });
        return true;
    }
    catch (err) {
        if(axios.isAxiosError(err)){
            console.log(err.response)
        }
        console.log("the error",)
        return false
    }


}
export const removePlayer = async (pose: number) => {
    console.log("position:", pose);
    const body = {
        position_num: pose,
    }
    console.log(body);
    const response = await http.delete(`${TEAM_PLAYER_PREFIX}?position_num=${pose}`, {
        headers: {
            Authorization: `Ali ${localStorage.getItem(TOKEN_SESSION_NAME)}`
        }
    });
    console.log("back:", response);
    return response.status === 201;
}