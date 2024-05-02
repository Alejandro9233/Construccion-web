const db = require("../../db/db");
const mssql = require("mssql");
const sha256 = require("js-sha256");

async function crearUsuario(req, res) {
  try {
    let password = req.body.password;
    password = sha256(password);
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("nombre_usuario", mssql.VARCHAR, req.body.nombre_usuario)
      .input("e_mail", mssql.NVARCHAR, req.body.e_mail)
      .input("contrasena", mssql.NVARCHAR, password)
      .input("ubicacion", mssql.NVARCHAR, req.body.ubicacion)
      .input("departamento", mssql.NVARCHAR, req.body.departamento)
      .input("puesto", mssql.NVARCHAR, req.body.puesto)
      .input("foto_de_perfil", mssql.NVARCHAR, req.body.foto_de_perfil)
      .input("es_admin", mssql.BIT, req.body.es_admin)
      .query(
        "EXEC creacion_usuario " +
          "@nombre_usuario = @nombre_usuario, " +
          "@e_mail = @e_mail, " +
          "@contrasena = @contrasena, " +
          "@ubicación = @ubicacion, " +
          "@departamento = @departamento, " +
          "@puesto = @puesto, " +
          "@foto_de_perfil = @foto_de_perfil, " +
          "@es_admin = @es_admin;"
      );
    res.json({
      result: result,
      message: "user created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

async function modificarUsuario(req, res) {
  try {
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("id_usuario", mssql.INT, req.body.id_usuario)
      .input("nombre_usuario", mssql.VARCHAR, req.body.nombre_usuario)
      .input("e_mail", mssql.NVARCHAR, req.body.e_mail)
      .input("ubicacion", mssql.NVARCHAR, req.body.ubicacion)
      .input("departamento", mssql.NVARCHAR, req.body.departamento)
      .input("puesto", mssql.NVARCHAR, req.body.puesto)
      .input("foto_de_perfil", mssql.NVARCHAR, req.body.foto_de_perfil)
      .query(
        "EXEC modificar_usuario " +
          "@id_usuario = @id_usuario, " +
          "@nombre_usuario = @nombre_usuario, " +
          "@e_mail = @e_mail, " +
          "@ubicación = @ubicacion, " +
          "@departamento = @departamento, " +
          "@puesto = @puesto, " +
          "@foto_de_perfil = @foto_de_perfil;"
      );
    res.json({
      result: result,
      message: "user modified successfully",
    });
  } catch (error) {
    console.error("Error modifying user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

async function eliminarUsuario(req, res) {
  try {
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("id_user", mssql.INT, req.params.id_user)
      .query("EXEC eliminar_usuario @id_usuario = @id_user;");
    res.json({
      result: result,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

async function listarUsuarios(req, res) {
  try {
    const pool = await db.getConnection();
    const result = await pool.request().query("EXEC listar_usuarios;");
    res.json(result.recordset);
  } catch (error) {
    console.error("Error listing users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

module.exports = {
  crearUsuario,
  modificarUsuario,
  eliminarUsuario,
  listarUsuarios,
};
