const sql = require('../db/db');

// get usuarios
async function getUsuarios(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('SELECT * FROM Usuarios');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching usuarios:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Obtener leaderboard de usuarios
async function getLeaderboard(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('EXEC datos_leaderboard');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// 
module.exports = { getUsuarios, getLeaderboard };