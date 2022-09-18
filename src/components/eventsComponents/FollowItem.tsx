import React from 'react'
import followPic from './../../images/follow_pic.png'

export default function FollowItem() {
    const isFollowed = true
    return (
        <div className='flex flex-row items-center py-1 border-solid border-b-2 border-borderSearchBoxColor'>
            <button className={'mr-auto rounded-md border-2 text-sm py-1 px-3 ' + (isFollowed ? 'border-[#05D6E2] text-[#05D6E2]' : 'border-borderSearchBoxColor text-borderSearchBoxColor')}>{isFollowed ? 'دنبال کردن':'مشاهده'}</button>
            <div className='flex flex-row items-center space-x-3 ml-auto'>
                <p>امیر احمدی</p>
                <img src={followPic} alt="Profile pictures" />

            </div>
        </div>
    )
}
