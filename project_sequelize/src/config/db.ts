import { Sequelize } from 'sequelize-typescript';
import { Persona } from '../models/persona';

export const conection = new Sequelize({
    host: 'localhost',
    username: 'root',
    database:'type_orm',
    dialect: 'mysql',
    password: 'Naruto2.8',
    models:[Persona],
    //Evita mostrar mensaje en consola
    logging:true
  });
