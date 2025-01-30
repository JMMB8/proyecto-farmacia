import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      style={{
        position: "relative",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Capa de imagen de fondo con opacidad para la imagen grande*/}
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://diariopuertovaras.cl/wp-content/uploads/2022/02/MG_6483.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(70%)", // Oscurece solo la imagen
        }}
      />

      {/* Texto y contenido general de Hero*/}
      <Box style={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            letterSpacing: "1.5px",
          }}
        >
          Bienvenidos a Botica Virgen de Lourdes
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
