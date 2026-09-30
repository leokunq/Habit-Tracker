import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-2 pb-4 hover:text-compo transition-all duration-250 text-[#A3A3A3] border-compo  border-b-2'>
      <h1 className='text-3xl font-mono tracking-wider'>HABIT_TRACKER</h1>
      <div className='w-16 overflow-hidden rounded-full'>
        <img src='https://imgs.search.brave.com/utdYp_8Msww87VCwaXHY2eGvFh42XcZs0_DVhJ3P4GE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFmL2M1/L2ZmLzFmYzVmZmVh/NzYyOGQxMzM4ZDhh/YjI5ZTU0MThiNWUy/LmpwZw' alt='sanji-pfp' />
      </div>
    </div>
  )
}

export default Header