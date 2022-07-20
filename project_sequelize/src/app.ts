import { json, urlencoded } from 'body-parser';
import  * as express from 'express';
import { conection } from './config/db';
import PersonaRouter from './routes/persona.routes'

const app = express();

app.use(json());
app.use(urlencoded({extended:true}));

app.use('/api', PersonaRouter);

conection.sync().then(()=>{
    console.log("conectado a db")
}).catch((error)=>{
    console.log("error en la conexion ", error)
})

app.listen(3000,()=>{
    console.log('servidor sequelize inicializado')
})