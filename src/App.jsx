import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Somos from "./pages/Somos";
import Login from "./pages/Login";
import Registrar from "./pages/Register";
import Carrito from "./pages/Carrito";
import Productos from "./pages/Productos";
import Perfil from "./pages/Perfil";
import CrearProducto from "./pages/CrearProducto";
import ProductoDetalle from "./pages/ProductoDetalle";
import { CarritoProvider } from "./context/CarritoContext"; // Importacion del proveedor del carrito

const App = () => {
  return (
    <div style={styles.app}>
      <CarritoProvider>
        <Router>
          <Navbar />
          {/* 🔹 Contenedor principal. (Este contenedor empuja el footer hacia abajo) */}
          <div style={styles.content}>
            <Routes>
              <Route path="/" element={<Somos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registrar />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/perfil" element={<Perfil />} />{" "}
              <Route path="/crear-producto" element={<CrearProducto />} />
              <Route path="/producto/:id" element={<ProductoDetalle />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </CarritoProvider>
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Asegura que la app ocupe toda la altura de la pantalla
  },
  content: {
    flex: 1, // Hace que el contenido empuje el footer hacia abajo
  },
};

export default App;
