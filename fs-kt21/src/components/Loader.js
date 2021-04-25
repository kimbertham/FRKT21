
import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = ({ type }) => {

  return (
    <div className='loader'>
      <Loader
        type='Puff'
        color='white'
        height={200}
        width={90}/>
    </div>
  )
}

export default Loading