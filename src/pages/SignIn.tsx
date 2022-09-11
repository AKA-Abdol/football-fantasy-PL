import "../index.css"
import SUPLayers from "../images/SU-players.png"
import InputField from "../components/SignComponents/InputField";
import SelectField from "../components/SignComponents/SelectField";
import LeftLine from "../images/Line1.png";
import RightLine from "../images/Line2.png";
import PLWhiteLogo from "../images/PLWhiteLogo.png";
import { useEffect, useState } from "react";
import { postLoginData, TOKEN_SESSION_NAME } from '../services/SignServices';
import { useNavigate } from "react-router-dom";


interface RowFieldText{
    first: string,
    firstType: string,
    firstOptions: string[],
    firstPHolder: string,
    name: string
};

const fields: Array<RowFieldText> = [
    {
        first:"نام کاربری",
        firstType: "",
        firstOptions: [],
        firstPHolder: "Username",
        name: 'username'
    },
    {
        first: "رمز عبور",
        firstType: "",
        firstOptions: [],
        firstPHolder: "password",
        name: 'password'
    }
]

export default function SignIn(){

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem(TOKEN_SESSION_NAME))
            navigate('/myteam');
    }, [])

    const [signinData, setSigninData] = useState({
        username: '',
        password: ''
    }) 
    console.log(signinData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSigninData((oldState) => ({...oldState,
            [event.target.name]: event.target.value
        }))
    }

    const signin = async () => {
        await postLoginData(signinData);
        if(localStorage.getItem(TOKEN_SESSION_NAME))
            navigate('/myteam');
        else
            navigate('/signup');
    }

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
                
                    <p className="mx-auto text-2xl text-white font-normal">ورود به فانتزی</p>
                
                    <img className="w-1/4 ml-auto mr-4" src={RightLine} alt=""/>
                
                </div>
                {
                    fields.map(({first, firstType, firstOptions, firstPHolder, name}: RowFieldText) => {
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
                                    name={name}
                                    changeHandler={handleChange}
                                />
                                }
                            </div>
                        )
                    })
                }
                <div className="flex flex-row w-full px-3 pt-2">
                    <button onClick={() => navigate('/signup')} className="btn bg-transparent border-sign border-2 w-[48%] mr-auto text-xl font-normal">
                        ثبت نام
                    </button>
                    <button onClick={signin} className="btn bg-sign w-[48%] ml-auto text-xl font-semibold">
                        ورود
                    </button>
                </div>
            </div>  
        </div>
    );
}