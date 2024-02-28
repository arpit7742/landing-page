import React from 'react'
import {FidgetSpinner} from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='loader h-screen w-screen flex justify-center bg-gradient-to-b from-purple-100 via-fuchsia-200 to-rose-200  items-center fixed'>
    <FidgetSpinner
    
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#7A5299"
    />
  </div>
  )
}

export default Loader