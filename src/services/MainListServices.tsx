import http from "./http";
import { TEAM_PREFIX } from "./TeamPlayerServices";
import { TOKEN_SESSION_NAME } from "./SignServices";
import axios, { AxiosError } from "axios";
import { atom, useRecoilState } from "recoil";
import { Filter } from "../components/mainListComponents/MainPlayerList";
import {
  ErrorData,
  ServiceError,
  ServiceErrorInterface,
  ServiceSuccess,
  ServiceSuccessInterface,
} from "./Services";

const PLAYER_PREFIX = "/player";
const ALL_PLAYERS = PLAYER_PREFIX + "/all";
const TEAM_PLAYER_PREFIX = TEAM_PREFIX + PLAYER_PREFIX;
export const ErrorMessageAtom = atom({
  key: "ErrorMessage",
  default: "خطایی رخ داده است",
});

interface TeamQueryParams {
  page: number;
  num: number;
  search: string;
  role: Filter;
}

export const getPlayers = async (queryParams: TeamQueryParams) => {
  console.log("Query: ", queryParams);

  const response = await http.get(ALL_PLAYERS, { params: queryParams });
  const data = response.data;
  return [data.values, data.count];
};

export const addPlayer: (
  pose: number,
  id: number
) => Promise<ServiceSuccessInterface<string> | ServiceErrorInterface> = async (
  pose: number,
  id: number
) => {
  console.log("position:", pose, "id:", id);
  const body = {
    position_num: pose,
    player_id: id,
  };
  console.log(body);
  try {
    const response = await http.post(TEAM_PLAYER_PREFIX, body, {
      headers: {
        Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
      },
    });
    return ServiceSuccess<string>("ok");
  } catch (err) {
    const _err = err as AxiosError;
    const data = _err.response?.data as ErrorData;
    return ServiceError(data.errorType, data.message);
  }
};
export const removePlayer = async (pose: number) => {
  try {
    console.log("position:", pose);
    const body = {
      position_num: pose,
    };
    console.log(body);
    const response = await http.delete(
      `${TEAM_PLAYER_PREFIX}?position_num=${pose}`,
      {
        headers: {
          Authorization: `Ali ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
        },
      }
    );
    return ServiceSuccess("ok");
  } catch (err) {
    const _err = err as AxiosError;
    const data = _err.response?.data as ErrorData;
    return ServiceError(data.errorType, data.message);
  }
};
