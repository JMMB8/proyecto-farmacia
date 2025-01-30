import React from "react";
import CardCarritoList from "../components/CardCarritoList";
import { Box, Typography } from "@mui/material";

const Carrito = () => {
  return (
    <Box sx={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        🛒 Tu Carrito de Compras
      </Typography>
      <CardCarritoList />
    </Box>
  );
};

export default Carrito;
