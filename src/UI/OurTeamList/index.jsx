import React from 'react'
import { OurTeamData } from '../../Constants/OurTeamData'
import OurTeamCard from '../OurTeamCard'

const OurTeamList = () => {

  return (
    <div className='grid gap-8 lg:gap-16 px-20 sm:grid-cols-3 lg:grid-cols-3'>
  {
    OurTeamData?.map((item)=>(
        <OurTeamCard data={item}/>
    ))
  }
    </div>
  )
}

export default OurTeamList