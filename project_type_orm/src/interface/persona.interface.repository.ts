export type Query = Record<string, any>;

export type Id = string | number;

export interface DatabaseRepository <T> {
    crear(data:Partial<T>, query?:Query): Promise<T>;
    editar(data:Partial<T>,id:Id, query?:Query): Promise<T>;
    eliminar(id:Id, query?:Query): Promise<T>;
    buscar(id:Id, query?:Query): Promise<T>;
    listar(query?:Query): Promise<T[]>;
}