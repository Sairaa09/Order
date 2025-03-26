import React from 'react'

const Title = ({Title,color}) => {
  return (
    <div>
      <p className='prata-regular text-3xl'>{Title}</p>
      <hr className='border-none h-[2.5px] w-[83%] mt-1 '
      style={{backgroundColor:color}} />
    </div>
  )
}

export default Title