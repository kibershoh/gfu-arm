import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageSlider from '../news/sliderImages';

const NewsDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [news, setNews] = useState([]);
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const fetchBooks = async () => {
            try {
                const response = await fetch('https://librarygfu.pythonanywhere.com/en-us/news/new', requestOptions);
                const textResult = await response.json();
                setNews(textResult);
                console.log('News:', textResult);
            } catch (err) {
                console.error(err);
            }
        };

        fetchBooks();
    }, []); // Add empty dependency array to avoid multiple fetches

    useEffect(() => {
        if (news.length > 0) {
            const foundProduct = news.find((item) => item.id === parseInt(id));
            setProduct(foundProduct);
            console.log(foundProduct);
        }
    }, [id, news]);

    return (
        <div id='newsDetails' className='w-full h-auto flex justify-center items-center px-20 pt-20 max-md:px-2'>
            {

              product && 
                <div  className='p-4  shadow rounded relative pb-16'>
                   <div className="w-full flex items-center justify-center ">
                    <ImageSlider fotos={product.fotos}/>
                  </div>
                  <div className='w-3/4 mx-auto mt-10'>
                    <p className='text-slate-900 mt-3  font-semibold  w-full text-xl'>{product.title}</p>
                  <p className='pt-3 text-xl'>{product.info}

                  </p>
                  </div>
                  <div className='absolute bottom-5 right-5 '>
                    <button onClick={()=>navigate('/news')} className='p-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white '> 
                       Back 
                    </button>
                  </div>
                        <span className='text-slate-400 absolute bottom-3 right-36'>{product.created}</span>
                </div>
              


            }

        </div>
    );
};

export default NewsDetails;
