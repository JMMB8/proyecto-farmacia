import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Card as MuiCard, Typography, Button, Box } from "@mui/material";

const CarritoCard = ({ id, nombre, principio_activo, precio, cantidad }) => {
  const { incrementarCantidad, disminuirCantidad, eliminarDelCarrito } =
    useContext(CarritoContext);

  return (
    <MuiCard
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px",
        padding: 2,
        marginBottom: 2,
        boxShadow: 3,
      }}
    >
      {/* 📌 Información del Producto */}
      <Box sx={{ flex: 2 }}>
        <Typography variant="h6">{nombre}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          <strong>Precio:</strong> ${precio ? Number(precio).toFixed(2) : "N/A"}
        </Typography>
        <Typography variant="body1">
          <strong>Cantidad:</strong> {cantidad}
        </Typography>
      </Box>

      {/* 📌 Parte de botones para aumentar o disminuir cantidades */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            onClick={() => disminuirCantidad(id)}
            sx={{
              minWidth: "30px",
              height: "30px",
              padding: 0,
              borderRadius: "50%",
              color: "red",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": { color: "darkred" },
            }}
          >
            <Typography variant="h4">−</Typography>
          </Button>
          <Typography variant="body1">{cantidad}</Typography>
          <Button
            onClick={() => incrementarCantidad(id)}
            sx={{
              minWidth: "30px",
              height: "30px",
              padding: 0,
              borderRadius: "50%",
              color: "red",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
              "&:hover": { color: "darkred" },
            }}
          >
            <Typography variant="h4">+</Typography>
          </Button>
        </Box>

        {/* 📌 Botón para eliminar */}
        <Button
          variant="outlined"
          color="error"
          onClick={() => eliminarDelCarrito(id)}
          sx={{
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "bold",
            textTransform: "none",
            borderColor: "red",
            color: "red",
            "&:hover": { backgroundColor: "rgba(255, 0, 0, 0.1)" },
          }}
        >
          Eliminar
        </Button>
      </Box>
    </MuiCard>
  );
};

export default CarritoCard;
