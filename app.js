const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! From short URL'))
app.get('/testing-reclaim-node', (req, res) => res.send('Hello World! From long url'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))