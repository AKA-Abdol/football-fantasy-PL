import http from "./http";
import { TOKEN_SESSION_NAME } from "./SignServices";
import { ServiceError, ServiceResponse, ErrorData } from "./Services";
import axios from "axios";

export const TEAM_PREFIX = "/team";

const DEFAULT_ERROR = "ServerError";
const DEFAULT_ERROR_MESSAGE = 'خطایی رخ داده است.';

export const getTeamPlayers: () => Promise<ReturnType<typeof ServiceResponse> | ReturnType<typeof ServiceError> | undefined> = async () => {
  try {
    const response = await http.get(TEAM_PREFIX, {
      headers: {
        Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
      },
    });
    const players = response.data.team.players;
    console.log(players);
    const res = ServiceResponse<typeof players>(players);
    return res;
  } 
  catch (err) {
    if(axios.isAxiosError(err)){
        const data: ErrorData = err.response?.data as ErrorData;
        const res = ServiceError(data.errorType ?? DEFAULT_ERROR, data.message ?? DEFAULT_ERROR_MESSAGE);
        return res;
    }
  }
};
