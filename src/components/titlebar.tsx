
import React ,{ReactNode}from 'react'

const Titlebar = ({ children, tag, title } : {children?:ReactNode ,tag:string,title: string}) => {
  return (
    <div className= 'wrapper h-[108px] border-gray#22242a mt-[60px] flex justify-between '>
      <div className='h-full flex flex-col justify-between'>
       < div className='flex items-centre gap-[16px]'>
       <div className='w-[20px] h-[40px] rounded-[4px] bg-[#D84444]'></div>
        <p className='text-[16px] text-[#D84444] font-semibold'>{tag}</p>
        </div>
        <h1 className='h1-semibold'>{title}</h1>
        <div className='h-full flex items-end'></div>
       {children}
      </div>
  
    </div>
  )
}

export default Titlebar