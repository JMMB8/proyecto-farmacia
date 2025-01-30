// 🧩 Importar paquetes necesarios
import express from "express";
import pkg from "pg"; // 🧩 Importamos el paquete `pg` para conectarnos a PostgreSQL
import cors from "cors";
const { Pool } = pkg;

////////////////////////////////// 1️⃣ EXPRESS - Configuración del Servidor //////////////////////////////////////////

// 📌 Creamos la instancia de Express
const app = express();

// 📌 Habilitamos CORS para permitir peticiones desde diferentes orígenes
app.use(cors());

// 📌 Definimos el puerto donde correrá el servidor
const PORT = 5000;

// 📌 Middleware para manejar solicitudes en formato JSON
app.use(express.json());

////////////////////////////////// 2️⃣ POSTGRESQL - Conexión con la Base de Datos //////////////////////////////////////////

// 📌 Configuración de conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "",
  password: "",
  port: 5432,
});

// 📌 Ruta para obtener productos desde la base de datos
app.get("/api/products", async (req, res) => {
  try {
    const query = `
      SELECT 
        id,
        nombre, 
        principio_activo,
        precio::FLOAT AS precio  
      FROM productos;
    `;

    const result = await pool.query(query);

    console.log("📡 Datos enviados desde la API:", result.rows);

    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error al obtener productos:", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});
// 📌 Ruta para obtener productos por ID
app.get("/api/products/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ message: "El ID debe ser un número" });
  }

  try {
    const result = await pool.query(
      `SELECT id, nombre, principio_activo, precio FROM productos WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    console.log("📡 Producto enviado a React:", result.rows[0]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error("❌ Error en la base de datos:", error);
    res.status(500).json({ message: "Error del servidor" });
  }
});

////////////////////////////// 3️⃣ RUTAS FINALES Y MANEJO DE ERRORES //////////////////////////////

// 📌 Iniciamos el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

// 📌 Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send("❌ Página no encontrada");
});

// 📌 Middleware para manejo de errores globales (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error interno del servidor" });
});
