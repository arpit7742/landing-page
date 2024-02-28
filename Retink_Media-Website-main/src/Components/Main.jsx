import React from 'react'
import EmbededVideo from './EmbededVideo'
const Main = () => {
  return (
    <div className='font-bold w-full h-screen bg-white flex flex-col justify-center items-center px-8'>
      <div>
        <p className='text-purple-600 text-3xl '>Retink Content Solution for Your Business</p>
      </div>
      <div className='mt-6'>
      <EmbededVideo />
      </div>
    </div>
  )
}

export default Main