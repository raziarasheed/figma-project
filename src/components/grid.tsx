import React ,{ReactNode} from 'react'

const Grid = ({children}:{children:ReactNode})=> {
  return (
    <div className='wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-[50px] gap-[30px]'>

      {children}
    </div>
  )
}

export default Grid