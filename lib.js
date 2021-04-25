require('dotenv').config()

const twitter = {
  method: 'GET',
  url: 'https://api.twitter.com/2/users/33475281/tweets?',
  params: {
    'tweet.fields': 'created_at,author_id,conversation_id,public_metrics,attachments',
    'expansions': 'author_id,attachments.media_keys',
    'user.fields': 'username',
    'max_results': '50',
    'media.fields': 'preview_image_url,url'
  },
  headers: { Authorization: `Bearer ${process.env.TWITTER_ACCESS_TOKEN}` }
}

const ids = {
  method: 'GET',
  url: 'https://www.googleapis.com/youtube/v3/playlistItems?',
  params: {
    'part': 'contentDetails',
    'maxResults': '50',
    'playlistId': 'UUGkRPUvp4tZXyd4EZUdjrCw',
    'key': process.env.YOUTUBE_ACESS_TOKEN
  } 
}

const youtube = (id) => {
  return {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos?',
    params: {
      'part': 'statistics,contentDetails,snippet,player',
      'id': id,
      'key': process.env.YOUTUBE_ACESS_TOKEN
    } 
  }
}

module.exports = { twitter,youtube, ids }