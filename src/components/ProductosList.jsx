import React, { useEffect, useState } from "react";
import ProductosCard from "./ProductosCard";
import { Box } from "@mui/material";

const ProductosList = () => {
  // 📌 Estado para almacenar la lista de productos
  const [productos, setProductos] = useState([]); // 📝 Comienza como arreglo vacío

  // 📌 Función para obtener datos desde el backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json(); // Convierte la respuesta a JSON
      })
      .then((data) => {
        console.log("Productos recibidos:", data); //  Depuración
        setProductos(data); //  Actualiza el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  // 📌 Renderización del componente
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      {productos.length === 0 ? (
        <p>No hay productos disponibles</p> //  Mensaje cuando NO hay productos
      ) : (
        productos.map((producto) => (
          <ProductosCard
            key={producto.id} // key unica
            id={producto.id}
            nombre={producto.nombre}
            principio_activo={producto.principio_activo}
            precio={producto.precio}
          />
        ))
      )}
    </Box>
  );
};

export default ProductosList;
