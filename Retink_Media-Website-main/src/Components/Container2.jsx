import React from 'react'

const Container2 = () => {
  const year=new Date().getFullYear().toString();

  return (
    <div className='bg-black text-white  h-fit p-12 flex flex-col md:flex-row  justify-between text-center items-center'>
        <div className='flex my-2 mx-8'>
        {`Copyright © ${year} Retink`}
        </div>
        
       <div className='flex flex-col order-first md:order-last justify-center md:justify-center md:flex-row '>
       <div className='mx-8 my-2'>
            <a href="#">Privacy Policy</a>
        </div>
        <div className='mx-8 my-2'>
            <a href="#">Terms Of Service</a>
        </div>
        
       </div>
    </div>
  )
}

export default Container2