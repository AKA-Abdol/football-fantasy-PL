import "../../index.css";

interface FieldProps {
  label: string;
  placeholder: string;
  name?: string;
  poseClass?: string;
  changeHandler?: any;
  dir?: string;
  isInvalidField?: boolean;
  isOnlyText?: boolean;
  type: string;
  initVal?: string;
  disable?: boolean
}

export default function InputField({
  label,
  placeholder,
  name,
  poseClass,
  changeHandler,
  dir,
  isInvalidField,
  isOnlyText,
  type,
  initVal,
  disable = false,
}: FieldProps) {
  return (
    <div
      className={`w-full lg:mt-auto lg:px-2 ${isOnlyText ? "" : "lg:w-1/2"}`}
    >
      <div
        className={`flex flex-col theme-font text-black lg:mt-auto space-y-2 w-full`}
      >
        <p className={`mx-auto ${poseClass}`}>{label}</p>
        <input
          onChange={changeHandler}
          className={`input text-center disabled:bg-inherit disabled:text-[#3D195B] disabled:border-0 disabled:font-bold disabled:text-lg ${
            isInvalidField ? "bg-red-200" : "bg-[#F4F4F4]"
          } ${type === "file" ? "pt-[0.3rem]" : ""}`}
          dir={dir ?? "ltr"}
          type={type}
          placeholder={placeholder}
          name={name}
          value={initVal ?? ''}
          disabled={disable}
        />
      </div>
    </div>
  );
}