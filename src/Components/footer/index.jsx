import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { categories, navLinks2 } from '../../Constants/navbar_items';
import { BsLinkedin, BsGithub, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import { IoLogoYoutube } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css';
import { MdAlternateEmail, MdCopyright, MdLocationPin } from 'react-icons/md';
import { FaPhone, FaPhoneVolume } from 'react-icons/fa';
import logo from '../../assets/logotip.png';
import { LanguageContext } from '../../context/LanguageContext';
const Footer = () => {
  const { t, language, setLanguage } = useContext(LanguageContext);

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <div className=' max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  p-10 px-20 border-t-2 mt-3'>

            {/* <div>
                <h1 className='text-3xl text-slate-700 font-extrabold max-lg:text-2xl max-md:text-xl max-sm:text-lg'>GFU | ARM</h1>
                <p className='text-black font-medium mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div> */}
            <div className='flex flex-col'>

                <ul className='flex'>
                    {t('navLinks').map((nav) => (
                        <li key={nav.id} className="flex  hover:scale-105 duration-1000 my-2">
                            <NavLink   
                                to={nav.path}
                                className='mx-4 text-2xl max-md:text-lg max-sm:text-md font-semibold text-slate-700 hover:text-blue-600 '
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
 <div className="flex items-center max-md:justify-around mt-4 ml-4">
                   
                     
                    <Link to="https://www.instagram.com/geologiya_fanlari_universiteti/" className="bg-transparent border border-slate-800 hover:bg-slate-200 mr-4  rounded-full  p-2 textblack">
                        <BsInstagram size={20} />
                    </Link>
                    <Link to="https://t.me/Uzgeouniver_bot" className="bg-transparent border border-slate-800 hover:bg-slate-200 mr-4 rounded-full  p-2 text-slate-800">
                        <BsTelegram size={20} />
                    </Link>
                    <Link to="/" className="bg-transparent hover:bg-slate-200 border border-slate-800 mr-4  rounded-full p-2 text-slate-800">
                        <BsTwitter size={20} />
                    </Link>
                    <Link to="https://www.youtube.com/results?search_query=geologiya+fanlari+universiteti" className="bg-transparent hover:bg-slate-200 border border-slate-800 mr-4  rounded-full p-2 text-slate-800">
                        <IoLogoYoutube size={20} />
                    </Link>
                    <Link to="https://www.facebook.com/Geouniveruz" className="bg-transparent hover:bg-slate-200 border border-slate-800 mr-4  rounded-full p-2 text-slate-800">
                        <GrFacebookOption size={20} />
                    </Link>
                    <Link to="/" className=" flex  ml-10    gap-2 items-center text-lg hover:text-blue-700 p-1 text-slate-800">
                        <MdAlternateEmail className='border p-1 w-8 h-8 rounded-full' /> <span>info@uzgeouniver.uz</span>
                    </Link>
                    <Link to="/" className=" flex  ml-10    gap-2 items-center text-lg hover:text-blue-700 p-1 text-slate-800">
                        <FaPhone className='border p-1 w-8 h-8 rounded-full' /> <span>+998 71 209 79 00</span>
                    </Link>

                </div>

            </div>
            <br />
            <br />
            <hr />
            <div className='mt-8 flex justify-between'>

            <h1 className='ml-5 text-2xl flex items-center gap-2 font-be-vietnam'>
                <MdCopyright/> GFU | ARM 2024</h1>
                 <img className='w-1h-16 h-16' src={logo} alt="" />
                 <a className='border hover:text-blue-600 font-be-vietnam rounded-md p-2 flex items-center gap-4' href="https://www.google.com/maps/dir/41.3466624,69.3469184/41.3419993,69.3420105/@41.3441898,69.3395218,16z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu"><MdLocationPin size={22}/> Mirzo-Ulugbek tumani, Olimlar ko'chasi 49, Olimlar 64A, 100041, Toshkent






<button className='p-3 text-white rounded-md border bg-blue-600'>Xaritada</button></a>
            </div>

          
          
           
              
        </div>
    )
}

export default Footer