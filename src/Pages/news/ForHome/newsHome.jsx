// src/newsHome.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewsHome = ({cards}) => {
const navigate = useNavigate()
 
 
const toDetails = (id) => {
    navigate('/newsdetails/' + id)
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:px-2 px-20 gap-5 gap-y-4 max-xl:px-100 max-xl:grid-cols-4 2xl:w-3/4">
        {cards.map((card,index) => (
           <div key={card.id} className='p-4  shadow border-2 rounded relative pb-16'>
                  <div className="" onClick={() => toDetails(card.id)}>
              {card?.fotos && card.fotos.length > 0 && card.fotos[0]?.fotos ? (
                <img
                  src={`https://librarygfu.pythonanywhere.com/${card.fotos[0].fotos}`}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg w-full h-64 mx-auto object-cover"
                />
              ) : (
                <div className="w-full h-64 mx-auto flex items-center justify-center bg-gray-200 rounded-lg">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>
                  <p className='text-slate-950 mt-3'>{card.title}</p>
                  {/* <p className='pt-3'>{card.info}

                  </p> */}
                  <span className='text-slate-400 absolute bottom-3 left-2'>
                      {card.created}
                    </span>
                  <div className='absolute bottom-5 right-5    '>
                     
                     <a href='#newsDetails' onClick={()=> toDetails(card.id)} className='p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white '>
                      Read More
                    </a>
                   </div>
                </div>
        ))}
      </div>
      
    </div>
  );
};

export default NewsHome;


 