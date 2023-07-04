const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(!validateUsername(username)){
        return res.status(400).json({error: 'Invalid Username'})
    }
    if(!validatePassword(password)){
        return res.status(400).json({error: 'Invalid Password'})
    }
    return res.json({message: 'Login Successfull'})

})

function validateUsername(username){
    const alphaNumeric =  /^[a-zA-Z0-9]+$/
    const length = username.length
    return alphaNumeric.test(username) && length > 6 && length <=12
}

function validatePassword(password){
    const length = password.length
    return length > 6
}

const port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})