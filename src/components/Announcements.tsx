import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex items-center justify-between'>
            <h1 className='font-semibold text-xl'>Announcements</h1>
            <span className='text-sm text-gray-400'>View All</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='bg-[#C3EBFA] rounded-md p-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
              <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2026-02-02</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, veritatis unde tempora dolore consequuntur vel eaque velit eligendi facilis quibusdam saepe vitae cum aperiam impedit ipsum incidunt fuga recusandae exercitationem!</p>
          </div> 
          <div className='bg-[#F1F0FF] rounded-md p-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
              <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2026-02-02</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, veritatis unde tempora dolore consequuntur vel eaque velit eligendi facilis quibusdam saepe vitae cum aperiam impedit ipsum incidunt fuga recusandae exercitationem!</p>
          </div> 
          <div className='bg-[##FEFCE8] rounded-md p-4'>
            <div className='flex items-center justify-between'>
              <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
              <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2026-02-02</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, veritatis unde tempora dolore consequuntur vel eaque velit eligendi facilis quibusdam saepe vitae cum aperiam impedit ipsum incidunt fuga recusandae exercitationem!</p>
          </div> 
        </div>
    </div>
  )
}



export default Announcements