const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/contacts', router)
app.get('/', (req, res) => {
     res.send('Hi')
})

//server running 
const PORT = process.env.PORT || 8080
mongoose
  .connect(`mongodb+srv://dbdata:dbpass@cluster0-eukje.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true
    })
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server is Running on PORT ${PORT}`)
        })
    })
    .catch((e)=>{
        console.log(e)
    })

