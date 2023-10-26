GET /api/posts/

- Recupera todos los posts de blog

GET POST /api/posts

- Recibe en el body de la petición los datos de un nuevo alumno para insertarlo en la BD

GET PUT DELETE /api/posts/:idpost

- Borra el posts que coincida con el ID recibido en la URL

GET POST api/autores
GET PUT DELETE api/autores/:idautores

 Se debe definir una url que nos permita recuperar los diferentes posts escritos por un autor en concreto.

GET api/posts/autor/:idautor
