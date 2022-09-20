import { atom, SetterOrUpdater, useRecoilState } from 'recoil'
import EventItem from '../components/eventsComponents/EventItem'
import EventTab, { EventTabToggleAtom } from '../components/eventsComponents/EventTab'
import FollowButtons from '../components/eventsComponents/FollowButtons'
import FollowItem from '../components/eventsComponents/FollowItem'
import ListHeader from '../components/ListHeader'
import MainListPagination from '../components/mainListComponents/Pagination'
import SearchBox from '../components/mainListComponents/SearchBox'
import useBreakpoint from '../customHooks/useBreakpoint'



export default function Events() {

    const [eventTabToggle, setEventTabToggle] = useRecoilState(EventTabToggleAtom);
    const breakpoint = useBreakpoint();



    return (
        <div className='flex flex-col space-y-6 px-2 lg:px-40 py-10 w-full items-center '>
            <div className='flex flex-col w-[90%] md:w-1/2 shadow-lg  space-y-2 relative'>
                <SearchBox
                    whatToSearch='users'
                />
                <div className='hidden flex-col shadow-lg px-2 space-y-2 absolute w-full pb-2 z-50 bg-white top-11 rounded-b-lg'>

                    <FollowItem />

                    <FollowItem />

                    <FollowItem />

                    <FollowItem />
                </div>


            </div>
            <h2 className='hidden lg:flex ml-auto font-black text-2xl text-[#3D195B]'>آخرید رویدادها</h2>
            <EventTab />
            <div className='flex lg:w-[95%] flex-col-reverse lg:flex-row lg:justify-between lg:space-x-6'>
                <div className="hidden lg:flex list mx-auto max-w-max min-w-fit flex-col  ml-auto rounded-2xl shadow-md mb-2 overflow-auto h-full">
                    <ListHeader
                        text='دوستان شما'
                    />
                    <div className='w-full flex flex-col pt-6 pb-1 px-8 h-full '>

                        <FollowButtons />
                        <SearchBox
                            whatToSearch='followList'
                        />

                        <div className='w-full py-2'>
                            <FollowItem />
                        </div>



                        <MainListPagination />
                    </div>

                </div >
                {(eventTabToggle === 2 || 3) && <div className='w-full min-w-[475px] flex flex-col pt-6 pb-1 px-8 h-full  lg:hidden'>
                    <SearchBox
                        whatToSearch='followList'
                    />

                    <div className='w-full py-2'>
                        <FollowItem />
                    </div>
                </div>}

                {(eventTabToggle === 1 || breakpoint > 1024)  && <div className='w-full flex flex-col items-end space-y-4'>
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                </div>}
            </div>

        </div>

    )
}
