import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

// 📌 Componente para mostrar un producto en la lista
const ProductosCard = ({ id, nombre, principio_activo, precio }) => {
  // Función para agregar productos al carrito desde el contexto
  const { agregarAlCarrito } = useContext(CarritoContext);

  //  Manejo del click en el botón "Agregar al carrito"
  const agregarAlCarro = (e) => {
    e.stopPropagation(); //  Evita la propagación del evento de clic a elementos superiores

    // Llama a la función del contexto para agregar el producto al carrito
    agregarAlCarrito({ id, nombre, principio_activo, precio });
  };

  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        margin: 2,
        boxShadow: 3,
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Typography variant="h5">{nombre}</Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Principio Activo:</strong> {principio_activo}
        </Typography>

        <Typography variant="body1">
          <strong>Precio:</strong> ${precio ? Number(precio).toFixed(2) : "N/A"}
        </Typography>

        {/* 📌 Botón para agregar al carrito */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            variant="contained"
            onClick={agregarAlCarro}
            sx={{
              backgroundColor: "#FF0000", // 🔴 Rojo por defecto
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "normal",
              textTransform: "none",
              "&:hover": { backgroundColor: "#CC0000" }, // 🔥 Cambio de color al pasar el mouse
            }}
          >
            Agregar al carro
          </Button>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default ProductosCard;
