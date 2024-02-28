import React from 'react'


const Form = () => {
  return (


   <form className='px-16 flex flex-col w-full justify-center items-center' action="">
     <div className='text-purple-600 font-bold text-xl lg:text-3xl md:text-2xl  mb-4 text-center'>
     Sign Up for The BETA to See More
     </div>
     <input type="text"
     className='mt-2 border px-4 py-2 w-full md:w-1/2 text-md md:text-lg lg:text-xl mb-4 border-purple-600'
     placeholder='Business Name' required
      />
     <input type="text"
     className='mt-2 border px-4 py-2 w-full md:w-1/2 text-md md:text-lg lg:text-xl mb-2 border-purple-600'
     placeholder='Email Address' required
      />
    <button type='Submit' className='bg-purple-600 text-slate-50 m-2 px-10 py-3 text-lg rounded-xl'>Notify</button>
    <button type='Submit' className='border border-purple-600 my-4 px-8 w-full md:w-fit py-4 text-lg rounded-xl hover:scale-105 duration-300 text-purple-600'>Sign up as Freelancer</button>
   </form>
   
   
  )
}

export default Form