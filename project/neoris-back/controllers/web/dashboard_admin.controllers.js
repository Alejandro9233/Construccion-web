const db = require('../../db/db');

// get conexiones por fecha
async function getConexionesPorFecha(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool.request().query('EXEC conexiones_por_fecha;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching conexiones por fecha:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

// get cursos populares
async function getCursosPopulares(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool.request().query('EXEC cursos_populares;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching cursos populares:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

// get minutos de juego promedio por fecha
async function getMinutosJuegoPromedioPorFecha(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool.request().query('EXEC minutos_juego_por_fecha;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching minutos de juego promedio por fecha:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

// get promedio total progreso
async function getPromedioTotalProgreso(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool.request().query('EXEC promedio_total_progreso;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching promedio total progreso:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

// get usuarios no admins
async function getUsuariosNoAdmins(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool.request().query('EXEC usuarios_no_admins;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching usuarios no admins:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

module.exports = {getConexionesPorFecha, getCursosPopulares, getMinutosJuegoPromedioPorFecha, getPromedioTotalProgreso, getUsuariosNoAdmins}