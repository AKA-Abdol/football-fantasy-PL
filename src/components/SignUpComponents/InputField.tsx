import "../../index.css"

interface FieldProps{
    label: string, 
    placeholder: string
}

export default function InputField({label, placeholder}: FieldProps){
    return (
        <div className="flex flex-col theme-font text-white space-y-2 mx-3 w-full">
            <p className="ml-auto">{label}</p>
            <input className="input input-bordered bg-transparent border-[#A057DB]" dir="rtl" type="text" placeholder={placeholder}/>
        </div>
    );
}