import http from "./http";
import { EMAIL_SESSION } from "../pages/SignUp";

const USER_PREFIX = '/auth/';
const SIGNUP_URL = USER_PREFIX + 'signup';
const LOGIN_URL = USER_PREFIX + 'login';
export const TOKEN_SESSION_NAME = "footballFantasyToken";
const OK = 200;
const CONFIRM_URL = USER_PREFIX + 'confirmation';

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

interface ConfirmData{
    code: number,
    email: string | null
}

export const postSignupData = async (signupData: SignupData) => {
    console.log("in the service:", signupData);
    const response = await http.post(SIGNUP_URL, signupData);
    return response.status === OK;
}

export const postLoginData = async (loginData: LoginData) => {
    const response = await http.post(LOGIN_URL, loginData);
    const res_data = response.data;

    localStorage.setItem(TOKEN_SESSION_NAME, res_data.token);
    console.log(localStorage.getItem(TOKEN_SESSION_NAME));
}

export const confirmSignup = async (confirmData: ConfirmData) => {
    const response = await http.post(CONFIRM_URL, confirmData);
    const token = response.data.token;
    localStorage.setItem(TOKEN_SESSION_NAME, token);
    localStorage.removeItem(EMAIL_SESSION);
}