import React from 'react'
import FollowButtons from '../components/eventsComponents/FollowButtons'
import FollowItem from '../components/eventsComponents/FollowItem'
import ListHeader from '../components/ListHeader'
import MainListPagination from '../components/mainListComponents/Pagination'
import SearchBox from '../components/mainListComponents/SearchBox'

export default function events() {
    return (
        <div className="list mx-auto max-w-max flex flex-col  ml-auto rounded-2xl shadow-md mb-2 h-full">
            <ListHeader
                text='دوستان شما'
            />
            <div className='w-full flex flex-col pt-6 pb-1 px-8 h-full '>

                <FollowButtons />
                <SearchBox />

                <div className='w-full py-2'>
                    <FollowItem/>
                </div>



                <MainListPagination />
            </div>

        </div >
    )
}
