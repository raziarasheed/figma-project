import React from 'react'

const Card = ({rating=true}:{rating?: boolean}) => {
  return (
    <div className='w-full xl:w-[270px] h-[350px]'>  
    <div className='w-full h-[250px] flex justify-centre items-centre border-2 bg-gray-[#111827]'>
       placeholder
    </div>
    <div className='flex flex-col justify-between w-full border-2 background-color: #cbd5e0; h-[100px]'>

      <div></div>
      {rating &&<div >@@@@@</div>}
    </div>
    
    
    
    
    
    
    </div>
  )
}

export default Card