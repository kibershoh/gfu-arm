import React, { Children, useState } from 'react'
import { translations } from '../Constants/Translations'
import { LanguageContext } from './LanguageContext'

const LanguageProvider = ({children}) => {
    const [language,setLanguage] = useState('uz')

    const t = key =>{
        return translations[language][key] || key
    }
  return (
    <LanguageContext.Provider value={{language,setLanguage,t}}>
       {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider;