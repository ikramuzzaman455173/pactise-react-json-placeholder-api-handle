import React from 'react'
import { useLoaderData } from 'react-router-dom'

const PostDetails = () => {
  const userPost = useLoaderData()
  // console.log(userPost);
  const { id, title, body } = userPost
  return (
    <>
      <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Post <span className="text-red-500">{id}</span> Components 😃</div>
      <div className="max-w-xl p-6 mt-5  border md:mx-auto mx-2 border-gray-200  capitalize rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Post No: <span className='text-indigo-500'>{id}</span></h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">post title: <span className='text-pink-500'>{title}</span></h5>
        <p className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">post body: <span className='text-violet-500'>{body}</span></p>
      </div>
    </>
  )
}

export default PostDetails
