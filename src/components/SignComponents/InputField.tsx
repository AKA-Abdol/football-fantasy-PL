import "../../index.css"

interface FieldProps{
    label: string, 
    placeholder: string,
    name ?: string,
    poseClass ?: string,
    changeHandler ?: any,
    dir ?: string,
    isInvalidField ?: boolean
}

export default function InputField({label, placeholder, name, poseClass, changeHandler, dir, isInvalidField}: FieldProps){
    return (
        <div className="flex flex-col theme-font text-white lg:mt-auto space-y-2 mx-3 w-full">
            <p className={`ml-auto ${poseClass}`}>{label}</p>
            <input onChange={changeHandler} className={`input input-bordered bg-transparent ${isInvalidField ? 'border-yellow-400 bg-red-900' : 'border-[#A057DB]'}`} dir={dir ?? 'ltr'} type={name === 'password' ? name : 'text'} placeholder={placeholder} name={name}/>
        </div>
    );
}