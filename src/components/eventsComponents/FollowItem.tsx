import React, { useCallback, useState } from "react";
import { EventUser, getUserData } from "../../services/EventServices";
import { followPlayer, unfollowPlayer } from "../../services/EventServices";
import followPic from "./../../images/follow_pic.png";
import { useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { resultedUsersAtom } from "../mainListComponents/SearchBox";
import { eventModalAtom } from "./FollowModal";
import { getImageSource } from "../../UsefullFunctions";

export default function FollowItem({ user }: { user: EventUser }) {
  const queryClient = useQueryClient();
  const setResultedUsers = useSetRecoilState(resultedUsersAtom);
  const setModalOptions = useSetRecoilState(eventModalAtom);

  const followPlayerOnclick = useCallback(async (id: number) => {
    const response = await followPlayer(id);
    queryClient.invalidateQueries("followers-list");
    if (response.isSuccessful) {
      setResultedUsers((oldUsers) => {
        const currentUserIndex = oldUsers.findIndex((user) => user.id === id);
        console.log("in user inja", currentUserIndex, "user id: ", id);

        const newUsers: EventUser[] = oldUsers.slice();
        if (currentUserIndex !== -1) {
          newUsers[currentUserIndex] = {
            ...oldUsers[currentUserIndex],
            isFollowed: true,
          };
        }
        return newUsers;
      });
    } else {
      // if it's not valid following
    }
  }, []);

  const showPlayerOnclick = useCallback(async (_user: EventUser) => {
    console.log("we really clicked to show user: ", _user);
    const response = await getUserData(_user.id);
    if (response.isSuccessful) {
      setModalOptions(() => ({
        show: true,
        user: response.res,
      }));
    } else {
      // do sth for not found from back user
    }
  }, []);

  console.log("this user: ", user);

  return (
    <div className="flex flex-row items-center py-3 py-1 border-solid border-b-2 border-borderSearchBoxColor">
      <button
        className={
          "mr-auto rounded-md border-2 text-sm py-1 px-3 " +
          (!user.isFollowed
            ? "border-[#05D6E2] text-[#05D6E2]"
            : "border-borderSearchBoxColor text-gray-500")
        }
        onClick={async () =>
          await (user.isFollowed
            ? showPlayerOnclick(user)
            : followPlayerOnclick(user.id))
        }
      >
        {!user.isFollowed ? "دنبال کردن" : "مشاهده"}
      </button>
      <div className="flex flex-row items-center space-x-3 ml-auto cursor-pointer">
        <p>{`${user.firstname} ${user.lastname}`}</p>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={getImageSource(user.profileImage)}
              alt="Profile pictures"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
