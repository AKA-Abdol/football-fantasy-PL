import { AxiosError } from "axios";
import { FollowTab } from "../components/eventsComponents/FollowButtons";
import http from "./http";
import { ErrorData, ServiceError, ServiceSuccess } from "./Services";
import { TOKEN_SESSION_NAME } from "./SignServices";

const USER_ROUTE = '/user';
const USER_SEARCH_API_ROUTE = USER_ROUTE + "/all";

const SOCIAL_ROUTE = "/social";
const FOLLOW_ROUTE = SOCIAL_ROUTE + "/follow";
const UNFOLLOW_ROUTE = SOCIAL_ROUTE + "/unfollow";
const FOLLOWERS_ROUTE = SOCIAL_ROUTE + "/followers";
const FOLLOWINGS_ROUTE = SOCIAL_ROUTE + "/followings";

export interface FollowQueryParams {
  page: number;
  num: number;
}

export interface GetFollowOption {
  type: FollowTab;
}

export interface EventUser {
    id: number,
    firstname: string,
    lastname: string,
    isFollowed: boolean,
    profileImage: string
  }

export const getFollowers = async (
  queryParams: FollowQueryParams,
  options: GetFollowOption
) => {
    console.log("are we here");
    
  const response = await http.get(
    options.type === 'Followers' ? FOLLOWERS_ROUTE : FOLLOWINGS_ROUTE,
    {
      params: queryParams,
      headers: {
        Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`
      }
    }
  );
  const data = response.data;
  const followers: EventUser[] = data.values;
  return [followers, data.count];
};

export const followPlayer = async (id: number) => {
  try {
    const response = await http.post(
      `${FOLLOW_ROUTE}/${id}`,
      {},
      {
        headers: {
          Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
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

export const unfollowPlayer = async (id: number) => {
  try {
    const response = await http.delete(
      `${UNFOLLOW_ROUTE}/${id}`,
      {
        headers: {
          Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`,
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

export const getSearchedUsers = async (searchKey: string) => {
  const response = await http.get(USER_SEARCH_API_ROUTE, {
    params: { search: searchKey },
    headers: {
      Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`
    },
  });
  const users: EventUser[] = response.data.values;
  const dummyUsers = users.map((user) => ({
    ...user,
    isFollowed: false,
  }));
  return dummyUsers;
};

export interface ModalUser extends EventUser {
  country: string,
  age: number, 
  score: number
}

export const getUserData = async (id: number) => {
  try {
    const response = await http.get(`${USER_ROUTE}/${id}`, {
      headers: {
        Authentication: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`
      }
    })
    const userData: ModalUser = response.data.user; //delete the '.user' if new back is up
    return ServiceSuccess(userData);

  }
  catch(err){
    const _err = err as AxiosError;
    const data = _err.response?.data as ErrorData;
    return ServiceError(data.errorType, data.message);
  }
}