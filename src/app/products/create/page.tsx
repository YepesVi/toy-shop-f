"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProducto } from "@/utils/api";

//  Define la interfaz del producto
interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
}

export default function CrearProducto() {
  const [producto, setProducto] = useState<Producto>({
    nombre: "",
    precio: 0,
    descripcion: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    setProducto({
      ...producto,
      [name]: name === "precio" ? parseFloat(value) || 0 : value, // Convertir 'precio' a número
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProducto(producto);
    router.push("/products");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Crear Producto</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={producto.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={producto.precio}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={producto.descripcion}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
