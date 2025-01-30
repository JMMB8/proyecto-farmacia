import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Box } from "@mui/material";

const ProductoDetalle = () => {
  const { id } = useParams(); // 📌 Obtiene el ID del producto desde la URL

  // 📌 Estado para almacenar los detalles del producto
  const [producto, setProducto] = useState(null);

  // 📌 Estado para manejar errores al obtener los datos del producto
  const [error, setError] = useState(null);

  // 📌 Estado para indicar si la información del producto está cargando
  const [loading, setLoading] = useState(true);

  // 📌 Estado para verificar si el producto ha sido agregado al carrito
  const [enCarro, setEnCarro] = useState(false);

  useEffect(() => {
    console.log(`Obteniendo producto con ID: ${id}`);

    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.error(`Error HTTP: ${response.status}`);
          setError(
            `Error: No se pudo obtener el producto (${response.status})`
          );
          return null; // ⏪ Retornamos `null` para evitar errores
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          console.log("Datos obtenidos:", data);
          setProducto(data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setError("Error de conexión con el servidor"); // Guarda el mensaje de error
      })
      .finally(() => {
        setLoading(false); // ⏳ Finaliza la carga
      });
  }, [id]); //  Se ejecuta cuando cambia el ID del producto

  // 📌 Función para agregar el producto al carrito
  const agregarAlCarro = () => {
    setEnCarro(true); // Cambia el estado para indicar que ya está agregado
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  };

  if (loading) return <p style={styles.loading}>⏳ Cargando producto...</p>;
  if (error) return <p style={styles.error}>❌ Error: {error}</p>;
  if (!producto) return <p style={styles.error}>❌ Producto no encontrado.</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>{producto.nombre}</h1>
        <p style={styles.text}>
          <strong>Principio activo:</strong> {producto.principio_activo}
        </p>

        {/* 📌 Botón para agregar al carrito */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            variant="contained"
            onClick={agregarAlCarro}
            sx={{
              backgroundColor: enCarro ? "#CC0000" : "#FF0000",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "normal",
              textTransform: "none",
              "&:hover": { backgroundColor: "#CC0000" },
            }}
            disabled={enCarro} // Se desactiva después de hacer clic
          >
            {enCarro ? "Agregado" : "Agregar al carro"}{" "}
          </Button>
        </Box>
      </div>
    </div>
  );
};

// 📌 Estilos
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "20px",
  },
  error: {
    textAlign: "center",
    color: "red",
    fontSize: "20px",
  },
};

export default ProductoDetalle;
