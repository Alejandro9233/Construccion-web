const db = require('../../db/db');
const mssql = require('mssql');

// Actualizar datos de guardado
async function updateSaveData(req, res) {
    try {
        const {jsonSaveData, coins, stars, id_user} = req.body;
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('jsonSaveData', mssql.NVarChar, jsonSaveData)
        .input('id_user', mssql.Int, id_user)
        .input('coins', mssql.Int, coins)
        .input('stars', mssql.Int, stars)
        .query('EXEC actualizar_datos_juego @id_usuario = @id_user, @neo_stars = @stars, @neo_coins = @coins, @datos_guardado = @jsonSaveData;');
        res.json({
            "id_user": id_user,
            "coins": coins,
            "stars": stars,
            "jsonSaveData": jsonSaveData,
            "result": result
        });
    } catch (error) {
        console.error('Error put save data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

async function getSaveData(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('id_user', mssql.Int, req.params.id_user)
        .query('EXEC conseguir_datos_juego @id_usuario = @id_user;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error getting save data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

module.exports = { updateSaveData, getSaveData };