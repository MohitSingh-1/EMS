import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div>
      <div className={`flex-shrink-0 bg-gray-400 rounded-xl h-full w-[23%]`}>
        <div className="flex p-5 justify-between items-center  ">
          <h3 className={`text-base font-semibold bg-red-400 py-1 px-3 rounded`}>High</h3>
          <h4 className="text-sm font-semibold">20 feb, 2025</h4>
        </div>
        <div className="mx-5 ">
          <h2 className="text-2xl font-semibold">Make a youtube video</h2>
          <p className="mt-3 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dicta consequatur ea saepe nemo architecto natus rerum molestiae provident et.</p>
        </div>
        <div className='mt-4'>
            <button className='w-full text-3xl text-red-600 font-semibold'>Failed</button>
        </div>
      </div>
    </div>
  )
}

export default FailedTask
