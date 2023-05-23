/* import * as dotenv from 'dotenv'
dotenv.config() */
const { ACCESS_KEY } = process.env

export default function script() {
    try {
        axios.get(`http://localhost:3000/exec?access=${ACCESS_KEY}`).then((result) => {

            console.log(result);
        }).catch((err) => {
            console.log(err)
        });
    } catch (error) {
        console.error('Error al hacer la llamada:', error);
    }
}

