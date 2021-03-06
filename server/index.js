const express = require('express')

const app = express()

app.use(require('cors')())//跨域
app.use(express.json())//就能使用req.body

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.use('/admin', express.static(__dirname + '/admin'))
app.use('', express.static(__dirname + '/web'))
app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(3000, () => {
    console.log('http://localhost:3000')
})