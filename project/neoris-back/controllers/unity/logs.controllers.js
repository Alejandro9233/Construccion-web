const db = require('../../db/db');
const mssql = require('mssql');

// hace el post a la tabla de logs con el usuario y el tipo de conexion que se hizo en la fecha
async function loggearConexion(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool.request()
        .input('id_user', mssql.Int, req.params.id_user)
        .input('connection_type', mssql.NVarChar, req.params.connection_type)
        .query('EXEC log_conexion @id_usuario = @id_user, @tipo_conexion = @connection_type;');
        res.json({
            "id_usuario": req.params.id_user,
            "tipo_conexion": req.params.connection_type,
            "result": result
        });
    } catch (error) {
        console.error('Error inserting log to game:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

module.exports = { loggearConexion };