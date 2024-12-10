import Titlebar from '@/components/titlebar'
import Card from '@/components/card'
import Header from '@/components/header'
import React from 'react'
import Grid from '@/components/grid'

const Home = () => {
  return (
<div className='mb-[100px]'>

  <Titlebar tag="categories" title="Browse By">
  <button className='bg-[#D84444] w-[159px] h-[56px]'>View All</button>

  </Titlebar>

  <Titlebar tag="chairs" title="New Arrivals">
  <button className='bg-[#D84444] w-[159px] h-[56px] rounded-full'>View All</button>

  </Titlebar>
  <Header />
  
   <Grid>
   
   <Card/>
   <Card/>
   <Card/>
   <Card rating= {false}/>
  
  
  

   </Grid>
  
  

</div>

  )
}; 

export default Home