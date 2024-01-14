'use client'
import Button from '@/app/components/Button'
import InputField from '@/app/components/InputField'
import React from 'react'

const Page = () => {
  return (
    <div className='h-screen w-full bg-[#E1E1FF] flex flex-col justify-center items-center' >
      <InputField/>
      <InputField/>
      <Button />
    </div>
  )
}

export default Page