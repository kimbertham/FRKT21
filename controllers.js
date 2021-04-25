const axios = require('axios')
const { twitter, youtube, ids } = require('./lib')

async function tw() {
  return (await axios.request(twitter)).data
}

async function yt() {
  const yt = (await axios.request(ids)).data.items
  const id = yt.map(k => k.contentDetails.videoId).join(',')
  return (await axios.request(youtube(id))).data.items
}

async function all(req,res) {
  const data = {
    tw: await tw(),
    yt: await yt()
  }
  res.status(200).json(data)
}

const router = require('express').Router()

router.route('/all').get(all)

module.exports = router




