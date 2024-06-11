import React from 'react'

const OurTeamCard = ({data}) => {
  return (
        <div className="text-center text-gray-500 dark:text-gray-400 shadow-xl rounded pb-5">
                            <div className='w-full bg-violet-600 rounded-xl py-5 '>
                            <img className="mx-auto border-2 border-white mb-4 w-48 h-48 rounded-full" src={data.img} alt="Bonnie Avatar" />

                            </div>
                             
                            <h3 className="mb-1 text-xl mt-10 font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">{data.name}</a>
                            </h3>
                           
                            <p>{data.daraja}</p>
                           
                            <button className='bg-violet-600 text-white p-2 rounded my-3 hover:bg-violet-700  hover:scale-110 duration-700'>View More</button>
                           {/* <SocialNetwork/> */}
                        
                        </div>
  )
}

export default OurTeamCard