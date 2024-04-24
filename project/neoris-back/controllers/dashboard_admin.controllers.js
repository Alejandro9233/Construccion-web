const sql = require('../db/db');

// get conexiones por fecha
async function getConexionesPorFecha(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('EXEC conexiones_por_fecha;');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching conexiones por fecha:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// get cursos populares
async function getCursosPopulares(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('EXEC cursos_populares;');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching cursos populares:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// get horas de juego promedio por fecha
async function getHorasJuegoPromedioPorFecha(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('EXEC horas_juego_por_fecha;');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching horas de juego promedio por fecha:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// get promedio total progreso
async function getPromedioTotalProgreso(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('EXEC promedio_total_progreso;');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching promedio total progreso:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// get usuarios no admins
async function getUsuariosNoAdmins(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('EXEC usuarios_no_admins;');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching usuarios no admins:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {getConexionesPorFecha, getCursosPopulares, getHorasJuegoPromedioPorFecha, getPromedioTotalProgreso, getUsuariosNoAdmins}