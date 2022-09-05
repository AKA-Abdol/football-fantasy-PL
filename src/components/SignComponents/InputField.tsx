import "../../index.css"

interface FieldProps{
    label: string, 
    placeholder: string,
    name ?: string,
    poseClass ?: string,
    changeHandler ?: any
}

export default function InputField({label, placeholder, name, poseClass, changeHandler}: FieldProps){
    return (
        <div className="flex flex-col theme-font text-white space-y-2 mx-3 w-full">
            <p className={`ml-auto ${poseClass}`}>{label}</p>
            <input onChange={changeHandler} className="input input-bordered bg-transparent border-[#A057DB]" dir="rtl" type="text" placeholder={placeholder} name={name}/>
        </div>
    );
}