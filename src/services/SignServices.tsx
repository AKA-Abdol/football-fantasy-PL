import http from "./http";

const USER_PREFIX = '/user/';
const SIGNUP_URL = USER_PREFIX + 'signup';
const LOGIN_URL = USER_PREFIX + 'login';
export const TOKEN_SESSION_NAME = "footballFantasyToken";

interface SignupData{
    firstname: string,
    lastname: string,
    email: string,
    country: string,
    username: string,
    password: string
}

interface LoginData{
    username: string,
    password: string
}

export const postSignupData = async (signupData: SignupData) => {
    const response = await http.post(SIGNUP_URL, signupData);
    const res_data = response.data;
    
    localStorage.setItem(TOKEN_SESSION_NAME, res_data.token);
    console.log(localStorage.getItem(TOKEN_SESSION_NAME));
}

export const postLoginData = async (loginData: LoginData) => {
    const response = await http.post(LOGIN_URL, loginData);
    const res_data = response.data;

    localStorage.setItem(TOKEN_SESSION_NAME, res_data.token);
    console.log(localStorage.getItem(TOKEN_SESSION_NAME));
}

// export const getAllPlayers = async () => {
//     const response = await http.get()
// }