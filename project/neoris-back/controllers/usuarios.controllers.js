const sql = require('../db/db');

// Obtener leaderboard de usuarios
/* Arreglo de objetos en el siguiente formato:
{
    "nombre_usuario": "johndoe",
    "neo_coins": 0,
    "neo_stars": 0,
    "puntuacion": 0
}
*/
async function getLeaderboard(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('EXEC datos_leaderboard;');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getPrueba(req, res) {
    try {
        const pool = await sql.getConnection();
        const result = await pool.request().query('SELECT 1;');
        res.json(result.recordset);
        sql.closeConnection();
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

// 
module.exports = {getLeaderboard, getPrueba};