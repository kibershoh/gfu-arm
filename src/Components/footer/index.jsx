import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories, navLinks2 } from '../../Constants/navbar_items';
import { BsLinkedin, BsGithub, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css';

const Footer = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <div className='grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  p-10 border-t-2 mt-3'>

            <div>
                <h1 className='text-3xl text-slate-700 font-extrabold max-lg:text-2xl max-md:text-xl max-sm:text-lg'>GFU | ARM</h1>
                <p className='text-black font-medium mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
            <div>

                <ul>
                    <li className='text-2xl max-lg:text-xl max-md:text-lg font-semibold mb-2 from-neutral-700'>Menu</li>
                    {navLinks2.map((nav) => (
                        <li key={nav.id} className="flex flex-col hover:scale-105 duration-1000 my-2">
                            <NavLink
                                to={nav.path}
                                className='mx-4 text-xl max-md:text-lg max-sm:text-md font-semibold text-slate-700 hover:text-blue-600 '
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                    document.title = nav.title;
                                }}
                            >
                                {nav.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>


            </div>

          
            <div className=''>
                <div className='mb-3'>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ism va Familiya</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ism va familiya" required />
                </div>

                <PhoneInput
defaultCountry='uz'                    
                    placeholder="Enter phone number"
                />
                 <button className='bg-blue-600 ml-auto rounded-lg p-2 text-white hover:bg-blue-700 mt-2 w-44 text-lg font-semibold'>Submit</button>
            </div>
            <div className="flex items-center max-md:justify-around mt-4">
                   
                     
                    <Link to="https://www.instagram.com/geologiya_fanlari_universiteti/" className="bg-blue-900 hover:bg-blue-600 mr-4  rounded-full  p-2 text-white">
                        <BsInstagram size={20} />
                    </Link>
                    <Link to="https://t.me/Uzgeouniver_bot" className="bg-blue-900 hover:bg-blue-600 mr-4 rounded-full  p-2 text-white">
                        <BsTelegram size={20} />
                    </Link>
                    <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-4  rounded-full p-2 text-white">
                        <BsTwitter size={20} />
                    </Link>
                </div>
              
        </div>
    )
}

export default Footer