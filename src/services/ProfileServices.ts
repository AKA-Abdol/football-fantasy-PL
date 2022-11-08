import { AxiosError } from "axios";
import jwt from "jwt-decode";
import http from "./http";
import { ErrorData, ServiceError, ServiceSuccess } from "./Services";
import { TOKEN_SESSION_NAME } from "./SignServices";

interface JWTI {
  userId: number;
  iat: number;
  exp: number;
}

interface ProfileDataI {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  birthday: string;
  username: string;
  profileImage: string;
}

export interface ProfileData extends Omit<ProfileDataI, "birthday"> {
  birthday: Date
}

const USER_ID_PATH = "/user";

export const getProfileData = async () => {
  const { userId } = jwt<JWTI>(localStorage.getItem(TOKEN_SESSION_NAME) ?? "");
  console.log("userId: ", userId);

  try {
    const response = await http.get(`${USER_ID_PATH}/${userId}`, {
      headers: {
        Authorization: `Abdol ${localStorage.getItem(TOKEN_SESSION_NAME)}`
      }
    });
    const profileData: ProfileDataI = response.data.user;
    console.log("profileData: ", profileData);
    const date = new Date(profileData.birthday);
    console.log("profileDate: ", date.toLocaleDateString("fa-IR"));
    const res: ProfileData = {
      ...profileData,
      birthday: new Date(profileData.birthday),
      profileImage: `http://localhost:5000/${profileData.profileImage}`,
    };
    return ServiceSuccess(res);
  } catch (err) {
    const _err = err as AxiosError;
    const data = _err.response?.data as ErrorData;
    return ServiceError(data.errorType, data.message);
  }
};
