import React, { useState } from 'react'

const TeamCard = ({item}) => {
const [showModal, setShowModal] = useState(false);
 const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
          {showModal && (
        <div className="fixed inset-0 overflow-y-auto overflow-x-hidden flex justify-center items-center z-30 bg-gray-800 bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  About  <span className='ml-2'>{item.name}</span>
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500">
                {item.about}
                </p>
                
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button
                  onClick={closeModal}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  yopish
                </button>
                 
              </div>
            </div>
          </div>
        </div>
      )}
        <div key={item.id} className="text-center text-gray-500 dark:text-gray-400 border-2 shadow-2xl rounded pb-5">
                            <div className='w-full bg-white rounded-xl py-5 shadow-sm '>
                            <img className="mx-auto border-2 border-white mb-4 w-48 h-48 rounded-xl" src={item.img} alt="Bonnie Avatar" />

                            </div>
                             
                           <div className='h-44'>
                             <h3 className="mb-1 h-16 text-xl mt-10 font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">{item.name}</a>
                            </h3>
                           
                            <p>{item.degree}</p>
                           
                            <button className='bg-blue-600 text-white p-2 rounded my-3 hover:bg-blue-700  hover:scale-110 duration-700'  onClick={openModal}>View More</button>
                           </div>
                        </div>
    </div>
  )
}

export default TeamCard