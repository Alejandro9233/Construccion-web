const router = require('express').Router();
const usuariosAdminController = require('../../controllers/web/usuarios_admin.controllers');

// Se crea un nuevo usuario en la base de datos por un administrador
router.post('/creacion-usuario', usuariosAdminController.crearUsuario);

// Se actualizan los datos de un usuario existente
router.put('/modificar-usuarios', usuariosAdminController.modificarUsuario);

// Se marca a un usuario como eliminado
router.put('/eliminar-usuario/:id_user', usuariosAdminController.eliminarUsuario);

// Listar todos los usuarios no eliminados para mostrarlos en el dashboard
router.get('/listar-usuarios', usuariosAdminController.listarUsuarios);

module.exports = router;