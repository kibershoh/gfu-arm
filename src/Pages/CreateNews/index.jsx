import axios from 'axios'
import React, { useState } from 'react'

const CreateNews = () => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [caption, setCaption] = useState('')
//   const [language, setLanguage] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
//   const [selectedImage, setSelectedImage] = useState(null)
//   const [progress, setProgress] = useState({ started: false, pc: 0 })
//   const [msg, setMsg] = useState(null)

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  const arr = []

  // FormData obyektini yaratamiz
  const formdata = new FormData();
  formdata.append("title", name);
  formdata.append("info", author);
  formdata.append("fotos", arr.push(selectedFile),selectedFile.name);
  formdata.append("status", caption);
  formdata.append("created", new Date());

  // POST so'rovi uchun parametrlar
  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  try {
    // Fetch so'rovi orqali ma'lumot yuborish
    const response = await fetch(
      "https://librarygfu.pythonanywhere.com/en-us/news/news/",
      requestOptions
    );

    // Server javobi tekshirilmoqda
    if (!response.ok) {
      console.error("Server javobi status kodi:", response.status);
      const responseData = await response.json();
      console.error("Javob ma'lumotlari:", responseData);
      throw new Error(`Server xatosi: ${response.status}`);
    }

    // Server javobini JSON formatida olish
    const result = await response.json();
    console.log("Server javobi:", result);
  } catch (error) {
    // Xato holatini konsolga chiqarish
    console.error("Fetch operatsiyasida xato:", error.message);
  }
};

  return (
    <div className='create w-full mt-20 px-10 '>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
          </div>
          {/* <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="number" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          </div> */}
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Caption</label>
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          </div>
          {/* <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
            <input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
          </div> */}
          <div className="max-w-sm">
            <h1>File</h1>
            <label className="block">
              <span className="sr-only">Choose file</span>
              <input readOnly={true} type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                                    file:me-4 file:py-2 file:px-4
                                    file:rounded-lg file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-600 file:text-white
                                    hover:file:bg-blue-700
                                    file:disabled:opacity-50 file:disabled:pointer-events-none" />
            </label>
          </div>
          {/* <div className="max-w-sm">
            <h1>Image</h1>
            <label className="block">
              <span className="sr-only">Choose image</span>
              <input readOnly={true} type="file"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500
                                    file:me-4 file:py-2 file:px-4
                                    file:rounded-lg file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-600 file:text-white
                                    hover:file:bg-blue-700
                                    file:disabled:opacity-50 file:disabled:pointer-events-none" />
            </label>
          </div> */}
        </div>
        {/* {progress.started &&
          <progress max="100" value={progress.pc}></progress>
        }
        {msg &&
          <h1>{msg}</h1>
        } */}
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default CreateNews
