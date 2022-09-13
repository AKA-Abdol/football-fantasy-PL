import { KeyboardEvent } from "react";
export const handleKeyboardEvent = <T>(key: string, fn: () => any) => {
    return (event: KeyboardEvent<T>) => {
        if(event.key === key)
            fn();  
    }
}