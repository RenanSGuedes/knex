const express = require('express')
const app = express()

const url = new URL('http://127.0.0.1:8085/')

app.listen(url.port, () => console.log(`Server is running on ${url.href}`))