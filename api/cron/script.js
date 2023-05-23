/* import * as dotenv from 'dotenv'
dotenv.config() */
const axios = require('axios/dist/node/axios.cjs');
const { ACCESS_KEY } = process.env

export default function script(req, res) {
    axios.get(`http://localhost:3000/exec?access=${ACCESS_KEY}`).then((result) => {

        console.log(result);
    }).catch((err) => {
        console.log(err.message)
    });
    console.log("hola")
}


