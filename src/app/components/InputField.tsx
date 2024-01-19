import React from 'react'

interface Props{
label:string
required?: boolean
}

const InputField:React.FC<Props> = ({label, required}) => {
  return (
    <div className='mt-7'>
      <div className='text-[#6F7482] '>{label}{required && <span className='text-[#ED0131]'>*</span>}</div>
    <input type="text" className='p-3 w-full border-0 outline-none rounded' />
    </div>
  )
}

export default InputField
