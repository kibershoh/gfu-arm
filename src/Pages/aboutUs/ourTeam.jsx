



import React from 'react'
import feruza from '../../assets/person/feruza.png';
import shahzoda from '../../assets/person/shahzoda.png';
import shoxsanam from '../../assets/person/shoxsanam.png';
import zebiniso from '../../assets/person/zebiniso.png';
const OurTeam = () => {
  return (
    <div>
         <div>
                        <div className="grid gap-8 lg:gap-16 px-20 sm:grid-cols-3 lg:grid-cols-3">
                        <div className="text-center text-gray-500 dark:text-gray-400 shadow-xl rounded pb-5">
                            <div className='w-full bg-violet-600 rounded-xl py-5 '>
                            <img className="mx-auto border-2 border-white mb-4 w-48 h-48 rounded-full" src={shoxsanam} alt="Bonnie Avatar" />

                            </div>
                             
                            <h3 className="mb-1 text-xl mt-10 font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Shodmanova Shohsanam Abduxamitovna</a>
                            </h3>
                           
                            <p>1-toifali kutubxonachi</p>
                           
                            <button className='bg-violet-600 text-white p-2 rounded my-3 hover:bg-violet-700  hover:scale-110 duration-700'>View More</button>
                           {/* <SocialNetwork/> */}
                        </div>
                        <div className="text-center shadow-xl rounded text-gray-500 dark:text-gray-400">
                           
                           <div className='w-full bg-violet-600 rounded-xl py-5'>
                            <img className="mx-auto mb-4 w-48 h-48 rounded-full" src={zebiniso} alt="Helene Avatar" />

                           </div>
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Abduganiyeva Zebiniso Melikovna</a>
                            </h3>
                           
                            <p>1-toifali kutubxonachi</p>
                                                       <button className='bg-violet-600 text-white p-2 rounded my-3 hover:bg-violet-700  hover:scale-110 duration-700'>View More</button>
                           
                             
                        </div>
                        <div className="text-gray-500 shadow-lg text-center dark:text-gray-400">
                           
                           <div className='w-full bg-violet-600 rounded-xl py-5'>
                            <img className="mx-auto mb-4 w-48 h-48 rounded-full" src={feruza} alt="Jese Avatar" />

                           </div>
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Tuxtayeva Feruza Tulkunovna</a>
                            </h3>
                           
                            <p>1-toifali kutubxonachi</p>
                                                       <button className='bg-violet-600 text-white p-2 rounded my-3 hover:bg-violet-700  hover:scale-110 duration-700'>View More</button>
                           
                            
                         </div>
                      
                        
                      
                    </div>
                    </div>
    </div>
  )
}

export default OurTeam