import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Posts = () => {
  const posts = useLoaderData()
  // console.log(posts);
  return (
    <>
      <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Page Totals Post Available: <span className="text-red-500">{posts.length}</span> 😃</div>
      <div className='grid grid-cols-1 mx-2 md:grid-cols-2 gap-2'>
        {posts.map(e => {
          return( <div key={e.id} className="max-w-md p-6 mt-5  border mx-auto border-gray-200  capitalize rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Post No: <span className='text-indigo-500'>{e.id}</span></h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">post title: <span className='text-pink-500'>{e.title}</span></h5>
            <p className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">post body: <span className='text-violet-500'>{e.body}</span></p>
            <Link to={`/postdetails/${e.id}`} className=" mt-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              More Details
            </Link>
        </div>)
        })}
      </div>
    </>
  )
}

export default Posts
