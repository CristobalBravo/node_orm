import { Request,Response,NextFunction } from 'express';
import { Persona } from '../entity/persona';
import { DatabaseRepository } from '../interface/persona.interface.repository';

export class PersonaController {

    constructor(private repositorio: DatabaseRepository<Persona>){

    }

    async listar(req:Request , res:Response, next:NextFunction): Promise<void>{
        try{
            let personas = await this.repositorio.listar();
            console.log(personas);
            res.status(200).json({
                message : 'listado de personas',
                personas
            })
        }catch(e){
            console.log(e);
            res.status(400).json({
                message : 'error',
            })
        }
    }

    async crear( req:Request , res:Response, next:NextFunction): Promise<void>{
        try{
            let persona = new Persona();
            console.log(req.body)
            persona.nombre =  req.body.nombre;
            persona.apellido =  req.body.apellido;
            persona.correo =  req.body.nombre;
            persona.rut =  req.body.rut;
            let newPersona = await this.repositorio.crear(persona);
            res.status(200).json({
                message : 'Persona creada con éxito',
                persona: newPersona
            })
        }catch(e){
            console.log(e);
            res.status(400).json({
                message : 'error',
            })
        }
    }

    async editar(req:Request , res:Response, next:NextFunction): Promise<void>{
        try{
            let persona = new Persona();
            persona.id= +req.params.id;
            persona.nombre =  req.body.nombre;
            persona.apellido =  req.body.apellido;
            persona.correo =  req.body.correo;
            persona.rut =  req.body.rut;
            console.log(persona)
            let personaActualizada = await this.repositorio.editar(persona, persona.id);
            res.status(200).json({
                message : 'Persona editada con éxito',
                persona: personaActualizada
            })
        }catch(e){
            console.log(e);
            res.status(400).json({
                message : 'error',
            })
        }
    }

    async eliminar(req:Request , res:Response, next:NextFunction): Promise<void>{
        try{
            let personaEliminada = await this.repositorio.eliminar(req.params.id);
            res.status(200).json({
                message : 'Persona eliminada con exito',
                persona: personaEliminada
            })
        }catch(e){
            console.log(e);
            res.status(400).json({
                message : 'error',
            })
        }
    }

    async buscar(req:Request , res:Response, next:NextFunction): Promise<void>{
        try{
            let personaBuscada = await this.repositorio.buscar(req.params.id);
            res.status(200).json({
                message : 'Persona encontrada con éxito',
                persona: personaBuscada
            })
        }catch(e){
            console.log(e);
            res.status(400).json({
                message : 'error',
            })
        }
    }
}