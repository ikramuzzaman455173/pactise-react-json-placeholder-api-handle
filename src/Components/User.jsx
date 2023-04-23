import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const User = () => {
  const [user, setuser] = useState([])
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
        // console.log(data)
        setuser(data)
      }).catch(error=>console.log(`404 page not found ${error}`))
    },[])
  return (
    <>
      <div className='text-center font-bold text-red-500 text-3xl mt-5'>This Is Our Users Components 😃</div>
      <h3 className="text-xl text-slate-500 text-center font-bold mt-4">This Page Toatal User: <span className='text-red-500'>{user.length}</span></h3>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mx-2 lg:grid-cols-4 gap-2'>
        {
          user.map(e => {
            return(<div key={e.id} className="max-w-sm p-6 mt-5  border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend Name: <span className='text-indigo-500'>{e.name}</span></h5>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend UserName: <span className='text-pink-500'>{e.username}</span></h5>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend Email: <span className='text-violet-500'>{e.email}</span></h5>
            <Link to={`/userdetails/${e.id}`} className=" mt-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              More Details
            </Link>
            </div>)
          })
        }
      </div>
    </>
  )
}

export default User
