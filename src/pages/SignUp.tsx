import "../index.css"
import React, { useCallback, useEffect } from 'react'
import SUPLayers from "../images/SU-players.png"
import InputField from "../components/SignComponents/InputField";
import SelectField from "../components/SignComponents/SelectField";
import LeftLine from "../images/Line1.png"
import RightLine from "../images/Line2.png"
import PLWhiteLogo from "../images/PLWhiteLogo.png"
import { useState } from "react";
import { postSignupData, TOKEN_SESSION_NAME } from '../services/SignServices'
import { useNavigate } from "react-router-dom";
import { atom } from "recoil";

interface RowFieldText{
    first: string,
    second: string,
    firstType: string,
    secondType: string,
    firstOptions: string[],
    secondOptions: string[],
    firstPHolder: string,
    secondPHolder: string,
    firstName: string,
    secondName: string,
    firstDir ?: string,
    secondDir ?: string
};

const fields: Array<RowFieldText> = [
    {
        first: "نام",
        second: "نام خانوادگی",
        firstType: "",
        secondType: "",
        firstOptions: [],
        secondOptions: [],
        firstPHolder: "علی",
        secondPHolder: "محمودی",
        firstName: 'firstname',
        secondName: 'lastname',
        firstDir: 'rtl',
        secondDir: 'rtl'
    },
    {
        first: "ایمیل",
        second: "کشور",
        firstType: "",
        secondType: "select",
        firstOptions: [],
        secondOptions: ["ایران", "افغانستان", "تاجیکستان", "ترکیه"],
        firstPHolder: "test@mail.com",
        secondPHolder: "انتخاب کشور",
        firstName: 'email',
        secondName: 'country'
    },
    {
        first: "نام کاربری",
        second: "رمز عبور",
        firstType: "",
        secondType: "",
        firstOptions: [],
        secondOptions: [],
        firstPHolder: "username",
        secondPHolder: "password",
        firstName: 'username',
        secondName: 'password'
    }
]

export const EMAIL_SESSION = 'FPLEmail';

export default function SignUp(){

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem(TOKEN_SESSION_NAME))
            navigate('/myteam');
    }, [])

    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        country: '',
        username: '',
        password: ''
    })
    console.log(signupData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSignupData((oldState) => ({...oldState,
            [event.target.name]: event.target.value
        }))
    }

    const signup = useCallback( async () => {
        console.log(signupData)
        const isValidInputData: boolean = await postSignupData(signupData);
        if(isValidInputData){
            localStorage.setItem(EMAIL_SESSION, signupData.email);
            navigate('/authentication');
        }
    }, [signupData]);

    return (
        <div className="flex flex-row h-screen">
            
            <div className="sideImg w-full relative">
                <img className="h-full w-full relative" src={SUPLayers} alt="players-image"/>
                
                <div className="flex justify-center">
                    <img className="absolute bottom-10" src={PLWhiteLogo} alt="PL Logo"/>
                </div>    
            </div>

            <div className="fields flex flex-col bg-[#3D185B] h-full px-20 w-full justify-center items-center space-y-10 theme-font">
                <div className="flex flex-row w-full items-center">
                    
                    <img className="w-1/4 mr-auto ml-4" src={LeftLine} alt=""/>
                
                    <p className="mx-auto text-2xl text-white font-normal">فرم ثبت نام</p>
                
                    <img className="w-1/4 ml-auto mr-4" src={RightLine} alt=""/>
                
                </div>
                {
                    fields.map(({first, second, firstType, secondType, firstOptions, secondOptions, firstPHolder, secondPHolder, firstName, secondName, firstDir, secondDir}: RowFieldText) => {
                        return (
                            <div className="flex flex-row-reverse w-full justify-center">
                                {firstType === "select" ? 
                                <SelectField
                                    label={first}
                                    placeholder={firstPHolder}
                                    options={firstOptions}
                                    name={firstName}
                                    changeHandler={handleChange}
                                />:
                                <InputField
                                    label={first}
                                    placeholder={firstPHolder}
                                    name={firstName}
                                    changeHandler={handleChange}
                                    dir={firstDir ?? ''}
                                />
                                }
                                {secondType === "select" ? 
                                <SelectField
                                    label={second}
                                    placeholder={secondPHolder}
                                    options={secondOptions}
                                    name={secondName}
                                    changeHandler={handleChange}
                                />:
                                <InputField
                                    label={second}
                                    placeholder={secondPHolder}
                                    name={secondName}
                                    changeHandler={handleChange}
                                    dir={secondDir ?? ''}
                                />
                                }
                            </div>
                        )
                    })
                }
                <div className="w-full px-3 pt-2">
                    <button onClick={signup} className="btn bg-sign w-full text-xl font-normal">
                        ثبت نام
                    </button>
                </div>
            </div>  
        </div>
    );
}