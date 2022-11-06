import http from "./http";
import { TOKEN_SESSION_NAME } from "./SignServices";
import {
  ServiceError,
  ServiceSuccess,
  ErrorData,
  ServiceSuccessInterface,
  ServiceErrorInterface,
} from "./Services";
import axios from "axios";
import { PlayerProps } from "../components/SoccerField";

export const TEAM_PREFIX = "/team";

const DEFAULT_ERROR = "ServerError";
const DEFAULT_ERROR_MESSAGE = "خطایی رخ داده است.";

export const getTeamPlayers: () => Promise<
  ServiceSuccessInterface<PlayerProps[]> | ServiceErrorInterface
> = async () => {
  try {
    const response = await http.get(TEAM_PREFIX, {
      headers: {
        Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
      },
    });
    const players = response.data.team.players;
    const res = ServiceSuccess<PlayerProps[]>(players);
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const data = err.response?.data as ErrorData;
      const res = ServiceError(data.errorType, data.message);
      return res;
    } else {
      const res = ServiceError(DEFAULT_ERROR, DEFAULT_ERROR_MESSAGE);
      return res;
    }
  }
};
