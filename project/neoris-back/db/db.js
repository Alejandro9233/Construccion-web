// Paquetes necesarios y variables de entorno
const sql = require('mssql');
require('dotenv').config()

// Crear objeto de configuración de conexión a la base de datos
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

// Funciones para abrir y cerrar la conexión a la base de datos
async function getConnection() {
    const pool = await sql.connect(config)
    return pool
}

async function closeConnection() {
    await sql.close()
}

module.exports = {getConnection, closeConnection};