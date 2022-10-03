import "../../index.css";

interface FieldProps {
  label: string;
  placeholder: string;
  name?: string;
  options: string[];
  changeHandler?: any;
  poseClass?: string;
  isInvalidField?: boolean;
}

export default function SelectField({
  label,
  placeholder,
  name,
  options,
  changeHandler,
  poseClass,
  isInvalidField,
}: FieldProps) {
  return (
    <div className="flex flex-col theme-font text-[#bbbbbb] space-y-2 mx-3 w-full">
      <p className={`ml-auto ${poseClass}`}>{label}</p>
      <select
        onChange={changeHandler}
        className={`select bg-transparent arrow-left ${
          isInvalidField ? "border-yellow-400 bg-red-900" : "bg-[#F4F4F4]"
        }`}
        dir="rtl"
        name={name}
      >
        <option className="bg-[#f4f4f4]" disabled selected>
          {placeholder}
        </option>
        {options.map((current: string) => {
          return <option className="bg-[#f4f4f4]">{current}</option>;
        })}
      </select>
    </div>
  );
}
