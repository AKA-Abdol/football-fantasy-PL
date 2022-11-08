import moment from "jalali-moment";
import { useState } from "react";
import { DatePicker } from "react-advance-jalaali-datepicker";
import { Eng2Fa } from "../../UsefullFunctions";

const DateInput = (props: any) => {
  return (
    <input
      className={`input w-full text-black ${
        false ? "bg-red-200" : "bg-[#F4F4F4]"
      }`}
      {...props}
    />
  );
};

export default function DateField({
  setDate,
  label,
}: {
  setDate: any;
  label: string;
}) {
  const [text, setText] = useState("");
  return (
    <div className={`w-full lg:mt-auto lg:px-2 lg:w-1/2`}>
      <div
        className={`flex flex-col theme-font text-black lg:mt-auto space-y-2 w-full`}
      >
        <p className={`text-black mx-auto`}>{label}</p>
        <DatePicker
          inputComponent={DateInput}
          placeholder="۱۳۷۸/۰۹/۲۱"
          format="jYYYY/jMM/jDD"
          onChange={(_, formatted) => {
            setText(Eng2Fa(formatted));
            const m = moment(formatted, "jYYYY/jMM/jDD");
            console.log(
              "in Greg: ",
              new Date(m.locale("en").format("YYYY/MM/DD"))
            );
            setDate(new Date(m.locale("en").format("YYYY/MM/DD")));
          }}
          containerClass="bg-transparent"
          customClass="dir-rtl"
          cancelOnBackgroundClick={true}
          preSelected={text}
          controlValue={true}
        />
      </div>
    </div>
  );
}
