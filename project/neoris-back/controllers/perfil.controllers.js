const db = require('../db/db');
const mssql = require('mssql');

// Obtener promedio de avance en todos los cursos
async function getAvance(req, res) {
    try {
        const id_user = req.params.id_user;
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('id_user', mssql.Int, id_user)
        .query('EXEC promedio_avance @id_usuario = @id_user;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching avance:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        db.closeConnection();
    }
}

// obtener el listado de cursos para mostrar en la vista de perfil
async function getListadoCursosWeb(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool.request().query('EXEC listado_cursos_web;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching listado cursos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        db.closeConnection();
    }
}

module.exports = { getAvance, getListadoCursosWeb };