// Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación

const express = require('express');
const app = express();
//require('dotenv').config();
const PORT = 8080;
const { dbConnection } = require('./config/config.js');
const routes = require('./routes');
const docs = require('./docs/index.js')


app.use(express.json());

app.use('/', routes);


dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));