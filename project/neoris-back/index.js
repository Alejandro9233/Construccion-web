// Paquetes necesarios
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Importar rutas para la aplicación web
const routerUsuarios =  require('./routes/unity/usuarios.routes');
const routerUnity = require('./routes/unity/save-data.routes');

// Importar rutas para unity
const routerDashboardAdmin = require('./routes/web/dashboard_admin.routes');
const routerPerfil = require('./routes/web/perfil.routes');
const routerAutenticacion = require('./routes/web/autenticacion.routes');

// Crear servidor
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Usar rutas en la aplicación
app.use(routerUsuarios);
app.use(routerDashboardAdmin);
app.use(routerUnity);
app.use(routerPerfil);
app.use(routerAutenticacion);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

app.get('/', (req, res) => {
    
    res.json({ 
        message: 'Hola Mundo' 
    });
});