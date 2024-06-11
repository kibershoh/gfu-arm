import React, { useState } from 'react';
import aboutus from '../../assets/aboutus.jpg';
import one from '../../assets/education/1.jpg';
import two from '../../assets/education/2.jpg';
import three from '../../assets/education/4.jpg';
import dildora from '../../assets/person/dildora.png';
import feruza from '../../assets/person/feruza.png';
import shahzoda from '../../assets/person/shahzoda.png';
import shoxsanam from '../../assets/person/shoxsanam.png';
import zebiniso from '../../assets/person/zebiniso.png';
import clsx from 'clsx';
import SocialNetwork from './socialNetwork';
import CarouselSlide from '../../UI/Carousel';
import Carousel3d from '../../UI/CarouseThree';

const AboutUs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [tab, setTab] = useState('education')

    return (
        <>
            <div className='mt-24'>
                <div className='my-5'>
                    <div className=' mx-auto w-full flex justify-around'>
                        <button onClick={() => setTab('education')} className={clsx(
                            tab === 'education' ? 'border bg-violet-600 text-white p-2 rounded-lg border-violet-600 shadow-sm ' : '',

                            'text-2xl max-md:text-sm max-md:p-1 rounded-lg hover:bg-violet-600 hover:text-white'
                        )}>O'quv zallari </button>

                        <button onClick={() => setTab('library')} className={clsx(
                            tab === 'library'  ? "border bg-violet-600 text-white p-2 rounded-lg border-violet-600 shadow-sm " : '',
                            'text-2xl max-md:text-sm max-md:p-1 rounded-lg hover:bg-violet-600 hover:text-white p-2'
                        )}>Kutubxona haqida</button>
                        <button onClick={() => setTab('team')} className={clsx(tab === 'team' ? "border bg-violet-600 text-white p-2 rounded-lg border-violet-600 shadow-sm" : '',
                            'text-2xl max-md:text-sm max-md:p-1 rounded-lg hover:bg-violet-600 hover:text-white')}>Bizning jamoa</button>
                    </div>

                </div>
              {
                tab==='education' ? 
                <Carousel3d/>
                : (
                    tab === 'library' ? 
                    <>
                    <p className='px-10'>
                        O‘zbekiston Respublikasi Prezidentining “Geologiya fanlari universitetini tashkil etish to‘g‘risida”gi 2020-yil 8-iyundagi qarori asosida universitet Axborot-resurs markazi o‘z ish faoliyatini boshlagan. Universitet Axborot-resurs Markazi tarmog’ini tashkil qilishda zamon talablarini hisobga olgan holda, o’sib kelayotgan yosh avlodning intelliktual ehtiyojlarini qondirishga shu bilan birga aholini yanada kengroq va tizimli axborot bilan ta’minlash uchun kerakli bo’lgan sharoitlarni yaratish maqsadida O‘zbekiston Respublikasi Prezidentining 2006-yil 20-iyundagi PQ-381-sonli qarori va Oliy ta’lim vazirligining 2006-yil 29-dekabrdagi 295-sonli buyrug’iga asosan Axborot-resurs markaziga aylantirildi. 2011-yil 23-fevral “2011-2015-yillarda axborot-kommunikatsiya texnologiyalari asosida axborot kutubxona va axborot-resurs хizmatlarini yanada sifatli rivojlantirish chora-tadbirlari to’g’risida”gi 1487-sonli qarori va O’zbekiston Respublikasining 2011-yil 13-aprel “Axborot-kutubxona faoliyati to’g’risida”gi PQ-280-sonli qonuni va 2019-yil 7-iyundagi PQ-4354-sonli O’zbekiston Respublikasi Prezidentining “O’zbekistin Respublikasi aholisiga Axborot-kutubxona xizmati ko’rsatishni yanada takomillashtirish” to’g’risidagi qarorlari asosida ishlar olib borilmoqda. Geologiya fanlari universitetini Axborot-resurs markazi universitet hududida joylashgan.Qulayligi shundan iboratki u talabalar turar joyi markazida joylashgan bo‘lib, talabaning darsdan keyingi bo‘sh vaqtida ARMdan samarali foydalanishiga imkon yaratadi. Professor-o‘qituvchilar, doktorantlar, talaba va magistirlar uchun ham alohida o’quv zallarida xizmat ko’rsatiladi.
                    </p>
                     <div className='grid grid-cols-3 px-10 gap-10 mt-10 rounded-lg'>
                   <img src={one} alt="" /> 
                   <img src={two} alt="" /> 
                   <img src={three} alt="" /> 
                </div>
                    </>
                    :
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
                      
                        <div className="text-gray-500 shadow-xl rounded text-center  dark:text-gray-400">
                            
                            <div className='w-full bg-violet-600 rounded-xl py-5'>
                            <img className="mx-auto mb-4 w-48 h-48 rounded-full" src={shahzoda} alt="Sofia Avatar" />
                                
                            </div>
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Said-Muratova Shahzoda Begim Shuxratovna</a>
                            </h3>
                           
                            <p>2-toifali kutubxonachi</p>
                             <button className='bg-violet-600 text-white p-2 rounded my-3 hover:bg-violet-700  hover:scale-110 duration-700'>View More</button>
                            
                        </div>
                      
                    </div>
                    </div>
                )
              }


            </div>
           
        </>

    )
}

export default AboutUs