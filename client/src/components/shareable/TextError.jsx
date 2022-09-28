import React from 'react'

const TextError = (props) => {
  return (
    <div className='text-red-400 pt-1'>{props.children}</div>
  )
}

export default TextError