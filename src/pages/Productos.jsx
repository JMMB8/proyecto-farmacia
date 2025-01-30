import React from "react";
import ProductosList from "../components/ProductosList"; // 🧩 Importamos el componente que muestra la lista de productos

const Productos = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Productos</h1>

      <ProductosList />
    </div>
  );
};

export default Productos;
