// Paquetes necesarios
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Importar rutas
const routerUsuarios =  require('./routes/usuarios.routes');

// Crear servidor
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Usar rutas en la aplicación
app.use(routerUsuarios);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

app.get('/', (req, res) => {
    
    res.json({ message: 'Hola Mundo' });
});