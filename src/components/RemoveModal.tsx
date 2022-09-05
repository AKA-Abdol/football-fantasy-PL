import { useRecoilState,atom } from "recoil"
import selectedShirt from "./../images/selected_shirt.png"
import '../index.css';


interface RemoveModalProps {
    // shirtImg: string,
    playerName: string
}
export const modalAtom = atom({
    key: 'showModal',
    default: false
})


export default function RemoveModal(props: RemoveModalProps) {

    const [showModal,setShowModal] = useRecoilState(modalAtom)

    const cancelModal = () => {
        setShowModal (false)
    }

    return (
        <div
        onClick={cancelModal}
        className={showModal ? "theme-font bg-black h-[1700px] bg-opacity-50 absolute z-[10000] inset-0 flex justify-center items-center" : "hidden"}>
            <div
            onClick={(event) =>{
                event.stopPropagation();
            }}
            className="bg-white w-[36rem] rounded-lg shadow-xl text-gray-800 pb-8">
                <div className="bg-[#3D195B] py-2 px-3 flex justify-center items-center rounded-t-lg">
                    <h4 className="text-lg font-bold text-[#00FF87]">حذف بازیکن</h4>
                </div>
                <div className="flex flex-col justify-center items-center px-8">
                    <img src={selectedShirt} alt="Player's shirt" />
                    <div className="mt-2 text-sm py-2 px-3">
                        <p className="text-[#3D195B] font-semibold">مطمئن هستید؟ <span>{props.playerName}</span> آیا از حذف</p>
                    </div>
                    <div className="mt-3 flex justify-center space-x-4">
                        <button
                         onClick={cancelModal}
                         className="px-12 py-1 border border-[#3D195B] rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900">لغو</button>
                        <button className="px-12 py-1 bg-red-800 text-gray-200 hover:bg-red-600 rounded">حذف</button>
                    </div>
                </div>
            </div>
        </div>
    )
}