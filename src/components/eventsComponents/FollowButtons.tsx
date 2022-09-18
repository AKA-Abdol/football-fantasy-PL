import React from 'react'

export default function FollowButtons() {
    const isClicked = true
  return (
    <div className='flex flex-row justify-between items-center  pb-6 space-x-8'>
        <button className={'rounded-md py-2 px-12 text-xs font-semibold text-[#3D195B] border border-[#04F5EC] ' + (isClicked? 'bg-[#04F5EC]' : "bg-transparent" )}>دنبال شوندگان</button>
        <button className={'rounded-md py-2 px-12 text-xs font-semibold text-[#3D195B] border border-[#04F5EC] ' + (isClicked? 'bg-[#04F5EC]' : "bg-transparent" )}>دنبال کنندگان</button>
    </div>
  )
}
