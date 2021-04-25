const express = require('express')
const PORT = process.env.PORT || 8000
const router = require('./controllers')

const app = express()

app.use('/api', router)

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))
