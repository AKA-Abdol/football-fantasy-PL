import { atom, useRecoilState } from "recoil"

export type FollowTab = 'Followings' | 'Followers';

export const FollowListAtom = atom({
  key: "follow-list",
  default: 'Followers' as FollowTab
})

export default function FollowButtons() {
  const [currentTab, setCurrentTab] = useRecoilState(FollowListAtom);

  return (
    <div className='flex flex-row justify-between items-center  pb-6 space-x-8'>
        <button onClick={() => setCurrentTab(() => 'Followings')} className={'rounded-md py-2 px-12 text-xs font-semibold text-[#3D195B] border border-[#04F5EC] ' + (currentTab === 'Followings' ? 'bg-[#04F5EC]' : "bg-transparent" )}>دنبال شوندگان</button>
        <button onClick={() => setCurrentTab(() => 'Followers')} className={'rounded-md py-2 px-12 text-xs font-semibold text-[#3D195B] border border-[#04F5EC] ' + (currentTab === 'Followers' ? 'bg-[#04F5EC]' : "bg-transparent" )}>دنبال کنندگان</button>
    </div>
  )
}
