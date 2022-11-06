import { useQuery } from "react-query";
import {
  atom,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import EventItem from "../components/eventsComponents/EventItem";
import EventTab, {
  EventTabToggleAtom,
} from "../components/eventsComponents/EventTab";
import FollowButtons, {
  FollowListAtom,
} from "../components/eventsComponents/FollowButtons";
import FollowItem from "../components/eventsComponents/FollowItem";
import FollowModal from "../components/eventsComponents/FollowModal";
import { currentFollowersPageAtom } from "../components/eventsComponents/Pagination";
import ListHeader from "../components/ListHeader";
import MainListPagination from "../components/mainListComponents/Pagination";
import SearchBox, {
  resultedUsersAtom,
} from "../components/mainListComponents/SearchBox";
import useBreakpoint from "../customHooks/useBreakpoint";
import { EventUser, getFollowers } from "../services/EventServices";

const MAX_SHOW_SEARCHED_USERS = 3;
const MAX_USERS_SHOW = 10;

export const maxFollowPageAtom = atom({
  key: "FollowPage",
  default: 1,
});

export default function Events() {
  const [eventTabToggle, setEventTabToggle] =
    useRecoilState(EventTabToggleAtom);
  const resultedUsers = useRecoilValue(resultedUsersAtom);
  console.log("resultedUsers: ", resultedUsers);

  const currentTab = useRecoilValue(FollowListAtom);
  const setMaxFollowPage = useSetRecoilState(maxFollowPageAtom);
  const currentFollowersPage = useRecoilValue(currentFollowersPageAtom);
  const breakpoint = useBreakpoint();

  const { data, isLoading, isError, isFetching } = useQuery(
    ["followers-list", currentFollowersPage, currentTab],
    async () => {
      console.log("Are we here?");

      const [users, count] = await getFollowers(
        {
          page: currentFollowersPage,
          num: MAX_USERS_SHOW,
        },
        { type: currentTab }
      );
      console.log("here: ", users, ", ", count);

      const dummyUsers = users.map((user: EventUser) => {
        const newUser: EventUser = {
          ...user,
          isFollowed: currentTab === "Followings" ? true : false,
        };
        return newUser;
      });
      setMaxFollowPage(() => Math.ceil(count / MAX_USERS_SHOW));
      return dummyUsers;
    },
    {
      keepPreviousData: true,
    }
  );
  console.log("this is event data list: ", data);

  if (isLoading) return <p>درحال بارگزاری</p>;
  if (isError) return <p>بارگزاری با خطا مواجه شد</p>;

  return (
    <>
    <div className="flex flex-col space-y-6 px-2 lg:px-40 py-10 w-full items-center ">
      <div className="flex flex-col w-[90%] md:w-1/2 shadow-lg space-y-2 relative">
        <SearchBox whatToSearch="users" />
        <div
          className={`flex flex-col shadow-lg px-2 absolute w-full pb-2 z-50 bg-white top-11 rounded-b-lg overflow-auto ${
            resultedUsers.length > MAX_SHOW_SEARCHED_USERS ? "h-[13rem]" : ""
          } ${resultedUsers.length === 0 ? "hidden" : ""}`}
        >
          {resultedUsers.map((resultedUser) => (
            <FollowItem user={resultedUser} />
          ))}
        </div>
      </div>
      <h2 className="hidden lg:flex ml-auto font-black text-2xl text-[#3D195B]">
        آخرین رویدادها
      </h2>
      <EventTab />
      <div className="flex lg:w-[95%] flex-col-reverse lg:flex-row lg:justify-between lg:space-x-6 lg:h-full lg:min-h-max">
        <div className="hidden lg:flex list mx-auto max-w-max min-w-fit flex-col  ml-auto rounded-2xl shadow-md mb-2 overflow-auto lg:h-full lg:min-h-max">
          <ListHeader text="دوستان شما" />
          <div className="w-full flex flex-col pt-6 pb-1 px-8 h-full ">
            <FollowButtons />
            <SearchBox whatToSearch="followList" />

            <div className="w-full py-2">
              {data.map((user: EventUser) => {
                return <FollowItem user={user} />;
              })}
            </div>

            <MainListPagination disabled={false} />
          </div>
        </div>
        {(eventTabToggle === 2 || 3) && (
          <div className="w-full min-w-[475px] flex flex-col pt-6 pb-1 px-8 h-full  lg:hidden">
            <SearchBox whatToSearch="followList" />

            <div className="w-full py-2">
              {/* <FollowItem user={fake_user} /> */}
            </div>
          </div>
        )}

        {(eventTabToggle === 1 || breakpoint > 1024) && (
          <div className="w-full flex flex-col items-end space-y-4">
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
          </div>
        )}
      </div>
    </div>
    <FollowModal />
    </>
  );
}
