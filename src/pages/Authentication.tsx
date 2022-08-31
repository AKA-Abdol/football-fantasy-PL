import "../index.css"
import SUPLayers from "../images/SU-players.png"
import InputField from "../components/SignComponents/InputField";
import SelectField from "../components/SignComponents/SelectField";
import LeftLine from "../images/Line1.png"
import RightLine from "../images/Line2.png"
import { useState } from "react";

interface RowFieldText{
    first: string,
    firstType: string,
    firstOptions: string[],
    firstPHolder: string,
    firstPose: string,
    name: string
};

const fields: Array<RowFieldText> = [
    {
        first: "لطفا کدی که به ایمیلتان ارسال شده را در کادر زیر وارد کنید",
        firstType: "",
        firstOptions: [],
        firstPHolder: "Abdol Loves Mahmood and Mahmood vice verse",
        firstPose: "mx-auto",
        name: "verificationCode"
    }
]

export default function Authentication(){

    const [authcode, setAuthcode] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setAuthcode(event.target.value)
    }
    console.log(authcode);

    return (
        <div className="flex flex-row h-screen">
            <img className="h-full" src={SUPLayers} alt="players-image"/>

            <div className="fields flex flex-col bg-[#3D185B] h-full px-20 w-full justify-center items-center space-y-10 theme-font">
                <div className="flex flex-row w-full mb-24 items-center">
                    
                    <img className="w-1/4 mr-auto ml-4" src={LeftLine} alt=""/>
                
                    <p className="mx-auto text-2xl text-white font-normal">تایید ثبت نام</p>
                
                    <img className="w-1/4 ml-auto mr-4" src={RightLine} alt=""/>
                
                </div>
                {
                    fields.map(({first, firstType, firstOptions, firstPHolder, firstPose, name}: RowFieldText) => {
                        return (
                            <div className="flex flex-row-reverse w-full justify-center">
                                {firstType === "select" ? 
                                <SelectField
                                    label={first}
                                    placeholder={firstPHolder}
                                    options={firstOptions}
                                    name={name}
                                    changeHandler={handleChange}
                                />:
                                <InputField
                                    label={first}
                                    placeholder={firstPHolder}
                                    poseClass={firstPose}
                                    name={name}
                                    changeHandler={handleChange}
                                />
                                }
                            </div>
                        )
                    })
                }
                <div className="flex flex-row w-full px-3 pt-16">
                    <button className="btn bg-sign w-full text-xl font-semibold">
                        تایید ثبت نام
                    </button>
                </div>
            </div>  
        </div>
    );
}