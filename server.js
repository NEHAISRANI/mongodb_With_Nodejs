const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const bodyParser = require('body-parser')

const url = 'mongodb://127.0.0.1:27017/employeeDB'
mongoose.connect(url, { useNewUrlParser: false })


const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})


// Middieware
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const EmployeeRoute=require('./controllers/routes')

app.get('/api/get',EmployeeRoute.index)
app.post('/api/postData',EmployeeRoute.store)
app.put('/api/update/:id',EmployeeRoute.update)
app.delete('/api/delete/:id',EmployeeRoute.destroy)

app.listen(3000, function() {
    console.log('listening on 3000')
})


