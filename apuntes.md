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


### 12. Introducción
9 min
### 13. Tipos de Escalares - Scalar Types
4 min
### 14. Tipos de Objecto - Object Types
3 min
### 15. Tipos de Enum - Enum Types
2 min
### 16. Modificadores de tipo
6 min
### 17. Interfaces
2 min
### 18. Root Types - Introducción
3 min
### 19. Root Type - Query
3 min
### 20. Root Type - Mutation
3 min
### 21. Root Type - Subscription
3 min
### 22. Tipos de entrada - Input Type
3 min
### 23. Comentarios
3 min
### 24. Introducción a la sección - ¿Qué vamos a aprender?
2 min
### 25. Interfaz GrapiQL - Nociones básicas
4 min
### 26. Interfaz Apollo Server - Nociones básicas
4 min
### 27. API que se usará para trabajar en esta sección
1 min
### 28. Queries
3 min
### 29. Queries con argumentos
3 min
### 30. Merge de la misma instancia de objeto
3 min
### 31. Alias
3 min
### 32. Fragments
4 min
### 33. Query Variables
5 min
### 34. Mutations
4 min
### 35. Directivas Include / Skip
5 min
### 36. Sobre el siguiente video - Nota informativa
1 min
### 37. Subscriptions
4 min
Cuestionario 1: Repaso "Trabajando en la interfaz de GraphQL"
### 38. Objetivo de esta sección
1 min
### 39. Directorio con diferentes APIs públicas en GraphQL
1 min
### 40. APIs creadas por mi
1 min
### 41. Listado de Prácticas
1 min
### 42. Introducción - ¿Qué es lo que vamos a aprender en esta sección?
2 min
### 43. Crear / Configurar los ficheros necesarios
6 min
### 44. Instalación de las dependencias necesarias
3 min
### 45. Hola mundo y configuración de los scripts del package.json. Ejecutar servidor
5 min
### 46. Server - Inicializar el servidor express con los ajustes por defecto sin graphql
4 min
### 47. Server - Pasar de Node Express a GraphQL y probarlo en el navegador
11 min
### 48. Server - Refactorizar código de API GraphQL
8 min
### 49. Configurar la API de GraphQL con Apollo Server Express y probar como en GraphiQL
5 min
### 50. Introducción - ¿Qué es lo que vamos a aprender?
2 min
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
