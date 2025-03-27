import React from 'react'

const Title = ({title,color,txtColor}) => {
  return (
    <div>
      <p className='prata-regular text-5xl font-medium'style={{color:txtColor}} >{title}</p>
      <hr className='border-none h-[2.5px] w-30 mt-2 '
      style={{backgroundColor:color}} />
    </div>
  )
}

export default Title