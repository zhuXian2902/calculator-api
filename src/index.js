const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// here

app.post('/add', (req,res) => {

    const num1 = req.body.num1;
    const num2 = req.body.num2;

    res.send( {
        'message': "Successfull",
        'result':parseInt(num1)+ parseInt(num2)
    })


})

app.post('/sub', (req, res) =>{

    const num1 = req.body.num1;
    const num2 = req.body.num2;

    res.send( {
        'message': "Successfull",
        'result': (parseInt(num1) -parseInt(num2))
    })

})

app.post('/multiply', (req,res) => {

    const num1 = req.body.num1;
    const num2 = req.body.num2;

    res.send( {
        'message': "Successfull",
        'result': (parseInt(num1) *parseInt(num2))
    })

    
})


app.post('/divide', (req,res) => {
    
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    res.send( {
        'message': "Successfull",
        'result': (parseInt(num1) / parseInt(num2))
    })

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;