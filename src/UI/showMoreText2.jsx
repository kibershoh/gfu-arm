import React, { useEffect, useRef, useState } from 'react'

const ShowMoreText2 = ({text}) => {
    const [readMore,setReadMore] = useState(false)
const ReadMore = ()=>{
    setReadMore(!readMore)

}
 const sliceHundread = (text)=>{

        return text.slice(0,100)

   }
   const readMoreText = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        readMoreText.current &&
        !readMoreText.current.contains(event.target)
      ) {
       setReadMore(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div ref={readMoreText}>
  {
                readMore ? 
                (
                    <p className='w-full   pt-1 mt-3  h-auto  max-md:text-sm leading-6 font-sans size-1'>
                {text}
              </p>
                )
              :
             (
                <>
                 <p className='w-full relative pt-1 mt-3  h-auto  max-md:text-sm leading-6 font-sans size-1'>
               <span>
                 {sliceHundread(text)}
                 {text.length > 90 ? <>...</> : <></> }
               </span>
              </p>
             
                
                </>
             )
}
    </div>
  )
}

export default ShowMoreText2