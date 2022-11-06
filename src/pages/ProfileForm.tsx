import "../index.css";
import React, { Dispatch, useCallback, useEffect } from "react";
import SUPLayers from "../images/SU-players.png";
import InputField from "../components/profile/InputField";
import SelectField from "../components/profile/SelectField";
import PLWhiteLogo from "../images/PLWhiteLogo.png";
import { useState } from "react";
import { postSignupData, TOKEN_SESSION_NAME } from "../services/SignServices";
import { useNavigate } from "react-router-dom";
import FPLButtomImg from "../images/FPLButtomImg.png";
import { handleKeyboardEvent, toastShow } from "../GenericFunctions";
import SuccessToast, { ErrorToast, WarningToast } from "../components/Toasts";
import LeftLine from "../images/Line 2.svg";
import RighttLine from "../images/Line 3.svg";

const INPUT_FIELD_CLASS = "mx-auto lg:mx-0 lg:ml-auto text-black";

interface RowFieldText {
  first: string;
  second: string;
  firstType: string;
  secondType: string;
  firstOptions: string[];
  secondOptions: string[];
  firstPHolder: string;
  secondPHolder: string;
  firstName: string;
  secondName: string;
  firstDir?: string;
  secondDir?: string;
}

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
    firstName: "firstname",
    secondName: "lastname",
    firstDir: "rtl",
    secondDir: "rtl",
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
    firstName: "email",
    secondName: "country",
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
    firstName: "username",
    secondName: "password",
  },
];

export const EMAIL_SESSION = "FPLEmail";

export interface Toast {
  active: boolean;
  type: string;
  msg: string;
}

export default function SignUp() {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    username: "",
    password: "",
  });
  console.log(signupData);

  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);
  console.log("invalid: ", invalidFields);

  const [toast, setToast] = useState<Toast>({
    active: false,
    type: "none",
    msg: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSignupData((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const signup = useCallback(async () => {
    console.log(signupData);
    const response = await postSignupData(signupData);
    if (response.isSuccessful) {
      localStorage.setItem(EMAIL_SESSION, signupData.email);
      //   navigate("/authentication");
    } else {
      const errors = response.errorType;
      setInvalidFields(errors.split(" "));
      // toast maybe setup
      toastShow(setToast, {
        active: true,
        type: "Error",
        msg: response.res,
      });
    }
  }, [signupData]);

  return (
    <div
      className="flex flex-col h-screen overflow-auto justify-center items-center"
      onKeyDown={handleKeyboardEvent<HTMLDivElement>("Enter", signup)}
    >
      <div className="title hidden md:block font-semibold text-[#3D195B] md:flex flex-row space-x-9 mt-12">
        <img src={RighttLine} alt="line" />
        <div className="">اطلاعات فردی</div>
        <img src={LeftLine} alt="line" />
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="fields flex flex-col lg:px-20 w-full pt-8 lg:pt-0 lg:justify-center items-center space-y-4 lg:space-y-10 theme-font">
          {fields.map(
            ({
              first,
              second,
              firstType,
              secondType,
              firstOptions,
              secondOptions,
              firstPHolder,
              secondPHolder,
              firstName,
              secondName,
              firstDir,
              secondDir,
            }: RowFieldText) => {
              return (
                <div className="flex flex-col space-y-4 lg:flex-row-reverse w-full justify-center items-center px-3 lg:px-0">
                  {firstType === "select" ? (
                    <SelectField
                      label={first}
                      placeholder={firstPHolder}
                      options={firstOptions}
                      name={firstName}
                      changeHandler={handleChange}
                      poseClass={INPUT_FIELD_CLASS + ""}
                      isInvalidField={
                        invalidFields.includes(firstName) ? true : false
                      }
                    />
                  ) : (
                    <InputField
                      label={first}
                      placeholder={firstPHolder}
                      name={firstName}
                      changeHandler={handleChange}
                      dir={firstDir ?? ""}
                      poseClass={INPUT_FIELD_CLASS}
                      isInvalidField={
                        invalidFields.includes(firstName) ? true : false
                      }
                    />
                  )}
                  {secondType === "select" ? (
                    <SelectField
                      label={second}
                      placeholder={secondPHolder}
                      options={secondOptions}
                      name={secondName}
                      changeHandler={handleChange}
                      poseClass={INPUT_FIELD_CLASS}
                      isInvalidField={
                        invalidFields.includes(secondName) ? true : false
                      }
                    />
                  ) : (
                    <InputField
                      label={second}
                      placeholder={secondPHolder}
                      name={secondName}
                      changeHandler={handleChange}
                      dir={secondDir ?? ""}
                      poseClass={INPUT_FIELD_CLASS}
                      isInvalidField={
                        invalidFields.includes(secondName) ? true : false
                      }
                    />
                  )}
                </div>
              );
            }
          )}
          <div className="w-full pt-2 px-3 flex justify-center">
            <button
              onClick={signup}
              className="bg-[#00FF87] w-full md:w-[75%] text-xl font-normal mb-8 lg:mb-0 rounded-lg px-4 py-2"
            >
              تایید
            </button>
          </div>
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
