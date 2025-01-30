import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "#B20000",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Botica Virgen de Lourdes. Todos los
        derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
