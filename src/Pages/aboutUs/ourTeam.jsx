



import React, { useState } from 'react'
import feruza from '../../assets/person/feruza.png';
import shahzoda from '../../assets/person/shahzoda.png';
import shoxsanam from '../../assets/person/shoxsanam.png';
import zebiniso from '../../assets/person/zebiniso.png';
import TeamCard from './Tab/teamCard';
const OurTeam = () => {
  
   const TeamInformation = [
    {
      id:1,
      img:shoxsanam,
      name:"Shodmanova Shohsanam Abduxamitovna",
      degree:"1-toifali kutubxonachi",
      about:"Shodmanova Shohsanam AbduxamitovnaShodmanova Shohsanam AbduxamitovnaShodmanova Shohsanam Abduxamitovna "
    },
    {
      id:2,
      img:shoxsanam,
      name:"Abduganiyeva Zebiniso Melikovna",
      degree:"1-toifali kutubxonachi",
      about:"Shodmanova Shohsanam AbduxamitovnaShodmanova Shohsanam AbduxamitovnaShodmanova Shohsanam Abduxamitovna "
    },
    {
      id:3,
      img:shoxsanam,
      name:"Tuxtayeva Feruza Tulkunovna",
      degree:"2-toifali kutubxonachi",
      about:"Tuxtayeva Feruza Tulkunovna Tuxtayeva Feruza TulkunovnaTuxtayeva Feruza TulkunovnaTuxtayeva Feruza Tulkunovna"
    },
    {
      id:3,
      img:shoxsanam,
      name:"Tuxtayeva Feruza Tulkunovna",
      degree:"2-toifali kutubxonachi",
      about:"Tuxtayeva Feruza Tulkunovna Tuxtayeva Feruza TulkunovnaTuxtayeva Feruza TulkunovnaTuxtayeva Feruza Tulkunovna"
    },
    {
      id:3,
      img:shoxsanam,
      name:"Tuxtayeva Feruza Tulkunovna",
      degree:"2-toifali kutubxonachi",
      about:"Tuxtayeva Feruza Tulkunovna Tuxtayeva Feruza TulkunovnaTuxtayeva Feruza TulkunovnaTuxtayeva Feruza Tulkunovna"
    },
    {
      id:3,
      img:shoxsanam,
      name:"Tuxtayeva Feruza Tulkunovna",
      degree:"2-toifali kutubxonachi",
      about:"Tuxtayeva Feruza Tulkunovna Tuxtayeva Feruza TulkunovnaTuxtayeva Feruza TulkunovnaTuxtayeva Feruza Tulkunovna"
    },
    {
      id:3,
      img:shoxsanam,
      name:"Tuxtayeva Feruza Tulkunovna",
      degree:"2-toifali kutubxonachi",
      about:"Tuxtayeva Feruza Tulkunovna Tuxtayeva Feruza TulkunovnaTuxtayeva Feruza TulkunovnaTuxtayeva Feruza Tulkunovna"
    },
   ]
 
  return (
    <div>
     
         <div className='mt-10 px-10 2xl:w-3/4 2xl:px-3 2xl:mx-auto'>
                        <div className="grid gap-4 lg:gap-5 px-10 sm:grid-cols-3 lg:grid-cols-3">
                       
                       {
                        TeamInformation.map((item)=>(
                           <TeamCard item={item}/>
                        ))
                       }
                       
                      
                        
                      
                    </div>
                    </div>
    </div>
  )
}

export default OurTeam