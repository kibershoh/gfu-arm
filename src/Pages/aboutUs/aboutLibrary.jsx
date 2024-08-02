import React, { useContext } from 'react'
import Carousel3d from '../../UI/CarouseThree'
import OurTeam from './ourTeam'
import { LanguageContext } from '../../context/LanguageContext';

const AboutLibrary = () => {
        const { t, language, setLanguage } = useContext(LanguageContext);

  return (
    <div>

         <p className='px-24 max-md:px-4  text-lg font-be-vietnam my-5'>
    {t('information')}
                    </p>
                       <OurTeam/>
    </div>
  )
}

export default AboutLibrary