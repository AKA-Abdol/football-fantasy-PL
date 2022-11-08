import "../../index.css";

interface FieldProps {
  label: string;
  placeholder: string;
  name?: string;
  options: string[];
  changeHandler?: any;
  poseClass?: string;
  isInvalidField?: boolean;
  initVal?: string;
  disable?: boolean;
}

export default function SelectField({
  label,
  placeholder,
  name,
  options,
  changeHandler,
  poseClass,
  isInvalidField,
  initVal,
  disable = false
}: FieldProps) {
  return (
    <div className="w-full lg:w-1/2 lg:mt-auto lg:px-2">
      <div className="flex flex-col theme-font text-black space-y-2 w-full">
        <p className={`mx-auto ${poseClass}`}>{label}</p>
        <select
          onChange={changeHandler}
          className={`select pr-4 disabled:text-center disabled:bg-inherit disabled:text-[#3D195B] disabled:border-0 disabled:font-bold disabled:text-lg arrow-left-black disable-arrow-none ${
            isInvalidField ? "bg-red-200" : "bg-[#F4F4F4]"
          }`}
          dir="rtl"
          name={name}
          disabled={disable}
        >
          <option
            className="bg-[#F4F4F4]"
            disabled
            selected={initVal ? false : true}
          >
            {placeholder}
          </option>
          {options.map((current: string) => {
            return (
              <option
                className="bg-[#F4F4F4]"
                selected={initVal === current ? true : false}
              >
                {current}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
