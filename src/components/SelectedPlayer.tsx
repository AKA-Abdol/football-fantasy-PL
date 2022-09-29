import { atom, SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import selectedShirt from "./../images/selected_shirt.png"
import onSelectShirt from "./../images/onselect_shirt.png"
import { playerSelectAtom } from "./SoccerField"
import { modalAtom } from "./FieldModal";
import closeIcon from "./../images/close-circle.svg"
import { FieldPlayersAtom } from "../pages/Transfers"
import {FilterAtom} from "./mainListComponents/MainPlayerList"
import { currentPageAtom } from "./mainListComponents/Pagination";



export interface selectedPlayer {
    name: string,
    score: number,
    pose: number
}
export const PlayerToRemoveAtom = atom({
    key: 'playerSelect',
    default: [] as number[]
})

export const filterSetter = (pose: number, filterSet: SetterOrUpdater<"All" | "Goalkeepers" | "Defenders" | "Midfielders" | "Forwards">) => {
    console.log(pose)
    if (0 <= pose && pose < 2) {
        filterSet("Goalkeepers")
    }
    if (2 <= pose && pose < 7) {
        filterSet("Defenders")
    }
    if (7 <= pose && pose < 12) {
        filterSet("Midfielders")
    }
    if (12 <= pose && pose < 15) {
        filterSet("Forwards")
    }
}



export default function SelectedPlayers(props: selectedPlayer) {


    const [playerSelect, setPlayerSelect] = useRecoilState(playerSelectAtom)
    const [showModal, setShowModal] = useRecoilState(modalAtom)
    const [playerToRemove, setPlayerToRemove] = useRecoilState(PlayerToRemoveAtom)
    const [filter, setFilter] = useRecoilState(FilterAtom);
    const setCurrentPage = useSetRecoilState(currentPageAtom);

    const viewModal = () => {
        setShowModal(true)
        setPlayerToRemove(() => {
            const newState = [];
            newState.push(props.pose)

            return newState
        })
    }



    return (
        <div
            className="flex flex-col sm:-mt-6 items-center justify-center w-[15%]"
        >
            <img src={closeIcon} alt="close icon"
                className=" cursor-pointer ml-auto w-3 sm:w-6"
                onClick={(event) => {
                    event.stopPropagation();
                    console.log("playerSelect State",playerSelect)
                    viewModal();


                }}
            />
            <img
                onClick={(event) => {
                    event.stopPropagation();
                    setCurrentPage(1);
                    filterSetter(props.pose,setFilter)
                    setPlayerSelect(() => {
                        let newState = [];
                        if (!playerSelect.includes(props.pose)) {
                            newState.push(props.pose)
                        } else {
                            newState = []
                        }
                        console.log("newState", newState)
                        return newState
                    })
                }}
                className={playerSelect.includes(props.pose) ? "w-[90%] cursor-pointer" : "w-full cursor-pointer"} src={playerSelect.includes(props.pose) ? onSelectShirt : selectedShirt} alt="Player's T-shirt" />
            <div className="flex flex-col w-full">

                <div className="bg-[#37013B] sm:py-1 px-4 text-white font-bold text-[0.5rem] sm:text-xs rounded-t-md sm:rounded-t-lg flex items-center justify-center">{props.name}</div>
                <div className="bg-white/50 font-bold sm:text-sm text-[0.5rem] rounded-b-md sm:rounded-b-lg flex items-center justify-center">{props.score}</div>

            </div>

        </div>);
}