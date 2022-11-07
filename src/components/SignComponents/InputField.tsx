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
}: FieldProps) {
  return (
    <div
      className={`w-full lg:mt-auto lg:px-2 ${isOnlyText ? "" : "lg:w-1/2"}`}
    >
      <div
        className={`flex flex-col theme-font text-white lg:mt-auto space-y-2 w-full`}
      >
        <p className={`ml-auto ${poseClass}`}>{label}</p>
        <input
          onChange={changeHandler}
          className={`input input-bordered bg-transparent ${
            isInvalidField ? "border-yellow-400 bg-red-900" : "border-[#A057DB]"
          } ${type === "file" ? "pt-[0.3rem]" : ""}`}
          dir={dir ?? "ltr"}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  );
}
