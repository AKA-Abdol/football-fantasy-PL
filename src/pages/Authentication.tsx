import "../index.css";
import SUPLayers from "../images/SU-players.png";
import InputField from "../components/SignComponents/InputField";
import SelectField from "../components/SignComponents/SelectField";
import LeftLine from "../images/Line1.png";
import RightLine from "../images/Line2.png";
import PLWhiteLogo from "../images/PLWhiteLogo.png";
import { useCallback, useEffect, useState } from "react";
import { EMAIL_SESSION, imageAtom, Toast } from "./SignUp";
import { confirmSignup, TOKEN_SESSION_NAME } from "../services/SignServices";
import { useNavigate } from "react-router-dom";
import FPLButtomImg from "../images/FPLButtomImg.png";
import { handleKeyboardEvent, toastShow } from "../GenericFunctions";
import SuccessToast, { ErrorToast, WarningToast } from "../components/Toasts";
import { useRecoilValue } from "recoil";

interface RowFieldText {
  first: string;
  firstType: string;
  firstOptions: string[];
  firstPHolder: string;
  firstPose: string;
  name: string;
}

const fields: Array<RowFieldText> = [
  {
    first: "لطفا کدی که به ایمیلتان ارسال شده را در کادر زیر وارد کنید",
    firstType: "text",
    firstOptions: [],
    firstPHolder: "5 digit code",
    firstPose: "mx-auto text-center",
    name: "verificationCode",
  },
];

export default function Authentication() {
  const [authCode, setAuthCode] = useState<string>("");
  const [invalidFields, setInvalidFields] = useState< Array<string> >([]);
  const [toast, setToast] = useState<Toast>({
    active: false,
    type: 'none',
    msg: ''
  }) 
  const imageData = useRecoilValue(imageAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_SESSION_NAME)) navigate("/myteam");
  }, []);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAuthCode(event.target.value);
  };
  console.log(authCode);

  const verifyNnavigate = useCallback(async () => {
    const response = await confirmSignup({
      email: localStorage.getItem(EMAIL_SESSION),
      code: parseInt(authCode),
    }, imageData);
    if(response.isSuccessful) {
        navigate("/myteam");
    }
    else{
        const errors = response.errorType.split(' ');
        setInvalidFields(errors);
        console.log(response.res);
        // toast the error
        toastShow(setToast, {
            active: true,
            type: 'Error',
            msg: response.res
        })
    }
  }, [authCode]);

  return (
    <div
      className="flex flex-col h-screen bg-[#3D185B] overflow-auto justify-start"
      onKeyDown={handleKeyboardEvent<HTMLDivElement>("Enter", verifyNnavigate)}
    >
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="sideImg w-full relative hidden lg:block">
          <img
            className="h-full w-full relative"
            src={SUPLayers}
            alt="players-image"
          />

          <div className="flex justify-center">
            <img
              className="absolute bottom-10"
              src={PLWhiteLogo}
              alt="PL Logo"
            />
          </div>
        </div>

        <div className="fields flex flex-col bg-[#3D185B] pt-8 lg:pt-0 lg:px-20 w-full lg:justify-center items-center space-y-10 theme-font">
          <div className="flex flex-row w-full mb-16 lg:mb-24 items-center">
            <img className="w-1/4 mr-auto ml-4" src={LeftLine} alt="" />

            <p className="mx-auto text-2xl text-white font-normal">
              تایید ثبت نام
            </p>

            <img className="w-1/4 ml-auto mr-4" src={RightLine} alt="" />
          </div>
          {fields.map(
            ({
              first,
              firstType,
              firstOptions,
              firstPHolder,
              firstPose,
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
                      isInvalidField={invalidFields.includes(name)}
                    />
                  ) : (
                    <InputField
                      label={first}
                      placeholder={firstPHolder}
                      poseClass={firstPose}
                      name={name}
                      changeHandler={handleChange}
                      isInvalidField={invalidFields.includes(name)}
                      isOnlyText={true}
                      type={firstType}
                    />
                  )}
                </div>
              );
            }
          )}
          <div className="flex flex-row w-full px-3 pt-16">
            <button
              onClick={verifyNnavigate}
              className="btn bg-sign w-full text-xl font-semibold mb-8 lg:mb-8"
            >
              تایید ثبت نام
            </button>
          </div>
        </div>
        <div className="bottomImg w-full mt-auto block lg:hidden">
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
