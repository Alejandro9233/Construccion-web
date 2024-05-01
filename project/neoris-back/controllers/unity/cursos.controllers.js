const db = require('../../db/db');
const mssql = require('mssql');

// Conseguir los 5 cursos con más avance del usuario
async function getCursos(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('id_user', mssql.Int, req.params.id_user)
        .query('EXEC listado_cursos_unity @id_usuario = @id_user;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error getting cursos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

// Actualizar estrellas
async function actualizarEstrellasReclamadas(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('id_user', mssql.Int, req.body.id_user)
        .input('course_name', mssql.NVarChar, req.body.course_name)
        .query('EXEC UpdateEstrellasReclamadas @UserID = @id_user, @CourseName = @course_name;');
        res.json({
            "message": "Estrellas reclamdas actualizadas",
            "result": result
        });
    } catch (error) {
        console.error('Error actualizando estrellas reclamadas:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}


module.exports = { getCursos, actualizarEstrellasReclamadas };