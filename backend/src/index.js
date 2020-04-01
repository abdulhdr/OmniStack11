const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());  /** Formato de recebimento de informação é .json */
app.use(routes);


 /**Métodos HTTP
  * GET - Buscar informação no backend
  * POST - Criar uma informação no backend
  * PUT - Alterar informação no backend
  * DELETE - Deletar informação no backend
  */

  /**Tipos de parametros
   * Query Params - Parametros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params - /users/:id Parametros utilizados para identificar recursos
   * Request Body - Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /** SQL
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where() -> Knex
    */
  
//    /* Rota */
// app.post('/users' /* Recurso */, (request, response) => {
//         const body = request.body;

//         console.log(body);
        
//         return response.json({

//             evento: 'Semana OmniStack',
//             aluno: 'Abdul'
//     });
// });     


app.listen(3333);