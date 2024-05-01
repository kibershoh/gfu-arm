import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories, navLinks2 } from '../../Constants/navbar_items';
import { BsLinkedin, BsGithub, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
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
            <div>

                <ul>
                    <li className='text-2xl font-semibold mb-2 from-neutral-700 max-lg:text-xl max-md:text-lg'>Categories</li>
                    {categories.map((nav) => (
                        <li key={nav.id} className="flex flex-col hover:scale-105 duration-1000 my-2">
                            <NavLink
                                to={nav.path}
                                className='mx-4 text-xl max-lg:text-md font-semibold text-slate-700 hover:text-blue-600 '
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
                <h1 className='text-2xl font-semibold mb-2 from-neutral-700 max-lg:text-xl max-md:text-lg'>Find us in social medias</h1>
                <div className="flex items-center max-md:justify-around mt-20">
                    <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-8   rounded-full p-2 text-white">
                        <BsLinkedin size={20} />
                    </Link>
                    <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-8   rounded-full p-2 text-white">
                        <BsGithub size={20} />
                    </Link>
                    <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-8  rounded-full  p-2 text-white">
                        <BsInstagram size={20} />
                    </Link>
                    <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-8 rounded-full  p-2 text-white">
                        <BsTelegram size={20} />
                    </Link>
                    <Link to="/" className="bg-blue-900 hover:bg-blue-600 mr-8  rounded-full p-2 text-white">
                        <BsTwitter size={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer