import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import CarritoCard from "./CarritoCard";
import { Box, Typography } from "@mui/material";

const CardCarritoList = () => {
  const { carrito, calcularTotal } = useContext(CarritoContext);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      width="100%"
    >
      {/* 📌 GENERACION DEL CARRITO (si hay por lo menos 1 producto en el carrito) */}
      {carrito.length === 0 ? (
        <Typography>Tu carrito está vacío</Typography>
      ) : (
        <>
          {carrito.map((producto) => (
            <CarritoCard
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              principio_activo={producto.principio_activo}
              precio={producto.precio}
              cantidad={producto.cantidad}
            />
          ))}
          {/* 📌 TOTAL DEL CARRITO */}
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            <strong>Total:</strong> ${calcularTotal().toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default CardCarritoList;
