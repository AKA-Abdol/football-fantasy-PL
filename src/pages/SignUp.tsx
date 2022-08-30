import "../index.css"
import SUPLayers from "../images/SU-players.png"
import InputField from "../components/SignUpComponents/InputField";
import SelectField from "../components/SignUpComponents/SelectField";
import LeftLine from "../images/Line1.png"
import RightLine from "../images/Line2.png"

interface RowFieldText{
    first: string,
    second: string,
    firstType: string,
    secondType: string,
    firstOptions: string[],
    secondOptions: string[],
    firstPHolder: string,
    secondPHolder: string
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
        secondPHolder: "محمودی"
    },
    {
        first: "ایمیل",
        second: "کشور",
        firstType: "",
        secondType: "select",
        firstOptions: [],
        secondOptions: ["ایران", "افغانستان", "تاجیکستان", "ترکیه"],
        firstPHolder: "mahmoodi.ext@gmail.com",
        secondPHolder: "ایران - قم"
    },
    {
        first: "نام کاربری",
        second: "رمز عبور",
        firstType: "",
        secondType: "",
        firstOptions: [],
        secondOptions: [],
        firstPHolder: "Abdol Loves Mahmood",
        secondPHolder: "Mahmood Loves Abdol too"
    }
]

export default function SignUp(){
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
                    fields.map(({first, second, firstType, secondType, firstOptions, secondOptions, firstPHolder, secondPHolder}: RowFieldText) => {
                        return (
                            <div className="flex flex-row-reverse w-full justify-center">
                                {firstType === "select" ? 
                                <SelectField
                                    label={first}
                                    placeholder={firstPHolder}
                                    options={firstOptions}
                                />:
                                <InputField
                                    label={first}
                                    placeholder={firstPHolder}
                                />
                                }
                                {secondType === "select" ? 
                                <SelectField
                                    label={second}
                                    placeholder={secondPHolder}
                                    options={secondOptions}
                                />:
                                <InputField
                                    label={second}
                                    placeholder={secondPHolder}
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