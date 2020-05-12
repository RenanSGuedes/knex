const express = require('express')
const app = express()

const knex = require('./database')

const url = new URL('http://127.0.0.1:8085/')

app.use(express.json())

app.get('/users', async (req, res) => {
  
  const allUsers = await knex('users')
  res.status(200)
  
  return res.json(allUsers)
})

app.post('/users', async (req, res) => {
  const { username } = req.body

  const newUser = await knex('users').insert({ username })

  console.log(username)
  return res.json(newUser)
})

app.listen(url.port, () => console.log(`Server is running on ${url.href}`))