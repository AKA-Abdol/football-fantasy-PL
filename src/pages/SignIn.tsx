import "../index.css";
import SUPLayers from "../images/SU-players.png";
import InputField from "../components/SignComponents/InputField";
import SelectField from "../components/SignComponents/SelectField";
import LeftLine from "../images/Line1.png";
import RightLine from "../images/Line2.png";
import PLWhiteLogo from "../images/PLWhiteLogo.png";
import React, { KeyboardEvent, useEffect, useState } from "react";
import { postLoginData, TOKEN_SESSION_NAME } from "../services/SignServices";
import { useNavigate } from "react-router-dom";
import FPLButtomImg from "../images/FPLButtomImg.png";
import { handleKeyboardEvent, toastShow } from "../GenericFunctions";
import { Toast } from "./SignUp";
import SuccessToast, { ErrorToast, WarningToast } from "../components/Toasts";

export const INPUT_FIELD_CLASS = "mx-auto lg:mx-0 lg:ml-auto";

interface RowFieldText {
  first: string;
  firstType: string;
  firstOptions: string[];
  firstPHolder: string;
  name: string;
}

const fields: Array<RowFieldText> = [
  {
    first: "نام کاربری",
    firstType: "text",
    firstOptions: [],
    firstPHolder: "username",
    name: "username",
  },
  {
    first: "رمز عبور",
    firstType: "password",
    firstOptions: [],
    firstPHolder: "password",
    name: "password",
  },
];

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_SESSION_NAME)) navigate("/myteam");
  }, []);

  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });
  console.log(signinData);

  const [invalidFields, setInvalidFields] = useState< Array<string> >([]);
  console.log("invalidFields", invalidFields);

  const [toast, setToast] = useState<Toast>({
    active: false,
    type: 'none',
    msg: ''
  })

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSigninData((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const signin = async () => {
    const response = await postLoginData(signinData);
    if(response.isSuccessful){
      if (localStorage.getItem(TOKEN_SESSION_NAME)) navigate("/myteam");
    }
    else{
      const errors = response.errorType;
      setInvalidFields(errors.split(' '));
      toastShow(setToast, {
        active: true,
        type: 'Error',
        msg: response.res
      })
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#3D185B] overflow-auto justify-start"
        onKeyDown={handleKeyboardEvent<HTMLDivElement>('Enter', signin)}
    >
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="sideImg w-full relative hidden lg:block">
          <img
            className="h-full w-full relative"
            src={SUPLayers}
            alt="players"
          />

          <div className="flex justify-center">
            <img
              className="absolute bottom-10"
              src={PLWhiteLogo}
              alt="PL Logo"
            />
          </div>
        </div>
        <div className="fields flex flex-col bg-[#3D185B] w-full justify-center items-center space-y-10 theme-font pt-8 lg:pt-0 lg:px-20">
          <div className="flex flex-row w-full items-center">
            <img className="w-1/4 mr-auto ml-4" src={LeftLine} alt="" />

            <p className="mx-auto text-2xl text-white font-normal">
              ورود به فانتزی
            </p>

            <img className="w-1/4 ml-auto mr-4" src={RightLine} alt="" />
          </div>
          {fields.map(
            ({
              first,
              firstType,
              firstOptions,
              firstPHolder,
              name,
            }: RowFieldText) => {
              return (
                <div className="flex flex-row-reverse w-full justify-center px-4 lg:px-0">
                  {firstType === "select" ? (
                    <SelectField
                      label={first}
                      placeholder={firstPHolder}
                      options={firstOptions}
                      name={name}
                      changeHandler={handleChange}
                      poseClass={INPUT_FIELD_CLASS}
                      isInvalidField={invalidFields.includes(name)}
                    />
                  ) : (
                    <InputField
                      label={first}
                      placeholder={firstPHolder}
                      name={name}
                      changeHandler={handleChange}
                      poseClass={INPUT_FIELD_CLASS}
                      isInvalidField={invalidFields.includes(name)}
                      isOnlyText={true}
                      type={firstType}
                    />
                  )}
                </div>
              );
            }
          )}
          <div className="flex flex-col-reverse w-full px-3 pt-2 lg:flex-row">
            <button
              onClick={() => navigate("/signup")}
              className="btn bg-transparent border-sign border-2 w-full lg:w-[48%] mr-auto text-xl font-normal mt-5 lg:mt-0 mb-8 lg:mb-0"
            >
              ثبت نام
            </button>
            <button
              onClick={signin}
              className="btn bg-sign w-full lg:w-[48%] ml-auto text-xl font-semibold"
            >
              ورود
            </button>
          </div>
        </div>
        <div className="bottomImg w-full mt-auto lg:hidden">
          <img
            className="w-full h-full"
            src={FPLButtomImg}
            placeholder="FPL Players Logo"
          />
        </div>
      </div>
      {toast.active ? (
        toast.type === "Error" ? (
          <ErrorToast message={toast.msg} />
        ) : toast.type === "Success" ? (
          <SuccessToast message={toast.msg} />
        ) : (
          <WarningToast />
        )
      ) : null}
    </div>
  );
}
