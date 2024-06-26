import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ShowMoreText2 from './showMoreText2';
 
const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto overflow-x-hidden flex justify-center items-center z-30 bg-gray-800 bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  About {book.title}
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
                {book.caption}
                </p>
                
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button
                  onClick={closeModal}
                  className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Ok
                </button>
                 
              </div>
            </div>
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.9 } }}
        className="xl:shadow-xl shadow rounded-md mx-2 pb-10 border border-violet-200"
      >
        <div className="flex flex-col max-lg:flex-cols relative">
          <div className="w-full bg-white-50 p-2">
            <img
              src={book.image}
              className="grid w-2/4 rounded-md grid-cols-1 h-44 mx-auto max-md:w-32 max-md:h-32 duration-500 object-cover hover:scale-105 transform origin-bottom"
            />
          </div>
          <div className="p-5 pb-10 max-md:pl-2 max-md:pr-0 pt-0 w-full relative">
            <h1 className="text-lg text-start font-bold max-md:text-xs">
              {book.title}
            </h1>
            <p className="text-slate-400 text-start w-full text-sm">
              {book.author}
            </p>
            <ShowMoreText2 text={book.caption}/>
            <button
              onClick={openModal}
              className="text-white absolute -bottom-5 z-20 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Read More
            </button>
            <div className="w-full text-right px-2 pt-8 absolute right-0 -bottom-8">
              <Link to={book.file} download target="_blank">
                <button className="inline-flex gap-5 items-center px-3 py-2 max-md:py-1 text-md max-md:text-sm font-medium text-center border border-violet-600 rounded-md hover:bg-[#CAF4FF] focus:ring-4 focus:outline-none focus:ring-violet-300">
                  <FaDownload className="text-violet-600" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BookCard;
