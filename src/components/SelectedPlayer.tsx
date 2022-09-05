import { useRecoilState } from "recoil";
import selectedShirt from "./../images/selected_shirt.png"
import onSelectShirt from "./../images/onselect_shirt.png"
import {playerSelectAtom} from "./SoccerField"
import { modalAtom } from "./RemoveModal";
import closeIcon from "./../images/close-circle.svg"


interface selectedPlayer {
    name: string,
    score: number,
    pose:number
}



export default function SelectedPlayers(props:selectedPlayer) {

    const [playerSelect,setPlayerSelect] = useRecoilState(playerSelectAtom)
    const [showModal,setShowModal] = useRecoilState(modalAtom)

    const viewModal = () => {
        setShowModal(true)
    }

    

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
            className="flex flex-col items-center justify-center w-1/6 relative"
        >
            <img className="w-full" src={playerSelect.includes(props.pose) ? onSelectShirt : selectedShirt} alt="Player's T-shirt" />
            <div className="flex flex-col w-full">

                <div className="bg-[#37013B] py-1 px-4 text-white font-bold text-[0.5rem] sm:text-xs rounded-t-lg flex items-center justify-center">{props.name}</div>
                <div className="bg-white/50 font-bold sm:text-sm text-[0.5rem] rounded-b-lg flex items-center justify-center">{props.score}</div>

            </div>
            <img src={closeIcon} alt="close icon" 
            className="absolute right-0 top-0 cursor-pointer"
            onClick={(event) => {
                event.stopPropagation();
                viewModal();
            
            }}
            />
        </div>);
}