import http from "./http";

const HOST_PREFIX = 'http://localhost:5000/api/users/';
const SIGNUP_URL = HOST_PREFIX + 'signup';
const LOGIN_URL = HOST_PREFIX + 'login';
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
    sessionStorage.setItem(TOKEN_SESSION_NAME, res_data.token);
    console.log(sessionStorage.getItem(TOKEN_SESSION_NAME));
}

export const postLoginData = async (loginData: LoginData) => {
    const response = await http.post(LOGIN_URL, loginData);
    const res_data = response.data;

    sessionStorage.setItem(TOKEN_SESSION_NAME, res_data.token);
    console.log(sessionStorage.getItem(TOKEN_SESSION_NAME));
}