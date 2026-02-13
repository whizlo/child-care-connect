import UserCard from '@/src/components/UserCard'
import { Righteous } from 'next/font/google'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/*LEFT*/}
      <div className='w-full lg:w-2/3'></div>
      {/*USERCARDS*/}
      <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      {/*RIGHT*/}
      <div className='w-full ;g:w-1/3'></div>
    </div>
  )
}

export default AdminPage