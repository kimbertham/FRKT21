import React from 'react' 

const Side = ({ filter }) => {
  return (
    <>
      <div className='top'>
        <img src='https://bit.ly/3ngrdi2' className='logo' alt='logo'/>
      </div> 

      <div className='side'> 
        <div className='center'>
          <img src='https://bit.ly/32IoFzX' alt='twitter' className='icon' onClick={()=> filter('tw')}/>
          <img src='https://bit.ly/2RRmI1S' alt='youtube' className='icon'  onClick={()=> filter('yt')}/>
          <img src='https://bit.ly/3dLrOW0' alt='likes' className='icon'  onClick={()=> filter('likes')}/>
          <img src='https://bit.ly/3tND4qu' alt='date' className='icon'  onClick={()=> filter('date')}/>
        </div>
      </div> 
    </>
  )
}

export default Side