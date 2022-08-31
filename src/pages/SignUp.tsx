import "../index.css"
import React from 'react'
import SUPLayers from "../images/SU-players.png"
import InputField from "../components/SignComponents/InputField";
import SelectField from "../components/SignComponents/SelectField";
import LeftLine from "../images/Line1.png"
import RightLine from "../images/Line2.png"
import { ChangeEvent, ChangeEventHandler, useState } from "react";

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
    secondName: string
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
        secondName: 'lastname'
    },
    {
        first: "ایمیل",
        second: "کشور",
        firstType: "",
        secondType: "select",
        firstOptions: [],
        secondOptions: ["ایران", "افغانستان", "تاجیکستان", "ترکیه"],
        firstPHolder: "mahmoodi.ext@gmail.com",
        secondPHolder: "ایران - قم",
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
        firstPHolder: "Abdol Loves Mahmood",
        secondPHolder: "Mahmood Loves Abdol too",
        firstName: 'username',
        secondName: 'password'
    }
]

export default function SignUp(){
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

    return (
        <div className="flex flex-row h-screen">
            <img className="h-full" src={SUPLayers} alt="players-image"/>

            <div className="fields flex flex-col bg-[#3D185B] h-full px-20 w-full justify-center items-center space-y-10 theme-font">
                <div className="flex flex-row w-full items-center">
                    
                    <img className="w-1/4 mr-auto ml-4" src={LeftLine} alt=""/>
                
                    <p className="mx-auto text-2xl text-white font-normal">فرم ثبت نام</p>
                
                    <img className="w-1/4 ml-auto mr-4" src={RightLine} alt=""/>
                
                </div>
                {
                    fields.map(({first, second, firstType, secondType, firstOptions, secondOptions, firstPHolder, secondPHolder, firstName, secondName}: RowFieldText) => {
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
                                />
                                }
                            </div>
                        )
                    })
                }
                <div className="w-full px-3 pt-2">
                    <button className="btn bg-sign w-full text-xl font-normal">
                        ثبت نام
                    </button>
                </div>
            </div>  
        </div>
    );
}