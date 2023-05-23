/* import * as dotenv from 'dotenv'
dotenv.config() */
const { ACCESS_KEY } = process.env

export default async function script() {
    try {
        const response = await axios.get(`http://localhost:3000/exec?access=${ACCESS_KEY}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error al hacer la llamada:', error);
    }
}


