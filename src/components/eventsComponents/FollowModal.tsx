import React from "react";
import { atom, useRecoilState } from "recoil";
import Avatar from "../../images/WIN_20220906_19_33_10_Pro.jpg";

const Button = () => {
    return (
        <button className="bg-[#05D6E2] px-14 py-3 rounded">دنبال کردن</button>
    )
}

export const profileModalAtom = atom({
    key: 'profileModal',
    default: true
})


const FollowModal = () => {
    const [showModal, setShowModal] = useRecoilState(profileModalAtom)

    const cancelModal = () => {
        setShowModal(false)
    }

    return (
        <div 
        onClick={()=>{
            
            cancelModal();
        }}
        className={showModal ? "theme-font bg-black h-full bg-opacity-50 absolute z-[10000] inset-0 flex justify-center items-center" : "hidden"}>
            <div
            onClick={(event)=>{
                event.stopPropagation();    
            }}
            className="modal-container mx-auto flex flex-col text-base items-center jus bg-white w-1/3 my-3 rounded-2xl p-7">
                <div className="data flex flex-col justify-center items-center my-auto space-y-5">
                    <div className="avatar-image w-36 h-36 flex">
                        <img src={Avatar} alt="avatar" className="object-cover rounded-full"/>
                    </div>
                    
                    <div className="follow  mx-auto font-semibold text-white">
                        <Button />
                    </div>
                    <div className="profile-detail flex flex-col text-black space-y-3 p-5">
                        <div className="name flex flex-row-reverse justify-center">
                            <p>:نام</p>
                            <p className="font-semibold mr-1">امیرمحمد مهری</p>
                        </div>
                        <div className="age flex flex-row-reverse justify-center">
                            <p>:سن</p>
                            <p className="font-semibold mr-1">26 سال</p>
                        </div>
                        <div className="country flex flex-row-reverse justify-center">
                            <p>:کشور</p>
                            <p className="font-semibold mr-1">
                                ایران
                            </p>
                        </div>
                        <div className="score flex flex-row-reverse justify-center">
                            <p>:آخرین امتیاز</p>
                            <p className="font-semibold mr-1">100 امتیاز</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default FollowModal;