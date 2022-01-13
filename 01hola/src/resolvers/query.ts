import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query : {
        hola(): string{
            return 'HSoluciones++';
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola Loco ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo en el curso de GraphQL';
        }
    }
}

export default query;