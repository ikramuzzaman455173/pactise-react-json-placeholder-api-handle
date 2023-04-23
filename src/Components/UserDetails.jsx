import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  // const { id } = useParams()
  // const user = useLoaderData()
  // const detailsUser = user.find(e => e.id == id)
  // console.log(detailsUser);
  const user = useLoaderData()
  // console.log(user);
  return (
    <>
      <div className='text-center font-bold text-indigo-500 text-4xl mt-5'>This Is Our User <span className='text-slate-500'>{user.id}</span>  Details Page 😃</div>
      <>
        <div className="max-w-md p-6 mt-5  border md:mx-auto mx-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend Name: <span className='text-indigo-500'>{user.name}</span></h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend UserName: <span className='text-pink-500'>{user.username}</span></h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend Email: <span className='text-violet-500'>{user.email}</span></h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend City: <span className='text-blue-500'>{user.address.city}</span></h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Friend Phone No: <span className='text-green-500'>{user.phone}</span></h5>
        </div>
      </>
    </>
  )
}

export default UserDetails

