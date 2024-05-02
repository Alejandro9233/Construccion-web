// Paquetes necesarios
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Importar rutas para unity
const routerUsuarios =  require('./routes/unity/usuarios.routes');
const routerUnity = require('./routes/unity/save-data.routes');
const rotuerCursos = require('./routes/unity/cursos.routes');

// Importar rutas para web
const routerDashboardAdmin = require('./routes/web/dashboard_admin.routes');
const routerPerfil = require('./routes/web/perfil.routes');
const routerAutenticacion = require('./routes/web/autenticacion.routes');
const routerCursosUsuario = require('./routes/web/cursos_usuario.routes');
const routerLogs = require('./routes/unity/logs.routes')
const routerUsuariosAdmin = require('./routes/web/usuarios_admin.routes')

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
app.use(rotuerCursos);
app.use(routerCursosUsuario);
app.use(routerLogs);
app.use(routerUsuariosAdmin);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

app.get('/', (req, res) => {
    
    res.json({ 
        message: 'Hola Mundo' 
    });
});