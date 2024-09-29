// Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación

const basicInfo = require('./basicInfo');
const components = require('./components');

module.exports = {
    ...basicInfo,
    ...components,
    
};