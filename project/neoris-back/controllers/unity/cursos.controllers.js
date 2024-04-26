const db = require('../../db/db');
const mssql = require('mssql');

// Conseguir los 5 cursos con más avance del usuario
async function getCursos(req, res) {
    try {
        const id_user = req.params.id_user;
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('id_user', mssql.Int, id_user)
        .query('EXEC listado_cursos_unity @id_usuario = @id_user;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error getting cursos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        db.closeConnection();
    }
}

module.exports = { getCursos };