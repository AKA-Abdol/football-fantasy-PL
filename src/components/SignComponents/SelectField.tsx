import "../../index.css"

interface FieldProps{
    label: string, 
    placeholder: string,
    name ?: string,
    options: string[],
    changeHandler ?: any,
    poseClass?: string,
    isInvalidField ?: boolean
}

export default function SelectField({label, placeholder, name, options, changeHandler, poseClass, isInvalidField}: FieldProps){
    return (
        <div className="w-full lg:w-1/2 lg:mt-auto lg:px-2">
        <div className="flex flex-col theme-font text-white space-y-2 w-full">
            <p className={`ml-auto ${poseClass}`}>{label}</p>
            <select onChange={changeHandler} className={`select bg-transparent arrow-left ${isInvalidField ? 'border-yellow-400 bg-red-900' : 'border-[#A057DB]'}`} dir="rtl" name={name}>
                <option className="bg-[#3D185B]" disabled selected>{placeholder}</option>
                {
                    options.map( (current: string) => {
                        return(
                            <option className="bg-[#3D185B]">{current}</option>
                        )
                    })
                }
            </select>
        </div>
        </div>
    );
}