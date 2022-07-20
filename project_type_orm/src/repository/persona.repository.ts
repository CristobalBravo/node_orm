import { DatabaseRepository, Id, Query } from '../interface/persona.interface.repository';
import { AppDataSource } from '../data-source';
import { Persona } from '../entity/persona';
import {NotFound} from 'http-errors'



export class PersonaRepository implements DatabaseRepository<Persona>{


    async crear(data: Partial<Persona>, query?: Query): Promise<Persona> {
        const personaRepository = AppDataSource.getRepository(Persona);
        const persona = personaRepository.create(data);
        await personaRepository.save(persona);
        return persona;
    }


    async editar(data: Partial<Persona>, id: Id, query?: Query): Promise<Persona> {
        const personaRepository = AppDataSource.getRepository(Persona);
        await personaRepository.update(id,data);
        return this.buscar(id);
    }
    async eliminar(id: Id, query?: Query): Promise<Persona> {
        const personaRepository = AppDataSource.getRepository(Persona);
        const persona =  await personaRepository.findOneBy({id:id as any});
        if(!persona){
            throw new NotFound("no existe usuario")
        }
        personaRepository.delete(id);
        return persona;
    }


    async buscar(id: Id, query?: Query): Promise<Persona> {
        const personaRepository = AppDataSource.getRepository(Persona);
        const persona =  await personaRepository.findOneBy({id:id as any});
        if(!persona){
            throw new NotFound("no existe usuario")
        }
        return persona;
    }


    async listar(query?: Query): Promise<Persona[]> {

        const personaRepository = AppDataSource.getRepository(Persona);
        return personaRepository.find();
    }

}