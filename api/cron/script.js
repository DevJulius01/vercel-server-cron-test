/* import * as dotenv from 'dotenv'
dotenv.config() */
import { get } from 'axios';
const { ACCESS_KEY } = process.env

function script(req, res) {
    get(`http://localhost:3000/exec?access=${ACCESS_KEY}`).then((result) => {

        console.log(result);
    }).catch((err) => {
        console.log("hubo un error", err)
    });
}


