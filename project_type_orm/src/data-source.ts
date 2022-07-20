import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Persona } from './entity/persona';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Naruto2.8",
    database: "type_orm",
    synchronize: true,
    logging: true,
    entities: [Persona],
    migrations: [],
    subscribers: [],
})
