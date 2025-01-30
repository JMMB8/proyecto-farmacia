import React, { createContext, useState, useEffect } from "react";

// 📌 Creacion del contexto del carrito
const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  // 📌 Estado para manejar los productos en el carrito, recuperado de localStorage (al subir a un servidor externo esto se debera modificar)
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // 📌 Guardar el carrito en localStorage cada vez que se actualiza (al subir a un servidor externo esto se debera modificar)
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // 📌 Función para calculo total del carrito
  const calcularTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  };

  // 📌 Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito];
      const index = nuevoCarrito.findIndex((p) => p.id === producto.id);

      if (index !== -1) {
        // Si el producto ya está en el carrito, aumenta su cantidad
        nuevoCarrito[index].cantidad += 1;
      } else {
        // Si es un producto nuevo, lo agrega con cantidad inicial 1
        nuevoCarrito.push({ ...producto, cantidad: 1 });
      }

      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Por ahora se guarda en localStorage
      return nuevoCarrito;
    });
  };

  // 📌 Función para incrementar la cantidad de un producto en el carrito
  const incrementarCantidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  // 📌 Función para disminuir la cantidad de un producto en el carrito
  const disminuirCantidad = (id) => {
    setCarrito(
      (prevCarrito) =>
        prevCarrito
          .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
          .filter((p) => p.cantidad > 0) // 🔹 Elimina el producto si la cantidad llega a 0
    );
  };

  // 📌 Función para eliminar un producto  del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((p) => p.id !== id));
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        incrementarCantidad,
        disminuirCantidad,
        eliminarDelCarrito,
        calcularTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export { CarritoContext, CarritoProvider };
