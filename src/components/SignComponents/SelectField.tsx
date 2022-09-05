import "../../index.css"

interface FieldProps{
    label: string, 
    placeholder: string,
    name ?: string,
    options: string[],
    changeHandler ?: any
}

export default function SelectField({label, placeholder, name, options, changeHandler}: FieldProps){
    return (
        <div className="flex flex-col theme-font text-white space-y-2 mx-3 w-full">
            <p className="ml-auto">{label}</p>
            <select onChange={changeHandler} className="select bg-transparent border-[#A057DB] arrow-left" dir="rtl" name={name}>
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
    );
}