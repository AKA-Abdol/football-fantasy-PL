import React from 'react'
import EventItem from '../components/eventsComponents/EventItem'
import FollowButtons from '../components/eventsComponents/FollowButtons'
import FollowItem from '../components/eventsComponents/FollowItem'
import ListHeader from '../components/ListHeader'
import MainListPagination from '../components/mainListComponents/Pagination'
import SearchBox from '../components/mainListComponents/SearchBox'

export default function events() {
    return (
        <div className='flex flex-col p-10 w-full items-center '>
            <div className='flex flex-col w-1/3 shadow-lg  space-y-2 relative'>
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
            <div className="hidden lg:flex list mx-auto max-w-max flex-col  ml-auto rounded-2xl shadow-md mb-2 overflow-auto h-full">
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



                    <MainListPagination 
                        disabled={false}
                    />
                </div>

                <MainListPagination 
                    disabled={false}
                />
            </div>
        </div>

    )
}
