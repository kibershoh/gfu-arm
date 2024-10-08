



import React, { useContext, useEffect, useState } from 'react'
import feruza from '../../assets/person/feruza.png';
import shahzoda from '../../assets/person/shahzoda.png';
import shoxsanam from '../../assets/person/shoxsanam.png';
import zebiniso from '../../assets/person/zebiniso.png';
import TeamCard from './Tab/teamCard';
import { LanguageContext } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
const OurTeam = () => {
    const { t, language, setLanguage } = useContext(LanguageContext);
const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      const fetchBooks = async () => {
        try {
          const response = await fetch("https://librarygfu.pythonanywhere.com/en-us/library/employee/", requestOptions);
          const textResult = await response.json();
          console.log(textResult);
          setData(textResult);
        } catch (err) {
          setError(err);
          console.error(err);
        }
      };

      fetchBooks();
    },[]);
  
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
    <div id='ourTeam'>     
         <div className='mt-10 px-10 2xl:w-3/4 2xl:px-3 2xl:mx-auto max-md:px-2'>
                      <h1 className='text-center my-10 text-3xl font-be-vietnam'>{t('team')}</h1>
                        <div className="grid grid-cols-3 gap-4 lg:gap-5 px-10 max-md:px-2 max-md:grid-cols-1 ">
                       
                       {
                        data?.map((item)=>(
                           <TeamCard item={item}/>
                        ))
                       }                    
                      
                        
                      
                    </div>
                    </div>
    </div>
  )
}

export default OurTeam