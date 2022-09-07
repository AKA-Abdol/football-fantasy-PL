import "../index.css"
import SUPLayers from "../images/SU-players.png"
import InputField from "../components/SignComponents/InputField";
import SelectField from "../components/SignComponents/SelectField";
import LeftLine from "../images/Line1.png"
import RightLine from "../images/Line2.png"
import PLWhiteLogo from "../images/PLWhiteLogo.png";
import { useCallback, useEffect, useState } from "react";
import { EMAIL_SESSION } from './SignUp';
import { confirmSignup, TOKEN_SESSION_NAME } from "../services/SignServices";
import { useNavigate } from "react-router-dom";

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
        firstPHolder: "5 digit code",
        firstPose: "mx-auto",
        name: "verificationCode"
    }
]

export default function Authentication(){

    const [authCode, setAuthCode] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem(TOKEN_SESSION_NAME))
            navigate('/myteam');
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setAuthCode(event.target.value)
    }
    console.log(authCode);

    const verifyNnavigate = useCallback( async () => {
        await confirmSignup({
            email: localStorage.getItem(EMAIL_SESSION),
            code: parseInt(authCode)
        });
        navigate('/myteam');
    }, [authCode]);

    return (
        <div className="flex flex-row h-screen">
            
            <div className="sideImg w-full relative">
                <img className="h-full w-full relative" src={SUPLayers} alt="players-image"/>
                
                <div className="flex justify-center">
                    <img className="absolute bottom-10" src={PLWhiteLogo} alt="PL Logo"/>
                </div>    
            </div>

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
                    <button onClick={verifyNnavigate} className="btn bg-sign w-full text-xl font-semibold">
                        تایید ثبت نام
                    </button>
                </div>
            </div>  
        </div>
    );
}