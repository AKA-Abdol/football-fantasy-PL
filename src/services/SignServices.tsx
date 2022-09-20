import http from "./http";
import { EMAIL_SESSION } from "../pages/SignUp";
import axios, { AxiosError } from "axios";
import { ErrorData, ServiceError, ServiceErrorInterface, ServiceSuccess, ServiceSuccessInterface } from "./Services";

const USER_PREFIX = '/user/';
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

export const postSignupData: (signupData: SignupData) => Promise<ServiceSuccessInterface<string> | ServiceErrorInterface> = async (signupData: SignupData) => {

    try {
        const response = await http.post(SIGNUP_URL, signupData);
        console.log("signupTest: ", response);
        const res = ServiceSuccess<string>(response.data);
        return res;
    }
    catch(err) {
        const DEFAULT_ERROR = 'unknown';
        console.log(err);
        if(axios.isAxiosError(err)){
            const data = err.response?.data as ErrorData;
            console.log(data);
            const res = ServiceError('firstname username password country' , data.message);
            return res;
        }
        else{
          return ServiceError(DEFAULT_ERROR, "یه اروری داداچ");
        }
    }
}

export const postLoginData: (loginData: LoginData) => Promise<ServiceSuccessInterface<string> | ServiceErrorInterface> = async (loginData: LoginData) => {
    try {
        const response = await http.post(LOGIN_URL, loginData);
        const token = response.data.token;
        localStorage.setItem(TOKEN_SESSION_NAME, token);
        return ServiceSuccess<string>(response.data);
    }
    catch(err) {
        const _err = err as AxiosError;
        const data = _err.response?.data as ErrorData;
        console.log('hereinlogindata:', data);
        return ServiceError('username password', 'اطلاعات ورودی اشتباه است');
    }
}

export const confirmSignup = async (confirmData: ConfirmData) => {
    try {
        const response = await http.post(CONFIRM_URL, confirmData);
        const token = response.data.token;
        localStorage.setItem(TOKEN_SESSION_NAME, token);
        localStorage.removeItem(EMAIL_SESSION);
        return ServiceSuccess<string>(response.data);
    }
    catch(err) {
        const _err = err as AxiosError;
        const data = _err.response?.data as ErrorData;
        console.log('authdata: ', data);
        return ServiceError('verificationCode', 'کد وارد شده اشتباه است');
    }
}