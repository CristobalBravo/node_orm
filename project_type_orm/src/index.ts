import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import PersonaRoutes from './routes/persona.route'
const express = require('express');

const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', PersonaRoutes);

AppDataSource.initialize().then(async () => {

    console.log("Conectado con la base de datos")

}).catch(error => console.log(error))

app.listen(3000, ()=>{console.log('server iniciado en el puerto 3000')})


