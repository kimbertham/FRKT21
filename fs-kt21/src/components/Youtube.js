import React from 'react'
import moment from 'moment'
import Parser from 'html-react-parser'

const Youtube = ({ video }) => {
  return (
    <div className='post-cont'>

      <div className='flex'>
        <img src='https://bit.ly/3sQKxUu' className='social-logo' alt='logo'/> 

        <div>
          <p className='p-fromNow'>{moment(video.snippet.publishedAt).fromNow()}</p>
          <h1>{video.snippet.channelTitle}</h1> 
          <p className='p-date'>{moment(video.snippet.publishedAt).format('DD/MM/YYYY')}</p>
          <p>{video.snippet.description}</p>
          <div className='p-media'>{Parser(video.player.embedHtml)}</div>

          <div className='p-metric-cont'>
            <div className='p-metric'>
              <img src='https://bit.ly/3dOWlSQ' className='p-icon' alt='Views'/>
              <p>{video.statistics.viewCount} Views</p>
            </div>
            <div className='p-metric'>
              <img src='https://bit.ly/3dLYazY' className='p-icon' alt='likes'/>
              <p>{video.statistics.likeCount} Likes</p>
            </div>
            <div className='p-metric'>
              <img src='https://bit.ly/3tUNXXI' className='p-icon' alt='quotes'/>
              <p>{video.statistics.dislikeCount}</p>
            </div>
            <div className='p-metric'>
              <img src='https://bit.ly/3sQEZJJ' className='p-icon' alt='replies'/>
              <p>{video.statistics.commentCount} Comments</p>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube