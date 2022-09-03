import { atom, useRecoilState } from "recoil";
import defaultShirt from "./../images/default_shirt.png"
import addCircle from "./../images/add-circle.png"
import onSelectShirt from "./../images/onselect_shirt.png"
import { playerSelectAtom } from "./SoccerField"

interface defaultProps {
    key:number,
    pose:number
}



export default function DefaultPlayer(props:defaultProps) {
    const [playerSelect, setPlayerSelect] = useRecoilState(playerSelectAtom)


    return (
        <div
            onClick={(event) => {
                event.stopPropagation();
                setPlayerSelect(prevState => {
                    const newState = [];
                    newState.push(props.pose);
                    console.log("newState",newState)
                    return newState
                })
            }}
            className="flex mb-auto items-center justify-center w-1/6 relative h-full"
        >
            <img className="w-full" src={playerSelect.includes(props.pose) ? onSelectShirt : defaultShirt} alt="default T-shirt" />
            <img className="h-1/4 z-50 absolute" src={addCircle} alt="add circle icon" />
        </div>);
}