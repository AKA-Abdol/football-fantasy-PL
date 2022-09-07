import http from "./http";
import { TOKEN_SESSION_NAME } from "./SignServices";

export const TEAM_PREFIX = '/team';

export const getTeamPlayers = async () => {
    const response = await http.get(TEAM_PREFIX, {
        headers: {
            Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`
        }
    })
    const players = response.data.team.players;
    console.log(players);
    return players;
}