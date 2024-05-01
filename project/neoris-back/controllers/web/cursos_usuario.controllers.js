const db = require("../../db/db");
const mssql = require("mssql");

// get cursos inscritos por usuario
async function getCursosUsuario(req, res) {
  try {
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("id_user", mssql.Int, req.params.id_user)
      .query("EXEC cursos_inscritos_usuario @id_user");
    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching cursos inscritos por usuario:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

// conseguir la lista de cursos
async function getFavoriteCourses(req, res) {
  try {
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("id_user", mssql.Int, req.params.id_user)
      .query("EXEC favorite_courses @id_usuario = @id_user;");
    res.json(result.recordset);
  } catch (error) {
    console.error("Error fetching favorite courses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

// create progreso curso
async function crearProgresoCurso(req, res) {
  try {
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("id_user", mssql.Int, req.params.id_user)
      .input("id_course", mssql.Int, req.params.id_course)
      .input("new_progress", mssql.Int, req.params.new_progress)
      .query(
        "EXEC crear_progreso_curso @id_usuario = @id_user, @id_curso = @id_course, @nuevo_porcentaje = @new_progress"
      );
    res.json({
      id_usuario: req.params.id_user,
      id_curso: req.params.id_course,
      nuevo_progreso: req.params.new_progress,
      message: "Progreso creado correctamente",
      result: result,
    });
  } catch (error) {
    console.error("Error creating progreso curso:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

// actualizar progreso curso
async function actualizarProgresoCurso(req, res) {
  try {
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("id_user", mssql.Int, req.params.id_user)
      .input("id_course", mssql.Int, req.params.id_course)
      .input("new_progress", mssql.Int, req.params.new_progress)
      .query(
        "EXEC actualizar_progreso_curso @id_usuario = @id_user, @id_curso = @id_course, @nuevo_porcentaje = @new_progress"
      );
    res.json({
      id_usuario: req.params.id_user,
      id_curso: req.params.id_course,
      nuevo_progreso: req.params.new_progress,
      message: "Progreso actualizado correctamente",
      result: result,
    });
  } catch (error) {
    console.error("Error updating progreso curso:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}

// Actualizar si un curso es favorito o no
async function actualizarCursoEsFavorito(req, res) {
  let query = "";
  if (req.params.is_favorite == "1") {
    query = "anadir_curso_favorito ";
  } else if (req.params.is_favorite == "0") {
    query = "quitar_curso_favorito ";
  }

  try {
    const pool = await db.getConnection();
    const result = await pool
      .request()
      .input("id_user", mssql.Int, req.params.id_user)
      .input("id_course", mssql.Int, req.params.id_course)
      .query(query + "@id_usuario = @id_user, @id_curso = @id_course");
    res.json({
      nuevos_cursos_favoritos: result.recordset[0].cursos_favoritos,
      message: "Cursos favoritos actualizado correctamente",
    });
  } catch (error) {
    console.error("Error updating is favorite:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await db.closeConnection();
  }
}


// conseguir la lista de cursos 
async function getFavoriteCourses(req, res) {
    try {
        const pool = await db.getConnection();
        const result = await pool
        .request()
        .input('id_user', mssql.Int, req.params.id_user)
        .query('EXEC favorite_courses @id_usuario = @id_user;');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching favorite courses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        await db.closeConnection();
    }
}

module.exports = {
  getCursosUsuario,
  crearProgresoCurso,
  actualizarProgresoCurso,
  actualizarCursoEsFavorito,
  getFavoriteCourses,
};
