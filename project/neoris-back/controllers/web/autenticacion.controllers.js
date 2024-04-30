const db = require('../../db/db');
const mssql = require ('mssql');
const sha256 = require('js-sha256');

async function verificarUsuario(req, res) {
    try {
        let {email, password} = req.body;
        password = sha256(password);
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('email', mssql.NVarChar, email)
        .input('password', mssql.NVarChar, password)
        .query('EXEC verificar_usuario @e_mail = @email, @contraseña = @password;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error verifying user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

module.exports = { verificarUsuario };