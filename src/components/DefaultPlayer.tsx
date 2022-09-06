import { atom, useRecoilState } from "recoil";
import defaultShirt from "./../images/default_shirt.png"
import addCircle from "./../images/add-circle.png"
import onSelectShirt from "./../images/onselect_shirt.png"
import { playerSelectAtom } from "./SoccerField"
import {filterSetter} from "./SelectedPlayer"
import {FilterAtom} from "./mainListComponents/MainPlayerList"


interface defaultProps {
    key: number,
    pose: number
}



export default function DefaultPlayer(props: defaultProps) {
    const [playerSelect, setPlayerSelect] = useRecoilState(playerSelectAtom)
    const [filter, setFilter] = useRecoilState(FilterAtom);



    return (
        <div
            onClick={(event) => {
                event.stopPropagation();
                filterSetter(props.pose,setFilter)
                setPlayerSelect(() => {
                    let newState = [];
                    if (!playerSelect.includes(props.pose)) {
                        newState.push(props.pose)
                    } else{
                        newState = []
                    }
                    console.log("newState", newState)
                    return newState
                })
            }}
            className="flex mb-auto items-center justify-center w-1/6 relative h-full"
        >
            <img className={playerSelect.includes(props.pose) ? "w-[90%] cursor-pointer" : "w-full cursor-pointer"} src={playerSelect.includes(props.pose) ? onSelectShirt : defaultShirt} alt="default T-shirt" />
            <img className="h-1/4 z-50 absolute cursor-pointer" src={addCircle} alt="add circle icon" />
        </div>);
}