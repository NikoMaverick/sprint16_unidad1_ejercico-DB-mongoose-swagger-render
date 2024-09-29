// Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación

const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
//const { MONGO_URI } = require("./config/keys");
require('dotenv').config();
const { dbConnection } = require('./config/config.js');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index.js')


app.use(express.json());

app.use('/', routes);



dbConnection();

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));