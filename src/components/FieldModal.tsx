import { useRecoilState, atom, SetterOrUpdater } from "recoil"
import selectedShirt from "./../images/selected_shirt.png"
import '../index.css';
import { PlayerToRemoveAtom } from "./SelectedPlayer"
import { FieldPlayersAtom } from "../pages/Transfers"
import { ErrorMessageAtom, removePlayer } from "../services/MainListServices"
import { isErrorVisibleAtom, isWarningVisibleAtom, isSuccessVisibleAtom } from "../pages/Transfers"


interface FieldModalProps {
    // shirtImg: string,
    playerName: string
    actionText: String
    buttonColor:string
}
export const modalAtom = atom({
    key: 'showModal',
    default: false
})

export const toastShow = (setShow: SetterOrUpdater<{
    active: boolean;
    msg: string;
}>, message: string) => {
    setShow(() => ({
        active: true,
        msg: message
    }));

    setTimeout(() => {
        setShow({
            active: false,
            msg: ""
        });
    }, 3000);
}


export default function FieldModal(props: FieldModalProps) {

    const [showModal, setShowModal] = useRecoilState(modalAtom)
    const [playerToRemove, setPlayerToRemove] = useRecoilState(PlayerToRemoveAtom)
    const [fieldPlayers, setFieldPlayers] = useRecoilState(FieldPlayersAtom);
    const [isErrorVisible, setIsErrorVisible] = useRecoilState(isErrorVisibleAtom);
    const [isSuccessVisible, setIsSuccessVisible] = useRecoilState(isSuccessVisibleAtom);
    const [isWarningVisible, setIsWarningVisible] = useRecoilState(isWarningVisibleAtom);



    console.log("showModal",showModal);
    
    const cancelModal = () => {
        setShowModal(false)
        setPlayerToRemove(() => {
            return []
        })
    }

    return (
        <div
            onClick={cancelModal}
            className={showModal ? "theme-font bg-black h-[1700px] bg-opacity-50 absolute z-[10000] inset-0 flex justify-center items-center" : "hidden"}>
            <div
                onClick={(event) => {
                    event.stopPropagation();
                }}
                className="bg-white w-[36rem] rounded-lg shadow-xl text-gray-800 pb-8">
                <div className="bg-[#3D195B] py-2 px-3 flex justify-center items-center rounded-t-lg">
                    <h4 className="text-lg font-bold text-[#00FF87]">حذف بازیکن</h4>
                </div>
                <div className="flex flex-col justify-center items-center px-8">
                    <img src={selectedShirt} alt="Player's shirt" />
                    <div className="mt-2 text-sm py-2 px-3">
                        <p className="text-[#3D195B] font-semibold">مطمئن هستید؟ <span>{props.playerName}</span> آیا از {props.actionText}</p>
                    </div>
                    <div className="mt-3 flex justify-center space-x-4">
                        <button
                            onClick={() => {

                                cancelModal();

                            }}
                            className="px-12 py-1 border border-[#3D195B] rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900">لغو</button>
                        <button
                            className={`px-12 py-1 bg-red-800 text-gray-200 hover:bg-red-600 rounded`}
                            onClick={async (event) => {
                                event.stopPropagation()
                                if (playerToRemove.length) {
                                    const playerIndex = playerToRemove[0];
                                    const response = await removePlayer(playerIndex);
                                    if(response.isSuccessful){
                                        setFieldPlayers(prevList => {
                                            const newList = [...prevList]
                                            newList[playerIndex] = {
                                                type: "Default",
                                                pose: playerIndex
                                            }
                                            return newList
                                        })
                                        toastShow(setIsSuccessVisible, "بازیکن با موفقیت حذف شد")
                                        console.log("length", playerToRemove.length)
                                        cancelModal()
                                    }
                                    else{
                                        toastShow(setIsErrorVisible, response.res);
                                        console.log("length", playerToRemove.length)
                                        cancelModal()
                                    }

                                }

                            }}
                        >حذف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}