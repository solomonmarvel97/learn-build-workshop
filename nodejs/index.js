const express = require('express')
const {v4 } = require('uuid')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/generateId', (req, res) => {
    res.send(v4())
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})