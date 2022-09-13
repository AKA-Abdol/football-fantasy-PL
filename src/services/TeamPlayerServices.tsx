import http from "./http";
import { TOKEN_SESSION_NAME } from "./SignServices";
import { ErrorData, ServiceResponse } from "./Services";
import axios from "axios";

export const TEAM_PREFIX = "/team";

export const getTeamPlayers = async () => {
  try {
    const response = await http.get(TEAM_PREFIX, {
      headers: {
        Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
      },
    });
    const players = response.data.team.players;
    console.log(players);
    const res: ServiceResponse<typeof players> = {
        isSuccessful: true,
        res: players
    }
    return res;
  } 
  catch (err) {
    if(axios.isAxiosError(err)){
        const data: ErrorData = err.response?.data as ErrorData;
        const res: ServiceResponse<string> = {
            isSuccessful: false,
            res: data.message ?? 'خطایی رخ داده است.'
        }
        return res;
    }

  }
};
