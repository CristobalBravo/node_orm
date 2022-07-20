import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name:"persona"})
export class Persona {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name:"nombre"})
    nombre: string

    @Column({name:"apellido"})
    apellido: string

    @Column({name: "rut"})
    rut: string

    @Column({name: "correo"})
    correo: string

}