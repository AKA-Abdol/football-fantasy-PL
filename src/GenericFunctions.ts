import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
export const handleKeyboardEvent = <T>(key: string, fn: () => any) => {
    return (event: KeyboardEvent<T>) => {
        if(event.key === key)
            fn();  
    }
}

type Setter<T> = SetterOrUpdater<T> | Dispatch< SetStateAction<T> >
export const toastShow = <T>(setShow: Setter<T>, initialState: T, timeOut: number = 3) => {
    setShow(initialState);

    setTimeout( () => {
        setShow( (oldState) => ({
            ...oldState,
            active: false
        }))
    }, 1000 * timeOut);
}



// export const toastShow = (setShow: SetterOrUpdater<{
//     active: boolean;
//     msg: string;
// }>, message: string) => {
//     setShow(() => ({
//         active: true,
//         msg: message
//     }));

//     setTimeout(() => {
//         setShow({
//             active: false,
//             msg: ""
//         });
//     }, 3000);
// }