import "../../index.css"

interface FieldProps{
    label: string, 
    placeholder: string,
    options: string[]
}

export default function SelectField({label, placeholder, options}: FieldProps){
    return (
        <div className="flex flex-col theme-font text-white space-y-2 mx-3 w-full">
            <p className="ml-auto">{label}</p>
            <select className="select bg-transparent border-[#A057DB] arrow-left" dir="rtl">
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