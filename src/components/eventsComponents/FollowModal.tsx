import React, { useCallback } from "react";
import { useQuery, useQueryClient } from "react-query";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import Avatar from "../../images/WIN_20220906_19_33_10_Pro.jpg";
import {
  followPlayer,
  getUserData,
  ModalUser,
  unfollowPlayer,
} from "../../services/EventServices";
import { getImageSource } from "../../UsefullFunctions";

const fakeUser: ModalUser = {
  id: 0,
  firstname: "امیرحسین",
  lastname: "شاید عبدلی",
  isFollowed: true,
  country: "ایران",
  age: 21,
  score: 104,
  profileImage: 'http://localhost:5000/uploads/images/small/default.png'
};

export const eventModalAtom = atom({
  key: "event-modal",
  default: {
    show: false,
    user: fakeUser,
  },
});

const ModalButton = ({ _isFollowed }: { _isFollowed: boolean }) => {
  const queryClient = useQueryClient();
  const [modalOptions, setModalOptions] = useRecoilState(eventModalAtom);

  const modalButtonOnclick = useCallback(async () => {
    const response = await (_isFollowed
      ? unfollowPlayer(modalOptions.user.id)
      : followPlayer(modalOptions.user.id));
    if (response.isSuccessful) {
      setModalOptions((oldState) => ({
        ...oldState,
        user: {
          ...oldState.user,
          isFollowed: !_isFollowed,
        },
      }));
      queryClient.invalidateQueries("followers-list");
    } else {
      // if it's not valid
    }
  }, [modalOptions]);
  return (
    <button
      onClick={modalButtonOnclick}
      className={`px-14 py-3 rounded ${
        _isFollowed
          ? "border-[#ED1B5D] border-2 text-[#ED1B5D]"
          : "bg-[#05D6E2]"
      }`}
    >
      دنبال کردن
    </button>
  );
};

const FollowModal = () => {
  const [modalOptions, setModalOptions] = useRecoilState(eventModalAtom);
  console.log("here in followModal: ", getImageSource(modalOptions.user.profileImage));

  const cancelModal = () => {
    setModalOptions((oldState) => ({
      ...oldState,
      show: false,
    }));
  };

  return (
    <div
      onClick={() => {
        cancelModal();
      }}
      className={
        modalOptions.show
          ? "theme-font bg-black h-full bg-opacity-50 absolute z-[10000] inset-0 flex justify-center items-center"
          : "hidden"
      }
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="modal-container mx-auto flex flex-col text-base items-center jus bg-white w-1/3 my-3 rounded-2xl p-7"
      >
        <div className="data flex flex-col justify-center items-center my-auto space-y-5">
          <div className="avatar-image w-36 h-36 flex">
            <img
              src={getImageSource(modalOptions.user.profileImage)}
              alt="avatar"
              className="object-cover rounded-full"
            />
          </div>

          <div className="follow  mx-auto font-semibold text-white">
            <ModalButton _isFollowed={modalOptions.user.isFollowed} />
          </div>
          <div className="profile-detail flex flex-col text-black space-y-3 p-5">
            <div className="name flex flex-row-reverse justify-center">
              <p>:نام</p>
              <p className="font-semibold mr-1">{`${modalOptions.user.firstname} ${modalOptions.user.lastname}`}</p>
            </div>
            <div className="age flex flex-row-reverse justify-center">
              <p>:سن</p>
              <p className="font-semibold mr-1">26 سال</p>
            </div>
            <div className="country flex flex-row-reverse justify-center">
              <p>:کشور</p>
              <p className="font-semibold mr-1">{modalOptions.user.country}</p>
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
};

export default FollowModal;
