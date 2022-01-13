# Introducción a GraphQL desde las bases hasta crear APIs
+ [URL del curso en Coders Free](https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis)
+ [URL del repositorio en GitHub](https://github.com/petrix12/graphql2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **graphql2022**.
    + **Description**: Proyecto para seguir el curso de "Introducción a GraphQL desde las bases hasta crear APIs", creado por Erick Mines en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/graphql2022.git
    + $ git push -u origin main
yeisy jimenez


## Sección 1: Introducción
### 1. Presentación del curso
+ Contenido: presentación del curso.

### 2. Acerca de las siguientes clases
+ Os escribo esta nota de cara a informaros que si tenéis experiencia con otros cursos de Udemy, no os va a hacer falta ver las siguientes clases hasta la clase 6: "Instalación - Typescript / Ts-Node / Nodemon de manera global"
+ Estos videos tienen el objetivo de explicar los aspectos que son básicos para trabajar en cualquier curso de Udemy, sobre todo pensado en nuevos usuarios a la plataforma.
+ Lo dicho, si tenéis experiencia en esta platforma, podéis pasarlos sin perder nada que os pueda resultar útil (aunque si los véis como repaso, tampoco creo que os perjudique) y si no la tenéis, os recomiendo que le dediquéis un instante a visualizarlos, para tener una idea más clara del funcionamiento y así con ello poder tener una experiencia más agradable mientras aprendéis!

### 3. ¿Cómo funciona un curso en Udemy?
+ **Contenido**: sobre el funcionamiento de este curso en la plataforma de Udemy.

### 4. Acerca de las preguntas y respuestas
+ Acerca de las preguntas y respuestas: Debido a los cambios en el funcionamiento de los cursos gratuitos, no podréis hacer preguntas en este curso. Siento las molestias.

### 5. ¿Cómo realizar reseñas?
+ ¿Cómo realizar reseñas?
+ **Respuesta**: En este artículo, os dan las pautas para que realicéis las reseñas tanto en este curso u otros que curséis conmigo o con otro instructores.
+ Os recomiendo que cuando os pregunten de manera prematura (cuando lleváis jun 5%), seleccionéis para añadir la reseña al final del curso.

### 6. Instalación - Typescript / Ts-Node / Nodemon de manera global
+ https://github.com/graphql-course/informacion-util/blob/master/NPM_DEPENDENCIES.md
1. Dependencias de NPM que se usará en común
    + Typescript
    + Nodemon       ($ npm install -g nodemon)
    + Ts-Node       ($ npm install -g ts-node / $ npm install -g typescript)

### 7. IDE recomendado para desarrollar curso - Visual Studio
+ https://github.com/graphql-course/informacion-util/blob/master/VSC_EXT.md
1. Extensión recomendada de VS Code:
    + **npm**
        + Microsoft
        + npm support for VS Code

### 8. Extensiones Visual Studio Code recomendadas
+ https://github.com/graphql-course/informacion-util/blob/master/EXTENSIONS.md

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Introducción"
+ $ git push -u origin main


## Sección 2: Primeros pasos con GraphQL
### 9. ¿Qué es GraphQL?
+ **Contenido**: sobre GraphQL.

### 10. GraphQL VS REST - Teoría
+ **Contenido**: acerca de API GraphQL vs. API REST.

### 11. GraphQL VS REST - Ejemplo Práctico con la API Swapi
+ https://swapi.dev
+ https://graphql.org/swapi-graphql
+ https://pipedream.com/apps/swapi
+ https://swapi.apis.guru
1. Obtener de **https://swapi.dev**: 
    + Nombre de personaje.
    + Fecha de nacimiento.
    + Lugar de nacimiento.
    + Películas en las que aparece.
2. Construcción de la consulta anterior para el personaje 1 en API GraphQL:
    ```
    {
        person(personID: 1) {
            name
            birthYear
            homeworld {
                name
            },
            filmConnection {
                films {
                    title
                }
            }
        }
    }
    ```
    + 
    + https://swapi.apis.guru/?query=%7B%0A%20%20person(personID%3A%201)%20%7B%0A%20%20%20%20name%0A%20%20%20%20birthYear%0A%20%20%20%20homeworld%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%2C%0A%20%20%20%20filmConnection%20%7B%0A%20%20%20%20%20%20films%20%7B%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=null
3. Respuesta de la consulta anterior:
    ```json
    {
        "data": {
            "person": {
                "name": "Luke Skywalker",
                "birthYear": "19BBY",
                "homeworld": {
                    "name": "Tatooine"
                },
                "filmConnection": {
                    "films": [
                        {
                            "title": "A New Hope"
                        },
                        {
                            "title": "The Empire Strikes Back"
                        },
                        {
                            "title": "Return of the Jedi"
                        },
                        {
                            "title": "Revenge of the Sith"
                        }
                    ]
                }
            }
        }
    }
    ```

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Primeros pasos con GraphQL"
+ $ git push -u origin main


## Sección 3: Conceptos básicos GraphQL - Type System. Construyendo schemas a través de tipos
### 12. Introducción
+ https://www.apollographql.com/docs/apollo-server/schema/schema
  
### 13. Tipos de Escalares - Scalar Types
+ **Contenido**: sobre tipos de escaleres en GraphQL.

### 14. Tipos de Objecto - Object Types
+ **Contenido**: sobre tipos de objetos en GraphQL.

### 15. Tipos de Enum - Enum Types
+ **Contenido**: sobre tipos de enum en GraphQL.

### 16. Modificadores de tipo
+ **Contenido**: sobre modificadores de tipo en GraphQL.

### 17. Interfaces
+ **Contenido**: sobre las interfaces en GraphQL.

### 18. Root Types - Introducción
+ **Contenido**: sobre Root Types en GraphQL.

### 19. Root Type - Query
+ **Contenido**: sobre Root Type - Query en GraphQL.

### 20. Root Type - Mutation
+ **Contenido**: sobre Root Type - Mutation en GraphQL.

### 21. Root Type - Subscription
+ **Contenido**: sobre Root Type - Subscription en GraphQL.

### 22. Tipos de entrada - Input Type
+ **Contenido**: sobre tipos de entradas en GraphQL.

### 23. Comentarios
+ **Contenido**: sobre comentarios en GraphQL.

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Conceptos básicos GraphQL - Type System. Construyendo schemas a través de tipos"
+ $ git push -u origin main


## Sección 4: Trabajando en la Interfaz GraphQL Playground - Un GraphiQL mejorado
### 24. Introducción a la sección - ¿Qué vamos a aprender?
+ **Contenido**: introducción a la sección.

### 25. Interfaz GrapiQL - Nociones básicas
+ https://swapi.apis.guru

### 26. Interfaz Apollo Server - Nociones básicas
1. Ir a https://f1-graphql.herokuapp.com
2. Realizar consulta:
    ```js
    {
        seasonsList {
            year
            url
            urlMobile
        }
    }
    ```

### 27. API que se usará para trabajar en esta sección
+ API que se usará para trabajar en esta sección:
    + https://breaking-bad-voting.herokuapp.com

### 28. Queries
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta 1:
        ```js
        {
            characters {
                id
            }
        }
        ```
    + Consulta 2:
        ```js
        {
            characters {
                id
                name
                actor
            }
        }
        ```

### 29. Queries con argumentos
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta 1:
        ```js
        {
            character(id: "1") {
                id
                name
                total_episodes
            }
        }
        ```
    + Consulta 2:
        ```js
        {
            character(id: "1") {
                id
                photo
                name
                total_episodes
            }
            characters {
                id
                name
                description
                total_episodes
            }
        }
        ```

### 30. Merge de la misma instancia de objeto
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta:
        ```js
        {
            character(id: "1") {
                id
                name
            }
            character(id: "1") {
                description
            }
            character(id: "1") {
                description
                photo
            }
        }
        ```

### 31. Alias
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta:
        ```js
        {
            walter: character(id: "1") {
                id
                name
                description
                photo
            }
            jesse: character(id: "2") {
                id
                name
                description
                photo
            }
        }
        ```

### 32. Fragments
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta:
        ```js
        {
            walter: character(id: "1") {
                ...personajesFragment
            }
            jesse: character(id: "2") {
                ...personajesFragment
            }
        }

        fragment personajesFragment on Character {
            id
            name
            actor
            description
            photo
        }
        ```

### 33. Query Variables
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta:
        ```js
        query listaPersonajes($walter: ID!, $jesse: ID!, $hank: ID!) {
            walter: character(id: $walter) {
                ...personajesFragment
            }
            jesse: character(id: $jesse) {
                ...personajesFragment
            }
            hank: character(id: $hank) {
                ...personajesFragment
            }
        }

        fragment personajesFragment on Character {
            id
            name
            photo
            url
        }
        ```
    + Query variables:
        ```json
        {
            "walter": 1,
            "jesse": 2,
            "hank": 4
        }
        ```

### 34. Mutations
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta:
        ```js
        mutation addVote($character: ID!) {
            addVote(character: $character) {
                id
                character
                createdAt
            }
        }
        ```
    + Query variables:
        ```json
        {
            "character": "2"
        }
        ```

### 35. Directivas Include / Skip
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta:
        ```js
        query getCharacters($mostrarActor: Boolean!, $esconderNombre: Boolean!) {
            characters {
                id
                name @skip(if: $esconderNombre)
                actor @include(if: $mostrarActor)
            }
        }
        ```
    + Query variables:
        ```json
        {
            "mostrarActor": true,
            "esconderNombre": false
        }
        ```

### 36. Sobre el siguiente video - Nota informativa
+ Sobre el siguiente video - Nota informativa:
    + Debido a que hay un bug en la librería del apollo server express cuando usamos el Playground en producción, no podréis probar lo del siguiente video. Simplemente visualizarlo y pasar a la siguiente sección.
    + Tranquilos/as, que vamos a trabajar con esto más adelante, cuando hagamos la API de Breaking Bad para crear el sistema de votaciones. Ahí iremos haciendo paso a paso, probándolo en local ejecutando desde el playground y luego cuando lo pasemos a producción podremos comprobar que funciona correctamente haciendo las peticiones desde la app Angular.

### 37. Subscriptions
1. Realizar consultas de prueba en https://breaking-bad-voting.herokuapp.com:
    + Consulta:
        ```js
        subscription {
            newVote {
                id
                name
                votes
            }
        }
        ```

### Cuestionario 1: Repaso "Trabajando en la interfaz de GraphQL"
1. ¿Qué operaciones se pueden ejecutar en el servidor de GraphQL?
2. ¿Qué mejoras e implementaciones principales tiene el playground de Apollo Server que no tiene interfaz GraphiQL desarrollada por Facebook?
3. ¿Cual es la respuesta de esta consulta? En el caso de que nos de error, ¿Cómo lo podemos solucionar?
    ```js
    {
        character(id: "1") {
            name
            total_episodes
        }
        character(id: "2") {
            name        
            total_episodes
        }
    }
    ```
4. ¿Cual sería la respuesta de esta query?
    ```js
    {
        character(id: "1") {
            name
            total_episodes
        }
        character(id: "1") {
            total_episodes
        }
    }
    ```
5. Teniendo la siguiente consulta
    ```js
    query listaPersonajes($skip: Boolean!) {
        characters {
            id
            name
            actor @skip(if: $skip)
            description @skip(if: $skip)
            total_episodes @skip(if: $skip)
            photo @skip(if: $skip)
            url @skip(if: $skip)
            votes
        }
    }
    ```
    ¿Qué se obtendría si la Query variables fuese { "skip": true } ?

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Trabajando en la Interfaz GraphQL Playground - Un GraphiQL mejorado"
+ $ git push -u origin main


## Sección 5: (Opcional) Prácticas recomendadas para repasar el trabajo con el Playground
### 38. Objetivo de esta sección
+ Esta sección se ha creado especificamente para que los/as alumnos/as del curso puedan practicar lo aprendido en el apartado del playground con Apollo Server con diferentes APIs que podremos encontrar en la red. Así conseguiremos coger soltura con la herramienta de pruebas de Apollo Server y a su vez, veremos como están construidas las APIs internamente, pudiendo acceder a los repositorios de manera individual.
+ Podéis aportar APIs que encontréis y no veáis en la lista que recomiendo.
+ Las APIs las recomiendo en base al directorio de APIs públicas que encontraremos en la siguiente clase.

### 39. Directorio con diferentes APIs públicas en GraphQL
+ https://github.com/APIs-guru/graphql-apis

### 40. APIs creadas por mi
+ https://github.com/graphql-course/informacion-util/blob/master/MY-PUBLIC-APIS.md

### 41. Listado de Prácticas
+ https://github.com/graphql-course/informacion-util/blob/master/PRACTICAS-PLAYGROUND.md

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Prácticas recomendadas para repasar el trabajo con el Playground"
+ $ git push -u origin main


## Sección 6: Introducciónal desarrollo de una API GraphQL - Saludos
### 42. Introducción - ¿Qué es lo que vamos a aprender en esta sección?
+ **Contenido**: sobre lo que haremos en esta sección.

### 43. Crear / Configurar los ficheros necesarios
1. Crear carpeta **01hola** para un nuevo proyecto de GraphQL.
2. Ubicados en la raíz del proyecto **01hola** ejecutar:
    + $ npm init
        + package name: (01hola): hola-mundo
        + version: (1.0.0): [ENTER]
        + description: Hola Mundo en GraphQL.
        + entry point: (index.js): build/server.js
        + test command: [ENTER]
        + git repository: [ENTER]
        + keywords: graphql, graphql curso, hola mundo
        + author: Pedro Bazó <bazo.pedro@gmail.com> (https://cvpetrix.herokuapp.com)
        + license: (ISC): MIT
    + Is this OK? (yes): y
3. Modificar 01hola\package.json:
    ```json
    {
        "name": "hola-mundo",
        "version": "1.0.0",
        "description": "Hola Mundo en GraphQL.",
        "main": "build/server.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [
            "graphql",
            "graphql-curso",
            "hola-mundo"
        ],
        "author": "Pedro Bazó <bazo.pedro@gmail.com> (https://cvpetrix.herokuapp.com)",
        "license": "MIT"
    }
    ```
4. Ejecutar:
    + $ npm install typescript
    + $ npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6

### 44. Instalación de las dependencias necesarias
1. Lista de dependencias requeridas del proyecto **01hola**:
    + express 
    + express-graphql 
    + graphql 
    + graphql-import-node 
    + compression 
    + cors 
    + typescript 
    + graphql-tools 
    + graphql-playground-middleware-express 
2. Instalar dependencias de producción:
    + $ npm install express express-graphql graphql ncp http graphql-import-node compression cors
    + $ npm install typescript graphql-tools graphql-playground-middleware-express
3. Instalar dependencias de desarrollo:
    + $ npm install @types/compression @types/express @types/cors @types/express-graphql -D
    + $ npm install @types/node @types/graphql -D

### 45. Hola mundo y configuración de los scripts del package.json. Ejecutar servidor
1. Modificar **01hola\package.json**:
    ```json
    {
        ≡
        "scripts": {
            "test": "node build/server.js",
            "build": "tsc -p . && ncp src/schema build/schema",
            "start:dev": "npm run build:dev",
            "build:dev": "nodemon \"src/server.ts\" --exec \"ts-node\" src/server.ts -e ts,graphql"
        },
        ≡
    }
    ```
2. Crear **01hola\src\server.ts**:
    ```ts
    console.log('HS++ en GraphQL!!!')
    ```
3. Ejecutar proyecto en modo de desarrollo:
    + $ npm run start:dev

### 46. Server - Inicializar el servidor express con los ajustes por defecto sin graphql
1. Configurar servidor **01hola\src\server.ts**:
    ```ts
    import express from 'express';
    import compression from 'compression';
    import cors from 'cors';

    const app = express();

    app.use(cors());

    app.use(compression());

    app.use('/', (re, res) => {
        res.send('HS++ GraphQL')
    });

    const PORT = 5300;

    app.listen(
        { port: PORT },
        () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}`)
    );
    ```

### 47. Server - Pasar de Node Express a GraphQL y probarlo en el navegador
1. Ejecutar:
    + $ npm install graphql-tools@4.x
    + $ npm install @graphql-tools/utils
2. Modificar archivo de configuración **01hola\src\server.ts**:
    ```ts
    import express from 'express';
    import compression from 'compression';
    import cors from 'cors';
    import { IResolvers, makeExecutableSchema } from 'graphql-tools';
    import { graphqlHTTP } from 'express-graphql';

    const app = express();

    app.use(cors());

    app.use(compression());

    const typeDefs = `
        type Query {
            hola: String!
            holaConNombre(nombre: String!): String!
            holaAlCursoGraphQL: String!
        }
    `;

    const resolvers: IResolvers = {
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

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    app.use('/', graphqlHTTP({
        schema,
        graphiql: true
    }));

    const PORT = 5300;

    app.listen(
        { port: PORT },
        () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
    );
    ```
3. Ir a la interface de GraphiQL en http://localhost:5300/graphql.
4. Probar la interface con el siguinete código:
    ```js
    {
        hola
        petrix: holaConNombre(nombre: "Petrix")
        graphql: holaConNombre(nombre: "HS++ GraphQL")
        holaAlCursoGraphQL
    }
    ```

### 48. Server - Refactorizar código de API GraphQL
1. Crear **01hola\src\schema\index.ts**:
    ```ts
    import { GraphQLSchema } from "graphql";
    import 'graphql-import-node';
    import typeDefs from './schema.graphql';
    import resolvers from '../resolvers/resolversMaps';
    import { makeExecutableSchema } from 'graphql-tools';

    const schema: GraphQLSchema = makeExecutableSchema({
        typeDefs,
        resolvers
    });

    export default schema;
    ```
2. Crear **01hola\src\schema\schema.graphql**:
    ```graphql
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCursoGraphQL: String!
    }
    ```
3. Crear **01hola\src\resolvers\resolversMaps.ts**:
    ```ts
    import { IResolvers } from 'graphql-tools';
    import query from './query'

    const resolvers: IResolvers = {
        ...query
    }

    export default resolvers;
    ```
4. Crear **01hola\src\resolvers\query.ts**:
    ```ts
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
    ```
5. Modificar 01hola\src\server.ts:
    ```ts
    import express from 'express';
    import compression from 'compression';
    import cors from 'cors';
    import { graphqlHTTP } from 'express-graphql';
    import schema from './schema';

    const app = express();

    /* app.use('*', cors()); */
    app.use(cors());

    app.use(compression());

    app.use('/', graphqlHTTP({
        schema,
        graphiql: true
    }));

    const PORT = 5300;

    app.listen(
        { port: PORT },
        () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
    );
    ```

### 49. Configurar la API de GraphQL con Apollo Server Express y probar como en GraphiQL
1. Para la ejecución del servidor del proyecto **01hola**.
2. Ejecutar en la raíz del proyecto **01hola**:
    + $ npm unistall express-graphql
    + $ npm install apollo-server-express
3. Modificar **01hola\src\server.ts**:
    ```ts
    import express from 'express';
    import compression from 'compression';
    import cors from 'cors';
    import schema from './schema';
    import { ApolloServer } from 'apollo-server-express';
    import { createServer } from 'http';

    const app = express();

    app.use(cors());

    app.use(compression());

    const server = new ApolloServer({
        schema,
        introspection: true
    });

    server.applyMiddleware({ app });

    const PORT = 5300;

    const httpServer = createServer(app);

    httpServer.listen(
        { port: PORT },
        () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
    );
    ```
4. Ejecutar servidor:
    + $ npm run build:dev

### Subiendo cambios GitHub:
+ $ git add .
+ $ git commit -m "Introducciónal desarrollo de una API GraphQL - Saludos"
+ $ git push -u origin main


## Sección 7: Academia Online con GraphQL
### 50. Introducción - ¿Qué es lo que vamos a aprender?







    ≡
    ```
    ```




### 51. Creación / Configurar los ficheros necesarios
5 min
### 52. Instalaciones de las dependencias necesarias
3 min
### 53. Descargar y añadir los ficheros JSON con la información de cursos y alumnos
4 min
### 54. Creación del servidor Node Express con los ajustes básicos y visualizar
9 min
### 55. Especificación de los tipos de definiciones en el Schema
8 min
### 56. Añadir los "resolvers" necesarios y especificar el primer resolver
8 min
### 57. Configurar Apollo Server y probar con la query definida de los estudiantes
7 min
### 58. Resolvers - Queries - Lista de estudiantes
11 min
### 59. Resolvers - Queries - Información del estudiante seleccionado
8 min
### 60. Resolvers - Queries - Lista de cursos
3 min
### 61. Resolvers - Queries - Información del curso seleccionado
7 min
### 62. Resolvers - Type - Lista de estudiantes de los cursos
8 min
### 63. Schema y Resolvers - Mutation - Primeros pasos antes de empezar
4 min
### 64. Schema - Definición del input donde pasamos la información de los cursos
3 min
### 65. Resolvers - Mutation - Añadir un curso
12 min
### 66. Resolvers - Mutation - Añadir un curso - Validar para evitar cursos duplicados
5 min
### 67. Resolvers - Mutation - Modificar un curso
10 min
### 68. Resolvers - Mutation - Eliminar un curso
7 min
### 69. Código fuente final
1 min
### 70. ¿Qué es lo que vamos a aprender en esta sección?
2 min
### 71. Instalación de Postman
4 min
### 72. Query - Lista de alumnos
4 min
### 73. Query - Alumno seleccionado
3 min
### 74. Query - Alumno seleccionado usando Query Variables
2 min
### 75. Query - Alumno seleccionado usando Query Variables y Fragments
5 min
### 76. Query - Lista de cursos
4 min
### 77. Query - Curso seleccionado
1 min
### 78. Query - Curso seleccionado usando Query Variables
2 min
### 79. Query - Curso seleccionado usando Query Variables y Fragments
4 min
### 80. Query - Curso seleccionado con directiva include / exclude
4 min
### 81. Mutation - Insertar Curso
7 min
### 82. Mutation - Actualizar Curso
3 min
### 83. Mutation - Eliminar Curso
3 min
### 84. Resultado de la colección
1 min
### 85. Introducción - ¿Qué es lo que vamos a aprender en esta nueva sección?
2 min
### 86. Crear el proyecto desde el generador y primeras configuraciones e instalaciones
7 min
### 87. API Ergast F1 - Introducción a la API para empezar a trabajar con ella
1 min
### 88. RestDataSource - Añadir la fuente de datos principal de la API y la de carreras
6 min
### 89. Definición del schema con la primera definición y tipo de objeto season
4 min
### 90. Lista de temporadas de toda la historia de la Formula 1
7 min
### 91. Solucionando el problema de las propiedades nulas con type
6 min
### 92. Lista de carreras de una temporada - Preparativos
3 min
### 93. Lista de carreras de una temporada- Definiendo el schema
5 min
### 94. Lista de carreras de un año seleccionado
9 min
### 95. Solucionando el problema de las propiedades nulas con type
8 min
### 96. Funciones auxiliares para comprobar el año y el número de carrera
5 min
### 97. Información de una carrera de un año y número de carrera / ronda
7 min
### 98. Ampliando la información - Obtener la URL de la carrera y circuito responsive
4 min
### 99. Rest Data Source - Crear fuente de datos de los pilotos - Preparativos
2 min
### 100. Lista de pilotos - Definiendo el schema inicial
3 min
### 101. Lista de pilotos de toda la historia - Todos
9 min
### 102. Lista de pilotos de toda la historia - Por paginación
10 min
### 103. Lista de pilotos de una temporada completa
7 min
### 104. Lista de pilotos - Temporada y carrera concreta
8 min
### 105. Información del piloto seleccionado por ID
8 min
### 106. Comentar nuestra API para tenerla más completa
9 min
### 107. [PRÁCTICA] Actividades propuestas de repaso
1 min
### 108. Clasificación general de pilotos - Por temporada . Definición del schema
5 min
### 109. Clasificación general de pilotos - Por temporada
10 min
### 110. Rest Data Source - Crear fuente de datos de los circuitos - Preparativos
2 min
### 111. Lista de circuitos de toda la historia - Todos y por paginación
9 min
### 112. Información de un circuito seleccionado
7 min
### 113. Consultas utilizadas en la sección para probar todo lo trabajado en la sección
1 min
### 114. Código fuente final
1 min
### 115. Introducción
2 min
### 116. Iniciar en Zeit Now. Crear cuenta e iniciar sesión via web y via terminal CLI
12 min
### 117. Configuración ZEIT - Preparar el fichero now.json
11 min
### 118. Subir aplicación y probarla
9 min
### 119. [PRÁCTICA 1] Publicar API Academia Online
1 min
### 120. [RESULTADO] Publicar API Academia Online
11 min
### 121. [PRÁCTICA 2] Publicar API F1
1 min
### 122. [RESULTADO] Publicar API F1
9 min
### 123. ¿Qué es lo que vamos a aprender en esta sección?
2 min
### 124. Introducción breve a Hasura
2 min
### 125. Desplegando nuestra aplicación en Heroku y primeras nociones básicas
6 min
### 126. Añadiendo seguridad al panel de Hasura GraphQL con contraseña
4 min
### 127. Profundizando en el panel principal de nuestra aplicación de Hasura GraphQL
4 min
### 128. Añadir información en la Base de Datos desde un Script SQL
10 min
### 129. Crear tablas y añadir relaciones en el panel - Usuarios y películas favoritas
8 min
### 130. Repaso detallado de GraphiQL Playground
6 min
### 131. GraphiQL Playground - Queries
9 min
### 132. GraphiQL Playground - Mutation
7 min
### 133. GraphiQL Playground - Subscription
6 min
### 134. Clase Extra
1 min
