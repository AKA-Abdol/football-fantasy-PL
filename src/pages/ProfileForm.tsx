import "../index.css";
import React, { useCallback, useEffect } from "react";
import InputField from "../components/profile/InputField";
import SelectField from "../components/profile/SelectField";
import LeftLine from "../images/Line3.svg";
import RightLine from "../images/Line4.svg";
import PLWhiteLogo from "../images/PLWhiteLogo.png";
import { useState } from "react";
import { postSignupData, TOKEN_SESSION_NAME } from "../services/SignServices";
import { useNavigate } from "react-router-dom";
import { INPUT_FIELD_CLASS } from "./SignIn";
import FPLButtomImg from "../images/FPLButtomImg.png";
import { handleKeyboardEvent, toastShow } from "../GenericFunctions";
import SuccessToast, { ErrorToast, WarningToast } from "../components/Toasts";
import DateField from "../components/profile/DateField";
import { atom, useSetRecoilState } from "recoil";
import jwt from "jwt-decode";
import { getProfileData, ProfileData } from "../services/ProfileServices";

type ProfileDataField = Exclude<keyof ProfileData, "birthday">;
type ProfilePageMode = "edit" | "view";

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
    firstType: "text",
    secondType: "text",
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
    firstType: "email",
    secondType: "select",
    firstOptions: [],
    secondOptions: ["ایران", "افغانستان", "تاجیکستان", "ترکیه"],
    firstPHolder: "test@mail.com",
    secondPHolder: "انتخاب کشور",
    firstName: "email",
    secondName: "country",
  },
  // {
  //   first: "تاریخ تولد",
  //   second: "بارگزاری تصویر",
  //   firstType: "date",
  //   secondType: "file",
  //   firstOptions: [],
  //   secondOptions: [],
  //   firstPHolder: "birthday",
  //   secondPHolder: "profileImage",
  //   firstName: "birthday",
  //   secondName: "image",
  // },
  {
    first: "نام کاربری",
    second: "رمز عبور",
    firstType: "text",
    secondType: "password",
    firstOptions: [],
    secondOptions: [],
    firstPHolder: "username",
    secondPHolder: "*******",
    firstName: "username",
    secondName: "password",
  },
];

export const EMAIL_SESSION = "FPLEmail";
export const IMAGE_SESSION = "FPLImage";

export interface Toast {
  active: boolean;
  type: string;
  msg: string;
}

export const imageAtom = atom({
  key: "image-atom",
  default: new File([""], "dummy"),
});

export default function SignUp() {
  const navigate = useNavigate();

  const setImageData = useSetRecoilState(imageAtom);

  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    username: "",
    password: "",
    birthday: new Date(0),
    image: new File([""], "filename"),
  });
  console.log("signup data: ", signupData);

  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);
  console.log("invalid: ", invalidFields);

  const [toast, setToast] = useState<Toast>({
    active: false,
    type: "none",
    msg: "",
  });

  const handleDateFor = useCallback((dateKey: string) => {
    return (newDate: Date) => {
      setSignupData((oldState) => ({
        ...oldState,
        [dateKey]: newDate,
      }));
    };
  }, []);

  const handleChangeFor = (type: string) => {
    switch (type) {
      case "file":
        return (event: React.ChangeEvent<HTMLInputElement>) => {
          const newVal =
            event.target.files === null
              ? new File([""], "dummy")
              : event.target.files[0];
          console.log("files", typeof event.target.files);
          console.log("val", newVal);

          setImageData(() => newVal);

          setSignupData((oldState) => ({
            ...oldState,
            [event.target.name]: newVal,
          }));
        };

      default:
        return (
          event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
        ) => {
          setSignupData((oldState) => ({
            ...oldState,
            [event.target.name]: event.target.value,
          }));
        };
    }
  };

  const signup = useCallback(async () => {
    console.log(signupData);
    const response = await postSignupData(signupData);
    if (response.isSuccessful) {
      localStorage.setItem(EMAIL_SESSION, signupData.email);
      navigate("/authentication");
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
  }, [navigate, signupData]);

  console.log(
    "profile for test: ",
    jwt(localStorage.getItem(TOKEN_SESSION_NAME) ?? "")
  );

  const [mode, setMode] = useState<ProfilePageMode>("view");

  const [profileData, setProfileData] = useState<ProfileData>({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    birthday: new Date(0),
    username: "",
    profileImage: ""
  });

  useEffect(() => {
    const initProfileValues = async () => {
      const response = await getProfileData();
      if (response.isSuccessful) {
        setProfileData(response.res);
      } else {
        console.log("profile init error: ", response.errorType);
      }
    };

    initProfileValues();
  }, []);
  return (
    <div
      className="flex flex-col h-screen overflow-auto justify-start"
      onKeyDown={handleKeyboardEvent<HTMLDivElement>("Enter", signup)}
    >
      <div className="flex flex-col w-full h-full text-black lg:flex-row">
        <div className="fields flex flex-col lg:px-20 w-full pt-8 lg:pt-0 lg:justify-center items-center space-y-4 lg:space-y-6 theme-font">
          <div className="flex flex-row w-full items-center mb-4">
            <img className="w-1/4 mr-auto ml-4" src={LeftLine} alt="" />

            <p className="mx-auto text-2xl text-[#3D195B] font-normal">
              فرم ثبت نام
            </p>

            <img className="w-1/4 ml-auto mr-4" src={RightLine} alt="" />
          </div>
          <div
            className="w-36"
          >
            <img
            className="rounded-full"
            src={profileData.profileImage} alt="" />
          </div>
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
                <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-center px-3 lg:px-0">
                  {firstType === "select" ? (
                    <SelectField
                      label={first}
                      placeholder={firstPHolder}
                      options={firstOptions}
                      name={firstName}
                      changeHandler={handleChangeFor(firstType)}
                      isInvalidField={
                        invalidFields.includes(firstName) ? true : false
                      }
                      initVal="ایران"
                      disable={mode === "view" ? true : false}
                    />
                  ) : firstType === "date" ? (
                    <DateField
                      setDate={handleDateFor(firstName)}
                      label={first}
                    />
                  ) : (
                    <InputField
                      label={first}
                      placeholder={firstPHolder}
                      name={firstName}
                      changeHandler={handleChangeFor(firstType)}
                      dir={firstDir ?? ""}
                      type={firstType}
                      isInvalidField={
                        invalidFields.includes(firstName) ? true : false
                      }
                      initVal={profileData[firstName as ProfileDataField]}
                      disable={mode === "view" ? true : false}
                    />
                  )}
                  {secondType === "select" ? (
                    <SelectField
                      label={second}
                      placeholder={secondPHolder}
                      options={secondOptions}
                      name={secondName}
                      changeHandler={handleChangeFor(secondType)}
                      isInvalidField={
                        invalidFields.includes(secondName) ? true : false
                      }
                      initVal="ایران"
                      disable={mode === "view" ? true : false}
                    />
                  ) : secondType === "date" ? (
                    <DateField
                      setDate={handleDateFor(secondName)}
                      label={second}
                    />
                  ) : (
                    <InputField
                      label={second}
                      placeholder={mode === "edit" ? "******" : "رمز عبور"}
                      name={secondName}
                      changeHandler={handleChangeFor(secondType)}
                      dir={secondDir ?? ""}
                      type={secondType}
                      isInvalidField={
                        invalidFields.includes(secondName) ? true : false
                      }
                      initVal={profileData[secondName as ProfileDataField]}
                      disable={mode === "view" ? true : false}
                    />
                  )}
                </div>
              );
            }
          )}
          <div className="w-full flex flex-col justify-center items-center pt-2 px-2">
            <button
              onClick={() =>
                setMode((currMode) => (currMode === "view" ? "edit" : "view"))
              }
              className="btn bg-sign w-4/5 text-xl font-normal mb-8 lg:mb-0 mx-auto"
            >
              {mode === "edit" ? "View" : "Edit"}
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
