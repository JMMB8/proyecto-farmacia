import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
} from "@mui/material";
import { Search, ShoppingCart, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../img/logo_rojo.png";
import { styled } from "@mui/material/styles";

const Navbar = () => {
  return (
    <div>
      {/* 📌  Franja roja superior */}
      <Box
        style={{
          backgroundColor: "#FF0000",
          height: "20px",
          width: "100%",
        }}
      ></Box>

      {/* 📌  Barra principal de la navbar (logo, nombre, buscador, iconos) */}
      <AppBar
        position="static"
        style={{ backgroundColor: "#0000", boxShadow: "none" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "75px",
          }}
        >
          {/* 🔹 Sección especifica: Logo + Nombre */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link to="/">
              <img
                src={logo}
                alt="Logo Botica Virgen de Lourdes"
                style={{ height: "50px" }} // Ajusta la altura del logo
              />
            </Link>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", color: "black" }}
            >
              BOTICA VIRGEN DE LOURDES
            </Typography>
          </div>

          {/* 🔹 Sección especifica: Buscador */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              flex: 1,
              marginRight: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "2px solid black", // Borde negro
                borderRadius: "5px",
                padding: "5px 15px",
                width: "50%", // Ajusta el tamaño del buscador
                maxWidth: "400px",
              }}
            >
              <InputBase
                placeholder="Busca tu medicamento"
                style={{ flex: 1 }}
              />
              <IconButton>
                <Search style={{ color: "#FF0000" }} />
              </IconButton>
            </div>
          </div>

          {/* 🔹 Sección especifica: Íconos negros Perfil de Usuario y Carrito */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              to="/perfil"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton>
                <Person style={{ color: "black" }} />
              </IconButton>
            </Link>
            <Link
              to="/carrito"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton>
                <ShoppingCart style={{ color: "black" }} />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      {/* 📌 Parte baja de la navbar.  Franja blanca con enlaces en rojo */}
      <Box
        style={{
          backgroundColor: "white",
          fontSize: "20px",
          padding: "0px 0px 10px 0px",
          height: "30px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px", // Espaciado entre los enlaces
        }}
      >
        <StyledLink to="/">Somos</StyledLink>
        <StyledLink to="/productos">Productos</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Registrarse</StyledLink>
      </Box>
    </div>
  );
};

/* 🔹 Estilos usando styled() de Material-UI */
const StyledLink = styled(Link)({
  color: "#FF0000",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "8px 12px",
  borderRadius: "5px",
  display: "inline-block",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    opacity: 0.7,
  },

  // Efecto de "presionado"
  "&:active": {
    transform: "scale(0.95)",
  },
});

export default Navbar;
