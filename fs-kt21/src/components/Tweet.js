import React from 'react'
import moment from 'moment'

const Tweet = ({ tweet, info, media }) => {
  if (!tweet) return null

  const image = () => {
    if (tweet.attachments ){
      const i = media.findIndex(m => m.media_key === tweet.attachments.media_keys[0])
      return <img src={ media[i].url || media[i].preview_image_url } className='p-media' alt='media'/>
    }
  }

  return (
    <div className='post-cont'>

      <div className='flex'>
        <img src='https://bit.ly/3tJloMF' className='social-logo' alt='logo'/> 

        <div>
          <p className='p-fromNow'>{moment(tweet.created_at).fromNow()}</p>
          <h1>{info.name}</h1> 
          <p>@{info.username}</p>
          <p className='p-date'>{moment(tweet.created_at).format('DD/MM/YYYY')}</p>
          <p>{tweet.text}</p>
          {image()}

          <div className='p-metric-cont'>
            <div className='p-metric'>
              <img src='https://bit.ly/2S4QP6b' className='p-icon' alt='retweet'/>
              <p>{tweet.public_metrics.retweet_count} Retweets</p>
            </div>
            <div className='p-metric'>
              <img src='https://bit.ly/3aDMkFU' className='p-icon' alt='likes'/>
              <p>{tweet.public_metrics.like_count} Likes</p>
            </div>
            <div className='p-metric'>
              <img src='https://bit.ly/3sQEZJJ' className='p-icon' alt='replies'/>
              <p>{tweet.public_metrics.reply_count} Replies</p>
            </div>
            <div className='p-metric'>
              <img src='https://bit.ly/3eKhKfp' className='p-icon' alt='quotes'/>
              <p>{tweet.public_metrics.reply_count} Quotes</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Tweet