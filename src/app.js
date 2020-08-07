import express, {json}  from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// Importing routes
import petRoutes from  './routes/pets.js'


// Initialization
const app = express();

// Middelwares
app.use(morgan('dev'));                                 // middleware para poder ver en consola las peticiones
app.use(json());
app.use(bodyParser.urlencoded({ extended: false }));    // para poder obtener los valores del body
app.use(bodyParser.json());                             // para castearlos como json

// Routes
app.use('/api/pets',petRoutes);                         // La ruta pets


export default app;